<?php

use Illuminate\Support\Facades\Route;

Route::post('/', 'DishRatingController@store')->middleware('auth:sanctum');
