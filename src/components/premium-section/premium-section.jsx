import { NAMES_SPACE } from '../../utils/constans'
import content from '../../content/premium-section';

import IconAdvertisements from './../icons/advertisements'
import IconBeats from './../icons/beats'
import IconIa from './../icons/ia'
import IconModes from './../icons/modes'
import IconTime from './../icons/time'

import '../../styles/components/premium-section.scss'

const namespace = `${NAMES_SPACE}-premium-section`

const renderIcons = {
  'advertisements': <IconAdvertisements />,
  'beats': <IconBeats />,
  'ia': <IconIa />,
  'modes': <IconModes />,
  'time': <IconTime />,
};

const PremiumSection = () => (
  <section className={namespace} id="premium-section">
    <div className="py-20 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
      <div className="max-w-screen-md mb-8 lg:mb-16 sm:mx-auto">
        <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-white">¿Por qué cambiarse a Premium?</h2>
      </div>
      <div className="space-y-8 grid gap-14 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-12 md:space-y-0">
        {content.map((data) => (
          <div key={data.title}>
            <div className="flex justify-center items-center mb-4 w-20 h-20 rounded-full bg-[#d6ef19] lg:h-20 lg:w-20 mx-auto">
              {renderIcons[data.icon]}
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
