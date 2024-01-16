import { FC } from "react";

interface cardOf {
   largImgUrl: string;
   productCategory: string;
   title: string;
   userImg: string;
   userName: string;
   date: string;
}

const CardOfert: FC<cardOf> = ({
   largImgUrl,
   productCategory,
   title,
   userImg,
   userName,
   date,
}) => {
   return (
      <article className="cursor-pointer w-[250px] flex-shrink-0">
         <div className="rounded-xl overflow-hidden relative h-[200px] w-full">
            <picture>
               <img
                  className="h-full w-full object-cover"
                  src={largImgUrl}
                  alt=""
               />
               <span className="absolute top-2 left-2 bg-slate-600/40 px-2 rounded-xl text-slate-100 backdrop-blur-sm text-sm">
                  {productCategory}
               </span>
            </picture>
         </div>
         {/* whitespace dont work with break */}
         <div className="flex mt-1 w-full whitespace-normal">
            <img className="h-10 w-10 mr-1 rounded-full" src={userImg} alt="" />
            <div className="">
               <h2 className="capitalize leading-4 font-semibold">{title}</h2>
               <address className="text-xs flex flex-col justify-between mt-2">
                  <span className="font-semibold">{userName}</span>
                  <time className="text-slate-500 pr-2">
                     <span>{date}</span>
                  </time>
               </address>
            </div>
         </div>
      </article>
   );
};

export default CardOfert;
