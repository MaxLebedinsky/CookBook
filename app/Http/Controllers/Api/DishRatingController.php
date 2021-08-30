<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SaveDishRatingRequest;
use App\Models\Dish;
use App\Models\DishRatingUser;
use App\Traits\ApiResponder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DishRatingController extends Controller
{
    use ApiResponder;

    public function store(SaveDishRatingRequest $request)
    {
        try {
            $data = $request->validated();
            $data['user_id'] = Auth::id();

            DishRatingUser::query()->updateOrInsert(
                [
                    'dish_id' => $data['dish_id'],
                    'user_id' => $data['user_id'],
                ],
                [
                    'rating' => $data['rating'],
                ]
            );

            // get average
            $newRating = DishRatingUser::query()->whereDishId($data['dish_id'])->avg('rating');

            Dish::query()->findOrFail($data['dish_id'])->update(['rating' => $newRating]);

            return $this->handleResponse([
                'rating' => $newRating,
            ]);
        } catch (\Exception $exception) {
            $this->handleError($exception->getMessage());
        }
    }
}
