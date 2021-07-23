<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\DishRequest;
use App\Models\{
    Dish,
    Ingredient,
    DishStep,
    User,
    Category
};
use Illuminate\Support\Facades\DB;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FullDishController extends Controller
{
    use ApiResponder;

    public function index(int $currentPage)
    {
        $currPage = $currentPage ?? 1;
        $per_page = Dish::PER_PAGE;
        $skip = $per_page * ($currPage - 1);

        $dishes = Dish::skip($skip)
            ->take($per_page)
            ->get();

        $fullDishes =[];

        try {
            foreach ($dishes as $dish) {

                $fullDish = collect([
                    'dish' => $dish,
                    'ingredients' => Ingredient::where('dish_id', $dish->id)->get(),
                    'dish_steps' => DishStep::where('dish_id', $dish->id)->get(),
                    'author' => User::where('id', $dish->user_id)->first(),
                    'category' => Category::where('id', $dish->category_id)->first()
                ]);

                $fullDishes[] = $fullDish;
            }

        } catch (\Exception $e) {
            return $this->handleError('error', [], 404);
        }

        return $this->handleResponse($fullDishes);
    }

    public function store(DishRequest $request)
    {
        try {
            DB::transaction(function () use ($request) {
                $dish = Dish::create($request->input['data.dish.*']);

                foreach ($$request->input['data.ingredients.*'] as $ingredient) {
                    Ingredient::create($ingredient);
                }

                foreach ($$request->input['data.dish_steps.*'] as $dish_step) {
                    DishStep::create($dish_step);
                }
            });
        } catch (\Exception $e) {
            return $this->handleError('error', [], 404);
        }

        return $this->handleResponse($request->input['data'], 'Created');
    }

    public function show(Request $request, int $id)
    {
        try {
            $dish = Dish::findOrFail($id);

            $ingredients = Ingredient::where('dish_id', $dish->id)->get();
            $dish_steps = DishStep::where('dish_id', $dish->id)->get();
            $author = User::where('id', $dish->user_id)->first();
            $category = Category::where('id', $dish->category_id)->first();

            $fullDish = collect([
                'dish' => $dish,
                'ingredients' =>$ingredients,
                'dish_steps' =>$dish_steps,
                'author' =>$author,
                'category' =>$category,
            ]);
        } catch (\Exception $e) {
            return $this->handleError('error', [], 404);
        }

        return $this->handleResponse($fullDish);
    }

    public function update(Request $request, int $id)
    {
        try {
            DB::transaction(function () use ($request, $id) {
                $dish = Dish::update($request->input['data.dish.*'])
                    ->where('id', $id);

                foreach ($$request->input['data.ingredients.*'] as $ingredient) {
                    Ingredient::update($ingredient)
                        ->where('dish_id', $id);
                }

                foreach ($$request->input['data.dish_steps.*'] as $dish_step) {
                    DishStep::update($dish_step)
                        ->where('dish_id', $id);
                }
            });
        } catch (\Exception $e) {
            return $this->handleError('error', [], 404);
        }

        return $this->handleResponse($request->input['data'], 'Updated');
    }

    public function delete(int $id)
    {
        $dish = Dish::findOrFail($id);

        try {
            $fullDish = collect([
                'dish' => $dish,
                'ingredients' => Ingredient::where('dish_id', $dish->id)->get(),
                'dish_steps' => DishStep::where('dish_id', $dish->id)->get(),
                'author' => User::where('id', $dish->user_id)->first(),
                'category' => Category::where('id', $dish->category_id)->first(),
            ]);

            $ingredientsIds = $this->getItemIds($fullDish['ingredients']);
            $dishStepIds = $this->getItemIds($fullDish['dish_steps']);

            DB::transaction(function () use ($id, $ingredientsIds, $dishStepIds) {
                Ingredient::destroy($ingredientsIds);
                DishStep::destroy($dishStepIds);
                Dish::destroy($id);
            });
        } catch (\Exception $e) {
            return $this->handleError('error', [], 500);
        }

        return $this->handleResponse($fullDish, 'Deleted');
    }

    private function getItemIds($collection): array
    {
        $itemIds = [];

        foreach ($collection as $item) {
            $itemIds[] = $item->id;
        }

        return $itemIds;
    }
}
