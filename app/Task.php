<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function lane(){
    	return $this->belongsTo('\App\Lane');
    }
    public function tags(){
    	return $this->belongsToMany('\App\Tag');
    }
 
}
