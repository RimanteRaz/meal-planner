import { InfiniteScroll } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { RecipeCard } from '@/components/recipe-card';
import AppLayout from '@/layouts/app-layout';
import recipes from '@/routes/recipes';
import type { BreadcrumbItem, PaginatedResponse, RecipeData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];

type RecipeListProps = {
    recipes: PaginatedResponse<RecipeData[]>;
};

const RecipeListPage = ({ recipes }: RecipeListProps) => {
    return (
        <InfiniteScroll
            className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
            data="recipes"
        >
            {recipes.data.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </InfiniteScroll>
    );
};

RecipeListPage.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipeListPage;
