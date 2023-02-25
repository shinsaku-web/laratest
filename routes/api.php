<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/item", [ItemController::class, "index"]);
Route::post("/item", [ItemController::class, "store"]);
Route::get("/item/{id}", [ItemController::class, "edit"]);
Route::post("/item/{id}", [ItemController::class, "update"]);
Route::delete("/item/{id}", [ItemController::class, "destroy"]);

Route::get("/category", [CategoryController::class, "index"]);
Route::post("/category", [CategoryController::class, "store"]);
Route::get("/category/{id}", [CategoryController::class, "edit"]);
Route::post("/category/{id}", [CategoryController::class, "update"]);
Route::delete("/category/{id}", [CategoryController::class, "destroy"]);
