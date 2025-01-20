import Header from '../components/header';
import Footer from '../components/footer';
import CountUp from 'react-countup';
import Carrossel from '../components/carrossel__logos';

const about = () => {
  return (
      <>
      <Header />
      <section className="grid container mx-auto p-4 gap-6 md:gap-12 md:flex py-36">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl md:text-7xl font-bold uppercase text-black">
            nossa hístoria
          </h1>
        </div>
        <div className="container mx-auto p-4 grid gap-4">
          <p className="text-mediun font-light">
            Em junho de 2021, no coração de um dos momentos mais desafiadores
            para o mercado global, nasceu a OnMídia. Fundada com a visão de
            transformar a maneira como marcas se conectam com pessoas, a agência
            surgiu com propósito de fazer a diferença em um mercado competitivo.
          </p>
          <p className="text-mediun font-light">
            Hoje estamos tornando as operações mais práticas e sustentáveis, de
            forma inteligente, para viver uma vida mais humana. Por isso, trazer
            soluções criativas, humanizadas e eficazes para empresas que buscam
            destacar sua voz em meio à transformação digital é a nossa missão.
          </p>
          <p className="text-mediun font-light">
            Amamos o que fazemos, nos apaixonamos por cada história e queremos
            fazer parte de tudo isso com você. Estamos sempre em movimento,
            promovendo o novo e construindo o futuro!
          </p>
        </div>
      </section>

      <section className="bg-black grid container mx-auto p-4 md:p-20 gap-4 py-10 text-white">
        <h2 className="text-3xl md:text-7xl font-bold uppercase ">nossa hístoria</h2>
        <div className="my-12 grid grid-cols-3 gap-12">
          <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={40}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold text-secundary"
              />
            <h3 className='font-medium'>Projetos entregues</h3>
          </div>
          <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={20}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold text-secundary"
              />
            <h3 className='font-medium'>Marcas criadas</h3>
          </div>
          <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={400}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold text-secundary"
              />
            <h3 className='font-medium'>Clientes atendidos</h3>
          </div>
          <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={80}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold text-secundary"
              />
            <h3 className='font-medium'>Eventos realizados</h3>
          </div>
          <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={30}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold text-secundary"
              />
            <h3 className='font-medium'>Vídeos produzidos</h3>
          </div>
        </div>
      </section>
      <Carrossel />
      <Footer />
      </>
  );
};

export default about;
