import recipes from '@/routes/recipes';
import type { BreadcrumbItem } from '@/types';

export const RECIPES_INDEX_BREADCRUMB: BreadcrumbItem = {
    title: 'Recipes',
    href: recipes.index.url(),
};
