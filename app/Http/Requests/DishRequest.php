<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DishRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'dish.title' => 'required|min:3|max:250',
//            'dish.img' => 'required|file|mimes:jpg,png',
            'dish.description' => 'required|string|min:20|max:1000',
            'dish.category_id'=> 'required|integer',
            'dish.user_id'=> 'required|integer',
        ];
    }
}
