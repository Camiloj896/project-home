import ButtonFmc from '../button';

import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/plans.scss'

const namespace = `${NAMES_SPACE}-plans`

const Plans = () => (
  <section className={namespace}>
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Elige tu plan Premium</h2>
        <p className="mb-5 font-light text-gray-900">¡Prepárate para llevar tu práctica de freestyle al siguiente nivel! Elige el plan premium ideal para ti en FMC y desbloquea un mundo de posibilidades ilimitadas. Con nuestras suscripciones premium, accede a características exclusivas, contenido avanzado y una experiencia sin restricciones. Elige tu plan y comienza tu viaje hacia la maestría del freestyle hoy mismo.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        {/* <!-- Pricing Card --> */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center cards">
          <h3 className="mb-4 text-2xl font-semibold">Mensual</h3>
          <p className="font-light  sm:text-lg">Accede a todas las funciones exclusivas y lleva tu uso al siguiente nivel. ¡Únete hoy y descubre todo lo que tenemos para ofrecerte!</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="">/month</span>
          </div>
          {/* <!-- List --> */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Practicas sin limite de tiempo </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Acceso exclusivo a la biblioteca de beats</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Variedad de modos disponibles</span>
            </li>
          </ul>
          <ButtonFmc loading={false} text="Comenzar" />
        </div>
        {/* <!-- Pricing Card --> */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center cards">
          <h3 className="mb-4 text-2xl font-semibold">Duo</h3>
          <p className="font-light  sm:text-lg">Comparte y disfruta de todas las funciones exclusivas con tu compañero/a. ¡Descubre juntos todo lo que tenemos para ofrecer!</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$99</span>
            <span className="">/month</span>
          </div>
          {/* <!-- List --> */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Practicas sin limite de tiempo </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Acceso exclusivo a la biblioteca de beats</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Variedad de modos disponibles</span>
            </li>
          </ul>
          <ButtonFmc loading={false} text="Comenzar" />
        </div>
        {/* <!-- Pricing Card --> */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center cards">
          <h3 className="mb-4 text-2xl font-semibold">Día</h3>
          <p className="font-light  sm:text-lg">Obtén acceso instantáneo a todas las ventajas exclusivas con nuestro plan premium Diario. Maximiza tu experiencia cada día. ¡Descubre más hoy mismo!</p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$499</span>
            <span className="">/month</span>
          </div>
          {/* <!-- List --> */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Practicas sin limite de tiempo </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Acceso exclusivo a la biblioteca de beats</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* <!-- Icon --> */}
              <svg className="flex-shrink-0 w-5 h-5 " fill="#d6ef19" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              <span>Variedad de modos disponibles</span>
            </li>
          </ul>
          <ButtonFmc loading={false} text="Comenzar" />
        </div>
      </div>
    </div>
  </section>
);

export default Plans
