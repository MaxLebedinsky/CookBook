<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Article;
use Faker\Generator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
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
            DB::table('users')
                ->insert($this->generateData());
        }
    }

    protected function generateData(): array
    {
        $data = [
            'name' => $this->faker->userName(),
            'email' => $this->faker->email(),
            'password' => Hash::make('password'),
            'phone' => $this->faker->phoneNumber(),
            'about' => $this->faker->realText(191),
            'is_admin' => $this->faker->boolean(),
            'created_at' => $this->faker->date('Y-m-d') . ' ' . $this->faker->time('H:i:s'),
        ];

        return $data;
    }
}
