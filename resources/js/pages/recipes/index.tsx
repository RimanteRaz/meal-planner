import type { ReactNode } from 'react';
import { RecipeCard } from '@/components/recipe-card';
import AppLayout from '@/layouts/app-layout';
import recipes from '@/routes/recipes';
import type { BreadcrumbItem, PaginatedResponse, Recipe } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];

type RecipeListProps = {
    recipes: PaginatedResponse<Recipe[]>;
};

const RecipeList = ({ recipes }: RecipeListProps) => {
    return (
        <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.data.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </div>
    );
};

RecipeList.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipeList;
