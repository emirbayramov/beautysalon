<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource{
    public function toArray($req){
        return [
            'id'=> $this->id,
            'client_id'=>$this->client_id,
            'user_id'=> $this->user_id,
            'service_id'=> $this->service_id,
            'comment'=>$this->comment,
            'amount'=>$this->amount,
            'datetime'=>$this->datetime,
            'confirmed'=>$this->confirmed

        ];
    }
}

