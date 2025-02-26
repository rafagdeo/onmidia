import React from 'react';

const Intitucional = () => {
  return (
    <>
      <section className="Eventos">
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">DSFL</h2>
          <iframe src="https://www.youtube.com/embed/g4SLiBfPyr0?si=-_YpHJV7oATxz1y1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">
            Radial Sustentabilidade
          </h2>
          <iframe src="https://www.youtube.com/embed/bnYDnNTcVoM?si=grvRyt8ucq0mdPpX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">
            Mulheres na Estrada
          </h2>
          <iframe src="https://www.youtube.com/embed/rV4SiCD0Tzc?si=nNWl6OOZXcy2F4r2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
      </section>
    </>
  );
};

export default Intitucional;
