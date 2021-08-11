<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageSave;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDishImageRequest;
use App\Http\Requests\StoreDishStepImageRequest;
use App\Models\DishStep;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use App\Models\Dish;
use App\Http\Requests\DishRequest;

class DishStepsController extends Controller
{
    use ApiResponder;

    public function storeImage(StoreDishStepImageRequest $request, DishStep $dishStep, ImageSave $imageSave)
    {
        try {
            $image = $request->file('image');
            $name = $imageSave->saveImage($image, ImageSave::SAVE_THUMB);
            if ($name === false) {
                throw new \Exception('Upload error');
            }

            $dishStep->fill([
                'img' => $imageSave->makeUrl($name, true),
            ]);

            if(!$dishStep->save()) {
                throw new \Exception('Image not saved');
            };
            $this->handleResponse([]);
        } catch (\Exception $exception) {
            $imageSave->deleteImages();
            $this->handleError($exception->getMessage());
        }
    }
}
