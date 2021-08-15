<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FullDishResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'big_img' => $this->big_img,
            'small_img' => $this->small_img,
            'description' => $this->description,
            'user_id' => $this->user_id,
            'category_id' => $this->category_id,
            'category' => CategoryResource::make($this->category),
            'views' => $this->views,
            'rating' => $this->rating,
            'complexity' => $this->complexity,
            'created_at' => $this->created_at,
            'dish_steps' => DishStepResource::collection($this->dishSteps),
            'ingredients' => IngredientResource::collection($this->ingredients),
            'category' => CategoryResource::make($this->category),
            'user' => UserResource::make($this->user),
        ];
    }
}
