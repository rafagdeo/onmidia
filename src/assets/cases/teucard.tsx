import Header from '../components/header'
import Footer from '../components/footer'

const teucard = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
          style={{
            backgroundImage: `url("https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-20.webp")`,
          }}>
      </section>
      <section className='py-24 p-4 md:py-44 container flex justify-between mx-auto'>
      <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            TeuCard
          </h1>
          {/* <h2 className="text-xl md:text-3xl font-light uppercase">
            {' '}
            - Marca corporativa
          </h2> */}
          <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light  border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light  border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light  border'>Design</span>
                  </div>
        </div>
        <div className='pt-4'>
          <span className='text-2xl'>2025</span>
        </div> 
      </section>
      <section className='w-full p-4 flex-wrap'>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-10.webp" alt="" className='animation-fadeIn'/>
        <video src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/cartao_teucard.mp4" className="p-0" autoPlay muted loop></video>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-24.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-25.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-26.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-28.webp" alt="" className='animation-fadeIn'/>
        <video src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/TeuCard.mov" className="p-0" autoPlay muted loop></video>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-30.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-31.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-33.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-34.webp" alt="" className='animation-fadeIn'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-36.webp" alt="" className='animation-fadeIn'/>
      </section>
      <Footer/>
    </div>
  )
}

export default teucard
