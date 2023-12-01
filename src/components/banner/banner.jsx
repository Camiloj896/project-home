import ButtonFmc from '../button';
import { NAMES_SPACE } from '../../utils/constans'

import BannerImg from "./../../assets/image/banner.png";

import '../../styles/components/banner.scss'

const namespace = `${NAMES_SPACE}-banner`

const Banner = () => {
  const handleClick = () => {
    window.location = 'https://freestylemc.com/'
  }
  return (
    <section className={namespace}>
      <div className='bg-shadow-fmc'>
        <div className="grid max-w-screen-xl px-4 py-14 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 banner-ls">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-white">Tú escenario de practica de Freestyle</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-x">Libera tú ingenio en nuestra plataforma que fusiona el freestyle con la potencia de la inteligencia artificial. Descubre tu ritmo único y perfecciona tu arte en cada improvisación junto a nosotros.</p>
            <ButtonFmc loading={false} text="Comenzar" handleClick={handleClick} />
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={BannerImg} alt="mockup" />
          </div>                
        </div>
      </div>
    </section>
  );
}

export default Banner
