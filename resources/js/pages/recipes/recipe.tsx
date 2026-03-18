import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { Source } from '@/components/source';
import { Image } from '@/components/ui/image';
import AppLayout from '@/layouts/app-layout';
import type { RecipeData } from '@/types';
import { breadcrumbs } from './breadcrumbs';

type RecipeProps = {
    recipe: RecipeData;
};

const RecipePage = ({ recipe }: RecipeProps) => {
    return (
        <>
            <Head title={recipe.name} />

            <div className="mx-auto max-w-3xl space-y-4 p-6">
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-72 w-full rounded-lg border object-cover object-center"
                />
                {recipe.source && <Source source={recipe.source} />}
                <h1 className="text-2xl font-bold capitalize">{recipe.name}</h1>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Instructions</h3>
                    <div>{recipe.instructions}</div>
                </div>
            </div>
        </>
    );
};

RecipePage.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipePage;
