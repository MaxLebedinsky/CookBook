<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDishRatingUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dish_rating_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dish_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedFloat('rating');
            $table->foreign('dish_id', 'fk_dish_rating')
                ->references('id')
                ->on('dishes')
                ->cascadeOnDelete()
                ->onUpdate('restrict');
            $table->foreign('user_id', 'fk_user_rating')
                ->references('id')
                ->on('users')
                ->cascadeOnDelete()
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
        Schema::dropIfExists('dish_rating_users');
    }
}
