<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FullOrderResource extends JsonResource {
    public function toArray($req){
        return [
            'id'=> $this->id,
            'client' => (new ClientResource($this->client))->toArray(null),
            'user'   => (new UserResource($this->user))->toArray(null),
            'service'=> (new ServiceResource($this->service))->toArray(null),
            'comment'   => $this->comment,
            'amount'    => $this->amount,
            'datetime'  => $this->datetime,
            'confirmed' => $this->confirmed,
            'next_user_id'=>$this->next_user_id
        ];
    }
}

