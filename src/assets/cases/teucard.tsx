import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../images/teucard.webp'

const teucard = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 bg-contain h-screen content-center"
          style={{
            backgroundImage: `url(${Banner})`,
          }}>
      </section>
      <section className='py-44 container mx-auto'>
        <div className='grid gap-4'>
          <h1 className='text-5xl font-bold uppercase'>TeuCard & Onmidia</h1>
          <h2 className='text-5xl font-bold uppercase'> - Marca corporativa</h2>
          <h2 className='text-xl font-light'>Porque nada no universo existe por si só</h2>
        </div> 
         <div></div> 
      </section>
      <Footer/>
    </div>
  )
}

export default teucard
