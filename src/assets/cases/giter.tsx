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
      <section className="py-24 p-4 md:py-44 container mx-auto">
        <div className="grid gap-4">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            Giter
          </h1>
          <h2 className="text-xl md:text-3xl font-light uppercase">
            {' '}
            - Marca corporativa
          </h2>
        </div>
        <div></div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem2_Giter.webp" alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Animacao_icone_Gitter.gif' alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem3_Giter.webp" alt="" className='w-full'/>

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
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem4_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem5_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem6_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem7_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem8_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem9_Giter.webp' alt="" className='w-full'/>
        <img src='https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Imagem10_Giter.webp' alt="" className='w-full'/>
      </section>

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
            <p>Rafa Purgatto</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default giter;
