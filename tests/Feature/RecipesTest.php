<?php

use App\Models\Recipe;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

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

test('user only sees their own recipes', function () {
    $user1 = User::factory()->has(Recipe::factory(['name' => 'User1 Recipe']))->create();
    User::factory()->hasRecipes(Recipe::factory(['name' => 'Other User Recipe']))->create();
    $this->actingAs($user1);

    $response = $this->get(route('recipes.index'));
    $response->assertOk();
    $response->assertInertia(fn (AssertableInertia $page) => $page->has('recipes.data', 1));
    $response->assertInertia(fn (AssertableInertia $page) => $page->where('recipes.data.0.name', 'User1 Recipe'));
});
