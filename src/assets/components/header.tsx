import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Menu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="t-0 z-50 fixed bg-white flex px-4 py-6 w-full">
      <div className="container z-20 mx-auto flex items-center justify-between">
        <div className="logo">
          <a href="/">
            <img src="https://onmidiamkt.com.br/wp-content/uploads/2023/10/cropped-onmidia-logo.png" alt="logo__onmidia" className='h-[30px]'/>
          </a>
        </div>
        <nav className="navbar">
          <ul className="hidden md:flex items-center gap-4 text-md uppercase">
            <li className='px-4 py-1 rounded-full hover:bg-black hover:text-white'>
              <a href="/">Home</a>
            </li>
            <li className='px-4 py-1 rounded-full hover:bg-black hover:text-white'>
              <a href="/quem-somos">Quem Somos</a>
            </li>
            <li className='px-4 py-1 rounded-full hover:bg-black hover:text-white'>
              <a href="">Time</a>
            </li>
            <li className='px-4 py-1 rounded-full bg-black hover:bg-primary text-white'>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
        
      </div>
      <button
        id="menu"
        onClick={Menu}
        className="text-xl md:hidden focus:outline-none"
      >
        <RxHamburgerMenu />
      </button>
        {isMenuOpen && (
          <div className="fixed z-20 top-14 bg-white w-full py-4 left-0 border-b border-gray-200 rounded-b-md shadow-md">
            <ul className="flex flex-col content-start justify-center w-full h-full space-y-2">
              <li className='p-2 hover:bg-primary hover:text-white'>
                <a href="/">Home</a>
              </li>
              <li className='p-2 hover:bg-primary hover:text-white'>
                <a href="/quem-somos">Quem somos</a>
              </li>
              <li className='p-2 hover:bg-primary hover:text-white'>
                <a href="">Projetos</a>
              </li>
              <li className='p-2 hover:bg-primary hover:text-white'>
                <a href="">Time</a>
              </li>
              <li className='p-2 hover:bg-primary hover:text-white'>
                <a href="">Contato</a>
              </li>
            </ul>
            <div className='flex justify-between items-center m-2 py-2'>
                  <span>Redes Sociais</span>
                  <span>PT - EN - ESP</span>
            </div>
          </div>
        )}

              
    </header>
  );
};

export default header;
