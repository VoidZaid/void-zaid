import React from "react";
import Typed from "typed.js";

const TypedText = () => {
   // Create reference to store the DOM element containing the animation
   const el = React.useRef(null);

   React.useEffect(() => {
      const typed = new Typed(el.current, {
         strings: ["Front-end developer", "Creador de interfaces","Desarrollador web"],
         typeSpeed: 40,
         backDelay:1500,
         backSpeed: 10,
         startDelay:1400,
      });

      return () => {
         // Destroy Typed instance during cleanup to stop animation
         typed.destroy();
      };
   }, []);

   return (
      <h2 className="typed text-xl font-medium">
         <span ref={el} />
      </h2>
   );
};

export default TypedText;
