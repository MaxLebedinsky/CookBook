<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnTypeInDishStepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dish_steps', function (Blueprint $table) {
            $table->unsignedInteger('step_number')->nullable()->change();
            $table->text('text')->nullable()->change();
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
        Schema::table('dish_steps', function (Blueprint $table) {
            $table->unsignedInteger('step_number')->nullable(false)->change();
            $table->text('text')->nullable(false)->change();
            $table->unsignedBigInteger('dish_id')->nullable(false)->change();
        });
    }
}
