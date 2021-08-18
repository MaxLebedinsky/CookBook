<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\DishRequest;
use App\Http\Requests\SearchRequest;
use App\Http\Resources\FullDishResource;
use App\Models\{
    Dish,
    Ingredient,
    DishStep,
};
use Illuminate\Support\Facades\DB;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FullDishController extends Controller
{
    use ApiResponder;

    public function index()
    {
        $full_dishes = Dish::with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->paginate(10);
        return FullDishResource::collection($full_dishes);
    }

    public function getByCategoryId(int $categoryId)
    {
        $full_dishes = Dish::where('category_id', $categoryId)->with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->paginate(10);
        return FullDishResource::collection($full_dishes);
    }

    public function store(DishRequest $request)
    {
        try {
            $dish = null;
            DB::transaction(function () use ($request, &$dish) {
                $dish = Dish::create($request->input('dish'));
                $dish->ingredients()->createMany($request->input('ingredients'));
                $dish->dishSteps()->createMany($request->input('dish_steps'));
            });

            $full_dish = Dish::with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->findOrFail($dish->id);
            return FullDishResource::make($full_dish);
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $dish = Dish::query()->with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->findOrFail($id);
            return FullDishResource::make($dish);
        } catch (\Exception $e) {
            return $this->handleError('error');
        }
    }

    public function update(Request $request, int $id)
    {
        try {
            DB::transaction(function () use ($request, $id) {
                Dish::where('id', $id)
                    ->update($request->input('dish'));

                foreach ($request->input('ingredients') as $ingredient) {
                    Ingredient::where('dish_id', $id)
                        ->update($ingredient);
                }

                foreach ($request->input('dish_steps') as $dish_step) {
                    DishStep::where('dish_id', $id)
                        ->update($dish_step);
                }
            });
        } catch (\Exception $e) {
            return $this->handleError('error');
            //return $this->handleError($e->getMessage());
        }

        $dish = Dish::query()->with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->findOrFail($id);

        return $this->handleResponse($dish);
    }

    public function delete(int $id)
    {
        Dish::destroy($id);
        return response()->json();
    }

    public function search(SearchRequest $request)
    {
        $dish = new Dish();
        $full_dishes = $dish->searchByParams($request->validated());
        return FullDishResource::collection($full_dishes);
    }
}
