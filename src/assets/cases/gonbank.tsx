import Header from '../components/header';
import Footer from '../components/footer';

const gonbank = () => {
  return (
    <div>
      <Header />
      <section
        className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
        style={{
          backgroundImage: `url(https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_2.gif)`,
        }}
      ></section>
      <section className="py-24 p-4 md:py-44 container flex justify-between mx-auto">
      <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
            TeuCard
          </h1>
          {/* <h2 className="text-xl md:text-3xl font-light uppercase">
            {' '}
            - Marca corporativa
          </h2> */}
          <div className='flex-wrap flex gap-2 items-center'>
                        <span className='px-4 py-1 rounded-full text-sm font-light  border'>Strategy</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light  border'>Development</span>
                        <span className='px-4 py-1 rounded-full text-sm font-light  border'>Design</span>
                  </div>
        </div>
        <div className='pt-4'>
          <span className='text-2xl'>2025</span>
        </div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_5.webp" alt="" />
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_9.gif" alt="" />
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_6.webp" alt="" />
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_10.gif" alt="" />
        <section className="container mx-auto grid md:flex py-8 md:py-32 gap-4 p-4">
          <div className="container mx-auto">
            <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
          </div>
          <div className="container mx-auto gap-4 grid">
            <p>
            Um projeto que começou do zero conosco, e hoje tem se tornado realidade na palma da sua mão. O GonBank nasceu para impulsionar as pessoas com um banco digital ágil, sem burocracia e acessível para todos. Inspirado no conceito de "GO" (vai, avance), a marca transmite dinamismo e inovação, oferecendo crédito, consignados e serviços financeiros de forma simples e moderna.
            </p>
            <p>
            Com uma identidade vibrante e uma comunicação jovem e direta, o GonBank aposta em tecnologia, experiência intuitiva e benefícios exclusivos para tornar a vida financeira dos clientes mais fácil e cheia de possibilidades. 
            </p>
            <p className='font-bold'>
              "GO! Com o GonBank, você não fica parado." 
            </p>
          </div>
        </section>
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_7.webp" alt="" />
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_8.webp" alt="" />
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_3.webp" alt="" />
        <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_4.webp" alt="" />
        <video src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_1.mov" className="p-0" autoPlay muted loop></video>
      </section>

      <section className="flex container mx-auto uppercase py-12">
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
            <h3 className="font-bold text-2xl">Motion Design</h3>
            <p>Fabrício Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Mockups</h3>
            <p>Rafa Purgatto</p>
            <p>Fabrício Costa</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default gonbank;
