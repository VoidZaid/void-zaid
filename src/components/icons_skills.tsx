import { FC } from "react";
// @ts-ignore
import cssLogo from '../assets/img/css.svg?react';
// @ts-ignore
import tailWind from '../assets/img/tailwind.svg?react';
// @ts-ignore
import jsLogo from '../assets/img/javascript.svg?react';
// @ts-ignore
import tsLogo from '../assets/img/ts.svg?react';
// @ts-ignore
import reactLogo from '../assets/img/react-2.svg?react';
// @ts-ignore
import phpLogo from '../assets/img/php.svg?react';
// @ts-ignore
import wpLogo from '../assets/img/wordpress.svg?react';
// @ts-ignore
import gitLogo from '../assets/img/git.svg?react';
// @ts-ignore
import mysqlLogo from '../assets/img/mysql.svg?react';

interface VectorLogos {
   className: string;
}
const ICONS_SKILLS = {
   className: "h-10 sm:h-12 md:h-12  xl:h-14",
};

export const CssLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={cssLogo}
      alt=""
   />
);
const TailwindLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={tailWind}
      alt=""
   />
);
const JavascriptLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={jsLogo}
      alt=""
   />
);
const TypeScript:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={tsLogo}
      alt=""
   />
);
const ReactLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={reactLogo}
      alt=""
   />
);
const PhpLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={phpLogo}
      alt=""
   />
);
const WordpressLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={wpLogo}
      alt=""
   />
);
const GitLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={gitLogo}
      alt=""
   />
);
const MysqlLogo:FC<VectorLogos> = ({ className }) => (
   <img
      className={`w-auto ${ICONS_SKILLS.className} ${className}`}
      src={mysqlLogo}
      alt=""
   />
);

export const Logos: FC<VectorLogos>[] = [
   CssLogo,
   TailwindLogo,
   JavascriptLogo,
   ReactLogo,
   TypeScript,
   PhpLogo,
   WordpressLogo,
   MysqlLogo,
   GitLogo,
];
