<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource{

    public function toArray($req){
        return [
            'id'=> $this->id,
            'name'=> $this->name,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'department_id'=>$this->department_id
        ];
    }
}

