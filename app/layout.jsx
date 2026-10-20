import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';

export const metadata = {
    title: 'Afimia Fidelis Izebiafe | Software Engineer',
    description:
        'Senior Engineer at Leoserve. React, TypeScript, MERN stack development, product leadership, and frontend architecture. Explore Leoserve/Digiverse and Ameen Hospitality project contributions.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}
