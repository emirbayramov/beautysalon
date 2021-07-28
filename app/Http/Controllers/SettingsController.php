<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
  public function __construct()
  {
    // TODO: uncomment
      // $this->middleware('auth');
  }

  public function settings()
  {
      return view('settings');
  }
}
