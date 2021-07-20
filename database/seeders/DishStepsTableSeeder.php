<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DishStepsTableSeeder extends Seeder
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
            $stepCount = mt_rand(3, 5);

            for ($k = 1; $k <= $stepCount; $k++) {
                DB::table('dish_steps')
                    ->insert($this->generateData($i, $k));
            }
        }
    }

    protected function generateData(int $dishId, int $stepNumber): array
    {
        $data = [
            'step_number' => $stepNumber,
            'img' => $this->faker->imageUrl(300, 225, 'dishes', true),
            'text' => $this->faker->paragraph(10),
            'dish_id' => $dishId,
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
