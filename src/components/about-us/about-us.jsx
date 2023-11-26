import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/about-us.scss'

const namespace = `${NAMES_SPACE}-about-us`

const AboutUs = () => (
  <section className={namespace}>
    <div className="gap-16 items-center pt-40 pb-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-center">
      <div className="font-light sm:text-lg">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">Conoce Nuestra Pasión por el Freestyle</h2>
        <p className="mb-4">En FMC, respiramos y vivimos freestyle. Nuestra misión es brindar un espacio donde los apasionados por el arte encuentren la libertad para explorar, aprender y perfeccionar sus habilidades. Desde principiantes hasta expertos, todos son bienvenidos a unirse a nuestra comunidad vibrante y descubrir el increíble mundo del freestyle. Conoce nuestra historia, nuestros valores y cómo estamos transformando la experiencia de practicar freestyle para cada persona que se une a nosotros.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
      </div>
    </div>
  </section>
);

export default AboutUs
