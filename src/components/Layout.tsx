import { ReactNode } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<Header />
				<main className="xl:w-7/12 lg:w-4/5 w-11/12 mx-auto mt-3 mb-auto">{children}</main>
				<footer className=" flex justify-center">
					<span className="mb-3">• wrongbyte © • 2022 •</span>
				</footer>
			</div>
		</>
	);
}
