<?php

namespace Database\Seeders;

use App\Models\Coworking;
use Illuminate\Database\Seeder;

class CoworkingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Coworking::factory()->times(count:20)->create();    
    }
}
