import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import AboutUs from '../components/about-us'
import PremiumSection from '../components/premium-section'
import Plans from '../components/plans'

import { NAMES_SPACE } from '../utils/constans'

import '../styles/pages/home.scss'

const namespace = `${NAMES_SPACE}-home`

const Home = () => (
  <section className={namespace}>
    <div className={`${namespace}-bg-shadow`}>
      <Header />
      <Banner />
      <AboutUs />
      <PremiumSection />
      <Plans />
      <Footer />
    </div>
  </section>
)

export default Home
