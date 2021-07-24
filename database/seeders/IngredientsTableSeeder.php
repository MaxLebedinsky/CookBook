<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsTableSeeder extends Seeder
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
            $ingredientsCount = mt_rand(3, 5);

            for ($k = 1; $k <= $ingredientsCount; $k++) {
                DB::table('ingredients')
                    ->insert($this->generateData($i));
            }
        }
    }

    protected function generateData(int $dish_id): array
    {
        $data = [
            'ingredients_name' => $this->faker->randomElement([
                'соль',
                'перец',
                'мука',
                'сахар',
                'лавровый лист',
                'упитанная курочка',
            ]),
            'quantity' => $this->faker->randomDigitNotNull(),
            'measure_id' => $this->faker->numberBetween(1, 6),
            'dish_id' => $dish_id,
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
