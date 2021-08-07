<?php 

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource{
    public function toArray($req){
        return [
            'id'=> $this->id,
            'name'=> $this->name,
            'address'=>$this->address,
            'description'=>$this->description
        ];
    }
}

