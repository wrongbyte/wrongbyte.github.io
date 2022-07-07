import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Header() {
	const pathname = useRouter().pathname;
	const { theme, setTheme } = useTheme();
	const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

	return (
		<header>
			<Link href="/">
				<a className="text-6xl font-name font-semibold text-black-600 mt-10 flex justify-center">
					wrongbyte
				</a>
			</Link>
			<div className="pages flex justify-center gap-5 mt-2 text-gray-500">
				<Link href="/">
					<a className={`${pathname === '/' && 'active'}`}>posts</a>
				</Link>
				<Link href="/about">
					<a className={`${pathname === '/about' && 'active'}`}>about</a>
				</Link>
				{/* <Link href='/'> */}
				<a className={`${pathname === '/writeups' && 'active'}`}>writeups</a>
				{/* </Link> */}
				<Link href="https://github.com/wrongbyte">
					<a className="inline">github</a>
				</Link>
				<a onClick={changeTheme} className="inline cursor-pointer">
					{theme === 'dark' ? 'light' : 'dark'} theme
				</a>
			</div>
			<div className="py-4">
				<div className="w-full border-t hr border-gray-300"></div>
			</div>
		</header>
	);
}
