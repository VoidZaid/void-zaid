import { FC, ReactNode } from "react";


interface carousel {
   reverse?:boolean;
   children: ReactNode;
}

const Carousel: FC<carousel> = ({ reverse,children }) => {
   return (
      <section className="container my-3">
         <div className="overflow-hidden w-full ">
            <div className={`flex gap-4 whitespace-nowrap ${reverse?"animate-scroll-reverse":"animate-scroll"}`}>
               {/* cardS */}
               {children}
            </div>
         </div>
      </section>
   );
};

export default Carousel;
