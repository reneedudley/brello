<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lane extends Model
{
    public function tasks(){
    	return $this->hasMany('\App\tasks');
    }
}

