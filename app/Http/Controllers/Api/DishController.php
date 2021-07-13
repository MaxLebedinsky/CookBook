<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use App\Models\Dish;
use App\Http\Requests\DishRequest;

class DishController extends Controller
{
    use ApiResponder;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $dishes = Dish::all();

        return  $this->handleResponse($dishes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param DishRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(DishRequest $request)
    {
        $dish = new Dish($request->validated());
        $dish->save();

        return $this->handleResponse($dish, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return Dish|Dish[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    public function show(Request $request, int $id)
    {
        $dish = Dish::findOrFail($id);

        return  $this->handleResponse($dish->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param DishRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(DishRequest $request, int $id)
    {
        $dish = Dish::findOrFail($id);
        $data = $request->validated();
        $dish->update($data);

        return $this->handleResponse($dish, 'Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete(int $id)
    {
        $dish = Dish::findOrFail($id);
        $dish->delete();

        return $this->handleResponse($dish, 'Deleted');
    }

}
