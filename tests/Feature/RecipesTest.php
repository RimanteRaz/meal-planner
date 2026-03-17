<?php

use App\Models\Recipe;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

describe('Recipes', function () {
    test('guests are redirected to the login page', function () {
        $response = $this->get(route('recipes.index'));
        $response->assertRedirect(route('login'));
    });

    test('authenticated users can visit the dashboard', function () {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get(route('recipes.index'));
        $response->assertOk();
    });

    test('user only sees their own recipes in recipes list', function () {
        $userTom = User::factory()->has(Recipe::factory(['name' => "Tom's Recipe"]))->create();
        User::factory()->hasRecipes(Recipe::factory(['name' => "Jerry's Recipe"]))->create();
        $this->actingAs($userTom);

        $response = $this->get(route('recipes.index'));
        $response->assertOk();
        $response->assertInertia(fn (AssertableInertia $page) => $page->has('recipes.data', 1));
        $response->assertInertia(fn (AssertableInertia $page) => $page->where('recipes.data.0.name', "Tom's Recipe"));
    });

    test('user can view their own recipes recipe', function () {
        $userTom = User::factory()->create();
        $tomsRecipe = Recipe::factory(['name' => 'Other User Recipe'])->for($userTom)->create();

        $this->actingAs($userTom);

        $response = $this->get(route('recipes.show', ['recipe' => $tomsRecipe->id]));

        $response->assertOk();
    });

    test('user gets an error when visiting a page of another users recipe', function () {
        $userTom = User::factory()->create();
        $tomsRecipe = Recipe::factory(['name' => 'Other User Recipe'])->for($userTom)->create();
        $userJerry = User::factory()->create();

        $this->actingAs($userJerry);

        $response = $this->get(route('recipes.show', ['recipe' => $tomsRecipe->id]));

        $response->assertStatus(403);
    });
});
