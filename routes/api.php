<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// default name space for all routes is 'App\Http\Controllers\Api'
$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function () {
    // register auth routes
    Route::prefix('auth')
        ->group(base_path('routes/api/auth.php'));
    // register users routes
    Route::prefix('users')
        ->group(base_path('routes/api/users.php'));
    // register articles routes
    Route::prefix('articles')
        ->group(base_path('routes/api/articles.php'));
    // register categories routes
    Route::prefix('categories')
        ->group(base_path('routes/api/categories.php'));
    // register ingredients routes
    Route::prefix('dishes/{dish_id}/ingredients')
        ->group(base_path('routes/api/ingredients.php'));
    // register dishes routes
    Route::prefix('dishes')
        ->group(base_path('routes/api/dishes.php'));
    // register full-dishes routes
    Route::prefix('full-dishes')
        ->group(base_path('routes/api/fullDishes.php'));
});

Route::any('/{any?}', function () {
    return response()->json([
        'success' => false,
        'message' => 'Endpoint not found',
    ], 404);
})->where('any', '.*');
