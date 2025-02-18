import Header from '../components/header';
import Footer from '../components/footer';
import Carrossel from '../components/carrossel__logos';
import Icon1 from '../images/monitor (1) 1.png';
import Icon2 from '../images/Vector.png';
import Icon3 from '../images/control 1.png';
import Icon4 from '../images/Group.png';
import BG_PURLE from '../images/bg-purple.webp';
import Carrossel_services from '../components/Carrossel_services';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}
const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  formData.append('access_key', '2d7d77ec-2060-44e3-94b9-0ba8cd1fba98');

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      form_name: 'Contato',
      status: 'success',
      email: object.email,
    });
    console.log('enviado com sucesso');
    
    Swal.fire({
      title: 'Obrigado!',
      text: 'Recebemos o seu e-mail de contato!',
      icon: 'success',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Alguma coisa deu errado!',
      footer:
        '<a href="https://tintim.link/whatsapp/df54585b-6383-4cbe-a926-f38e01e264fe/90f93659-5946-4687-b2a2-86ff23eaf47c" target="_blank">Entre em contato pelo WhatsApp.</a>',
    });
  }
};

const Trafego_pago = () => {
  return (
    <div>
      <Header />
      <section
        className="container p-4 md:w-[1280px] mx-auto grid md:flex uppercase pt-24 md:pt-40 md:pb-12 gap-12"
        id="form"
      >
        <div className="container mx-auto content-center text-3xl space-y-4">
          <h1 className="font-medium">
            AGÊNCIA DE TRÁFEGO PAGO <b>ESPECIALIZADA</b> EM GERAR CLIENTES NO
            WHATSAPP
          </h1>
          <p className="text-[20px] font-light">
            SOLUÇÕES COMPLETAS PARA TRANSFORMAR SEU INVESTIMENTO EM ANÚNCIOS E
            VENDAS REAIS
          </p>
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl container mx-auto p-4 md:p-12">
          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="DIGITE O SEU NOME"
              className="bg-transparent text-black border-b-2 px-4 py-2 focus:outline-secundary"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="DIGITE O SEU E-MAIL"
              className="bg-transparent text-black border-b-2 px-4 py-2 focus:outline-secundary"
              required
            />
            <InputMask
              name="phone"
              type="tel"
              mask="(99) 99999-9999"
              placeholder="DIGITE O SEU TELEFONE"
              className="bg-transparent text-black border-b-2 px-4 py-2 focus:outline-secundary"
              required
            />
            <div className="flex gap-4">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="text-black"
                required
              />
              <label className="text-[12px]">
                Ao clicar estou de acordo com os termos de uso e Política de
                Privacidade
              </label>
            </div>

            <button
              type="submit"
              className="bg-secundary hover:bg-secundary/80 text-white font-medium rounded-full p-4 uppercase"
            >
              fale com um especialista
            </button>
          </form>
        </div>
      </section>
      <section className="w-full mx-auto text-center uppercase py-24">
        <h2 className="font-medium text-md md:text-3xl p-4">
          DIVERSAS EMPRESAS JÁ CONHECEM <br />E CONFIAM NO NOSSO TRABALHO.
          <br /> <b>CONHEÇA ALGUMAS DELAS:</b>
        </h2>
        <Carrossel />
      </section>

      <section className="container md:w-[1280px] p-4 mx-auto py-32 space-y-12">
        <div className="grid md:flex justify-between itens-center gap-4">
          <div className="container mx-auto">
            <h2 className="text-xl md:text-3xl font-bold">
              ELEVE O NÍVEL DAS
              <br /> SUAS CAMPANHAS
            </h2>
          </div>
          <div className="container mx-auto justify-end p-0 md:pl-44">
            <p>
              Não basta gerar conversas- é preciso transformar <br /> interações
              em lucros.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <span className="px-6 py-2 uppercase bg-secundary rounded-full text-white font-medium text-sm">
              fase 1
            </span>
            <p>Identifique as oportunidades ocultas com dados precisos.</p>
          </div>
          <div className="space-y-4">
            <span className="px-6 py-2 uppercase bg-secundary rounded-full text-white font-medium text-sm">
              fase 2
            </span>
            <p>Elimine os gargalos que estão travando suas conversões.</p>
          </div>
          <div className="space-y-4">
            <span className="px-6 py-2 uppercase bg-secundary rounded-full text-white font-medium text-sm">
              fase 3
            </span>
            <p>
              Direcione cada centavo para estratégias que realmente geram
              retorno.
            </p>
          </div>
        </div>
        <div className="pt-12 container md:w-[1280px] grid md:flex">
          <div className="">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/graph-1.png"
              alt="graficos"
              className="container mx-auto"
            />
          </div>
          <div className="">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/graph2.png"
              alt="graficos"
              className="container mx-auto"
            />
          </div>
        </div>
        <div className='text-center'>
        <a
          href="#form"
          className="border rounded-full p-4 bg-primary text-white hover:bg-secundary font-medium"
        >
          FALE COM NOSSO ESPECIALISTA
        </a>
        </div>
        
      </section>

      <section
        style={{
          backgroundImage: `url(${BG_PURLE})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `left`,
          backgroundAttachment: `fixed`,
          backgroundSize: `cover`
        }}
      >
        <div className="container md:w-[1280px] p-4 mx-auto text-center py-12 md:py-32 space-y-12">
          <h2 className="text-3xl font-medium text-white">
            CONHEÇA <b>NOSSAS METODOLOGIA</b>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="rounded-md shadow-md p-8 space-y-4 hover:border-secundary border bg-white">
              <img src={Icon1} alt="icon1" className="w-16" />
              <h3 className="font-bold uppercase text-md">
                DIAGNÓSTICO E ESTUDO DE MERCADO
              </h3>
              <p className="text-[14px]">
                Analisamos sua presença digital e o desempenho atual das suas
                campanhas para identificar pontos de melhoria, ou, oportunidades
                a serem exploradas. Também realizamos um estudo de mercado para
                identificar tendências, padrões, comportamento e preferências
                dos seus clientes, podendo assim seguir para próxima etapa com
                dados para elaborar a melhor estratégia.
              </p>
            </div>
            <div className="rounded-md shadow-md p-8 space-y-4 hover:border-secundary border bg-white">
              <img src={Icon2} alt="icon1" className="w-16" />
              <h3 className="font-bold uppercase text-md">
                DIAGNÓSTICO E ESTUDO DE MERCADO
              </h3>
              <p className="text-[14px]">
                Analisamos sua presença digital e o desempenho atual das suas
                campanhas para identificar pontos de melhoria, ou, oportunidades
                a serem exploradas. Também realizamos um estudo de mercado para
                identificar tendências, padrões, comportamento e preferências
                dos seus clientes, podendo assim seguir para próxima etapa com
                dados para elaborar a melhor estratégia.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            <div className="lg:col-start-2 rounded-md shadow-md p-8 space-y-4 hover:border-secundary border bg-white">
              <img src={Icon3} alt="icon1" className="w-16" />
              <h3 className="font-bold uppercase text-md">
                IMPLEMENTAÇÃO E CONFIGURAÇÕES INICIAIS
              </h3>
              <p className="text-[14px]">
                Realizamos todas as configurações necessárias para rastrear e
                extrair o máximo de informações possíveis, e consequentemente,
                os melhores resultados das suas campanhas. Em sequência, subimos
                todas as campanhas estipuladas na etapa de estratégia, com as
                configurações, segmentações e comunicação.
              </p>
            </div>
            <div className="rounded-md shadow-md p-8 space-y-4 hover:border-secundary border bg-white">
              <img src={Icon4} alt="icon1" className="w-16" />
              <h3 className="font-bold uppercase text-md">
                ACOMPANHAMENTO E OTIMIZAÇÕES
              </h3>
              <p className="text-[14px]">
                Com as campanhas em veiculação, vamos monitorar de perto seus
                resultados, buscar pontos de otimizações e ajustes, para extrair
                o máximo de resultados sobre o seu investimento. Enquanto isso,
                você conseguirá acompanhar todos os resultados em seu dashboard,
                e saber o retorno e oportunidades geradas pelas campanhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container md:w-[1280px] p-4 mx-auto md:flex md:py-32">
        <div className="container space-y-4">
          <h2 className="text-3xl font-medium">
            ESTRATÉGIA <b>IDEAL</b>
            <br /> PARA TODOS OS NEGÓCIOS
          </h2>
          <p>
            Como mostramos em nossa metodologia, nós estudamos a fundo o seu
            mercado e o seu negócio. Sendo assim, conseguimos adaptar as
            estratégias para alcançar seus objetivos, independente de quais eles
            sejam.
          </p>
        </div>
        <div className="container">
          <p className="border-b py-2 md:px-6 text-lg">
            <b>Lojas físicas:</b> Gere mais visitantes na sua loja ou venda pelo
            Whatsapp.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            <b>Clínicas:</b> Atrair mais clientes para a sua clínica pelo seu
            Whatsapp.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            <b>E-commerce:</b> Lojas online de todos os nichos.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            <b>Petshop:</b> Faça seu petshop ser conhecido na região e aumente
            as vendas.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            <b>Restaurantes:</b> Aumente o número de visitantes e/ou pedidos no
            delivery.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            <b>Advogados:</b> Faça seu escritório ser conhecido e consiga ainda
            + clientes.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            <b>Prestador de serviço:</b> Aumente a demanda dos seus serviços e
            seja conhecido.
          </p>
          <p className="border-b py-2 md:px-6 text-lg">
            Não viu seu nicho? Não tem problema! <b>Nós podemos te atender!</b>
          </p>
        </div>
      </section>
      <section className="content-center justify-center text-center pt-12 pb-24">
        <a
          href="#form"
          className="bg-secundary hover:bg-secundary/80 text-white text-center font-medium rounded-full p-4 uppercase content-center"
        >
          FALE COM UM ESPECIALISTA
        </a>
      </section>

      <section
        className="w-full"
        style={{
          backgroundImage: `url(${BG_PURLE})`,
          backgroundSize: `contain`,
        }}
      >
        <div className="container md:w-[950px] p-4 mx-auto pt-12 h-96">
          <h2 className="text-xl md:text-3xl font-medium text-center text-white">
            OFERECEMOS <b>SOLUÇÕES COMPLETAS</b> PARA EXTRAIR O MÁXIMO POTENCIAL
            DAS SUAS CAMPANHAS
          </h2>
        </div>
      </section>
      <section className="container md:w-[1280px] p-4 mx-auto mb-60">
        <Carrossel_services />
        
      </section>

      <section className='container mx-auto text-center mb-32'>
      <a
          href="#form"
          className="bg-secundary hover:bg-secundary/80 text-white text-center font-medium rounded-full p-4 uppercase content-center"
        >
          FALE COM UM ESPECIALISTA
        </a>
      </section>

      <section className="container md:w-[1280px] p-4 mx-auto py-12 space-y-12">
        <div className="grid md:flex justify-between itens-center gap-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-medium">
              SOMOS MOVIDOS PELO DESEJO CONSTANTE DE{' '}
              <b>REINVENTAR E TRANSFORMAR</b> O TRADICIONAL EM ALGO DESRUPTIVO.
            </h2>
          </div>
          <div className="container mx-auto">
            <p>
              Com uma equipe de jovens visionários e uma paixão imensa por
              transformar ideias em realidade, a OnMídia tem se consolidado como
              uma verdadeira força criativa no mercado. Nosso trabalho é guiado
              por uma busca incessante pela perfeição e pela vontade de explorar
              novos horizontes da comunicação.
            </p>
          </div>
        </div>
        <div className="text-center space-y-8">
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/time-completo.jpg" alt="" className='rounded-md'/>
          <p className="pb-12">
            Enquanto seus concorrentes já estão faturando alto,{' '}
            <b>
              a única dúvida que você deve ter é: por que deixar dinheiro na
              mesa?
            </b>{' '}
            <br />
            Transforme seu WhatsApp em uma máquina de vendas - a hora de dominar
            o mercado é agora!
          </p>
          <a
            href="#form"
            className="bg-secundary hover:bg-secundary/80 text-white font-medium rounded-full p-4 uppercase"
          >
            FALE COM UM ESPECIALISTA
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Trafego_pago;
