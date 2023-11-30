import { Link } from "react-router-dom";
import ButtonFmc from '../button';

import Bancolombia from "./../../assets/image/bancolombia.png";
import Davivienda from "./../../assets/image/davivienda.png";
import Recaudo from "./../../assets/image/tarjeta-de-recaudo.png";
import Pse from "./../../assets/image/pse.png";
import Visa from "./../../assets/image/visa.png";
import American from "./../../assets/image/american.png";
import Master from "./../../assets/image/master.png";

import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/plans.scss'

const namespace = `${NAMES_SPACE}-plans`

const Plans = () => (
  <section className={namespace}>
    <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
      <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
              <p className="text-base leading-4 text-gray-600">Obtén 7 días gratis</p>
              <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3">
                Elige tu plan Premium
              </h1>
              <p role="contentinfo" className="text-base leading-5 mt-5 ">
                Explora, aprende y perfecciona tus habilidades desde tu teléfono y otros dispositivos.
              </p>
              <div className="flex gap-5 justify-center mt-10 w-11/12">
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={Bancolombia} alt="Bancolombia" />
                </div>
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={Davivienda} alt="Davivienda" />
                </div>
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={Recaudo} alt="Recaudo" />
                </div>
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={Pse} alt="Pse" />
                </div>
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={Visa} alt="Visa" />
                </div>
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={American} alt="American" />
                </div>
                <div className="flex justify-center items-center w-12 h-12">
                  <img src={Master} alt="Master" />
                </div>
              </div>
              <p className="mt-14 text-xs">Los días gratuitos están disponibles para nuevos usuarios. Además, esta promoción puede sumarse a otros días gratuitos si el plan lo permite, disfruta de días adicionales sin costo para maximizar tu experiencia. Se aplican <Link to='/authorization' target='__blank' className="border-b-2 border-[#d6ef19]">Términos y Condiciones.</Link></p>
          </div>
          <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
            <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
            <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6">Mensual</h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 ">
                  $15.000
                </p>
              </div>
              <div className="flex gap-5 flex-col md:flex-row">
                <div>
                  <p className="md:w-80 text-base leading-6 my-4">
                    ¡Desbloquea todo el potencial sin límites!
                  </p>
                </div>
                <div className="w-full flex md:justify-end md:items-center">
                  <ButtonFmc loading={false} text="Hazte Premium" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-7 text-[#f0f0f0] relative z-30 pr-3">
              <span className="inline-flex items-end rounded-l-lg bg-[#d6ef19] text-[#2b1645] text-xs font-medium px-2 py-1">+ 7 días gratis</span>
              <span className="inline-flex items-end rounded-r-lg bg-[#2b1645] text-xs font-medium px-2 py-1">15% off</span>
            </div>
            <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg flex relative z-30">
              <div className="w-2.5  h-auto bg-[#d6ef19] rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 ">Trimestral</h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6">
                    <span className="flex md:justify-end text-sm md:mt-0 mt-4 font-semibold leading-6 line-through">$45.000</span>
                    $38.250
                  </p>
                </div>
                <div className="flex gap-5 flex-col md:flex-row">
                  <div>
                    <p className="md:w-80 text-base leading-6 my-4">
                      ¡Desbloquea todo el potencial sin límites!
                    </p>
                  </div>
                  <div className="w-full flex md:justify-end md:items-center">
                    <ButtonFmc loading={false} text="Hazte Premium" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-7 text-[#f0f0f0] relative z-30 pr-3">
              <span className="inline-flex items-end rounded-l-lg bg-[#d6ef19] text-[#2b1645] text-xs font-medium px-2 py-1">+ 15 días gratis</span>
              <span className="inline-flex items-end rounded-r-lg bg-[#2b1645] text-xs font-medium px-2 py-1">25% off</span>
            </div>
            <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 ">Anual</h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6">
                <span className="flex md:justify-end text-sm md:mt-0 mt-4 font-semibold leading-6 line-through">$180.000</span>
                  $135.000
                </p>
              </div>
              <div className="flex gap-5 flex-col md:flex-row">
                <div>
                  <p className="md:w-80 text-base leading-6 my-4">
                    ¡Desbloquea todo el potencial sin límites!
                  </p>
                </div>
                <div className="w-full flex md:justify-end md:items-center">
                  <ButtonFmc loading={false} text="Hazte Premium" />
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>



  </section>
);

export default Plans
