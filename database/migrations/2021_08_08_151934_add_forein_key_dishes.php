<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeinKeyDishes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('dishes', function (Blueprint $table) {
            $table->foreign('category_id', 'fk_dishes_category')
                ->references('id')
                ->on('categories')
                ->restrictOnDelete()
                ->onUpdate('restrict');
            $table->foreign('user_id', 'fk_dishes_user')
                ->references('id')
                ->on('users')
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
        Schema::table('dishes', function (Blueprint $table) {
            $table->dropForeign('fk_dishes_category');
            $table->dropForeign('fk_dishes_user');
        });
    }
}
