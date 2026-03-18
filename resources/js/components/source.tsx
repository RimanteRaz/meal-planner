import { LinkIcon } from 'lucide-react';
import type { FC } from 'react';

type SourceProps = {
    source: string;
};

export const Source: FC<SourceProps> = ({ source }) => {
    const isUrl = URL.canParse(source);

    const sourceDisplay = isUrl ? (
        <a href={source} target="_blank" rel="noopener noreferrer">
            {source}
        </a>
    ) : (
        <span>{source}</span>
    );

    return (
        <div className="flex items-center gap-1 text-muted-foreground">
            <LinkIcon size={16} />
            {sourceDisplay}
        </div>
    );
};
