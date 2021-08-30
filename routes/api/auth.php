<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('login', [AuthController::class, 'login'])->middleware(['guest']);
Route::post('register', [AuthController::class, 'register'])->middleware(['guest']);
Route::post('logout', [AuthController::class, 'logout'])->middleware(['auth:sanctum']);

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('me', function (Request $request) {
        return new UserResource($request->user());
    });
});
