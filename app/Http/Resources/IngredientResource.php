<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class IngredientResource extends JsonResource
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
            'ingredients_name' => $this->ingredients_name,
            'quantity' => $this->quantity,
            'measure' => $this->measure,
            'dish_id' => $this->dish_id,
        ];
    }
}
