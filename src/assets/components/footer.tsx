
const footer = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", '4a03c91e-3656-408d-82db-096776f69d0e');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="bg-[#232323] text-white py-20 px-4">
      <div className="container p-4 mx-auto grid md:grid-cols-4 gap-4 uppercase">
        <div className="text-xl">
          <ul className="space-y-2 grid">
            <h3 className="">São Paulo</h3>
            <p className="text-sm">
              R. Bom Sucesso, 220 - Cidade Mãe do Céu, São Paulo - SP, Sala 2207
              e 2307 - CEP 03305-000
            </p>
          </ul>
        </div>
        <div className="text-xl">
          <ul className="ml-0 space-y-2 grid md:ml-32">
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>Home</li>
            </a>
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>Projetos</li>
            </a>
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>Cases</li>
            </a>
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>Contato</li>
            </a>
          </ul>
        </div>
        <div className="text-xl">
          <ul className="space-y-2 grid">
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>Política de Privacidade</li>
            </a>
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>Termos e condições</li>
            </a>
            <a
              href="#"
              className="hover:text-[#de6a07] hover:underline hover:pl-4"
            >
              <li>© 2025 onmdidia</li>
            </a>
          </ul>
        </div>

        <div className="formulario">
          <form onSubmit={onSubmit} className="grid gap-2">
            <input
            name="Nome"
              type="text"
              placeholder="Nome"
              className="bg-transparent border border-gray-500 px-6 py-2 text-[#de6a07] focus:border-[#de6a07] focus:outline-none"
              required
            />
            <input
            name="Empresa"
              type="text"
              placeholder="Empresa"
              className="bg-transparent border border-gray-500 px-6 py-2 text-[#de6a07] focus:border-[#de6a07] focus:outline-none"
              required
            />
            <input
              name="Telefone"
              type="tel"
              placeholder="Telefone"
              className="bg-transparent border border-gray-500 px-6 py-2 text-[#de6a07] focus:border-[#de6a07] focus:outline-none"
              required
            />
            <input
              type="E-mail"
              placeholder="E-mail"
              className="bg-transparent border border-gray-500 px-6 py-2 text-[#de6a07] focus:border-[#de6a07] focus:outline-none"
              required
            />
            <textarea
            name="Mensagem"
              placeholder="Escreva sua mensagem"
              className="bg-transparent border border-gray-500 px-6 py-2 text-[#de6a07] focus:border-[#de6a07] focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white py-2 px-6 text-black hover:bg-[#de6a07] font-bold hover:text-white"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default footer;
