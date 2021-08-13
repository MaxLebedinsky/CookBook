<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeTypeOfBothMeasureAndQuantityColumnsIntoIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ingredients', function (Blueprint $table) {
            $table->string('measure', 250)->change();
            $table->integer('quantity')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('ingredients')->update(['quantity' => 1]);
        Schema::table('ingredients', function (Blueprint $table) {
            $table->integer('quantity')->change();
            $table->string('measure', 250)->change();
        });
    }
}
