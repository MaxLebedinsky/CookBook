<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'img',
        'description',
        'pubdate',
        'user_id',
        'category_id',
        'views',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
