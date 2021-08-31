<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DishRatingUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'dish_id',
        'rating',
    ];
}
