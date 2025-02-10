import Header from "../components/header";
import Footer from "../components/footer";
import CountUp from "react-countup";
import ObserverProvider from "../components/ObserverProvider";
import BG from "../images/bg-purple.webp";
import Team from "../components/Team";

const about = () => {
  return (
    <>
      <ObserverProvider>
        <Header />
        <section className="container md:w-[1280px] mx-auto grid md:gap-12 md:p-0 p-4 gap-4 pt-32 lg:py-52">
          <div className="p-0">
            <h1 className="w-full md:w-3/4 eading-tight text-2xl lg:text-5xl md:leading-tight font-bold uppercase text-black animate-fadeIn">
            Somos movidos pelo desejo constante de reinventar e de transformar o tradicional em algo disruptivo. 
            </h1>
          </div>
          <div className="items-end justify-end grid gap-4 md:pl-40 lg:pl-96">
            <p className="text-xl text-right font-light animate-fadeIn">
            Com uma equipe de jovens visionários e uma paixão genuína por transformar ideias em realidade, a OnMídia se destaca como uma força criativa em constante evolução. Nosso trabalho é impulsionado pela busca incansável pela excelência e vontade de explorar novas fronteiras da comunicação, sempre inovando e criando conexões autênticas que fazem a diferença. 
            </p>
          </div>
        </section>

        <section className="container md:w-[1280px] mx-auto">
          <div className="grid md:flex text-white md:h-screen items-end content-end p-2 md:p-8"
          style={{
            backgroundImage: `url(https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/time-completo.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="my-4 md:my-12 flex">
            <div className="container mx-auto">
            </div>
            <div className="container mx-auto"></div>
          </div>
          <div className="my-4 md:my-12 grid md:flex gap-12 text-center">
            <div className="container mx-auto"></div>
            <div className="w-4/4">
              <p className="text-xl text-left font-light animate-fadeIn">
              Com uma equipe de jovens visionários e uma paixão imensa por transformar ideias em realidade, a OnMídia tem se consolidado como uma verdadeira força criativa no mercado. Nosso trabalho é guiado por uma busca incessante pela perfeição e pela vontade de explorar novos horizontes da comunicação.
              </p>
            </div>
          </div>
          </div>
        </section>

        <section className="p-4 conteiner md:w-[1127px] mx-auto text-center content-center py-12 md:py-32">
          <h2 className="eading-tight text-3xl md:text-4xl md:leading-tight font-bold uppercase text-black animate-fadeIn">
          Somos movidos pelo desejo constante de reinventar e transformar o tradicional em algo disruptivo
          </h2>
        </section>
        {/* 
        <Carrossel /> */}
        <Team />
        <section className="p-4 container md:w-[1280px] mx-auto text-center content-center py-12 md:py-32">
          <p className="text-xl text-left font-light animate-fadeIn">
          Nosso compromisso é impulsionar o sucesso de cada cliente, desenvolvendo soluções únicas, criativas e inovadoras que conectam marcas ao seu verdadeiro potencial. Acreditamos que o sucesso vai além da execução de estratégias—ele está na criação de experiências autênticas e impactantes que diferenciam e fortalecem a presença no mercado.
          </p>
        </section>
        <section
          className="grid container md:w-[1280px] mx-auto p-4 md:p-20 gap-4 py-10 text-white"
          style={{
            backgroundImage: `url(${BG})`,
          }}
        >
          <div className="my-12 grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={250}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold"
              />
              <h3 className="font-medium text-gray-300">Clientes</h3>
            </div>
            <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={320}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold"
              />
              <h3 className="font-medium text-gray-300">Projetos entregues</h3>
            </div>
            <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={400}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold"
              />
              <h3 className="font-medium text-gray-300">Sites desenvolvidos</h3>
            </div>
            <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={57}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold"
              />
              <h3 className="font-medium text-gray-300">Marcas criadas</h3>
            </div>
            <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={88}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold"
              />
              <h3 className="font-medium text-gray-300">Produções audiovisuais</h3>
            </div>
            <div className="grid items-center gap-2">
              <CountUp
                start={0}
                end={30}
                duration={2}
                delay={0}
                className="text-5xl md:text-7xl font-bold"
              />
              <h3 className="font-medium text-gray-300">Eventos produzidos</h3>
            </div>
          </div>
        </section>
        <Footer />
      </ObserverProvider>
    </>
  );
};

export default about;
