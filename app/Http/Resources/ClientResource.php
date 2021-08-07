<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource{
    public function toArray($req){
        return [
            'id'=> $this->id,
            'phone'=>$this->phone,
            'name'=> $this->name,
            'surname'=> $this->surname,
            'birth_date'=>$this->birth_date
        ];
    }
}

