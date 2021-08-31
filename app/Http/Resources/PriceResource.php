<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceResource extends JsonResource {
    public function toArray($req){
        return [
            'fixed'=>$this->fixed,
            'percent'=>$this->percent
        ];
    }
}

