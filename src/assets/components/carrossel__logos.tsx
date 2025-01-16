
const carrossel__logos = () => {
  const logos = [
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-1.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-2.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-3.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-4.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-5.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-6.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-7.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-8.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-9.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-10.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-11.webp',
    'https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/01/logo-12.webp',


  ];
  return (
    <section className='bg-gray-50'>
      <div id="logos" className="w-full py-12 md:py-24 ">
        <h2 className="font-bold text-center text-4xl uppercase">Nossos clientes</h2>
        <div className="pt-12 overflow-hidden">
          <div className="flex space-x-24 animate-slide">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-none flex justify-center items-center"
              >
                <img src={logo} alt={`Logo ${index + 1}`} className="w-[200px] grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default carrossel__logos;
