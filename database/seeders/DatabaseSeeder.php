<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(DishTableSeeder::class);
        $this->call(MeasuresTableSeeder::class);
        $this->call(IngredientsTableSeeder::class);
        $this->call(DishStepsTableSeeder::class);
    }
}
