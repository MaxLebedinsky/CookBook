<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FullDish extends JsonResource
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
            'title' => $this->title,
            'img' => $this->img,
            'description' => $this->description,
            'pubdate' => $this->pubdate,
            'user_id' => $this->user_id,
            'category_id' => $this->category_id,
            'views' => $this->views,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'ingredients' => $this->ingredients(),
        ];
    }
}
