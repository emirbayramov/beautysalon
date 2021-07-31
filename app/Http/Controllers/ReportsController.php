<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportsController extends Controller
{
  public function __construct()
  {
    // TODO: uncomment
      // $this->middleware('auth');
  }

  public function report()
  {
      return view('reports');
  }
}
