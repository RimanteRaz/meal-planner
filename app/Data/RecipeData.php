<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapInputName;
use Spatie\LaravelData\Data;

/** @typescript */
class RecipeData extends Data
{
    public function __construct(
        public string $id,
        public string $name,
        public string $instructions,
        #[MapInputName('image_url')]
        public ?string $image,
        #[MapInputName('source_url')]
        public ?string $source,
        public string $created_at
    ) {}
}
