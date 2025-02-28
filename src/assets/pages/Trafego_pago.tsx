import Carrossel from '../components/carrossel__logos';
import Icon1 from '../images/monitor (1) 1.png';
import Icon2 from '../images/Vector.png';
import Icon3 from '../images/control 1.png';
import Icon4 from '../images/Group.png';
import BG_PURLE from '../images/bg-purple.webp';
import Carrossel_services from '../components/Carrossel_services';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';
import Video1 from '../videos/Gráfico_barra_novo.mp4'
import Video2 from '../videos/Gráfico_2 (2).mp4'
import { Helmet } from "react-helmet-async";
 
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
      <Helmet>
      <title>OnMídia - Agência de Tráfego Pago em São Paulo</title>
      <meta name="description" content="Atraia ainda mais clientes com anúncios estratégicos no Google Ads, Instagram e Facebook com a nossa Consultoria em Tráfego Pago." />
      </Helmet>
      
      <section
        className="container p-4 md:w-[1280px] mx-auto grid md:flex pt-12 md:pt-28 md:pb-12 gap-12"
        id="form"
      >
        <div className="container mx-auto content-center space-y-12">
          <a href="https://onmidiamkt.com.br">
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Logo_OnMidia_Color_V1.png" alt="logo-onmidia" className='w-60'/>
          </a>
          <h1 className="font-medium text-3xl uppercase">
            AGÊNCIA DE TRÁFEGO PAGO <b>ESPECIALIZADA</b> EM GERAR CLIENTES NO
            WHATSAPP
          </h1>
          <p>
          Soluções completas para <br />transformar seu investimento em<br /> anúncios e vendas reais.
          </p>
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl container mx-auto p-4 md:p-12 text-sm">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
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
            <input
              type="number"
              name="cnpj"
              placeholder="DIGITE O SEU CNPJ"
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
              <label className="text-[13px]">
                Ao clicar estou de acordo com os <a target='_blank' href="https://onmidiamkt.com.br/termos-e-condicoes" className='hover:text-primary uppercase'>Termos de uso </a> e <a className='hover:text-primary uppercase' target='_blank' href="https://onmidiamkt.com.br/politica-de-privacidade">Política de
                Privacidade</a>
              </label>
            </div>
 
            <button
              type="submit"
              className="bg-secundary hover:bg-secundary/80 text-white font-medium rounded-full p-4 uppercase w-60"
            >
              fale com um especialista
            </button>
          </form>
        </div>
      </section>
      <section className="w-full mx-auto text-center uppercase py-12 mt-12 bg-[#F0F0F0]">
        <h2 className="font-medium text-md md:text-3xl p-4">
          DIVERSAS EMPRESAS JÁ CONHECEM <br />E CONFIAM NO NOSSO TRABALHO.
          <br /> <b>CONHEÇA ALGUMAS DELAS:</b>
        </h2>
        <Carrossel />
      </section>
 
      <section className="container md:w-[1280px] p-4 mx-auto py-12 md:py-32 md:space-y-24 space-y-12">
        <div className="grid md:flex justify-between itens-center">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">
              ELEVE O NÍVEL DAS
              <br /> SUAS CAMPANHAS
            </h2>
          </div>
          <div className="container mx-auto justify-end text-left md:text-right p-0">
            <p>
              Não basta gerar conversas- é <br />preciso transformar interações<br />
              em lucros.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-40">
          <div className="space-y-4 p-4 border-2 rounded-xl border-black flex flex-col justify-between h-55 hover:bg-primary hover:text-white hover:border-primary">
            <span className="text-xl uppercase ">
              fase 1
            </span>
            <p>Identifique as <br/>oportunidades ocultas <br/>com dados precisos.</p>
          </div>
          <div className="space-y-4 p-4 border-2 rounded-xl border-black flex flex-col justify-between h-55 hover:bg-primary hover:text-white hover:border-primary">
            <span className="text-xl uppercase ">
              fase 2
            </span>
            <p>Elimine os gargalos que<br/> estão travando suas <br/>conversões.</p>
          </div>
          <div className="space-y-4 p-4 border-2 rounded-xl border-black flex flex-col justify-between h-55 hover:bg-primary hover:text-white hover:border-primary">
            <span className="text-xl uppercase ">
              fase 3
            </span>
            <p>Direcione cada centavo <br/>para estratégias que <br/>realmente geram <br/>retorno.</p>
          </div>
        </div>
        <div className="pt-12 container md:w-[1280px] grid md:flex items-center content-center">
          <div>
            <video src={Video2} autoPlay muted></video>
          </div>
          <div>
          <video src={Video1} autoPlay muted></video>
          </div>
        </div>
        <div className='text-center'>
        <a
          href="#form"
          className="border rounded-full p-4 bg-secundary text-white hover:bg-secundary/80 font-medium"
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
 
      <section className="container md:w-[1280px] p-4 mx-auto py-12 md:pt-32">
        <div className="container md:flex">
          <div className='container'>
          <h2 className="text-3xl font-medium">
            ESTRATÉGIA <b>IDEAL</b><br/>
            PARA TODOS OS <br/>NEGÓCIOS
          </h2>
          </div>
          <div className='container text-left md:text-right mt-4'>
          <p>
            Como mostramos em nossa metodologia, nós <br/>estudamos a fundo o seu
            mercado e o seu <br/>negócio. Sendo assim, conseguimos adaptar as<br/>
            estratégias para alcançar seus objetivos, <br/>independente de quais eles
            sejam.
          </p>
          </div>
         
        </div>
        <div className="container mx-auto md:w-[1280px] py-8 md:pt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 col-span-2 gap-4">
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/store-1.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>LOJA FÍSICA</h4>
            <p>Gere mais visitantes na sua loja ou venda pelo Whatsapp.</p>
          </div>
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/clinca.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>CLÍNICAS</h4>
            <p>Atrair mais clientes para a sua clínica pelo seu Whatsapp.</p>
          </div>
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/e-commerce.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>E-COMMERCE</h4>
            <p>Lojas online de todos os nichos.</p>
          </div>
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/petshop.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>PETSHOP</h4>
            <p>Faça seu petshop ser conhecido na região e aumente as vendas.</p>
          </div>
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/tray-1.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>RESTAURANTES</h4>
            <p>Aumente o número de visitantes e/ou pedidos no delivery.</p>
          </div>
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/auction-1.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>ADVOGADOS</h4>
            <p>Faça seu escritório ser conhecido e consiga ainda + clientes.</p>
          </div>
          <div className='border-md p-8 text-center space-y-2 shadow-lg rounded-md'>
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/customer-service-1.png" alt="loja fisica" className="w-auto h-20 mx-auto"/>
            <h4>PRESTADORES DE SERVIÇOS</h4>
            <p>Aumente a demanda dos seus serviços e seja conhecido.</p>
          </div>
          <div className='border-md bg-secundary p-8 text-center space-y-2 shadow-lg rounded-md text-white items-center content-center'>
            <h4>NÃO VIU O SEU NICHO?</h4>
            <p>Não tem problema! Nós podemos te atender,
            clique aqui!</p>
          </div>
        </div>
      </section>
      <section className="content-center justify-center text-center pb-24">
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
          backgroundSize: `cover`,
        }}
      >
        <div className="container md:w-[950px] p-4 mx-auto py-24 h-[450px]">
          <h2 className="text-xl md:text-3xl font-medium text-center text-white">
            OFERECEMOS <b>SOLUÇÕES COMPLETAS</b> PARA EXTRAIR O MÁXIMO POTENCIAL
            DAS SUAS CAMPANHAS
          </h2>
        </div>
      </section>
      <section className="container md:w-[1280px] p-4 mx-auto mb-60">
        <Carrossel_services />
       
      </section>
 
      <section className='container mx-auto text-center mb-12 md:mb-24'>
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
            <h2 className="text-2xl font-medium">
              SOMOS MOVIDOS PELO DESEJO CONSTANTE DE{' '}
              <b>REINVENTAR E TRANSFORMAR</b> O TRADICIONAL<br/> EM ALGO DESRUPTIVO.
            </h2>
          </div>
          <div className="container md:text-right text-left">
            <p>
              Com uma equipe de jovens visionários e uma <br/>paixão imensa por
              transformar ideias em <br/>realidade, a OnMídia tem se consolidado como<br/>
              uma verdadeira força criativa no mercado. Nosso <br/>trabalho é guiado
              por uma busca incessante pela <br/>perfeição e pela vontade de explorar
              novos <br/>horizontes da comunicação.
            </p>
          </div>
        </div>
        <div className="text-center space-y-12 md:space-y-24 py-12 md:py-24">
            <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/time-completo.jpg" alt="team" className='rounded-3xl'/>
          <p className="pb-24 text-lg">
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
    </div>
  );
};
 
export default Trafego_pago;