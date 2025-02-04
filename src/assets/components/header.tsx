import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";

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
            <li className='px-4 py-1 rounded-full bg-black hover:bg-primary text-white'>
              <a href="#contact">Contato</a>
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
                <a href="#contact">Contato</a>
              </li>
            </ul>
            <div className='px-2 py-4 '>
              <div>
              <span className='font-normal'>Redes Sociais</span>
                <div className="flex py-4 gap-4">
                            <a href="https://www.instagram.com/onmidiamkt/">
                              <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/company/onmidiaoficial/?viewAsMember=true">
                              <FaLinkedinIn />
                            </a>
                            <a href="https://www.facebook.com/onmidiamkt">
                              <FaFacebookF />
                            </a>
                            <a href="https://www.behance.net/onmdiamkt">
                              <FaBehance />
                            </a>
                          </div>
              </div>
            </div>
          </div>
        )}

              
    </header>
  );
};

export default header;
