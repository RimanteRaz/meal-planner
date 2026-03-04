<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(5, true),
            'instructions' => $this->faker->paragraphs(3, true),
            'image_url' => 'https://placehold.co/1920x1080',
            'source_url' => $this->faker->url(),
        ];
    }
}
