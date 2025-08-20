import headerLogo  from '../assets/images/header-logo.svg' 
import hamburger from '../assets/icons/hamburger.svg';

const NavBar = () => {
  return (
    <>
    <header className='padding-x'>
        <nav className=''>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>
        </nav>
    </header>
    </>
  )
}

export default NavBar