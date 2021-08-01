<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnTypeInIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ingredients', function (Blueprint $table) {
            $table->string('ingredients_name')->nullable()->change();
            $table->string('quantity')->nullable()->change();
            $table->unsignedInteger('measure_id')->nullable()->change();
            $table->unsignedBigInteger('dish_id')->nullable()->change();
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
            $table->string('ingredients_name')->nullable(false)->change();
            $table->string('quantity')->nullable(false)->change();
            $table->unsignedBigInteger('measure_id')->nullable(false)->change();
            $table->unsignedBigInteger('dish_id')->nullable(false)->change();
        });
    }
}
