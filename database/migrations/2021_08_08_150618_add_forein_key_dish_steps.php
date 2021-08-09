<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeinKeyDishSteps extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dish_steps', function (Blueprint $table) {
            $table->foreign('dish_id', 'fk_dish_id')
                ->references('id')
                ->on('dishes')
                ->onDelete('cascade')
                ->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('dish_steps', function (Blueprint $table) {
            $table->dropForeign('fk_dish_id');
        });
    }
}
