import { LinkIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Image } from '@/components/ui/image';
import AppLayout from '@/layouts/app-layout';
import recipes from '@/routes/recipes';
import type { BreadcrumbItem, RecipeData } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Recipes',
        href: recipes.index.url(),
    },
];

type RecipeProps = {
    recipe: RecipeData;
};

const RecipePage = ({ recipe }: RecipeProps) => {
    return (
        <div className="mx-auto max-w-3xl space-y-4 p-6">
            <Image
                src={recipe.image}
                alt={recipe.name}
                className="h-72 w-full rounded-lg border object-cover object-center"
            />
            {recipe.source && (
                <div className="flex items-center gap-1 text-muted-foreground">
                    <LinkIcon size={16} />
                    <a href={recipe.source}>{recipe.source}</a>
                </div>
            )}
            <h1 className="text-2xl font-bold capitalize">{recipe.name}</h1>

            <div className="space-y-2">
                <h3 className="text-xl font-bold">Instructions</h3>
                <div>{recipe.instructions}</div>
            </div>
        </div>
    );
};

RecipePage.layout = (page: ReactNode) => (
    <AppLayout breadcrumbs={breadcrumbs}>{page}</AppLayout>
);

export default RecipePage;
