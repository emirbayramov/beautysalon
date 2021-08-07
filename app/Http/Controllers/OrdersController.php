<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Http\Resources\OrderResource;
class OrdersController extends Controller
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

  public function getOrder($id){
      $order = Order::findOrFail($id);
      return new OrderResource($order);
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
            'datetime'=>'required|date',
            'confirmed'=>'required|boolean'
          ]);
          $order->fill($validated)->save();

          return new OrderResource($order);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
      
  }

  public function updateOrder(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $order = Order::find($req->id);  
        $validated = $req->validate([
          'client_id'=>'nullable|numeric',
          'service_id'=>'nullable|numeric',
          'user_id'=>'nullable|numeric',
          'amount'=>'nullable|numeric',
          'comment'=>'nullable|string',
          'datetime'=>'nullable|date',
          'confirmed'=>'nullable|boolean'
        ]);
        $order->fill($validated)->save();

        return new OrderResource($oreder);

      } catch(\Exception $e) {
        throw new HttpException(400,'Invalid data');
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
