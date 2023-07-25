import { defaultFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import '@/styles/globals.scss'

export const metadata = {
	title: 'Travel Web',
	description: 'Viva essa experiência',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body
				className={cn(
					'min-h-screen bg-background antialiased',
					defaultFont.variable
				)}
			>
				{children}
			</body>
		</html>
	)
}
