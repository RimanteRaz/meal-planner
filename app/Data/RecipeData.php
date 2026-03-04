<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class RecipeData extends Data
{
    public function __construct(
        public string $id,
        public string $name,
        public string $instructions,
        public ?string $image_url,
        public ?string $source_url,
        public string $created_at
    ) {}
}
