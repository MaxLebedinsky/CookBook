<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeinKeyIngredients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ingredients', function (Blueprint $table) {
            $table->unsignedBigInteger('measure_id')->change();
            $table->foreign('dish_id', 'fk_ingredients_dishes')
                ->references('id')
                ->on('dishes')
                ->onDelete('cascade')
                ->onUpdate('restrict');
            $table->foreign('measure_id', 'fk_ingredients_measures')
                ->references('id')
                ->on('measures')
                ->restrictOnDelete()
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
        Schema::table('ingredients', function (Blueprint $table) {
            $table->dropForeign('fk_ingredients_dishes');
            $table->dropForeign('fk_ingredients_measures');
        });
        Schema::table('ingredients', function (Blueprint $table) {
            $table->unsignedInteger('measure_id')->change();
        });
    }
}
