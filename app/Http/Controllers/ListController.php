<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListController extends Controller
{
  public function __construct()
  {
      // TODO: uncomment
      // $this->middleware('auth');
  }

  public function list()
  {
      return view('list');
  }
}
