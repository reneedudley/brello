<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    public function tasks(){
    	 return $this->belongsToMany('\App\Task');
    }
 
}
