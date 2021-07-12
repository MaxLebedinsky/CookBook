<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests\IngredientRequest;
use App\Traits\ApiResponder;
use App\Http\Controllers\Controller;
use App\Models\Ingredient;

class IngredientController extends Controller
{
    use ApiResponder;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request, int $id)
    {
        $ingredients = Ingredient::all()->where('dish_id', $id);

        return  $this->handleResponse($ingredients);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param IngredientRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(IngredientRequest $request, int $dish_id)
    {
        $ingredient = new Ingredient($request->validated());
        $ingredient->dish_id = $dish_id;
        $ingredient->save();

        return $this->handleResponse($ingredient, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return Ingredient|Ingredient[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function show(Request $request, int $dish_id, int $ingredient_id)
    {
        $ingredient = Ingredient::findOrFail($ingredient_id)->where('dish_id', $dish_id)->first();

        return  $this->handleResponse($ingredient->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param IngredientRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(IngredientRequest $request, int $dish_id, int $ingredient_id)
    {
        $ingredient = Ingredient::findOrFail($ingredient_id)->where('dish_id', $dish_id)->first();
        $data = $request->validated();
        $ingredient->update($data);

        return $this->handleResponse($ingredient, 'Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete(int $dish_id, int $ingredient_id)
    {
        $ingredient = Ingredient::findOrFail($ingredient_id)->where('dish_id', $dish_id)->first();
        $ingredient->delete();

        return $this->handleResponse($ingredient, 'Deleted');
    }
}
