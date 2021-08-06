<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource{
    public function toArray($req){
        return [
            'id'=> $req->id,
            'client_id'=>$req->client_id,
            'user_id'=> $req->user_id,
            'service_id'=> $req->service_id,
            'comment'=>$req->comment,
            'amount'=>$req->amount,
            'datetime'=>$req->datetime,
            'confirmed'=>$req->confirmed

        ];
    }
}

