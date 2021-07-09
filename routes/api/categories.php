<?php

use Illuminate\Support\Facades\Route;

Route::group([
    // TODO: DSEROV. Repaire authorization, then enable
    // 'middleware' => 'auth:sanctum',
], function () {
    Route::post('/', 'CategoryController@store')->name('articles.store');
    Route::get('/', 'CategoryController@index')->name('articles.index');
    Route::get('/{id}', 'CategoryController@show')->name('articles.show');
    Route::match(['put', 'patch'], '/{id}', 'CategoryController@update')->name('articles.update');
    Route::delete('/{id}', 'CategoryController@delete')->name('articles.delete');
});
