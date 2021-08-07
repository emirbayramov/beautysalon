<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table='services';

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'price'
    ];

    public function services(){
        return $this->belongsToMany('App\Models\User','services_users','service_id','user_id');
    }

    public function orders(){
        return $this->hasMany('App\Models\Order','service_id');
    }
}
