import Header from '../components/header';
import Footer from '../components/footer';
import Img1 from '../images/gonbank/GonBank_1.mov';
import Img2 from '../images/gonbank/GonBank_2.gif';
import Img3 from '../images/gonbank/GonBank_3.webp';
import Img4 from '../images/gonbank/GonBank_4.webp';
import Img5 from '../images/gonbank/GonBank_5.webp';
import Img6 from '../images/gonbank/GonBank_6.webp';
import Img7 from '../images/gonbank/GonBank_7.webp';
import Img8 from '../images/gonbank/GonBank_8.webp';
import Img9 from '../images/gonbank/GonBank_9.gif';
import Img10 from '../images/gonbank/GonBank_10.gif';

const gonbank = () => {
  return (
    <div>
      <Header />
      <section
        className="bg-gray-100 bg-cover bg-center h-80 md:h-screen content-center"
        style={{
          backgroundImage: `url(${Img2})`,
        }}
      ></section>
      <section className="py-24 p-4 md:py-44 container mx-auto">
        <div className="grid gap-4">
          <h1 className="text-3xl md:text-5xl font-bold uppercase">
            GonBank & Onmidia
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            {' '}
            - Marca corporativa
          </h2>
        </div>
        <div></div>
      </section>
      <section className="w-full p-4 flex-wrap">
        <img src={Img5} alt="" />
        <img src={Img9} alt="" />
        <img src={Img6} alt="" />
        <img src={Img10} alt="" />
        <section className="grid md:flex py-8 md:py-32 gap-4 p-4 md:p-12">
          <div className="container mx-auto">
            <h2 className="uppercase font-bold text-4xl">Estratégia</h2>
          </div>
          <div className="container mx-auto gap-4 grid">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius efficitur enim, ut fringilla orci pretium vitae. Fusce
              viverra ex ligula. Vivamus venenatis, ex quis dignissim convallis,
              massa lorem interdum nisi, quis accumsan urna dui vitae leo.
              Maecenas mollis feugiat facilisis. Aenean ex erat, porta porttitor
              mollis eu, interdum et odio. In semper tortor congue lobortis
              dictum. Etiam id est dictum, sollicitudin lectus quis, suscipit
              libero. Suspendisse nunc dui, sollicitudin suscipit mattis non,
              faucibus ut justo. Integer ullamcorper lacus arcu, vitae hendrerit
              nisl facilisis ut. Donec placerat in purus sed gravida. Nunc
              fermentum orci est, et gravida lorem congue ut. Sed eu volutpat
              erat.
            </p>
            <p>
              Aliquam vestibulum nisl libero, sit amet malesuada urna tincidunt
              in. Donec id tincidunt urna, eu porttitor ante. Vivamus
              consectetur est augue, vitae tempus erat egestas at. Quisque eget
              ultricies orci. Pellentesque aliquam sem sit amet leo laoreet,
              eget ultricies quam vestibulum. In nec feugiat turpis, ac suscipit
              tortor. Nam et tortor lectus. Proin aliquam, risus et semper
              efficitur, justo lacus fringilla est, nec aliquam mi lacus in
              odio. Curabitur cursus rutrum turpis, in euismod nulla dictum sed.
              Curabitur maximus suscipit dolor eget rutrum.
            </p>
          </div>
        </section>
        <img src={Img7} alt="" />
        <img src={Img8} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <video src={Img1} className="p-0" autoPlay muted loop></video>
      </section>

      <section className="p-4 flex md:p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold uppercase">Time</h2>
        </div>
        <div className="container mx-auto grid gap-4 md:gap-12">
          <div>
            <h3 className="font-bold text-2xl">Logo</h3>
            <p>Rafa Purgatto</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Motion</h3>
            <p>Fabrício Costa</p>
            <p>Ana Carolina</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Mockups</h3>
            <p>Fabrício Costa</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">UX/UI</h3>
            <p>Fabrício Costa</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl">Website</h3>
            <p>Rafa Purgatto</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default gonbank;
