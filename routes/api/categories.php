<?php

use Illuminate\Support\Facades\Route;

Route::group([
    // TODO: Repaire authorization? then enable
    // 'middleware' => 'auth:sanctum',
], function() {
    Route::apiResource('', 'CategoryController');
});
