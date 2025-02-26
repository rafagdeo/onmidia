import React from 'react';

const Corporativo = () => {
  return (
    <>
      <section className="Corporativo">
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">Velos</h2>
          <iframe src="https://www.youtube.com/embed/mqOn4Pp8Vqs?si=8S6TrqH_5VZnB3Ad" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">
          Radial 50 anos
          </h2>
          <iframe src="https://www.youtube.com/embed/NrqCaCVQ0Yc?si=vd5XnW-pVArXMs7q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-bold uppercase text-white text-2xl md:text-5xl">
          The Yield Lab LATAM
          </h2>
          <iframe src="https://www.youtube.com/embed/OilmjtChZfU?si=oqsFQIcT2tYqcf52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className="w-full h-[400px] md:h-[800px]" allowfullscreen></iframe>
        </div>
      </section>
    </>
  );
};

export default Corporativo;
