import type { ReactNode } from 'react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import recipes from '@/wayfinder/routes/recipes';
import type { Inertia } from '@/wayfinder/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];

const RecipeList = ({ recipes }: Inertia.Pages.Recipes.Index) => {
    console.log({ recipes });
    return 'Recipes';
};

RecipeList.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipeList;
