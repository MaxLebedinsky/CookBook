<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\DishRequest;
use App\Models\{
    Dish,
    Ingredient,
    DishStep,
    User,
    Category,
    Measure
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
        $full_dishes = Dish::with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->get();
        return $this->handleResponse($full_dishes);
    }

    public function getByCategoryId(int $categoryId)
    {
        $full_dishes = Dish::where('category_id', $categoryId)->with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->get();
        return $this->handleResponse($full_dishes);
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
            return $this->handleResponse($full_dish, 201);
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            $dish = Dish::where('id', $id)->with(['dishSteps', 'ingredients', 'ingredients.measure', 'category', 'user'])->get();
            return $this->handleResponse($dish);
        } catch (\Exception $e) {
            return $this->handleError('error');
        }
    }

    public function update(Request $request, int $id)
    {
        // TODO: Make method
        $this->handleError('under construction');
        try {
            DB::transaction(function () use ($request, $id) {
                $dish = Dish::update($request->input['data.dish.*'])
                    ->where('id', $id);

                foreach ($request->input('data.ingredients.*') as $ingredient) {
                    Ingredient::update($ingredient)
                        ->where('dish_id', $id);
                }

                foreach ($request->input('data.dish_steps.*') as $dish_step) {
                    DishStep::update($dish_step)
                        ->where('dish_id', $id);
                }
            });
        } catch (\Exception $e) {
            return $this->handleError('error');
        }

        return $this->handleResponse($request->input['data']);
    }

    public function delete(int $id)
    {
        Dish::destroy($id);
        return $this->handleResponse([]);
    }
}
