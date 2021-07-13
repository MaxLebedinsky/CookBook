<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'IngredientController@index')->name('ingredients.index');
Route::get('/{id}', 'IngredientController@show')->name('ingredients.show');

Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::post('/', 'IngredientController@store')->name('ingredients.store');
    Route::match(['put', 'patch'], '/{id}', 'IngredientController@update')->name('ingredients.update');
    Route::delete('/{id}', 'IngredientController@delete')->name('ingredients.delete');
});
