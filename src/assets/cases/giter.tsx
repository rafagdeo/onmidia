import Footer from "../components/footer";
import Header from "../components/header";

const giter = () => {
  return (
    <div>
      <Header />
      <section
        className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
        style={{
          backgroundImage: `url(https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem1_Giter.webp)`,
        }}
      ></section>
      <section className="py-24 p-4 md:p-0 md:py-44 container md:w-[1280px] flex justify-between mx-auto">
      <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            Giter
          </h1>
          <div className='flex-wrap flex gap-2 items-center'>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
                Strategy
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Naming
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Branding
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Website
              </span>
          </div>
        </div>
        <div className='pt-4'>
          <span className='text-2xl'>2024</span>
        </div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem2_Giter.webp" alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Gitter_corrigido.gif' alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem3_Giter.webp" alt="" className='w-full'/>

        <section className="container md:w-[1280px] md:-p-0 mx-auto grid md:flex py-8 md:py-32 gap-4 p-4">
          <div className="container mx-auto">
            <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
          </div>
          <div className="container mx-auto gap-4 grid">
            <p>
            A Giter, ao entrar em uma nova fase de sua trajetória, estruturou uma estratégia de marketing fundamentada em sua identidade visual inovadora e desafiadora. Essa identidade não apenas superou as expectativas, mas também se tornou um elemento essencial para comunicar os valores e diferenciais da marca de maneira moderna e atual.
            </p>
            <p>
            A construção visual da Giter foi baseada em elementos autênticos do campo, incorporando hortaliças, campos arados e as mais recentes tecnologias de gestão do agronegócio. Esses símbolos representam a essência da marca: a fusão entre a tradição agrícola e a inovação tecnológica, reforçando seu compromisso com a evolução e a eficiência no setor.
            </p>
          </div>
        </section>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem4_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem5_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem6_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem7_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem8_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem9_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem10_Giter.webp' alt="" className='w-full'/>
      </section>

      <section className="flex container md:w-[1280px] mx-auto uppercase py-12">
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
            <h3 className="font-bold text-2xl">Designers</h3>
            <p>Rafa Purgatto</p>
            <p>Fabrício Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Website</h3>
            <p>Vinicius Campos</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default giter;
