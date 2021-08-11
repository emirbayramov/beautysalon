<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table='orders';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_id',
        'user_id',
        'service_id',
        'amount',
        'datetime',
        'confirmed',
        'comment',
        'next_user_id'
    ];
    public function service(){
        return $this->belongsTo('App\Models\Service','service_id');
    }

    public function user(){
        return $this->belongsTo('App\Models\User','user_id');
    }

    public function client(){
        return $this->belongsTo('App\Models\Client','client_id');
    }
}
