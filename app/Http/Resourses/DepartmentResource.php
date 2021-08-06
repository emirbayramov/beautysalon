<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource{
    public function toArray($req){
        return [
            'id'=> $req->id,
            'name'=> $req->name,
            'address'=>$req->address,
            'description'=>$req->description
        ];
    }
}

