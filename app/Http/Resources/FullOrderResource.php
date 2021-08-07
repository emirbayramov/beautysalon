<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FullOrderResource extends JsonResource {
    public function toArray($req){
        return [
            'id'=> $this->id,
            'client' => (new ClientResource($this->client))->toArray(),
            'user'   => (new UserResource($this->user))->toArray(),
            'service'=> (new ServiceResource($this->service))->toArray(),
            'comment'   => $this->comment,
            'amount'    => $this->amount,
            'datetime'  => $this->datetime,
            'confirmed' => $this->confirmed
        ];
    }
}

