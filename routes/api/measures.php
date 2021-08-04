<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'MeasureController@index')->name('measures.index');
