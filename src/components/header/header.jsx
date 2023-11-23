import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import IconMenu from '../icons/menu'
import LoginMenu from '../login-menu'

import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/header.scss'

const namespace = `${NAMES_SPACE}-header`

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Contacto', href: '/contact' },
]

const Header = ({ className = '' }) => {
  const [y, setY] = useState(0)

  const handleNavigation = (e) => {
    const window = e.currentTarget
    setY(window.scrollY)
  }

  const pathname = useLocation()

  const CURRENT_PAGE = pathname

  useEffect(() => {
    setY(window.scrollY)

    window.addEventListener('scroll', (e) => handleNavigation(e))

    return () => {
      window.removeEventListener('scroll', (e) => handleNavigation(e))
    }
  }, [])

  const handleSignIn = () => {
    
  }

  const handleSignOut = () => {
    
  }

  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-10">
        {({ open }) => (
          <>
            <div
              className={`${namespace} ${className} ${
                y > 0 ? 'scroll-mobile' : ''
              }`}
            >
              <div className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <Link
                      className="flex flex-shrink-0 items-center relative"
                      to="/"
                    >
                      <IconMenu />
                      <span className="beta-label">BETA</span>
                    </Link>
                    <div className="hidden sm:ml-6 sm:block w-full">
                      <div className="flex space-x-4 justify-center">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`${namespace}_item ${
                              item.href === CURRENT_PAGE
                                ? `${namespace}_item--current`
                                : ''
                            }`}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <LoginMenu />
                  </div>
                </div>
              </div>
              <Disclosure.Panel
                className={`${namespace}-mobile-panel sm:hidden`}
              >
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className={`${namespace}_item ${
                        item.href === CURRENT_PAGE
                          ? `${namespace}_item--current`
                          : ''
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <Link to={item.href}> {item.name}</Link>
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Header
