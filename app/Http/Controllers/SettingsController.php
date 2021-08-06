<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Service;
use App\Models\Department;
use App\Models\Client;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Http\Resourses\UserResourse;
use App\Http\Resourses\ServiceResourse;
use App\Http\Resourses\DepartmentResourse;
use App\Http\Resourses\ClientResourse;
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

  public function getUser(Request $req,$id){
      $user = User::findOrFail($id);
      return new UserResource($user);
  }
  
  public function getUsers(){
     return UserResource::collection(User::all());
  }

  public function createUser(Request $req){
        try {
          $user = new User;
          $user->fill($request->validated())->save();

          return new UserResource($user);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
      
  }

  public function updateUser(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $user = User::find($req->id);  
        $user->fill($req->validated())->save();
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
    $user->delete();
    
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
          $service->fill($req->validated())->save();

          return new ServiceResource($service);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
      
  }

  public function updateService(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $service = Service::find($req->id);  
        $service->fill($req->validated())->save();
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
  

  
  public function createClient(Request $req){
        try {
          $client = new Client;
          $client->fill($req->validated())->save();

          return new ClientResource($client);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
      
  }

  public function updateClient(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $client = Client::find($req->id);  
        $client->fill($req->validated())->save();
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
          $department->fill($req->validated())->save();

          return new DepartmentResource($client);

        } catch(\Exception $exception) {
            throw new HttpException(400, "Invalid data - {$exception->getMessage}");
        }
      
  }

  public function updateDepartment(Request $req,$id){
      
      if(!$id){
        throw new HttpException(400, "Invalid id");
      }
      try{
        $department = Department::find($req->id);  
        $department->fill($req->validated())->save();
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
