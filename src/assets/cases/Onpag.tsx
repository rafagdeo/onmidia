import Footer from '../components/footer';
import Header from '../components/header';

const Onpag = () => {
  return (
    <div>
      <Header />
      <section
        className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
        style={{
          backgroundImage: `url(https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem1.webp)`,
        }}
      ></section>
      <section className="py-24 p-4 md:p-0 md:py-44 container md:w-[1280px] flex justify-between mx-auto">
        <div className="grid gap-8">
          <h1 className="text-3xl md:text-6xl font-bold uppercase">
          Cerveza Equus
          </h1>
          <div className="flex-wrap flex gap-2 items-center">
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Strategy
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Branding
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              UX Design
            </span>
          </div>
        </div>
        <div className='pt-4'>
          <span className='text-2xl'>2025</span>
        </div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem2.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem3.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/gif_Equus.gif"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem5.webp"
          alt=""
          className="w-full"
        />
        <section className="grid md:flex py-8 container md:w-[1280px] mx-auto md:py-32 gap-4 p-4 md:p-0">
          <div className="container mx-auto">
            <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
          </div>
          <div className="container mx-auto gap-4 grid">
            <p>Algumas histórias têm cheiro de café recém-passado e sabor de saudade. A identidade da Câlin nasceu assim, entre memórias, fotos antigas e muitas risadas compartilhadas com o Seu Jean.
            </p>
            <p>Ele nos contou sobre sua infância em <b>Colmar, na França,</b>, onde as tardes eram recheadas de café, pão quentinho e família reunida. Foi um privilégio ouvir suas histórias e sentir o brilho no seu olhar ao falar do passado. Mas o momento mais emocionante veio quando perguntamos sobre o nome da padaria.
            </p>
            <p>Com os olhos marejados, Seu Jean nos apresentou <b>Câlin</b>, o primeiro cachorrinho que cruzou seu caminho. Ele apareceu em um fim de tarde, ainda filhote, chorando baixinho na porta de casa. Um pequeno algodão com patas, como ele descreveu rindo. Sem pensar duas vezes, acolheu o cãozinho, que, ao invés de abanar o rabo ou latir, só sabia fazer uma coisa: abraçar. Onde quer que Jean fosse, Câlin o seguia, se enroscando em suas pernas, como se quisesse dizer: “Eu estou aqui”.
            </p>
            <p>
            <b>Câlin</b> cresceu e virou um membro da família. Quando alguém chegava, lá estava ele, esperando com o mesmo abraço apertado. A casa ficou em luto quando ele partiu, mas seu nome, seu carinho e sua presença nunca saíram dali.
            Décadas depois, o neto de Seu Jean decidiu abrir uma padaria e quis traduzir esse sentimento de acolhimento em cada detalhe. Não se tratava apenas de servir café e pães, mas de criar um espaço onde as pessoas se sentissem abraçadas, como em casa.
            </p>
          </div>
        </section>
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem6.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/cavalos-2.gif"
          alt="gif"
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem8.webp"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem9.webp"
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/cerveza_gif_Equus.gif"
          alt=""
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Equus_imagem110.webp"
          alt="imagem10"
          className="w-full"
        />
        <img
          src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/cerveja-equs.gif"
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
            <p>Fabrício Costa</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Motion Design</h3>
            <p>Fabrício Costa</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Onpag;
