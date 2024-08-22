"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, Sun, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"


import '@fortawesome/fontawesome-svg-core/styles.css'




import styles from "@styles/front.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";

// definition des elements du menu
const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
  

}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button data-testid="nav-menu-button" className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[calc(100vh-1rem)] z-30 inset-x-0 text-sm text-ui-fg-on-color m-2 backdrop-blur-2xl">
                  <div data-testid="nav-menu-popup" className="flex flex-col h-full w-80 bg-[rgba(146,156,183,0.05)] rounded-rounded justify-between p-6">

                    {/* button de fermerture du menu */}

                    <div className="flex justify-end" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark className={`${styles.x}`} />
                      </button>
                    </div>

                    {/* AFFICHAGE Du menu */}

                    {/* pour ClassName " <LocalizedClientLink"  hover:text-ui-fg-disabled  */}

                    <div className={`${styles.menu_container}`}>
                            <div className={`${styles.menu_ring}`}>
                            </div>
                            <FontAwesomeIcon className={`${styles.menu_icon}`} icon={ faSun } color="yellow" />
                            <div className={`${styles.menu_ring}`}>
                          <FontAwesomeIcon className={`${styles.menu_icon}`} icon={faStar} color="white" />
                            </div>
                            <div  className={`${styles.menu_ring}`}>
                            <FontAwesomeIcon className={`${styles.menu_icon}`} icon={faCircle} color="blue" />
                            <Sun/>
                            </div> 
                    </div>


                    <ul className={`${styles.menu} flex flex-col gap-6 items-start justify-start `} >

                      {/* affichage des elements du menu */}

                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li className={`${styles.item}`} key={name}>
                            <LocalizedClientLink
                              href={href}
                              className="text-3xl leading-10 "
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} IRT2 e-commerce website with Nextjs
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
