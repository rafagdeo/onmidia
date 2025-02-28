import React from 'react'

const Eventos = () => {
  return (
      <>    <section className='Eventos'>
      <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">BAUNY BEAUTY SHOW 2024</h2>
          <iframe src="https://www.youtube.com/embed/uXNSN1WLqGk?si=9JsFQPWrd0E14O3J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">Investor Day</h2>
          <iframe src="https://www.youtube.com/embed/EX98RScf7bU?si=A58TLlBgga9W5ZJP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">By Solution</h2>
          <iframe src="https://www.youtube.com/embed/wQgeq_TiCV4?si=HNiC2iSw9wI5Uvq0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>

    </section>
    </>

  )
}

export default Eventos