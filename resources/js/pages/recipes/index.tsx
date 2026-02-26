import type { ReactNode } from 'react';
import AppLayout from '@/layouts/app-layout';
import recipes from '@/routes/recipes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];

const RecipeList = () => 'Recipes';

RecipeList.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipeList;
