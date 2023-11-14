import { FC } from "react";

interface VectorLogos {
   className: string;
}
const ICONS_SKILLS = {
   className: "h-10 sm:h-12 md:h-12  xl:h-14",
};

export const CssLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/css.svg"
      alt=""
   />
);
const TailwindLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/tailwind.svg"
      alt=""
   />
);
const JavascriptLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/javascript.svg"
      alt=""
   />
);
const TypeScript:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/typescript.svg"
      alt=""
   />
);
const ReactLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/react-2.svg"
      alt=""
   />
);
const PhpLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/php.svg"
      alt=""
   />
);
const WordpressLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/wordpress.svg"
      alt=""
   />
);
const GitLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/git.svg"
      alt=""
   />
);
const MysqlLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src="./src/assets/img/mysql.svg"
      alt=""
   />
);

export const Logos: FC<VectorLogos>[] = [
   CssLogo,
   TailwindLogo,
   JavascriptLogo,
   TypeScript,
   ReactLogo,
   PhpLogo,
   WordpressLogo,
   MysqlLogo,
   GitLogo,
];
