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

        for ($i = 1; $i <= 50; $i++) {
            DB::table('ingredients')
                ->insert($this->generateData());
        }
    }

    protected function generateData(): array
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
            'measure' => $this->faker->randomElement([
                'тушка',
                'столовая ложка',
                'чайная ложка',
                'стакан',
            ]),
            'dish_id' => $this->faker->numberBetween(1,100),
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
