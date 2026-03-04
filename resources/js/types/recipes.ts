export type Recipe = {
    id: string;
    name: string;
    instructions: string;
    image?: string | null;
    source?: string | null;
    created_at: string;
};
