import {FC, ReactNode} from 'react';
import {Element} from "react-scroll";

type Section ={
   className?:string,
   id?:string,
   children: ReactNode
}

const Section: FC<Section> = ({className, id, children}) => {
  return (
    <Element name={`${id}`} id={id} className={`relative flex flex-col px-4 bg-cyan-900 sm:px-20 md:px-28 lg:px-0 lg:static lg:bg-none lg:bg-transparent lg:py-10  ${className}`}>
      {children}
    </Element>
  )
}

export default Section