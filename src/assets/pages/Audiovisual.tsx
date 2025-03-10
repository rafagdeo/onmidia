import React from 'react';
import BG from '../images/bg-purple.webp';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa6';
import Carrossel__logos from '../components/carrossel__logos';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import Tabs from '../components/tabs/tabs';
import { Helmet } from 'react-helmet-async';

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

const Audiovisual = () => {
  return (
    <>
      <Helmet>
        <title>
          Produção Audiovisual Profissional – OnMídia Agência de Marketing
        </title>
        <meta
          name="description"
          content="Conte histórias impactantes com vídeos profissionais! Somos uma produtora de vídeos de alta qualidade focados em destacar sua marca e engajar seu público."
        />
      </Helmet>
      <section className="relative md:h-[800px] mx-auto md:flex items-center justify-center">
        {/* Vídeo de fundo */}
        <div className="md:absolute top-0 left-0 w-full h-full -z-10">
          <video
            className="w-full h-full object-cover"
            src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/VIDEO_WEB_LP-comprimido.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>

        {/* Conteúdo */}
        <div className="bg-black md:bg-transparent pt-12 container md:w-[1280px] mx-auto space-y-8 md:space-y-12 px-4">
          <h1 className="text-3xl/tight md:text-5xl/tight font-bold text-white md:w-[800px]">
            A parceria ideal para a sua produção de filmes e conteúdos para
            eventos corporativos.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#form"
              className="border font-medium rounded-none bg-transparent px-6 py-2 text-white border-white hover:bg-white hover:text-black"
            >
              SOLICITAR ORÇAMENTO
            </a>
            <a
              href="#section-2"
              className="border font-medium bg-white px-6 py-2 text-black hover:bg-gray-300"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>
      </section>

      <section className=" bg-black">
        <section className="bg-black py-12 px-4" id="section-2">
          <div className="container mx-auto md:w-[1280px] space-y-4 gap-4 text-white">
            <div className="md:flex md:py-12 mx-auto container">
              <div className="items-center content-center">
                <h2 className="text-3xl md:text-5xl/tight md:pt-7 md:pr-12 md:pb-24 pb-4">
                  Como <br />
                  podemos
                  <br />
                  te ajudar?{' '}
                </h2>
                <img
                  src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/image-2.png"
                  alt="clack"
                  className="w-full"
                />
              </div>
              <div>
                <img
                  src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Group-1-1.png"
                  alt="galeria"
                  className="w-full"
                />
              </div>
            </div>
            <p>
              Sua empresa ou evento merece ser registrado com qualidade e
              profissionalismo. Somos especializados em produções audiovisuais
              para eventos corporativos, festas, shows e outros tipos de
              ocasiões. Nossa proposta é entregar conteúdos impactantes, que
              reforçam sua marca e capturam os melhores momentos.
            </p>
            <p>
              Com uma equipe técnica altamente capacitada para fornecer o melhor
              atendimento ao seu projeto, garantimos uma cobertura completa e
              vídeos que atendem às suas necessidades específicas. Seja para um
              evento corporativo, um lançamento, projeto institucional, feiras e
              workshops, trabalhamos para que o resultado final seja de alto
              padrão e totalmente alinhado com seus objetivos.
            </p>
            <p className="pb-12">
              Conte com a nossa expertise para transformar seu evento em um
              conteúdo audiovisual que vai destacar a sua mensagem e gerar o
              impacto desejado.
            </p>
            <a
              href="#form"
              className="inline-flex border font-medium rounded-none bg-transparent px-6 py-2 text-white border-white hover:bg-white hover:text-black"
            >
              QUERO CONVERSAR COM A ON
            </a>
          </div>
        </section>

        <section className="container mx-auto md:w-[1280px] py-12 ">
          <Tabs />
        </section>

        <section className="container mx-auto md:w-[1280px] p-4 flex flex-col gap-4 md:flex-row items-center justify-between text-white">
          <div>
            <h2 className="md:text-6xl text-5xl">
              Como <br />
              fazemos?
            </h2>
          </div>
          <div className="justify-end ">
            <a
              href="#form"
              className="inline-block items-center content-center bg-primary hover:bg-purple-600 px-6 py-2 border-none font-medium text-white"
            >
              QUERO CONVERSAR COM A ON
            </a>
          </div>
        </section>
        <section className="container mx-auto md:w-[1280px] p-4 text-white flex flex-col gap-12 py-24">
          <h3 className="text-2xl md:text-4xl">1. Reunião e Diagnóstico</h3>
          <p className="font-medium">
            Este encontro visa alinhar as expectativas entre a equipe de
            produção e o cliente. Nessa reunião, são discutidos pontos como o
            objetivo do conteúdo, público-alvo, orçamento, cronograma, estilo,
            referências visuais, recursos necessários e detalhes de
            pós-produção. O objetivo é garantir que todos os aspectos do projeto
            estejam claros e ajustados, para que o resultado final atenda às
            expectativas do cliente.
          </p>
        </section>
        <section className="bg-[#1E1E1E] p-4 text-white ">
          <div className="container mx-auto md:w-[1280px] flex flex-col gap-12 py-24">
            <h3 className="text-2xl md:text-4xl">
              2. Apresentação e Estratégia do Projeto
            </h3>
            <p className="font-medium">
              Aqui começa o nosso esboço do grande dia, nessa reunião é possível
              detalhar o planejamento e as etapas da produção audiovisual. Nela,
              são apresentados os objetivos do projeto, a abordagem criativa, o
              cronograma de execução e o orçamento. A estratégia inclui também
              as principais decisões sobre público-alvo, estilo visual, recursos
              necessários e a logística de produção. O objetivo é garantir uma
              execução eficiente e alinhada com as expectativas do cliente,
              oferecendo um caminho claro para alcançar os resultados desejados.
            </p>
          </div>
        </section>
        <section className="bg-[#262626] p-4 text-white">
          <div className="container mx-auto md:w-[1280px] flex flex-col gap-12 py-24">
            <h3 className="text-2xl md:text-4xl">3. Produção</h3>
            <p className="font-medium">
              A produção do vídeo envolve todas as etapas práticas para
              transformar a ideia em um conteúdo audiovisual finalizado. Isso
              inclui pré-produção (planejamento, roteiro, definição de locações
              e equipe), produção (gravações, captação de imagens e sons) e
              pós-produção (edição, efeitos, sonorização e finalização). Durante
              essa fase, a equipe trabalha para garantir que o vídeo atenda aos
              objetivos definidos, respeitando o cronograma e o orçamento, e
              criando um conteúdo de qualidade.
            </p>
          </div>
        </section>
        <section className="bg-[#333333] p-4 text-white ">
          <div className="container mx-auto md:w-[1280px] flex flex-col gap-12 py-24">
            <h3 className="text-2xl md:text-4xl">4. Acompanhamento</h3>
            <p className="font-medium">
              Isso inclui a revisão do progresso, ajustes necessários e a
              comunicação constante entre a equipe de produção e o cliente. O
              objetivo é identificar e resolver possíveis problemas durante o
              processo, assegurando que o resultado final esteja alinhado com os
              objetivos estabelecidos.
            </p>
          </div>
        </section>
      </section>
      <section
        style={{ backgroundImage: `url(${BG})` }}
        className="py-32 flex items-center justify-center bg-cover bg-center"
      >
        <div className="container mx-auto flex justify-center">
          <h2 className="text-white font-bold uppercase text-2xl md:text-4xl/snug text-center p-4 md:w-[1200px]">
            Transformamos suas ideias em vídeos impactantes, criando conteúdo
            audiovisual que conecta, emociona e entrega resultados.
          </h2>
        </div>
      </section>

      <section className="container md:w-[1280px] mx-auto p-4 grid grid-cols-2 md:grid-cols-5 items-center py-32">
        
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/velos_logo.png" alt="logo-velos"/>
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/truck_bus_logo.png" alt="logo-truck-bus" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/yield-lab-logo.png" alt="logo-yield-latam" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/r_logo.png" alt="logo-r+" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/onpag_logo.png" alt="logo-onpag" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/global.png" alt="logo-global-cargo" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/by_solution_logo.png" alt="logo-by-solution" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/bauny-logo.png" alt="logo-bauny" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/alto_logo.png" alt="logo-alto-tiete-transportes" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/@bank_logo.png" alt="logo-arrobank" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/rural_ventures_logo.png" alt="logo-rural" />
              <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/giter-logo.png" alt="logo-giter" />
        
      </section>

      <section
        className="py-32"
        style={{
          backgroundImage: `url("https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/02/Group-2.png")`,
          backgroundSize: `cover`,
        }}
        id="form"
      >
        <div className="container md:w-[1280px] mx-auto p-4 md:flex text-white justify-between space-y-4">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-4xl">
                Pronto para <br />
                um novo projeto?{' '}
              </h2>
            </div>
            <div>
              <div className="flex py-4 gap-4">
                <a href="https://www.instagram.com/onmidiamkt/">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/onmidiaoficial/?viewAsMember=true">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.facebook.com/onmidiamkt">
                  <FaFacebookF />
                </a>
                <a href="https://www.behance.net/onmdiamkt">
                  <FaBehance />
                </a>
              </div>
              <span className="">Todos os direitos reservados a OnMídia®</span>
            </div>
          </div>
          <div className="formulario">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                name="firstname"
                type="text"
                placeholder="Qual o seu nome?"
                className="bg-transparent border border-white px-6 py-2 text-white focus:border-white focus:outline-none placeholder:text-white"
                required
              />
              <input
                type="email"
                placeholder="Seu e-mail?"
                className="bg-transparent border border-white px-6 py-2 text-white focus:border-white focus:outline-none placeholder:text-white"
                required
              />
              <InputMask
                name="phone"
                type="tel"
                mask="(99) 99999-9999"
                placeholder="Seu telefone/whatsapp?"
                className="bg-transparent border border-white px-6 py-2 text-white focus:border-white focus:outline-none placeholder:text-white"
                required
              />
              <input
                name="lastname"
                type="text"
                placeholder="Qual o nome da sua empresa?"
                className="bg-transparent border border-white px-6 py-2 text-white focus:border-white focus:outline-none placeholder:text-white"
                required
              />
              <input
                name="cnpj"
                type="number"
                placeholder="CNPJ"
                className="bg-transparent border border-white px-6 py-2 text-white focus:border-white focus:outline-none placeholder:text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Conte-nos um pouco sobre o seu projeto? "
                className="bg-transparent border border-white px-6 py-2 text-white focus:border-white focus:outline-none placeholder:text-white"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-md px-6 py-2 text-white font-light hover:bg-purple-600"
              >
                QUERO RECEBER O CONTATO DA ONMÍDIA
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Audiovisual;
