import headerLogo  from '../assets/images/header-logo.svg' 
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <header className='bg-amber-100 padding-x py-8 w-full absolute z-100'>
        <nav className='flex items-center justify-between max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
            <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden'>
              {navLinks.map(({href, label}) => (
                <li key={label}>
                  <a href={href} className='font-montserrat text-lg text-slate-gray leading-normal'>{label}</a>
                </li>
              ))}
            </ul>
            <div className='lg:hidden block'>
              <img src={hamburger} alt="menu" height={25} width={25}/>
            </div>
        </nav>
    </header>
  )
}

export default NavBar