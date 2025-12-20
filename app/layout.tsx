import { RootProvider } from 'fumadocs-ui/provider/next'
import './global.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'The BAID Survival Guide',
    description: 'The BAID Survival Guide 是由学生自主维护的北京中学国际部学生指南，希望为学生集中提供办事流程、大学申请制、新生时间线等实用信息，帮助学生更好地适应和融入国际部生活。',
    openGraph: {
        images: '/img/social-card.png'
    }
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
