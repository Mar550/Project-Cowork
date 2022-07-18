<?php

use App\Http\Controllers\OwnerController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Models\User;
use App\Models\Owner;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::prefix('admin')->middleware('admin')->group(function(){
    Route::get('/home',[App\Http\Controllers\AdminController::class,'index'])->name('admin.index');
});

Auth::routes();

Route::prefix('owner')->middleware('owner')->group(function(){
    Route::get('/home',[App\Http\Controllers\OwnerController::class,'index'])->name('owner.index');
});

Auth::routes();

Route::prefix('user')->middleware('auth')->group(function(){
    Route::get('/home',[App\Http\Controllers\UserController::class,'index'])->name('user.index');
});

