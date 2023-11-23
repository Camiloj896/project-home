import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/footer.scss'

const namespace = `${NAMES_SPACE}-footer`

const Footer = ({ className = '' }) => (
  <footer className={`${namespace} ${className}`}>
    <div className="border-t boder-solid border-gray-600">
      <p className="">© 2023 Thelp, Inc. Todos los derechos reservados</p>
    </div>
  </footer>
)

export default Footer
