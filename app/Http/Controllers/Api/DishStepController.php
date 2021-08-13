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

class DishStepController extends Controller
{
    use ApiResponder;

    public function storeImage(StoreDishStepImageRequest $request)
    {
        $data = $request->validated();
        if (count($data['id']) !== count($data['image'])) {
            throw new \Exception('Количество id и image не совпадает');
        }

        try {
            $imageSave = new ImageSave();

            $images = $request->file('image');
            $ids = $request->input('id');
            $id = current($ids);
            foreach ($images as $image) {
                $name = $imageSave->saveImage($image, ImageSave::SAVE_THUMB);
                if ($name === false) {
                    throw new \Exception('Upload error');
                }
                $img_url = $imageSave->makeUrl($name, true);
                DishStep::findOrFail($id)->update(['img' => $img_url]);

                $id = next($ids);
            }

            return $this->handleResponse([]);
        } catch (\Exception $exception) {
            $imageSave->deleteImages();
            return $this->handleError($exception->getMessage());
        }
    }
}
