<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table='orders';
    
    public function service(){
        return $this->hasOne('App\Models\Service','service_id');
    }

    public function user(){
        return $this->hasOne('App\Models\User','user_id');
    }

    public function client(){
        return $this->hasOne('App\Models\Client','client_id');
    }
}
