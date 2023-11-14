import {FC, ReactNode} from 'react';
type Section ={
   className?:string,
   id?:string,
   children: ReactNode
}

const Section: FC<Section> = ({className, id, children}) => {
  return (
    <section id={id} className={`relative flex flex-col px-4 bg-cyan-900 sm:px-10 lg:static lg:bg-none lg:bg-transparent ${className}`}>
      {children}
    </section>
  )
}

export default Section