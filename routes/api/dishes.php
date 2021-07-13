<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'DishController@index')->name('dishes.index');
Route::get('/{id}', 'DishController@show')->name('dishes.show');

Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::post('/', 'DishController@store')->name('dishes.store');
    Route::match(['put', 'patch'], '/{id}', 'DishController@update')->name('dishes.update');
    Route::delete('/{id}', 'DishController@delete')->name('dishes.delete');
});
