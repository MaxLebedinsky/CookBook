<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::view( '/{any?}', 'index')->where('any', '.*');

Route::get('/storage/{file}', function ($fileName) {
    if (! \Storage::disk('public')->has($fileName)) {
        abort(400);
    }
    return \Storage::disk('public')->response($fileName);
})->where('file', '.*');
