<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coworking>
 */
class CoworkingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->text(10),
            'type' => $this->faker->text(20),
            'adress' => $this->faker->text(50),
            'city' => $this->faker->text(20),
            'postalcode' => $this->faker->text(10),
            'phone' => $this->faker->numerify('##########'),
            'email' => $this->faker->unique()->safeEmail(),
            'price' => $this->faker->numberBetween(0,100),
            'availability' => $this->faker->dateTime(),
            'owner_id' => $this->faker->unique(true)->numberBetween(1,20),
        ];
    }
}
