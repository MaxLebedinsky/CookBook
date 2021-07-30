<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    protected $faker;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {
        $names = [
            'Мясные блюда',
            'Рыбные блюда',
            'Гарниры',
            'Супы',
            'Салаты',
            'Десерты',
            'Выпечка',
            'Напитки',
        ];

        $this->faker = $faker;

        for ($i = 0; $i <= count($names) - 1; $i++) {
            DB::table('categories')
                ->insert($this->generateData($names[$i]));
        }
    }

    protected function generateData(string $name): array
    {
        $data = [
            'name' => $name,
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
