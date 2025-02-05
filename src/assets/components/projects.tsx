const projects = () => {
  return (
    <div>
      <a href="/cases/teucard" className="container mx-auto p-4 grid gap-2">
        <div className="relative z-0 overflow-hidden rounded-lg">
          <img
            src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Prancheta-31.webp"
            alt=""
            className="w-full z-0 h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="grid gap-2">
          <h3 className="text-xl pt-2 font-bold uppercase">Teu Card</h3>
          <div className="flex-wrap flex gap-2 items-center">
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Strategy
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
            Branding
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
            Developmet
            </span>
            <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
            UX Design
            </span>
          </div>
        </div>
      </a>
      <div className=" container mx-auto grid-cols-1 grid md:grid-cols-2 gap-4">
        <a href="/cases/synconsult" className="p-4 flex-col rounded-lg flex gap-2">
          <div className="relative z-0 overflow-hidden rounded-lg">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/Animacao_Logo_Syn_Consult-1.gif"
              alt="rural"
              className="w-full z-0 h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl pt-2 font-bold uppercase">SynConsult</h3>
            <div className="flex-wrap flex gap-2 items-center">
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
                Strategy
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Branding
              </span>
            </div>
          </div>
        </a>
        <a href="/cases/gonbank" className="p-4 flex-col rounded-lg flex gap-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/GonBank_7.webp"
              alt="rural"
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl pt-2 font-bold uppercase">GonBank</h3>
            <div className="flex-wrap flex gap-2 items-center">
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
                Strategy
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Branding
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
                Development
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              UX Design
              </span>
            </div>
          </div>
        </a>
        <a href="/audiovisual/bauny" className="p-4 flex-col rounded-lg flex gap-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/IMG_0236.jpg"
              alt="rural"
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl pt-2 font-bold uppercase">Bauny</h3>
            <div className="flex-wrap flex gap-2 items-center">
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Aftermovie
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
                Eventos
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Audiovisual
              </span>
            </div>
          </div>
        </a>
        <a href="/audiovisual/ruralsummit" className="p-4 flex-col rounded-lg flex gap-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/77-IMG_6741.jpg"
              alt="rural"
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl pt-2 font-bold uppercase">Rural Summit</h3>
            <div className="flex-wrap flex gap-2 items-center">
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Aftermovie
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Eventos
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Audiovisual
              </span>
              <span className="px-4 py-1 rounded-full text-sm font-light border hover:bg-gray-300">
              Branding
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default projects;
