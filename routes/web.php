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
Route::get('/settings', [App\Http\Controllers\SettingsController::class, 'settings'])->name('settings');
Route::get('/orders', [App\Http\Controllers\OrdersController::class, 'list'])->name('list');
Route::get('/reports', [App\Http\Controllers\ReportsController::class, 'report'])->name('reports');

Route::get('/settings/getUser/{id}', [App\Http\Controllers\SettingsController::class, 'getUser'])->name('getUser');
Route::get('/settings/getUsers', [App\Http\Controllers\SettingsController::class, 'getUsers'])->name('getUsers');
Route::get('/settings/getMasters', [App\Http\Controllers\SettingsController::class, 'getMasters'])->name('getMasters');
Route::post('/settings/createUser', [App\Http\Controllers\SettingsController::class, 'createUser'])->name('createUser');
Route::post('/settings/updateUser/{id}', [App\Http\Controllers\SettingsController::class, 'updateUser'])->name('updateUser');
Route::post('/settings/deleteUser/{id}', [App\Http\Controllers\SettingsController::class, 'deleteUser'])->name('deleteUser');

Route::get('/settings/getService/{id}', [App\Http\Controllers\SettingsController::class, 'getService'])->name('getService');
Route::get('/settings/getServices', [App\Http\Controllers\SettingsController::class, 'getServices'])->name('getServices');
Route::post('/settings/createService', [App\Http\Controllers\SettingsController::class, 'createService'])->name('createService');
Route::post('/settings/updateService/{id}', [App\Http\Controllers\SettingsController::class, 'updateService'])->name('updateService');
Route::post('/settings/deleteService/{id}', [App\Http\Controllers\SettingsController::class, 'deleteService'])->name('deleteService');

Route::get('/settings/getClient/{id}', [App\Http\Controllers\SettingsController::class, 'getClient'])->name('getClient');
Route::get('/settings/getClients', [App\Http\Controllers\SettingsController::class, 'getClients'])->name('getClients');
Route::post('/settings/createClient', [App\Http\Controllers\SettingsController::class, 'createClient'])->name('createClient');
Route::post('/settings/getOrCreateClient', [App\Http\Controllers\SettingsController::class, 'getOrCreateClient'])->name('getOrCreateClient');
Route::post('/settings/updateClient/{id}', [App\Http\Controllers\SettingsController::class, 'updateClient'])->name('updateClient');
Route::post('/settings/deleteClient/{id}', [App\Http\Controllers\SettingsController::class, 'deleteClient'])->name('deleteClient');

Route::get('/settings/getDepartment/{id}', [App\Http\Controllers\SettingsController::class, 'getDepartment'])->name('getDepartment');
Route::get('/settings/getDepartments', [App\Http\Controllers\SettingsController::class, 'getDepartments'])->name('getDepartments');
Route::post('/settings/createDepartment', [App\Http\Controllers\SettingsController::class, 'createDepartment'])->name('createDepartment');
Route::post('/settings/updateDepartment/{id}', [App\Http\Controllers\SettingsController::class, 'updateDepartment'])->name('updateDepartment');
Route::post('/settings/deleteDepartment/{id}', [App\Http\Controllers\SettingsController::class, 'deleteDepartment'])->name('deleteDepartment');

Route::get('/settings/getPrices', [App\Http\Controllers\SettingsController::class, 'getPrices'])->name('getPrices');
Route::post('/settings/setPrices', [App\Http\Controllers\SettingsController::class, 'setPrices'])->name('setPrices');

Route::get('/reports/gerReport', [App\Http\Controllers\ReportsController::class, 'getReport'])->name('getReport');

Route::get('/orders/getOrder/{id}', [App\Http\Controllers\OrdersController::class, 'getOrder'])->name('getOrder');
Route::get('/orders/getOrders', [App\Http\Controllers\OrdersController::class, 'getOrders'])->name('getOrders');
Route::post('/orders/createOrder', [App\Http\Controllers\OrdersController::class, 'createOrder'])->name('createOrder');
Route::post('/orders/updateOrder/{id}', [App\Http\Controllers\OrdersController::class, 'updateOrder'])->name('updateOrder');
Route::post('/orders/deleteOrder/{id}', [App\Http\Controllers\OrdersController::class, 'deleteOrder'])->name('deleteOrder');
Route::get('/orders/getOrdersByDate', [App\Http\Controllers\OrdersController::class, 'getOrdersByDate'])->name('getOrdersByDate');

Auth::routes([
  'register' => false, // Registration Routes...
  'reset' => false, // Password Reset Routes...
  'verify' => false, // Email Verification Routes...
]);
