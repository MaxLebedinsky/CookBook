<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DishTableSeeder extends Seeder
{
    protected $faker;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        $this->faker = $faker;

        for ($i = 1; $i <= 100; $i++) {
            DB::table('dishes')
                ->insert($this->generateData());
        }
    }

    protected function generateData(): array
    {
        $data = [
            'title' => $this->faker->sentence(10),
            'img' => $this->faker->randomDigitNotNull() . '.' . $this->faker->randomElement(['jpg', 'png']),
            'description' => $this->faker->paragraph(10),
            'user_id' => $this->faker->numberBetween(0,10),
            'category_id' => $this->faker->numberBetween(0,10),
            'views' => $this->faker->randomNumber(3, false),
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
