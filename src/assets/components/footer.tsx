import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import Swal from 'sweetalert2'
import InputMask from "react-input-mask";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);

  formData.append("access_key", "2d7d77ec-2060-44e3-94b9-0ba8cd1fba98");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      form_name: "Contato", 
      status: "success",
      email: object.email, 
    });
    Swal.fire({
      title: "Obrigado!",
      text: "Recebemos o seu e-mail de contato!",
      icon: "success",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Alguma coisa deu errado!",
      footer: '<a href="https://tintim.link/whatsapp/df54585b-6383-4cbe-a926-f38e01e264fe/90f93659-5946-4687-b2a2-86ff23eaf47c" target="_blank">Entre em contato pelo WhatsApp.</a>'
    });
  }
};

const Footer = () => {

  return (
    <div className="bg-[#232323] text-white py-20 px-4">
      <div className="container p-4 mx-auto grid md:grid-cols-4 gap-4 uppercase">
        <div className="text-md flex-col flex justify-between">
          <div className="grid space-y-2">
          <h3 className="">São Paulo</h3>
          <p className="text-sm">
            R. Bom Sucesso, 220 - Cidade Mãe do Céu, São Paulo - SP, Sala 2207
            e 2307 - CEP 03305-000
          </p>
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
          </div>
          <div>
            <span className="text-gray-400 font-light text-md">2025 ONMIDIA © <br/>ALL RIGHTS RESERVED</span>
          </div>
          
        </div>
        <div>
          <ul className="md:ml-0 space-y-2 grid lg:ml-32">
            <a
              href="/"
              className="hover:text-secundary hover:underline hover:pl-4"
            >
              <li>Home</li>
            </a>
            <a
              href="/quem-somos"
              className="hover:text-secundary hover:underline hover:pl-4"
            >
              <li>Quem Somos</li>
            </a>
            <a
              href="https://tintim.link/whatsapp/df54585b-6383-4cbe-a926-f38e01e264fe/90f93659-5946-4687-b2a2-86ff23eaf47c" target="_blank"
              className="hover:text-secundary hover:underline hover:pl-4"
            >
              <li>Contato</li>
            </a>
          </ul>
        </div>
        <div className="text-md">
          <ul className="space-y-2 grid">
            <a
              href="/politica-de-privacidade"
              className="hover:text-secundary hover:underline hover:pl-4"
            >
              <li>Política de Privacidade</li>
            </a>
            <a
              href="/termos-e-condicoes"
              className="hover:text-secundary hover:underline hover:pl-4"
            >
              <li>Termos e condições</li>
            </a>
          </ul>
        </div>

        <div className="formulario">
          <form onSubmit={onSubmit} className="grid gap-2">
            <input
              name="firstname"
              type="text"
              placeholder="Nome"
              className="bg-transparent border border-gray-500 px-6 py-2 text-secundary focus:border-secundary focus:outline-none"
              required
            />
            <input
              name="company"
              type="text"
              placeholder="Empresa"
              className="bg-transparent border border-gray-500 px-6 py-2 text-secundary focus:border-secundary focus:outline-none"
              required
            />
            <InputMask
              name="phone"
              type="tel"
              mask="(99) 99999-9999"
              placeholder="Telefone"
              className="bg-transparent border border-gray-500 px-6 py-2 text-secundary focus:border-secundary focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="bg-transparent border border-gray-500 px-6 py-2 text-secundary focus:border-secundary focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Escreva sua mensagem"
              className="bg-transparent border border-gray-500 px-6 py-2 text-secundary focus:border-secundary focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-secundary py-2 px-6 text-white hover:bg-secundary font-bold hover:text-white"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
