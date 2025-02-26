import React from 'react';

const Audiovisual = () => {
  return (
    <>
      <section className="relative h-screen mx-auto items-center content-center">
        {/* Vídeo de fundo */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/zAm-efzMVCg?autoplay=1&mute=1&loop=1&playlist=zAm-efzMVCg&controls=0"
            allow="autoplay; fullscreen"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="container md:w-[1280px] mx-auto space-y-12 px-4">
          <h1 className="font-bold text-2xl md:text-5xl text-white">
            A parceria ideal para <br />
            a sua produção de filmes <br />
            e conteúdos para eventos <br />
            corporativos.
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="#"
              className="border font-medium rounded-none bg-transparent px-8 py-4 text-white border-white hover:bg-white hover:text-black"
            >
              SOLICITAR ORÇAMENTO
            </a>
            <a
              href="#"
              className="border font-medium bg-white px-8 py-4 text-black hover:bg-gray-300"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </section>
      <section className="bg-black py-12 px-4">
        <div className="container mx-auto md:w-[1280px] space-y-4 gap-4 text-white">
          <div className="md:flex md:py-12">
            <div className='items-center content-center'>
              <h2 className="text-5xl/tight md:pt-7 md:pr-12 md:pb-24 pb-4 ">
                Como <br />
                podemos
                <br />
                te ajudar?{' '}
              </h2>
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/image-2.png" alt="clack" className='w-full'/>
            </div>
            <div>
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Group-1-1.png" alt="galeria" className='w-full'/>
            </div>
          </div>
          <p>
            Sua empresa ou evento merece ser registrado com qualidade e
            profissionalismo. Somos especializados em produções audiovisuais
            para eventos corporativos, festas, shows e outros tipos de ocasiões.
            Nossa proposta é entregar conteúdos impactantes, que reforçam sua
            marca e capturam os melhores momentos.
          </p>
          <p>
            Com uma equipe técnica altamente capacitada para fornecer o melhor
            atendimento ao seu projeto, garantimos uma cobertura completa e
            vídeos que atendem às suas necessidades específicas. Seja para um
            evento corporativo, um lançamento, projeto institucional, feiras e
            workshops, trabalhamos para que o resultado final seja de alto
            padrão e totalmente alinhado com seus objetivos.
          </p>
          <p className='pb-12'>
            Conte com a nossa expertise para transformar seu evento em um
            conteúdo audiovisual que vai destacar a sua mensagem e gerar o
            impacto desejado.
          </p>
          <a
            href="#"
            className="inline-flex border font-medium rounded-none bg-transparent px-8 py-4 text-white border-white hover:bg-white hover:text-black"
          >
            QUERO CONVERSAR COM A ON
          </a>
        </div>
      </section>
    </>
  );
};

export default Audiovisual;
