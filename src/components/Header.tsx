import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

export default function Header() {
    const pathname = useRouter().pathname;
    const { theme, setTheme } = useTheme();
    const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    
    return (
        <header>
            <a href='/' className="text-6xl font-name font-semibold text-black-600 mt-10 flex justify-center">wrongbyte</a>
            <div className='pages flex justify-center gap-5 mt-2 text-gray-500'>
                <a href='/' className={`${pathname === '/' && 'active'}`}>posts</a>
                <a href='/about' className={`${pathname === '/about' && 'active'}`}>about</a>
                <a className={`${pathname === '/writeups' && 'active'}`}>writeups</a>
                <a href='https://github.com/wrongbyte' className='inline'>github</a>
                <a onClick={changeTheme} className='inline cursor-pointer'>{theme === 'dark' ? 'light' : 'dark'} theme</a>
            </div>
            <div className="py-4"><div className="w-full border-t hr border-gray-300"></div></div>
        </header>
    )
}