<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageSave;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDishImageRequest;
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

        return $this->handleResponse($dish);
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

        return $this->handleResponse($dish);
    }

    public function storeImage(StoreDishImageRequest $request, Dish $dish)
    {
        try {
            $imageSave = new ImageSave();
            $image = $request->file('image');
            $name = $imageSave->saveImage($image);
            if ($name === false) {
                throw new \Exception('Upload error');
            }

            $dish->fill([
                'big_img' => $imageSave->makeUrl($name),
                'small_img' => $imageSave->makeUrl($name, true),
            ]);

            if(!$dish->save()) {
                throw new \Exception('Image not saved');
            };
            $this->handleResponse([]);
        } catch (\Exception $exception) {
            $imageSave->deleteImages();
            $this->handleError($exception->getMessage());
        }
    }
}
