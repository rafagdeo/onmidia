import Footer from '../components/footer';
import Header from '../components/header';

const BySolution = () => {
  return (
    <div>
      <Header />
      <section
        className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
        style={{
          backgroundImage: `url(https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/BySolution_Sessao-2.webp)`,
        }}
      ></section>
      <section className="py-24 p-4 md:p-0 md:py-44 container md:w-[1280px] flex justify-between mx-auto">
        <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            BySolution
          </h1>
          <div className="flex-wrap flex gap-2 items-center">
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Strategy
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Development
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Branding
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Developmet
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              UX Design
            </span>
          </div>
        </div>
        <div className='pt-4'>
          <span className='text-2xl'>2024</span>
        </div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-35.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Grid_By_Solution.gif"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/BySolution_Sessao-5.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Wave_By_Solution.gif"
          alt=""
          className="w-full"
        />
        <section className="grid md:flex py-8 container md:w-[1280px] mx-auto md:py-32 gap-4 p-4 md:p-0">
          <div className="container mx-auto">
            <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
          </div>
          <div className="container mx-auto gap-4 grid">
            <p>
            O desenvolvimento da marca começou com uma <b>análise aprofundada da identidade da empresa</b>, considerando sua missão de oferecer soluções inteligentes e seu compromisso com a tecnologia. A partir disso, realizamos um estudo de mercado para posicionar a BySolution como referência no setor de tecnologia.
            </p>
            <p>
            A identidade visual foi um dos pilares do projeto, garantindo que a marca transmitisse modernidade e confiança. Além do design do logotipo e da escolha da paleta de cores, foi definida uma linguagem de comunicação clara e objetiva, reforçando a expertise da empresa no segmento.
            </p>
            <p>
            A nova identidade foi aplicada em diversos materiais e plataformas, incluindo site, redes sociais e materiais institucionais, consolidando a presença digital da BySolution. Com um <b>posicionamento forte e diferenciado</b>, a marca desenvolvida pelo time da OnMídia hoje se destaca como sinônimo de inovação e tecnologia no mercado.
            </p>
          </div>
        </section>
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/BySolution_Sessao-8.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/By_Solution_Imagem10.gif"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/BySolution_Sessao-11.webp"
          alt=""
          className="w-full"
        />
      </section>

      <section className="p-4 flex container md:w-[1280px] mx-auto uppercase py-12">
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
            <h3 className="font-bold text-2xl">Designer</h3>
            <p>Vini Campos</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Motion Design</h3>
            <p>Fabrício Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Website</h3>
            <p>Rafa Purgatto</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BySolution;
