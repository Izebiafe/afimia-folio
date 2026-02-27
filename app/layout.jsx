import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';

export const metadata = {
    title: 'Afimia Fidelis Izebiafe — Frontend Engineer',
    description:
        'Frontend Engineer specializing in scalable, data-driven interfaces for distributed systems. State architecture, API design, and rendering performance.',
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
