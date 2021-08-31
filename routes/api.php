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

// register auth routes
Route::prefix('auth')
    ->group(base_path('routes/api/auth.php'));
// register users routes
Route::prefix('users')
    ->group(base_path('routes/api/users.php'));
// register categories routes
Route::prefix('categories')
    ->group(base_path('routes/api/categories.php'));
// register ingredients routes
Route::prefix('dishes/{dish_id}/ingredients')
    ->group(base_path('routes/api/ingredients.php'));
// register dishes routes
Route::prefix('dishes')
    ->group(base_path('routes/api/dishes.php'));
// register dish_steps routes
Route::prefix('dish_steps')
    ->group(base_path('routes/api/dish_steps.php'));
// register full-dish routes
Route::prefix('full-dishes')
    ->group(base_path('routes/api/fullDishes.php'));
// register full-dishes by category routes
Route::prefix('categories')
    ->group(base_path('routes/api/fullDishesByCategory.php'));
// register measures by category routes
Route::prefix('measures')
    ->group(base_path('routes/api/measures.php'));

// register dish_rating endpoints
Route::prefix('dish_rating')
    ->group(base_path('routes/api/dish_rating.php'));

Route::any('/{any?}', function () {
    return response()->json([
        'success' => false,
        'message' => 'Endpoint not found',
    ], 404);
})->where('any', '.*');
