import { NAMES_SPACE } from '../../utils/constans'
import content from '../../content/premium-section';

import '../../styles/components/premium-section.scss'

const namespace = `${NAMES_SPACE}-premium-section`

const PremiumSection = () => (
  <section className={namespace}>
    <div className="py-20 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
      <div className="max-w-screen-md mb-8 lg:mb-16 sm:mx-auto">
        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-white">¿Por qué cambiarse a Premium?</h2>
        <p className="text-gray-300 sm:text-xl">Con la suscripción premium de FMC, tu práctica no tiene límites de tiempo. Disfruta de acceso ilimitado a todas nuestras sesiones de práctica, sin restricciones temporales. Domina cada técnica, perfecciona tu estilo y sumérgete en el arte del freestyle sin preocuparte por el reloj. Con nuestra suscripción premium, tu progreso es tu prioridad, practica a tu ritmo y lleva tu habilidad al siguiente nivel, sin límites, sin interrupciones.</p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {content.map((data) => (
          <div key={data.title}>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#d6ef19] lg:h-12 lg:w-12 mx-auto">
              <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" fill="#2b1645" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">{data.title}</h3>
            <p className="text-gray-300">{data.info}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PremiumSection
