<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServicesController extends Controller
{
  public function __construct()
  {
    // TODO: uncomment
      // $this->middleware('auth');
  }

  public function services()
  {
      return view('services');
  }
}
