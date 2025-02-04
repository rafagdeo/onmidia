import Header from '../components/header';
import Footer from '../components/footer';

const SynConsult = () => {
  return (
    <div>
      <Header />
      <section
        className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
        style={{
          backgroundImage: `url(https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-1.webp)`,
        }}
      ></section>
      <section className="py-24 p-4 md:py-44 container flex justify-between mx-auto">
        <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            SynConsult
          </h1>
          {/* <h2 className="text-xl md:text-3xl font-light uppercase">
            {' '}
            - Marca corporativa
          </h2> */}
          <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light border'>Design</span>
                  </div>
        </div>
        <div className='pt-4'>
          <span className='text-2xl'>2025</span>
        </div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-2.webp" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-3.webp" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-4.webp" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-5.webp" alt="" className='w-full'/>
        <section className="container mx-auto grid md:flex py-8 md:py-32 gap-4">
          <div className="container mx-auto">
            <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
          </div>
          <div className="container mx-auto gap-4 grid">
            <p>
            Desenvolvemos este projeto de marca da SynConsult com foco em transmitir seriedade, dinamismo, confiança, criatividade, comprometimento e segurança, valores essenciais para uma consultoria especializada no agronegócio.
            </p>
            <p>
            O processo envolveu uma imersão no setor agro e na identidade da empresa, resultando em um posicionamento estratégico que alia inteligência e inovação para impulsionar o crescimento sustentável dos clientes. A identidade visual foi cuidadosamente elaborada com cores que remetem à confiança e modernidade com elementos gráficos que reforçam a conexão com tecnologia e estratégia diretamente ligada ao campo.
            </p>
          </div>
        </section>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Animacao_Logo_Syn_Consult-1.gif" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-7.webp" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Animacao_Icone_Syn_Consult.gif" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-9.webp" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult.gif" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/synconsult_02.jpg" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/SynConsult_Sessao-11.webp" alt="" className='w-full'/>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/synconsult_01.jpg" alt="" className='w-full'/>
      </section>

      <section className="container mx-auto p-4 flex py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold uppercase">Time</h2>
        </div>
        <div className="container mx-auto grid gap-4 md:gap-12 uppercase">
          <div>
            <h3 className="font-bold text-2xl">Gerente de projeto</h3>
            <p>Jé Alves</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Direção de Arte e Coordenação</h3>
            <p>Rafa Purgatto</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Designers</h3>
            <p>Rafa Purgatto</p>
            <p>Fabricio Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Motion Design</h3>
            <p>Fabrício Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Mockups</h3>
            <p>Rafa Purgatto</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SynConsult;
