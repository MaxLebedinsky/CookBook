<?php

use Illuminate\Support\Facades\Route;

Route::group([
//    'middleware' => 'auth:sanctum',
], function () {
    Route::post('/{dishStep}/store_image', 'DishStepController@storeImage')->name('dish_step.store_image');
});
