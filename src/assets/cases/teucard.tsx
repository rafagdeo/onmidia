import Header from '../components/header'
import Footer from '../components/footer'
import Img1 from '../images/teucard/Prancheta 10.webp'
import Img2 from '../images/teucard/Prancheta 20.webp'
import Img24 from '../images/teucard/Prancheta 24.webp'
import Img25 from '../images/teucard/Prancheta 25.webp'
import Img26 from '../images/teucard/Prancheta 26.webp'
import Img28 from '../images/teucard/Prancheta 28.webp'
import Img30 from '../images/teucard/Prancheta 30.webp'
import Img31 from '../images/teucard/Prancheta 31.webp'
import Img33 from '../images/teucard/Prancheta 33.webp'
import Img34 from '../images/teucard/Prancheta 34.webp'
import Img36 from '../images/teucard/Prancheta 36.webp'
import Cartao from '../video/cartao_teucard.mp4'
import Cartao2 from '../video/TeuCard.mov'


const teucard = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
          style={{
            backgroundImage: `url(${Img2})`,
          }}>
      </section>
      <section className='py-24 p-4 md:py-44 container mx-auto'>
        <div className='grid gap-4'>
          <h1 className='text-3xl md:text-6xl font-bold uppercase'>TeuCard</h1>
          <h2 className='text-xl md:text-3xl font-light uppercase'> - Marca corporativa</h2>
          <h2 className='text-xl font-light'>Porque nada no universo existe por si só</h2>
        </div> 
         <div></div> 
      </section>
      <section className='w-full p-4 flex-wrap'>
        <img src={Img1} alt="" className='animation-fadeIn'/>
        <video src={Cartao} className="p-0" autoPlay muted loop></video>
        <img src={Img24} alt="" className='animation-fadeIn'/>
        <img src={Img25} alt="" className='animation-fadeIn'/>
        <img src={Img26} alt="" className='animation-fadeIn'/>
        <img src={Img28} alt="" className='animation-fadeIn'/>
        <video src={Cartao2} className="p-0" autoPlay muted loop></video>
        <img src={Img30} alt="" className='animation-fadeIn'/>
        <img src={Img31} alt="" className='animation-fadeIn'/>
        <img src={Img33} alt="" className='animation-fadeIn'/>
        <img src={Img34} alt="" className='animation-fadeIn'/>
        <img src={Img36} alt="" className='animation-fadeIn'/>
      </section>
      <Footer/>
    </div>
  )
}

export default teucard
