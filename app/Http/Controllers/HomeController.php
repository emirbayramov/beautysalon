<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $req)
    {
        $user = $req->user();
        if($user->role === "ADMIN")
            return redirect('/orders');
        elseif($user->role === "MANAGER")
            return redirect('/orders');
        elseif($user->role === "MASTER")
            return redirect('/myorders');
        return view('home');
    }
}
