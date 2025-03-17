import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Swal from 'sweetalert2';

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  formData.append('access_key', '9c844191-4857-4392-8a9f-d8aea1cf6a6e');

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

const DPO = () => {
  return (
    <div>
      <Header />
      <section className="p-4 container mx-auto md:w-[1280px] lg:flex py-32 space-y-12 gap-12">
        <div className="container items-center content-center space-y-4">
          <h1 className="text-3xl uppercase">
            Canal Facilitado do Encarregado de Dados (DPO)
          </h1>
          <p>
            Este Canal é de uso exclusivo para dúvidas e solicitações sobre seus
            dados pessoais como: confirmação da existência de tratamento de seus
            dados pessoais, solicitação de correção, eliminação, bloqueio ou
            atualização de seus dados pessoais do nosso banco de dados ou
            revogar consentimento de uso de seus dados pessoais
          </p>
        </div>
        <div className="formulario container">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 p-8 md:p-12 rounded-md bg-gray-100"
          >
            <input
              name="firstname"
              type="text"
              placeholder="Nome completo"
              className="bg-transparent border border-black px-6 py-2 text-black focus:border-black focus:outline-none placeholder:text-gray-400"
              required
            />
            <input
              type="number"
              name="cpf"
              id="cpf"
              placeholder="Seu CPF"
              className="bg-transparent border border-black px-6 py-2 text-black focus:border-black focus:outline-none placeholder:text-gray-400"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-transparent border border-black px-6 py-2 text-black focus:border-black focus:outline-none placeholder:text-gray-400"
              required
            />
            <select name="assunto" className="bg-transparent border border-black px-6 py-2 text-black focus:border-black focus:outline-none placeholder:text-gray-400 block w-full"
              required>
              <option selected>Selecione a opção abaixo</option>
              <option value="Confirmação da existência de tratamento">Confirmação da existência de tratamento</option>
              <option value="Acesso aos dados">Acesso aos dados</option>
              <option value="Correção dos dados">Correção dos dados</option>
              <option value="Anonimização ou bloqueio dos dados desnecessários">Anonimização ou bloqueio dos dados desnecessários</option>
              <option value="Eliminação de dados">Eliminação de dados</option>
              <option value="Portabilidade dos dados a outro fornecedor">Portabilidade dos dados a outro fornecedor</option>
              <option value="Informação de compartilhamento de dados">Informação de compartilhamento de dados</option>
              <option value="Informação sobre não fornecer consentimento">Informação sobre não fornecer consentimento</option>
              <option value="Revogação do consentimento">Revogação do consentimento</option>
              <option value="Oposição ao tratamento">Oposição ao tratamento</option>
            </select>
            <textarea
              name="message"
              placeholder="Digite aqui os detalhes da sua solicitação"
              className="bg-transparent border border-black px-6 py-2 text-black focus:border-black focus:outline-none placeholder:text-gray-400"
              required
            ></textarea>
            <html className="text-gray-500">
              Para mais informações sobre seus dados pessoais, acesse nossa{' '}
              <a
                href="https://onmidiamkt.com.br/politica-de-privacidade"
                className="text-primary"
              >
                Política de Privacidade
              </a>
            </html>
            <button
              type="submit"
              className="bg-primary text-md px-6 py-2 text-white font-light hover:bg-purple-600"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DPO;
