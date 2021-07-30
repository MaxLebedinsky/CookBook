<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MeasuresTableSeeder extends Seeder
{
    protected $faker;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        $measures = [
            'кг.',
            'г.',
            'л.',
            'мл.',
            'ч.л.',
            'ст.л.',
            'шт.',
        ];

        $this->faker = $faker;

        for ($i = 0; $i <= count($measures) - 1; $i++) {
            DB::table('measures')
                ->insert($this->generateData($measures[$i]));
        }
    }

    protected function generateData(string $measure): array
    {
        $data = [
            'name' => $measure,
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
