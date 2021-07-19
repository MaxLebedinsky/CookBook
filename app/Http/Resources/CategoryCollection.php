<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($row) use ($request) {
                return (new CategoryResource($row))->toArray($request);
            }),
        ];
    }

    public function with($request)
    {
        return [
            'success' => true,
        ];
    }


}
