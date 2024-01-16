import { FC } from "react";

interface cardInf {
   userImg: string;
   title: string;
   userName: string;
}

const CardInfo: FC<cardInf> = ({ userImg, title, userName }) => {
   return (
      <article className="cursor-pointer w-[250px] flex-shrink-0">
         <p className="rounded-xl overflow-hidden relative h-[200px] w-full whitespace-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex
            consectetur, impedit velit sed sint omnis reiciendis ducimus quo
            repellat hic dolorum delectus placeat voluptatum doloremque ullam
            maiores rem corrupti. Consequuntur officiis deserunt molestias,
            repellendus numquam unde necessitatibus. Error, libero eius? Aliquid
            maxime dolore blanditiis cum autem labore odio deserunt?
         </p>
         {/* whitespace dont work with break */}
         <div className="flex mt-1 w-full whitespace-normal">
            <img className="h-10 w-10 mr-1 rounded-full" src={userImg} alt="" />
            <div className="">
               <h2 className="capitalize leading-4 font-semibold">{title}</h2>
               <address className="text-xs flex flex-col justify-between mt-2">
                  <span className="font-semibold">{userName}</span>
               </address>
            </div>
         </div>
      </article>
   );
};

export default CardInfo;
