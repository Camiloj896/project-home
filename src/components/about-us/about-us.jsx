import { NAMES_SPACE } from '../../utils/constans'
import Image1 from "./../../assets/image/about1.png";
import Image2 from "./../../assets/image/about2.png";

import '../../styles/components/about-us.scss'

const namespace = `${NAMES_SPACE}-about-us`

const AboutUs = () => (
  <section className={namespace}>
    <div className="gap-16 items-center pt-40 pb-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-center">
      <div className="font-light sm:text-lg">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold">Conoce Nuestra Pasión por el Freestyle</h2>
        <p className="mb-4">¡FMC es el hogar del freestyle! Descubre un espacio seguro donde encuentras la libertad para explorar, aprender y perfeccionar tus habilidades de rimar. Rhythm And Poetry (RAP).</p>
        <p className="mb-4">¡Prepárate para desatar tu flow! Encuentra tu voz única y domina el arte del freestyle.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img className="w-full rounded-lg" src={Image1} alt="about us image 1" />
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={Image2} alt="about us image 2" />
      </div>
    </div>
  </section>
);

export default AboutUs
