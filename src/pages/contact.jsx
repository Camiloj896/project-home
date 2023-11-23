import { Link } from "react-router-dom";

import Header from '../components/header'
import Footer from '../components/footer'
import { NAMES_SPACE } from '../utils/constans'

import '../styles/pages/contac.scss'

const namespace = `${NAMES_SPACE}-contac`

const Contact = () => (
  <section className={namespace}>
    <div className={`${namespace}-bg-shadow`}>
      <Header />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-screen">
        <div className={`${namespace}-center-content`}>
          <div className={`${namespace}-content`}>
            <h1 className="text-3xl font-bold sm:v">Contacto</h1>
            <h2 className="mt-2 text-lg leading-8">Bogotá, Colombia</h2>
            <p>
              Propositos generales
              <span className={`${namespace}-content-mail`}>
                thelp@thelpinc.com
              </span>
            </p>

            <Link
              className={`${namespace}-content-link`}
              to="/authorization"
              target="_blank"
            >
              Términos de Uso y la Política de Privacidad
            </Link>
            <Link
              className={`${namespace}-content-send-email`}
              to="mailto:thelp@thelpinc.com"
              target="_blank"
            >
              Enviar Email
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </section>
)

export default Contact
