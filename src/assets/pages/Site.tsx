import BG_PURLE from '../images/bg-purple.webp';

const Site = () => {
    return (
        <>
            <section className="container p-4 md:w-[1280px] text-center grid mx-auto pt-12 md:py-24 gap-12">
                <span className="text-xl">Sites Profissionais Desenvolvidos por Especialistas — Sob Medida para Seu Negócio</span>
                <h1 className="text-6xl uppercase font-bold leading-tight">Crie um Site que Conquista Clientes e Gera Vendas Todos os Dias</h1>
                <div className="flex gap-10 items-center justify-center">
                    <a href="" className="border-black border rounded-none px-6 py-2 font-light hover:bg-black hover:text-white">
                        <button>Institucional</button>
                    </a>
                    <a href="" className="border-black border rounded-none px-6 py-2 font-light hover:bg-black hover:text-white">
                        <button>Landing Pages</button>
                    </a>
                    <a href="" className="border-black border rounded-none px-6 py-2 font-light hover:bg-black hover:text-white">
                        <button>Página de Vendas</button>
                    </a>
                    <a href="" className="border-black border rounded-none px-6 py-2 font-light hover:bg-black hover:text-white">
                        <button>E-commerce</button>
                    </a>
                </div>
                <p className="font-bold text-xl">Criamos seu site do zero, com foco total em resultado.</p>
                <div>
                    <a href="#" className="bg-primary text-white font-light px-6 py-2 hover:bg-primary/80">
                        <button>Quero meu site profissional</button>
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
                <div className="container md:w-[1280px] p-4 mx-auto py-12 md:py-24 space-y-4 text-white">
                    <h2 className="text-[45px] text-center font-semibold uppercase leading-relaxed">Encontre o tipo de site ideal para o momento da sua empresa</h2>
                    <p className='text-xl text-center font-light'>Cada projeto é único. Por isso, oferecemos soluções para diferentes objetivos e níveis de projeto. Do mais simples ao mais robusto, todos os sites são desenvolvidos por especialistas - 100% personalizados.</p>

                    <div className='grid grid-cols-3 gap-20 py-12 items-center text-black'>
                        {/* first card */}
                        <div className='rounded-3xl p-8 bg-white grid gap-3'>
                            <h3 className='uppercase text-lg'>Landing Page Profissional</h3>
                            <p>Ideal para campanhas ou produtos específicos</p>
                            <p className='uppercase font-light text-sm'>A partir de</p>
                            <div className='flex gap-2 items-end content-center justify-center pr-4'>
                                <span >4x</span>
                                <span className='text-5xl'>R$278</span>
                            </div>
                            <a href="#form" className='bg-primary hover:bg-primary/80 px-6 py-4 text-white text-center mt-3 mx-2'>Quero uma Landing Page</a>
                            <span className='font-medium'>✔ Página 100% focada em conversão</span>
                            <span className='font-medium'>✔ Design exclusivo</span>
                            <span className='font-medium'>✔ Entrega rápida</span>
                        </div>

                        {/* second card */}
                        <div className='rounded-3xl bg-white'>
                            <div className='bg-black py-4 text-center rounded-t-3xl'>
                                <span className='font-medium text-white'>MAIS POPULAR</span>
                            </div>
                            <div className='p-8 grid gap-3'>
                                <h3 className='uppercase text-lg'>SITE ONE PAGE</h3>
                                <p>Apresente sua empresa em uma página completa. Fácil, rápida e prática.</p>
                                <p className='uppercase font-light text-sm'>A partir de</p>
                                <div className='flex gap-2 items-end content-center justify-center pr-4'>
                                    <span >4x</span>
                                    <span className='text-5xl'>R$450</span>
                                </div>
                                <a href="#form" className='bg-primary hover:bg-primary/80 px-6 py-4 text-white text-center mt-3 mx-2'>Quero um Site One Page</a>
                                <span className='font-medium'>✔ Sessões como Sobre, Serviços, Avaliações, Contato e mais </span>
                                <span className='font-medium'>✔ Ótimo para negócios locais e autônomos</span>
                                <span className='font-medium'>✔ Rápido e responsivo (adapta-se ao celular)</span>
                                <span className='font-medium'>✔ Entrega rápida</span>
                            </div>
                        </div>

                        {/* third card */}
                        <div className='rounded-3xl p-8 bg-white grid gap-3'>
                            <h3 className='uppercase text-lg'>SITE COMPLETO E PERSONALIZADO</h3>
                            <p>Projetos que necessitam de algo completo e totalmente exclusivo.</p>
                            <p className='uppercase font-light text-sm'>A partir de</p>
                            <span className='text-3xl justify-center text-center uppercase'>Solicite um orçamento</span>
                            <a href="#form" className='bg-primary hover:bg-primary/80 px-6 py-4 text-white text-center mt-3 mx-2'>Quero um Site Personalizado</a>
                            <span className='font-medium'>✔ Projeto único</span>
                            <span className='font-medium'>✔ Pensado do zero para sua empresa</span>
                            <span className='font-medium'>✔ Multiplas páginas e sessões</span>
                            <span className='font-medium'>✔ Blog, catálogos, loja online e muito +</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto md:w-[1280px] items-center flex gap-4 py-12'>
                <div className='w-full max-w-1/2 content-start'>
                    <h2 className='text-4xl uppercase leading-tight'>Seu site profissional, sem dor de cabeça. Veja como funciona:</h2>
                    <div className='grid col-span-1 py-12 gap-4'>
                        <button className='text-left border rounded-lg py-4 px-6 hover:bg-[#D9D9D966]'>
                            <h3>1. Entendimento do seu negócio</h3>
                        </button>
                        <button className='text-left border rounded-lg py-4 px-6 hover:bg-[#D9D9D966]'>
                            <h3>2. Criação do site</h3>
                        </button>
                        <button className='text-left border rounded-lg py-4 px-6 hover:bg-[#D9D9D966]'>
                            <h3>3. Publicação e entrega</h3>
                        </button>
                    </div>
                    <a href="#" className="bg-primary text-white font-light px-6 py-2 hover:bg-primary/80">
                        <button>Quero meu site profissional</button>
                    </a>
                </div>
                <div className='w-full max-w-1/2'>
                    <img src="https://cdn.onmidiamkt.com.br/wp-content/uploads/2025/05/image-16.png" alt="" />
                </div>
            </section>
            <section className='py-12 '>

            </section>
        </>
    )
}

export default Site