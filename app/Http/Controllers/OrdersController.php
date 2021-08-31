<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Http\Resources\OrderResource;
use App\Http\Resources\FullOrderResource;
use Symfony\Component\HttpKernel\Exception\HttpException;

class OrdersController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }

  public function list()
  {
      return view('orders');
  }

  public function getOrder($id){
      $order = Order::findOrFail($id);
      return new OrderResource($order);
  }

  

  public function getOrdersByDate(Request $req){
      try {
    
        $validated = $req->validate([
          'date'=>'required|date',
          'department_id'=>'required|numeric'
        ]);
        $users = User::where('department_id',$validated['department_id'])
          ->where('deleted',0)->where('role','MASTER')->get();
        
        $table = array();
        $table['users']  = array();
        $table['orders'] = array();

        foreach($users as $user){
          $table['users'][$user->id]=$user->name;

          $ordersByDate = Order::whereDate('datetime',$validated['date'])
            ->where('user_id',$user->id)->orderBy('datetime')->get();
          
          $table['orders'][$user->id] = FullOrderResource::collection($ordersByDate)->toArray(null);        
        }

        return json_encode($table);

      }catch(\Exception $e){
        return $e->getMessage();
      }
  }

  public function getOrders(){
    return OrderResource::collection(Order::all());
  }

  public function createOrder(Request $req){
        try {
          $order = new Order;
          $validated = $req->validate([
            'client_id'=>'required|numeric',
            'service_id'=>'required|numeric',
            'user_id'=>'required|numeric',
            'amount'=>'required|numeric',
            'comment'=>'nullable|string',
            'datetime'=>'required|date_format:"Y-m-d\TH:i',
            'confirmed'=>'required|numeric',
            'next_user_id'=>'nullable|numeric'
          ]);
          $order->fill($validated)->save();

          return new OrderResource($order);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage()}");
        }
      
  }

  public function updateOrder(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $order = Order::findOrFail($req->id);  
        $validated = $req->validate([
          'client_id'=>'nullable|numeric',
          'service_id'=>'nullable|numeric',
          'user_id'=>'nullable|numeric',
          'amount'=>'nullable|numeric',
          'comment'=>'nullable|string',
          'datetime'=>'nullable|date',
          'confirmed'=>'nullable|numeric',
          'next_user_id'=>'nullable|numeric'
        ]);
        $order->fill($validated)->save();

        return new OrderResource($order);

      } catch(\Exception $e) {
        throw new HttpException(400,"Invalid data {$e->getMessage()}");
      }
      
  }

  public function deleteOrder(Request $req,$id){
    if (!$id){
      throw new HttpException(400, "Invalid id");
    }

    $order = Order::findOrFail($id);
    $order->delete();
    
    return response()->json(null, 204);
  }

}
