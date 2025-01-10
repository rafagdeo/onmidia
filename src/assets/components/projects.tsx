import Rural from '../images/rural.webp'
import Giter from '../images/giter.webp'
import Teucard from '../images/teucard.webp'

const projects = () => {
  return (
    <div>
      <a href="/cases/teucard" className='container mx-auto p-4 grid gap-2'>
            <div className='relative z-0 overflow-hidden rounded-lg'>
                  <img src={Teucard} alt="" className='w-full z-0 h-full object-contain rounded-lg transition-transform duration-500 hover:scale-110'/>
            </div>
            <h3 className='text-2xl font-bold '>Teu Card</h3>
                  <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Design</span>
                  </div>
      </a>
      <div className=" container mx-auto grid-cols-1 grid md:grid-cols-2 gap-4">
            <a href='#' className='p-4 flex-col rounded-lg flex gap-2'>
                  <div className='relative z-0 overflow-hidden rounded-lg'>
                        <img src={Rural} alt="rural" className='w-full z-0 h-full object-contain rounded-lg transition-transform duration-500 hover:scale-110'/>
                  </div>
                  <h3 className='text-2xl font-bold '>Rural Ventures</h3>
                  <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Design</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Content</span>
                  </div>
            </a>
            <a href='#' className='p-4 flex-col rounded-lg flex gap-2'>
                  <div className='relative overflow-hidden rounded-lg'>
                        <img src={Giter} alt="rural" className='w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-110'/>
                  </div>
                  <h3 className='text-2xl font-bold '>Giter</h3>
                  <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Design</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Content</span>
                  </div>
            </a>
            <a href='#' className='p-4 flex-col rounded-lg flex gap-2'>
                  <div className='relative overflow-hidden rounded-lg'>
                        <img src={Rural} alt="rural" className='w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-110'/>
                  </div>
                  <h3 className='text-2xl font-bold '>Rural Ventures</h3>
                  <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Design</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Content</span>
                  </div>
            </a>
            <a href='#' className='p-4 flex-col rounded-lg flex gap-2'>
                  <div className='relative overflow-hidden rounded-lg'>
                        <img src={Giter} alt="rural" className='w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-110'/>
                  </div>
                  <h3 className='text-2xl font-bold '>Giter</h3>
                  <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Design</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border-secundary border'>Content</span>
                  </div>
            </a>
      </div>
    </div>
  )
}

export default projects
