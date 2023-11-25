import ButtonFmc from '../button';

const Banner = () => {
  const handleClick = () => {
    window.location = 'https://freestylemc.com/'
  }
  return (
    <section className="text-center">
      <div className="grid max-w-screen-xl px-4 py-14 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 banner-ls">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Lorem ipsum dolor sit amet</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-x">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et elit dapibus, mollis eros non, condimentum nibh. Nullam sodales felis eget odio viverra pulvinar.</p>
          <ButtonFmc loading={false} text="lorem ipsum" handleClick={handleClick} />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                
      </div>
    </section>
  );
}

export default Banner
