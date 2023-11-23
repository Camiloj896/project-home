import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/button.scss'

const namespace = `${NAMES_SPACE}-button`

const ButtonFmc = ({
  text,
  type = 'primary',
  handleClick,
  className = '',
  loading,
  disabled,
  children
}) => (
  <button
    onClick={handleClick}
    className={`${namespace}-${type} ${className} font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center justify-between`}
    disabled={disabled || loading}
  >
    <span className='content-text'>{(loading && 'loading...') || (children || text)}</span>
  </button>
)

export default ButtonFmc
