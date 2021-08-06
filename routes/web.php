<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\ServicesController;

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


Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/services', [App\Http\Controllers\ServicesController::class, 'services'])->name('services');
Route::get('/settings', [App\Http\Controllers\SettingsController::class, 'settings'])->name('settings');
Route::get('/list', [App\Http\Controllers\ListController::class, 'list'])->name('list');
Route::get('/reports', [App\Http\Controllers\ReportsController::class, 'report'])->name('reports');

Auth::routes([
 // 'register' => false, // Registration Routes...
  'reset' => false, // Password Reset Routes...
  'verify' => false, // Email Verification Routes...
]);
