<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnTypeToNullableInDishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dishes', function (Blueprint $table) {
            $table->string('title')->nullable()->change();
            $table->string('big_img')->nullable()->change();
            $table->string('small_img')->nullable()->change();
            $table->text('description')->nullable()->change();
            $table->bigInteger('views')->nullable()->change();
            $table->float('rating')->nullable()->change();
            $table->integer('complexity')->nullable()->change();
            $table->unsignedBigInteger('user_id')->nullable()->change();
            $table->unsignedBigInteger('category_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('dishes', function (Blueprint $table) {
            $table->string('title')->nullable($value = false)->change();
            $table->string('big_img')->nullable($value = false)->change();
            $table->string('small_img')->nullable($value = false)->change();
            $table->text('description')->nullable($value = false)->change();
            $table->bigInteger('views')->nullable($value = false)->change();
            $table->float('rating')->nullable($value = false)->change();
            $table->integer('complexity')->nullable($value = false)->change();
            $table->unsignedBigInteger('user_id')->nullable($value = false)->change();
            $table->unsignedBigInteger('category_id')->nullable($value = false)->change();
        });
    }
}
