import * as React from 'react';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='flex-1 flex flex-col bg-white'>
			{children}
		</main>
	);
}

