import type { ReactNode } from 'react';
import AppLayout from '@/layouts/app-layout';
import { recipes } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes().url,
    },
];

const RecipeList = () => 'Recipes';

RecipeList.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs} children={page} />
);

export default RecipeList;
