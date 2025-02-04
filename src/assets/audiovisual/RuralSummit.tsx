import ObserverProvider from '../components/ObserverProvider';
import Header from '../components/header';
import Footer from '../components/footer';
import ReactPlayer from 'react-player';
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const RuralSummit = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const playerRef = useRef<ReactPlayer | null>(null);

  const togglePlay = () => setPlaying(!playing);
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };
  return (
    <ObserverProvider>
      <Header />
      <section className="py-24 p-4 md:pt-44 container flex justify-between mx-auto  animate-fadeIn">
        <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            Rural Summit
          </h1>
          <h2 className="text-xl md:text-3xl font-light uppercase">
            {' '}
            - Marca corporativa
          </h2>
          <div className="flex-wrap flex gap-2 items-center">
            <span className="px-4 py-1 rounded-full text-sm font-light  border">
            Aftermovie
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light  border">
            Eventos
            </span>
          </div>
        </div>
        <div className="pt-4">
          <span className="text-2xl">2024</span>
        </div>
      </section>
      <section className="w-full p-4 grid gap-2">
          <ReactPlayer
            ref={playerRef}
            url="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/RSUMMIT_2024_VIDEO_OFICIAL.mp4"
            playing={playing}
            volume={volume}
            controls={false}
            width="100%"
            height="100%"
          />
          <div className="z-20 md:-mt-32 md:px-10 flex items-center rounded-full justify-between w-full">
            <button
              onClick={togglePlay}
              className="p-2 bg-secundary md:bg-white hover:bg-black rounded-full shadow-lg"
            >
              {playing ? <FaPause size={20} className='text-white'/> : <FaPlay size={20} />}
            </button>

            {/* Volume Control */}
            <div className="flex gap-4 items-center">
              <label htmlFor="volume" className="text-md text-black md:text-white font-bold">
                Volume:
              </label>
              <input
                id="volume"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-[100px] rounded-lg appearance-auto cursor-pointer"
              />
            </div>
          </div>
        
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/138-IMG_7449.jpg"
          className="w-full"
        />
        <div className="grid md:flex gap-2">
          <div>
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/112-IMG_7161.jpg"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/77-IMG_6741.jpg"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto grid md:flex py-8 md:py-32 gap-4 p-4">
        <div className="container mx-auto">
          <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
        </div>
        <div className="container mx-auto gap-4 grid">
          <p>
          O Rural Summit by Onmídia é um evento inovador que une conhecimento, tecnologia e networking para transformar o agronegócio. Com uma abordagem dinâmica e estratégica, o evento reúne especialistas, empresas e produtores para debater as principais tendências do setor, apresentando soluções inovadoras e oportunidades de negócio
          </p>
          <p>
          A Onmídia, responsável por toda a organização, traz sua expertise para criar uma experiência imersiva e impactante, com espaços interativos, palestras de alto nível e uma comunicação visual moderna que reforça o conceito de um agro conectado ao futuro. A estratégia de marketing digital, redes sociais e campanhas publicitárias garantem amplo alcance e engajamento, posicionando o Rural Summit como um dos eventos mais relevantes do setor.
          </p>
          <p>
          Com conteúdo exclusivos, rodadas de negócios e um ambiente projetado para conexões estratégicas, o Rural Summit by Onmídia se consolida como um marco para impulsionar o agronegócio rumo a um futuro mais tecnológico e sustentável. 
          </p>
          <p>
          Nosso time, teve a tarefa de não só organizar, mas criar conteúdos e ser responsável pelo Aftermovie e Highlights do evento, registrando e capturando momentos marcantes desse evento que promete chegar com tudo sempre que é anunciado.
          </p>
        </div>
      </section>
      <img
        src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/76-IMG_6701.jpg"
        className="w-full"
      />
      <div className="grid md:flex gap-2">
        <div>
          <img
            src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/10-IMG_5609.jpg"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/62-IMG_6456.jpg"
            className="w-full"
          />
        </div>
      </div>
      <section className="p-4 flex container mx-auto uppercase py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Time</h2>
        </div>
        <div className="container mx-auto grid gap-4 md:gap-12">
          <div>
            <h3 className="font-bold text-2xl">Gerente do Projeto</h3>
            <p>Jé Alves
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Direção de Arte e Coordenação</h3>
            <p>Rafa Purgatto</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Coordenação do Evento</h3>
            <p>Arissa Ohashi</p>
            <p>Jé Alves</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Filmmakers</h3>
            <p>Rafa Purgatto</p>
            <p>Cesar Alexandre
            </p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Real Time e Backstage</h3>
            <p>Raíssa Cristina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Fotografia</h3>
            <p>Pâmela Fernandes</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Pós – Produção e Edição</h3>
            <p>Cesar Alexandre</p>
            <p>Rafa Purgatto</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Transmissão ao Vivo</h3>
            <p>Rafa Purgatto</p>
            <p>Cesar Alexandre</p>
            <p>Raissa Cristina</p>
          </div>
        </div>
      </section>
      <Footer />
    </ObserverProvider>
  );
};

export default RuralSummit;
