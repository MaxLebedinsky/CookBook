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
        return $this->handleResponse((new Dish())->getAll());
    }

    public function showByCategoryId(int $categoryId)
    {
        return $this->handleResponse((new Dish())->getByCategoryId($categoryId));
    }

    public function store(DishRequest $request)
    {
        try {
            return $this->handleResponse((new Dish())->createNew($request), 201);
        } catch (\Exception $e) {
            return $this->handleError($e->getMessage());
        }
    }

    public function show(int $id)
    {
        try {
            return $this->handleResponse((new Dish())->getById($id));
        } catch (\Exception $e) {
            return $this->handleError('error');
        }
    }

    public function update(Request $request, int $id)
    {
        try {
            $dish = (new Dish())->updateDish($request, $id);
        } catch (\Exception $e) {
            return $this->handleError('error');
        }

        return $this->handleResponse($dish);
    }

    public function delete(int $id)
    {
        Dish::destroy($id);
        return $this->handleResponse([]);
    }
}
