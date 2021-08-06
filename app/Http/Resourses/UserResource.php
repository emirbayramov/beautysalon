<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource{

    public function toArray($req){
        return [
            'id'=> $req->id,
            'name'=> $req->name,
            'email'=>$req->email,
            'phone'=>$req->phone,
            'department_id'=>$req->department_id
        ];
    }
}

