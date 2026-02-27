import type { ReactNode } from 'react';
import AppLayout from '@/layouts/app-layout';
import recipes from '@/routes/recipes';
import type { BreadcrumbItem, Recipe } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];
type RecipeListProps = {
    recipes: Recipe;
};
const RecipeList = ({ recipes }: RecipeListProps) => {
    console.log({ recipes });
    return 'Recipes';
};

RecipeList.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipeList;
