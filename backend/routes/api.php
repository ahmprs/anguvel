<?php

use Illuminate\Http\Request;
use App\AhmUtil;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/say-hello', function(Request $req){
    return AhmUtil::resp(1, "Hello from laravel");
});

Route::post('/say-hello', function(Request $req){
    return AhmUtil::resp(1, "Hello from laravel");
});