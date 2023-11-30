import { Link, useLocation } from "react-router-dom";

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import IconMenu from '../icons/menu'

import { NAMES_SPACE } from '../../utils/constans'

import '../../styles/components/header.scss'

const namespace = `${NAMES_SPACE}-header`

const navigation = [
  { name: 'Premium', href: '?fmc-premium-section', internal: true, id: 'premium-section' },
  { name: 'contacto', href: 'https://freestylemc.com/pub/contact', internal: false },
  { divider: true },
  { name: 'Registro', href: 'https://freestylemc.com/api/auth/signin', internal: false },
  { name: 'Iniciar Sesion', href: 'https://freestylemc.com/api/auth/signin', internal: false },
]

const Header = () => {
  const pathname = useLocation()

  const CURRENT_PAGE = pathname

  const handleNavigation = (item) => {
    if (item.internal) {
      const element = document.getElementById(item.id);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = item.href;
    }
  }

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div
              className={namespace}
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
                      <ul className="flex space-x-4 justify-end">
                        {navigation.map((item) => {
                          return item?.divider ? (
                            <li className={`${namespace}_item--divider`}></li>
                          ) : (
                            <li
                              key={item.name}
                              onClick={() => handleNavigation(item)}
                              className={`${namespace}_item ${
                                item.href === CURRENT_PAGE
                                  ? `${namespace}_item--current`
                                  : ''
                              }`}
                            >
                              {item.name}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
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
