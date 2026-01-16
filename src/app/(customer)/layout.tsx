import * as React from 'react';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='flex-1 flex flex-col bg-white bg-gradient-to-br from-slate-50 to-slate-100 '>
			<div className='flex items-center justify-between p-4'>
				<h1 className="text-3xl font-bold text-slate-800 mb-1"> Hemly </h1>

				<p className="text-slate-600 text-sm">Visualize and specify your alterations</p>
				<span>profile</span>

			</div>
			{children}
		</main>
	);
}

