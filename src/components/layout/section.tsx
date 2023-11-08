import {FC, ReactNode} from 'react';
type Section ={
   className?:string,
   children: ReactNode
}

const Section: FC<Section> = ({className, children}) => {
  return (
    <section className={`relative flex flex-col bg-cyan-900 text-slate-400 overflow-hidden ${className}`}>
      {children}
    </section>
  )
}

export default Section