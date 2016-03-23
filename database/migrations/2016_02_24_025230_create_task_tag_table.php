<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTaskTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_tag', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('tag_id')->unsigned()->index();
            $table->integer('task_id')->unsigned()->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
