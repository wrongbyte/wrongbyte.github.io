import { ReactNode } from 'react';

// Declaring components here makes the css applied local; i.e only on markdown instead of on the entire site.
export const components = {
    h1: ({ children }: { children: ReactNode }) => <h3 className="font-title text-3xl leading-9">{children}</h3>,
    h2: ({ children }: { children: ReactNode }) => <h3 className="font-title text-2xl leading-9">{children}</h3>,
    h3: ({ children }: { children: ReactNode }) => <h3 className="font-title text-2xl leading-9">{children}</h3>
}