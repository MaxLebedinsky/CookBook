<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'FullDishController@index')
    ->where('id', '[0-9]+')
    ->name('full-dishes.index');

Route::get('/{id}', 'FullDishController@show')
    ->where('id', '[0-9]+')
    ->name('full-dishes.show');

Route::group([
    'middleware' => 'auth:sanctum',
], function () {

    Route::post('/', 'FullDishController@store')->name('dishes.store');

    Route::match(['put', 'patch'], '/{id}', 'FullDishController@update')
        ->where('id', '[0-9]+')
        ->name('dishes.update');

    Route::delete('/{id}', 'FullDishController@delete')
        ->where('id', '[0-9]+')
        ->name('dishes.delete');

});
