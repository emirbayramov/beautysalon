<?php

namespace App\Http\Controllers;
use DateTime;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\Price;
use App\Models\User;

class ReportsController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }

  public function report()
  {
      return view('reports');
  }

  public function getReport(Request $req){
    $validated = $req->validate([
      'from'=>'required|date',
      'to'=>'required|date'
    ]);


    $from = new DateTime($validated['from']);
    $to = new DateTime($validated['to']);
    $to->modify('+1 day');
  
    $price = Price::find(1);

    $users = User::where('deleted',0)->where('role','MASTER')->get();
    $table = array();

    foreach($users as $user){
      $ordersByDate = Order::whereBetween('datetime',[$from->format('Y-m-d'),$to->format('Y-m-d')])
        ->where('confirmed',1)->where('user_id',$user->id)->get();
      
      $earn = 0;
      $sum = 0;
      $count = 0;
      $fixed = 0;
 
      foreach($ordersByDate as $order){
        $earn += ($order->amount-$price->fixed)*$price->percent/100.0;
        $sum += $order->amount;
        $count++;
        $fixed += $price->fixed;
      }

      $table[] = [
        'name'=> $user->name,
        'earn'=> $earn,
        'sum' => $sum,
        'count'=>$count,
        'fixed'=>$fixed
      ];        
    }
    return json_encode($table);    
  }
}