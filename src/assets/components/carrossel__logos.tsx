import bank from '../images/logos/@bank.webp';
import agroboard from '../images/logos/agroboard.webp';
import att from '../images/logos/att.webp';
import ongroup from '../images/logos/ongroup.webp';
import onpag from '../images/logos/onpag.webp';
import radial from '../images/logos/radial.webp';
import ruralventures from '../images/logos/ruralventures.webp';
import raj from '../images/logos/raj.webp';
import sasprev from '../images/logos/sasprev.webp';
import siloagro from '../images/logos/siloagro.webp';
import theyieldlab from '../images/logos/the_yield_lab.webp';
import velos from '../images/logos/velos.webp';

const carrossel__logos = () => {
  const logos = [
    bank,
    agroboard,
    att,
    ongroup,
    onpag,
    radial,
    ruralventures,
    raj,
    sasprev,
    siloagro,
    theyieldlab,
    velos,
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
                <img src={logo} alt={`Logo ${index + 1}`} className="w-[200px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default carrossel__logos;
