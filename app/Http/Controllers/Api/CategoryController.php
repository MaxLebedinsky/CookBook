<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Traits\ApiResponder;
use App\Http\Requests\CategoryRequest;

class CategoryController extends Controller
{
    use ApiResponder;

    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        return new CategoryCollection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return \Illuminate\Http\Response
     * @throws \Throwable
     */
    public function store(CategoryRequest $request)
    {
        $category = new Category($request->validated());
        $category->saveOrFail();

        return $this->handleResponse(new CategoryResource($category), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return CategoryResource
     */
    public function show($id)
    {
        return new CategoryResource(Category::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CategoryRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, $id)
    {
        $category = Category::findOrFail($id);
        $data = $request->validated();
        $category->update($data);

        return $this->handleResponse(new CategoryResource($category), 'Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return $this->handleResponse([], 'Deleted');
    }
}
