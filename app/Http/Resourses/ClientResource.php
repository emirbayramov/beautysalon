<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource{
    public function toArray($req){
        return [
            'id'=> $req->id,
            'phone'=>$req->phone,
            'name'=> $req->name,
            'surname'=> $req->surname,
            'birth_date'=>$req->birth_date
        ];
    }
}

