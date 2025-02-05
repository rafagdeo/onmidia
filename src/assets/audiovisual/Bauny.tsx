import ObserverProvider from '../components/ObserverProvider';
import Header from '../components/header';
import Footer from '../components/footer';
import ReactPlayer from 'react-player';
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const Bauny = () => {
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
            Bauny -
          </h1>
          <div className="flex-wrap flex gap-2 items-center">
          <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Aftermovie
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
                Eventos
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Audiovisual
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
            url="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/BAUNY-TEASER-2024_compress.mp4"
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
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_0236.jpg"
          className="w-full"
        />
        <div className="grid md:flex gap-2">
          <div>
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_4281.jpg"
              className="w-full"
            />
          </div>
          <div>
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_3439.jpg"
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
          Marcamos presença na BEAUTY SHOW 2024 cobrindo a BAUNY COSMÉTICOS mostrando o seu poder na arte de brilhar! 
          </p>
          <p>
          Tivemos a responsabilidade de registrar os melhores momentos do STAND da Bauny com seus melhores lançamentos, influenciadores e muito mais. O processo de estruturação do projeto começou logo no início do mês do evento, onde tivemos a primeira reunião para a alinhar as expectativas desse grande momento para a Bauny.
          </p>
          <p>
          Montamos uma equipe para cobrir os 3 dias de evento onde reunimos conteúdos e depoimentos para garantir a melhor entrega no Aftermovie que você acompanha todo o material aqui e no nosso canal do Youtube.
          </p>
        </div>
      </section>
      <img
        src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_0329.jpg"
        className="w-full"
      />
      <div className="grid md:flex gap-2">
        <div>
          <img
            src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_4767.jpg"
            className="w-full"
          />
        </div>
        <div>
          <img
            src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_0080.jpg"
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
            <h3 className="font-bold text-2xl">Filmmakers</h3>
            <p>Rafa Purgatto</p>
            <p>Cesar Alexandre</p>
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
            <p>Pâmela Fernandes</p>
          </div>
        </div>
      </section>
      <Footer />
    </ObserverProvider>
  );
};

export default Bauny;
