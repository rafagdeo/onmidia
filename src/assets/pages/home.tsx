import { useEffect, useState } from 'react';
import Header from '../components/header';
import ObserverProvider from '../components/ObserverProvider';
import Projects from '../components/projects';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { MdDownload } from 'react-icons/md';
import Footer from '../components/footer';
import BG from '../images/bg-purple.webp';
import { GoArrowUpRight } from 'react-icons/go';
import Carrossel from '../components/carrossel__logos';
import { TbWorld } from "react-icons/tb";

const home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(1 - scrollY / 500, 0);
  const scale = Math.max(1 - scrollY / 2000, 0.7);

  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { timeZone: 'America/Sao_Paulo' };
      const saoPauloTime = now.toLocaleString('pt-BR', options);
      setDateTime(saoPauloTime);
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const fileUrl = "https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/OnMidia-MediaKit.pdf";

  return (
    <div>
      <ObserverProvider>
        <Header />
        <div
          className="h-[650px] md:h-[750px] pt-20 md:pt-40 p-4 md:p-0 container md:w-[1280px] mx-auto align-text-bottom content-center justify-center"
          style={{
            opacity: opacity,
            transform: `scale(${scale}) translateY(${scrollY / 2}px)`,
            transition: 'transform 0.2s, opacity 0.2s',
          }}
        >
          <h1 className="text-black font-bold text-6xl md:text-8xl uppercase pb-4">
            more <br />
            than an <br /> agency
          </h1>
          <div className="justify-between lg:flex">
            <div className="grid gap-2 text-left h-28 md:h-52 content-end">
              <p className="uppercase">
                Mais que uma agência,
                <br /> somos o parceiro para o <br />
                <b className="font-bold uppercase underline">
                  futuro do seu negócio
                </b>
                .
              </p>
            </div>
            <div className="grid  text-right h-28 md:h-52 justify-end content-end">
              <p>® since 2021</p>
              <span className="uppercase font-bold">BRAZIL, São Paulo</span>
              <span>{dateTime}</span>
            </div>
          </div>
        </div>

        <div className="z-10 bg-black">
          <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Sessoes_Site_OnMidia.gif" className='w-full object-cover'/>
        </div>

        {/*projetos*/}
        <div className="p-4 my-12 md:mt-24 space-y-8">
          <h2 className="text-black font-bold text-2xl md:text-3xl text-center uppercase intersect:motion-preset-slide-up motion-delay-0">
            Últimos projetos
          </h2>
          <Projects />
        </div>

        <section className="container md:w-[1280px] p-4 mx-auto flex flex-col lg:flex-row items-start justify-between md:py-32">
          <div className="lg:w-1/2 md:h-[61vh] flex flex-col justify-between">
            <h1 className="text-3xl md:text-5xl font-bold md:leading-tight mb-4">
              COCRIAÇÃO E AGILIDADE <br /> TRANSFORMAM <br /> RELACIONAMENTO{' '}
              <br /> EM SOLUÇÃO
            </h1>
            <p className="text-md font-bold flex items-center gap-4">BRAZIL & WORLDWIDE <TbWorld size={25}/></p>
          </div>

          <div className="lg:w-1/2 mt-3 lg:mt-96">
            <p className="text-gray-600 text-xl mb-4">
            O nosso propósito vai além de criar soluções para marcas: queremos tornar as operações mais práticas e sustentáveis, de forma inteligente, para viver uma vida mais humana. Em cada estratégia, buscamos equilibrar a inovação com a responsabilidade, criando ações que não só geram resultados, mas também têm um impacto positivo na sociedade e no meio ambiente.
            </p>
            <p className="text-gray-600 text-xl mb-4">
            A cultura da OnMídia é a alma da nossa jornada. Somos uma empresa jovem, inovadora e ousada, movida por um amor único e imenso por comunicação estratégica, criatividade e transformação digital. Nossa cultura é centrada em princípios sólidos, mas também na capacidade de evoluir constantemente, antecipando tendências e abraçando a inovação.
            </p>
            
          </div>
        </section>

        <section
          className="py-32 bg-fixed bg-contain md:h-screen items-center justify-center content-center"
          style={{
            backgroundImage: `url(${BG})`,
          }}
        >
          <div className="container md:w-[1280px] mx-auto text-left text-gray-300 grid lg:flex gap-4">
            <div className="lg:w-2/4 p-4 lg:py-12 grid gap-4 text-2xl">
              <h2 className="text-4xl lg:text-6xl font-bold text-white uppercase animate-fadeIn">
                O que fazemos
              </h2>
              <p className="text-xl animate-fadeIn">
                Reunimos a expertise certa com o melhor uso da tecnologia para
                criar experiências que moldam os relacionamentos das pessoas com
                as marcas em todo o seu ecossistema.
              </p>
              <p className="text-xl font-medium animate-fadeIn">
                Veja como podemos ajudar.
              </p>
            </div>
            <div className="container mx-auto grid gap-10 lg:gap-20">
            <a
                className="hover:pl-12 p-4 items-center font-bold text-2xl justify-between border-b border-gray-400 flex gap-4 hover:border-white"
              >
                Desenvolvimento <GoArrowUpRight />
              </a>
              <a
                className=" hover:pl-12 p-4 items-center font-bold text-2xl justify-between border-b border-gray-400 flex gap-4 hover:border-white"
              >
                Audiovisual
                <GoArrowUpRight />
              </a>
              <a
                className=" hover:pl-12 p-4 items-center font-bold text-2xl justify-between border-b border-gray-400 flex gap-4 hover:border-white"
              >
                Tráfego
                <GoArrowUpRight />
              </a>
              <a
                className="hover:pl-12 p-4 items-center font-bold text-2xl justify-between border-b border-gray-400 flex gap-4 hover:border-white"
              >
                Branding
                <GoArrowUpRight />
              </a>
              
              <a
                className="hover:pl-12 p-4 items-center font-bold text-2xl justify-between border-b border-gray-400 flex gap-4 hover:border-white"
              >
                Design
                <GoArrowUpRight />
              </a>
              <a
                className="hover:pl-12 p-4 items-center font-bold text-2xl justify-between border-b border-gray-400 flex gap-4 hover:border-white"
              >
                Evento
                <GoArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="container md:w-[1280px] mx-auto py-20 p-4 h-[700px] justify-between grid">
          <div className="w-full md:w-2/4 space-y-8 flex-col">
            <span className="px-4 py-1 rounded-full border-gray-200 border text-lg md:text-sm">
              Processos
            </span>
            <h2 className="font-bold text-4xl md:text-6xl intersect:motion-preset-slide-up motion-delay-0 uppercase ">
              Somos ágeis por natureza
            </h2>
          </div>

          <div className="md:w-4/4 justify-normal ml-0 md:content-end md:justify-end flex flex-wrap items-center gap-4 md:pt-32 lg:ml-80">
            <div className="flex items-center gap-4">
              <a
                className="rounded-full border items-center gap-4 px-8 py-2 border-gray-200 hover:bg-primary hover:text-[#fff]"
              >
                <div className="flex items-center gap-4">
                  <p className="text-2xl md:text-3xl font-bold">Strategy</p>
                  <FaArrowRightLong />
                </div>
              </a>
              <TfiLayoutLineSolid />
            </div>
            <div className="flex items-center gap-4">
              <a
                className="rounded-full border items-center gap-4 px-8 py-2 border-gray-200 hover:bg-primary hover:text-[#fff]"
              >
                <div className="flex items-center gap-4">
                  <p className="text-2xl md:text-3xl font-bold">Branding</p>
                  <FaArrowRightLong />
                </div>
              </a>
              <TfiLayoutLineSolid />
            </div>
            <div className="flex items-center gap-4">
              <a
                className="rounded-full border items-center gap-4 px-8 py-2 border-gray-200 hover:bg-primary hover:text-[#fff]"
              >
                <div className="flex items-center gap-4">
                  <p className="text-2xl md:text-3xl font-bold">
                    Product Design
                  </p>
                  <FaArrowRightLong />
                </div>
              </a>
              <TfiLayoutLineSolid />
            </div>
            <div className="flex items-center gap-4">
              <a
                className="rounded-full border items-center gap-4 px-8 py-2 border-gray-200 hover:bg-primary hover:text-[#fff]"
              >
                <div className="flex items-center gap-4">
                  <p className="text-2xl md:text-3xl font-bold">Development</p>
                  <FaArrowRightLong />
                </div>
              </a>
              <TfiLayoutLineSolid />
            </div>
            <div className="flex items-center gap-4">
              <a
                className="rounded-full border items-center gap-4 px-8 py-2 border-gray-200 hover:bg-primary hover:text-[#fff]"
              >
                <div className="flex items-center gap-4">
                  <p className="text-2xl md:text-3xl font-bold">
                    Growth Marketing
                  </p>
                  <FaArrowRightLong />
                </div>
              </a>
            </div>
          </div>
        </section>
        <Carrossel />
        <section id="contact" className="my-12 md:my-36 container md:w-[950px] grid mx-auto text-center align-center content-center justify-center ">
          <h2 className="font-bold text-3xl md:text-5xl intersect:motion-preset-slide-up motion-delay-0 uppercase ">
          Pronto para trabalharmos juntos?
          </h2>
          <h2 className="font-bold text-3xl md:text-5xl intersect:motion-preset-slide-up motion-delay-0 uppercase ">
            baixe nosso mediakit
          </h2>
          <a
            href={fileUrl}
            target='_blank'
            rel="noopener noreferrer"
            className="font-light text-xl text-center justify-center items-center flex gap-4 mt-6"
          >
            Visualizar <MdDownload />
          </a>
        </section>
        <Footer />
      </ObserverProvider>
    </div>
  );
};

export default home;
