<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'FullDishController@index')->name('full-dishes.index');
Route::get('/{id}', 'FullDishController@show')->name('full-dishes.show');

Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::post('/', 'FullDishController@store')->name('dishes.store');
    Route::match(['put', 'patch'], '/{id}', 'FullDishController@update')->name('dishes.update');
    Route::delete('/{id}', 'FullDishController@delete')->name('dishes.delete');
});
