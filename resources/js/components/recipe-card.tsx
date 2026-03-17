import { Link } from '@inertiajs/react';
import recipes from '@/routes/recipes';
import type { RecipeData } from '@/types';
import { Card, CardContent, CardHeader } from './ui/card';
import { Image } from './ui/image';

export const RecipeCard = ({ id, name, image }: RecipeData) => {
    return (
        <Link href={recipes.show.url(id)}>
            <Card className="overflow-hidden pt-0">
                <CardHeader className="p-0">
                    <Image
                        src={image}
                        alt={name}
                        className="h-52 object-cover"
                    />
                </CardHeader>
                <CardContent className="text-lg font-bold text-slate-800 capitalize">
                    {name}
                </CardContent>
            </Card>
        </Link>
    );
};
