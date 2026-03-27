import { InfiniteScroll } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { RecipeCard } from '@/components/recipe-card';
import AppLayout from '@/layouts/app-layout';
import type { PaginatedResponse, RecipeData } from '@/types';
import { RECIPES_INDEX_BREADCRUMB } from './breadcrumbs';

type RecipeListProps = {
    recipes: PaginatedResponse<RecipeData[]>;
};

const RecipeListPage = ({ recipes }: RecipeListProps) => {
    return (
        <>
            <AppSidebarHeader breadcrumbs={[RECIPES_INDEX_BREADCRUMB]} />
            <InfiniteScroll
                className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3"
                data="recipes"
            >
                {recipes.data.map((recipe) => (
                    <RecipeCard key={recipe.id} {...recipe} />
                ))}
            </InfiniteScroll>
        </>
    );
};

RecipeListPage.layout = (page: ReactNode) => <AppLayout>{page}</AppLayout>;

export default RecipeListPage;
