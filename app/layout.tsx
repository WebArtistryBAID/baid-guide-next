import { RootProvider } from 'fumadocs-ui/provider/next'
import './global.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'The BAID Survival Guide',
    description: 'An unofficial guide to Beijing Academy International Division.'
}

export default function Layout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head><link href="/img/logo.png" rel="icon" /></head>
        <body className="flex flex-col min-h-screen">
        <RootProvider search={{ enabled: false }} theme={{
            enabled: false,
        }}>{children}</RootProvider>
        </body>
        </html>
    )
}
