import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/about-us.scss'

const namespace = `${NAMES_SPACE}-about-us`

const AboutUs = () => (
  <section className={namespace}>
    <div className="gap-16 items-center pt-40 pb-20 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-center">
      <div className="font-light sm:text-lg">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">Lorem ipsum dolor sit amet</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et elit dapibus, mollis eros non, condimentum nibh. Nullam sodales felis eget odio viverra pulvinar. Cras viverra imperdiet sodales. Quisque commodo pulvinar justo et cursus. Cras orci felis, mattis vel sapien eget, posuere placerat mauris. Etiam augue dui, elementum non magna nec, mattis rutrum turpis. Sed ut eros ac odio vulputate tincidunt. In interdum dictum nunc.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
      </div>
    </div>
  </section>
);

export default AboutUs
