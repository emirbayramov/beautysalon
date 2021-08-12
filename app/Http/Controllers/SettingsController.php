<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Service;
use App\Models\Department;
use App\Models\Client;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use App\Http\Resources\ServiceResource;
use App\Http\Resources\DepartmentResource;
use App\Http\Resources\ClientResource;
use Symfony\Component\HttpKernel\Exception\HttpException;

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

  public function getUser($id){
      $user = User::findOrFail($id);
      return new UserResource($user);
  }
  
  public function getUsers(Request $req){
    $validated = $req->validate([
      'department_id'=>'nullable|integer'
    ]);
    if(isset($validated['department_id']))
      return UserResource::collection(
        User::where('department_id',$req['department_id'])->where('deleted',0)->get());
    return UserResource::collection(User::where('deleted',0)->get());
  }

  public function createUser(Request $req){
        try {
          $user = new User;
          $validated = $req->validate([
            'name'=>'required|string',
            'email'=>'required|string',
            'phone'=>'required|string',
            'password'=>'required|string',
            'role'=>'required|string',
            'department_id'=>'required|integer',
          ]);
         
          $user->name=$validated['name'];
          $user->email=$validated['email'];
          $user->phone=$validated['phone'];
          $user->password=Hash::make($validated['password']);
          $user->role=$validated['role'];
          $user->department_id=$validated['department_id'];

          $user->save();

          return new UserResource($user);

        } catch(\Exception $exception) {
              
          throw new HttpException(400, "Invalid data - {$exception->getMessage()}");
        }
      
  }

  public function updateUser(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $user = User::find($req->id);
        $validated = $req->validate([
          'name'=>'nullable|string',
          'email'=>'nullable|string',
          'phone'=>'nullable|string',
          'password'=>'nullable|string',
          'role'=>'nullable|string',
          'department_id'=>'nullable|integer',
        ]);
        
        $user->fill($validated)->save();
            
        return new UserResource($user);

      } catch(\Exception $e) {
        throw new HttpException(400,'Invalid data');
      }
      
  }

  public function deleteUser(Request $req,$id){
    if (!$id){
      throw new HttpException(400, "Invalid id");
    }

    $user = User::findOrFail($id);
    $user->deleted = 1;
    $user->save();
    
    return response()->json(null, 204);
  }

  public function getService($id){
      $service = Service::findOrFail($id);
      return new ServiceResource($service);
  }
  
  public function getServices(){
     return ServiceResource::collection(Service::all());
  }
  
  public function createService(Request $req){
        try {
          $service = new Service;
          $validated = $req->validate([
            'name'=>'required|string',
            'description'=>'required|string',
            'price'=>'required|numeric'
          ]);

          $service->fill($validated)->save();

          return new ServiceResource($service);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage()}");
        }
      
  }

  public function updateService(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $service = Service::find($req->id);  
        $validated = $req->validate([
          'name'=>'nullable|string',
          'description'=>'nullable|string',
          'price'=>'nullable|numeric'
        ]);
        $service->fill($validated)->save();
        return new ServiceResource($service);

      } catch(\Exception $e) {
        throw new HttpException(400,'Invalid data');
      }
      
  }

  public function deleteService(Request $req,$id){
    if (!$id){
      throw new HttpException(400, "Invalid id");
    }
 
    $service = Service::findOrFail($id);
    $service->delete();
    
    return response()->json(null, 204);
  }

  public function getClient($id){
      $client = Client::findOrFail($id);
      return new ClientResource($client);
  }
  
  public function getClients(){
     return ClientResource::collection(Client::all());
  }
  
  public function getOrCreateClient(Request $req){
    try {
      
      $validated = $req->validate([
          'phone'=>'required|string',
          'name' =>'required|string',
          'surname' =>'required|string',
          'birth_date' =>'required|date',
      ]);
      $client = Client::where('phone',$validated['phone'])->first();
      if($client)
        return new ClientResource($client);
      
        $client = new Client();

      $client->fill($validated)->save();

      return new ClientResource($client);

    } catch(\Exception $exception) {
        throw new HttpException(400, "Invalid data - {$exception->getMessage()}");
    }
  
  }

  
  public function createClient(Request $req){
        try {
          $client = new Client;
          $validated = $req->validate([
              'phone'=>'required|string',
              'name' =>'required|string',
              'surname' =>'required|string',
              'birth_date' =>'required|date',
          ]);

          $client->fill($validated)->save();

          return new ClientResource($client);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage()}");
        }
      
  }

  public function updateClient(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $client = Client::findOrFail($req->id);  
        $validated = $req->validate([
          'phone'=>'nullable|string',
          'name' =>'nullable|string',
          'surname' =>'nullable|string',
          'birth_date' =>'nullable|date',
        ]);
        
        $client->fill($validated)->save();
        return new ClientResource($client);

      } catch(\Exception $e) {
        throw new HttpException(400,'Invalid data');
      }
      
  }

  public function deleteClient(Request $req,$id){
    if (!$id){
      throw new HttpException(400, "Invalid id");
    }
 
    $client = Client::findOrFail($id);
    $client->delete();
    
    return response()->json(null, 204);
  }

    public function getDepartment($id){
      $department = Department::findOrFail($id);
      return new DepartmentResource($department);
  }
  
  public function getDepartments(){
     return DepartmentResource::collection(Department::all());
  }
  

  
  public function createDepartment(Request $req){
        try {
          $department = new Department;
          $validated = $req->validate([
            'name'=>'required|string',
            'address'=>'required|string',
            'description'=>'required|string'
          ]);
          $department->name = $validated['name'];
          $department->address = $validated['address'];
          $department->description = $validated['description'];
          
          $department->save();

          return new DepartmentResource($department);

        } catch(\Exception $exception) {
            return "Invalid data - {$exception->getMessage()}";
        }
      
  }

  public function updateDepartment(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $department = Department::find($req->id);  
        $validated = $req->validate([
          'name'=>'nullable|string',
          'address'=>'nullable|string',
          'description'=>'nullable|string'
        ]);

        $department->fill($validated)->save();
        return new DepartmentResource($department);

      } catch(\Exception $e) {
        throw new HttpException(400,'Invalid data');
      }
      
  }

  public function deleteDepartment(Request $req,$id){
    if (!$id){
      throw new HttpException(400, "Invalid id");
    }
 
    $department = Department::findOrFail($id);
    $department->delete();
    
    return response()->json(null, 204);
  }

}
