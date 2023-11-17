import { FC, ReactNode } from "react";

type Container = {
   className?: string;
   children: ReactNode;
};

const Container: FC<Container> = ({ className, children }) => {
   return (
      <div
         className={`${className} max-w-5xl mx-auto z-10 pb-12 flex flex-col text-slate-400
     lg:px-0 lg:w-full `}
      >
         {children}
      </div>
   );
};

export default Container;
