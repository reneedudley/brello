<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function lane(){
    	$this->belongsTo('\App\Lane');
    }
    public function tags(){
    	$this->belongsToMany('\App\Tag');
    }
 
}
