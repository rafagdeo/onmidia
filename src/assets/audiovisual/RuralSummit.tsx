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
      <section className="grid md:flex py-8 md:py-32 gap-4 p-4 md:p-12">
        <div className="container mx-auto">
          <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
        </div>
        <div className="container mx-auto gap-4 grid">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius efficitur enim, ut fringilla orci pretium vitae. Fusce
            viverra ex ligula. Vivamus venenatis, ex quis dignissim convallis,
            massa lorem interdum nisi, quis accumsan urna dui vitae leo.
            Maecenas mollis feugiat facilisis. Aenean ex erat, porta porttitor
            mollis eu, interdum et odio. In semper tortor congue lobortis
            dictum. Etiam id est dictum, sollicitudin lectus quis, suscipit
            libero. Suspendisse nunc dui, sollicitudin suscipit mattis non,
            faucibus ut justo. Integer ullamcorper lacus arcu, vitae hendrerit
            nisl facilisis ut. Donec placerat in purus sed gravida. Nunc
            fermentum orci est, et gravida lorem congue ut. Sed eu volutpat
            erat.
          </p>
          <p>
            Aliquam vestibulum nisl libero, sit amet malesuada urna tincidunt
            in. Donec id tincidunt urna, eu porttitor ante. Vivamus consectetur
            est augue, vitae tempus erat egestas at. Quisque eget ultricies
            orci. Pellentesque aliquam sem sit amet leo laoreet, eget ultricies
            quam vestibulum. In nec feugiat turpis, ac suscipit tortor. Nam et
            tortor lectus. Proin aliquam, risus et semper efficitur, justo lacus
            fringilla est, nec aliquam mi lacus in odio. Curabitur cursus rutrum
            turpis, in euismod nulla dictum sed. Curabitur maximus suscipit
            dolor eget rutrum.
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
      <section className="p-4 flex md:p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold uppercase">Time</h2>
        </div>
        <div className="container mx-auto grid gap-4 md:gap-12">
          <div>
            <h3 className="font-bold text-2xl">Logo</h3>
            <p>Rafa Purgatto</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Motion</h3>
            <p>Fabrício Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Mockups</h3>
            <p>Fabrício Costa</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">UX/UI</h3>
            <p>Fabrício Costa</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Website</h3>
            <p>Rafa Purgatto</p>
          </div>
        </div>
      </section>
      <Footer />
    </ObserverProvider>
  );
};

export default RuralSummit;
