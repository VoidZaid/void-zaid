import { FC } from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Link } from "react-scroll";

type info = {
   title: string;
   id: string;
   submenu?: infoSubmenu[] | undefined;
   handleClick: (value: boolean) => void;
};
type infoSubmenu = {
   name: string;
   description: string;
   href: string;
};

function classNames(...classes: any[]): string {
   return classes.filter(Boolean).join(" ");
}

const Btn_menu: FC<info> = ({ title, id, submenu, handleClick }) => {
   return (
      <>
         {!submenu && (
            <button className="flex w-full rounded-lg  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
               <Link
                  to={id}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="w-full px-3 py-2"
                  onClick={() => handleClick(false)}
               >
                  {title}
               </Link>
            </button>
         )}
         {submenu && (
            //DROPDOWN MENU
            <Disclosure as="div" className="">
               {({ open }) => (
                  <>
                     <Disclosure.Button className="flex w-full items-center justify-between mx-auto rounded-lg py-2 px-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
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
                        {submenu.map((item) => (
                           <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  text-gray-900 hover:bg-gray-50"
                           >
                              {item.name}
                           </Disclosure.Button>
                        ))}
                     </Disclosure.Panel>
                  </>
               )}
            </Disclosure>
         )}
      </>
   );
};

export default Btn_menu;
