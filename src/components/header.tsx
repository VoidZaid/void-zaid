import { useState, Fragment } from "react";
// import { Transition } from "@headlessui/react";
// import { Popover } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Btn_menu from "./btn_responsive_menu";

import { Logo } from "./icons";
import { icons_media } from "./icons_media";
import { info_menu } from "./constants_info";

// function classNames(...classes: any[]): string {
//    return classes.filter(Boolean).join(" ");
// }

const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <header className="bg-white backdrop-blur-sm sticky top-0 z-20 lg:hidden ">
         <nav
            className="mx-auto flex max-w-7xl items-center justify-between h-12 md:h-16 lg:px-8 px-4"
            aria-label="Global"
         >
            <div className="flex lg:flex-1 w-20 relative">
               <a href="#" className="-m-1.5 p-1.5">
                  <Logo className="h-10 md:h-14" />
               </a>
            </div>
            <div className="flex lg:hidden">
               <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
               >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 md:h-10 md:w-10 w-6" aria-hidden="true" />
               </button>
            </div>

            {/* <Popover.Group className="hidden lg:flex lg:gap-x-12">
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     Sobre mi
                  </a>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     Formación
                  </a>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     Skills
                  </a>

                  <Popover className="relative">
                     <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        Proyectos
                        <ChevronDownIcon
                           className="h-5 w-5 flex-none text-gray-400"
                           aria-hidden="true"
                        />
                     </Popover.Button>

                     <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                     >
                        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                           <div className="p-4">
                              {products.map((item) => (
                                 <div
                                    key={item.name}
                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                 >
                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                       <item.icon className="h-6 w-6 text-gray-600 fill-slate-500 group-hover:text-indigo-600" />
                                    </div>
                                    <div className="flex-auto">
                                       <a
                                          href={item.href}
                                          className="block font-semibold text-gray-900"
                                       >
                                          {item.name}
                                          <span className="absolute inset-0" />
                                       </a>
                                       <p className="mt-1 text-gray-600">
                                          {item.description}
                                       </p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </Popover.Panel>
                     </Transition>
                  </Popover>
                  <a
                     href="#"
                     className="text-sm font-semibold leading-6 text-gray-900"
                  >
                     Contacto
                  </a>
               </Popover.Group>
               <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2">
                  {icons_media.map((e, id) => (
                     <a
                        href={e.url}
                        className="text-sm font-semibold leading-6 text-gray-900"
                        key={id}
                     >
                        <e.icon
                           className="fill-slate-40 stroke-teal-500"
                           height="40"
                        />
                     </a>
                  ))}
               </div>  */}
         </nav>

         {/* MENU RESPONSIVE */}
         <Transition appear show={mobileMenuOpen} as={Fragment}>
            <Dialog
               as="div"
               className="lg:hidden "
               onClose={setMobileMenuOpen}
            >
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-200"
                  enterFrom="opacity-0 -translate-x-8"
                  enterTo="opacity-100 translate-x-0"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 -translate-x-8"
               >
                  {/* THIS IS THE MENU / HERE WE CAN ADD STYLES */}
                  <Dialog.Panel
                     className="fixed inset-y-0 right-0 z-20 w-full h-full overflow-y-scroll bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10
            transition-all duration-500 ease-out"
                  >
                     <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                           <span className="sr-only">Your Company</span>
                           <Logo className="h-10 md:h-16" />
                        </a>
                        <button
                           type="button"
                           className="-m-2.5 rounded-md p-2.5 text-gray-700"
                           onClick={() => setMobileMenuOpen(false)}
                        >
                           <span className="sr-only">Close menu</span>
                           <XMarkIcon className="h-6 md:w-10 md:h-10 w-6" aria-hidden="true" />
                        </button>
                     </div>
                        <div className="divide-y divide-gray-500/10">
                           <div className="flex flex-col gap-2 mt-10 md:mt-32">
                              {info_menu.map((e, id) => (
                                 <Btn_menu
                                    key={id}
                                    title={e.title}
                                    id={e.id}
                                    submenu={e.submenu}
                                    handleClick={setMobileMenuOpen}
                                 />
                              ))}
                             
                           </div>
                           {/* RESPONSIVE MENU SOCIAL MEDIA ICONS */}
                           <div className="flex justify-center gap-6 h-[300px] md:h-[500px]">
                              {icons_media.map((e, id) => (
                                 <a
                                    href={e.url}
                                    target="blank"
                                    className="text-sm font-semibold leading-6 text-gray-900 mt-auto"
                                    key={id}
                                 >
                                    <e.icon className="fill-slate-40 stroke-teal-500 h-12 md:h-16" />
                                 </a>
                              ))}
                           </div>
                        </div>
                  </Dialog.Panel>
               </Transition.Child>
            </Dialog>
         </Transition>
      </header>
   );
};

export default Header;

 {/* DROPDOWN MENU */}
                              {/* <Disclosure as="div" className="-mx-3">
                              {({ open }) => (
                                 <>
                                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                       Proyectos
                                       <ChevronDownIcon
                                          className={classNames(
                                             open ? "rotate-180" : "",
                                             "h-5 w-5 flex-none"
                                          )}
                                          aria-hidden="true"
                                       />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="mt-2 space-y-2">
                                       {[...products].map((item) => (
                                          <Disclosure.Button
                                             key={item.name}
                                             as="a"
                                             href={item.href}
                                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                          >
                                             {item.name}
                                          </Disclosure.Button>
                                       ))}
                                    </Disclosure.Panel>
                                 </>
                              )}
                           </Disclosure> */}
