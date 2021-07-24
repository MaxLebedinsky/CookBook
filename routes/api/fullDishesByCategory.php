<?php

use Illuminate\Support\Facades\Route;

Route::get('{category_id}/full-dishes', 'FullDishController@getByCategoryId')
    ->where('id', '[0-9]+')
    ->name('full-dishes.by-category-id');