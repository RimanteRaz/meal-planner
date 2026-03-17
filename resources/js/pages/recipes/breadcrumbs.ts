import recipes from '@/routes/recipes';
import type { BreadcrumbItem } from '@/types';

export const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];
