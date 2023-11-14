import { MouseEventHandler } from "react";

interface Icon {
   className: string;
}

export const Logo = ({ onClick }: { onClick?: MouseEventHandler }) => (
   <img
      onClick={onClick}
      className="w-32 md:w-24"
      src="./src/assets/img/void zaid.svg"
      alt=""
   />
);

export const ArrowRightUp=()=>(
   <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M17 7l-10 10"></path>
   <path d="M8 7l9 0l0 9"></path>
</svg>
)
export const Continental = ({ className}: Icon) => (
   <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height="0"
      className={className}
      viewBox="0 0 747.000000 543.000000"
      preserveAspectRatio="xMidYMid meet"
   >
      <g transform="translate(0.000000,543.000000) scale(0.100000,-0.100000)">
         <path
            d="M962 5272 c-118 -142 -282 -375 -370 -527 -112 -191 -248 -483 -312
-665 -7 -19 -16 -44 -20 -55 -29 -70 -107 -350 -131 -470 -82 -409 -106 -792
-74 -1155 40 -446 127 -811 287 -1200 160 -390 374 -743 645 -1062 l74 -88
3190 0 c1754 0 3189 2 3189 5 0 2 -38 50 -85 107 -47 56 -118 147 -157 202
-39 56 -78 107 -87 113 -12 10 -611 13 -2924 13 l-2909 0 -30 34 c-44 50 -203
279 -260 376 -86 144 -183 341 -240 485 -11 28 -29 72 -40 98 -77 191 -159
534 -200 837 -17 129 -17 650 0 795 31 254 105 578 174 765 11 30 33 89 48
130 44 120 133 311 196 422 20 34 45 78 56 97 57 100 225 344 272 394 l25 27
2914 0 2915 0 72 103 c40 56 115 152 167 214 51 62 93 115 93 118 0 3 -1435 5
-3190 5 l-3190 0 -98 -118z"
         />
         <path
            d="M1629 4358 c-217 -260 -354 -501 -466 -823 -135 -388 -170 -842 -96
-1255 79 -441 260 -834 540 -1173 l65 -77 2561 2 c1701 2 2561 6 2560 13 -1 6
-25 64 -53 130 -28 66 -62 154 -76 195 -14 41 -30 80 -36 87 -8 10 -479 13
-2374 13 l-2363 0 -44 63 c-140 195 -265 474 -318 707 -80 351 -67 749 34
1085 29 94 100 271 135 335 67 122 96 171 140 235 l48 70 2364 3 c1645 1 2367
5 2376 13 7 5 21 38 32 72 11 34 45 123 76 197 31 74 58 140 59 145 1 7 -858
11 -2559 13 l-2562 2 -43 -52z"
         />
         <path
            d="M2232 3370 c-90 -111 -158 -260 -199 -435 -22 -89 -24 -323 -4 -415
19 -89 49 -184 79 -250 32 -68 122 -207 154 -237 l24 -23 2090 0 c1149 0 2095
0 2103 0 10 0 12 9 7 38 -13 77 -46 338 -46 370 l0 32 -1954 0 c-1716 0 -1956
2 -1969 15 -22 21 -44 98 -56 185 -15 115 21 306 63 332 6 4 890 8 1964 8
l1952 0 0 33 c0 31 33 292 46 370 l7 37 -2106 0 -2106 0 -49 -60z"
         />
      </g>
   </svg>
);

export const Alura = ({ className }: Icon) => (
   <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height="0"
      className={className}
      viewBox="0 0 434.000000 432.000000"
      preserveAspectRatio="xMidYMid meet"
   >
      <g transform="translate(0.000000,432.000000) scale(0.100000,-0.100000)">
         <path
            d="M860 4284 c-381 -55 -659 -280 -774 -627 -55 -165 -56 -205 -56
-1497 0 -1292 1 -1332 56 -1497 91 -275 299 -488 564 -578 182 -62 132 -60
1520 -60 1396 0 1344 -2 1528 63 262 93 461 297 552 567 60 178 61 202 58
1555 -3 1123 -5 1232 -21 1313 -86 428 -375 698 -814 761 -98 14 -262 16
-1315 15 -960 -1 -1222 -4 -1298 -15z m1570 -744 c328 -46 533 -195 613 -445
l22 -70 0 -865 0 -865 -23 -80 c-36 -123 -94 -207 -196 -282 -162 -120 -367
-173 -665 -173 -299 0 -508 56 -677 181 -68 50 -108 99 -149 184 -53 108 -69
219 -62 433 5 199 23 286 80 395 40 77 155 195 222 230 28 13 156 62 285 107
129 45 267 93 305 107 39 14 111 40 162 58 50 19 104 40 120 49 45 23 103 86
129 141 21 43 24 65 24 160 0 95 -3 117 -24 160 -59 124 -210 195 -416 195
-169 0 -275 -34 -345 -112 -44 -49 -85 -137 -85 -184 0 -14 -5 -34 -10 -45
-10 -18 -23 -19 -218 -19 -149 0 -211 3 -220 12 -32 32 3 281 55 385 41 83
149 188 248 240 83 43 221 88 315 102 76 12 431 12 510 1z"
         />
         <path
            d="M2603 2120 c-17 -26 -55 -45 -172 -85 -532 -183 -554 -194 -629 -305
-48 -72 -56 -113 -50 -249 4 -86 9 -104 38 -160 55 -102 122 -139 293 -162 78
-10 116 -10 194 0 155 20 228 56 282 137 58 89 62 117 59 499 -2 279 -5 342
-15 325z"
         />
      </g>
   </svg>
);



















// export const Css = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`fill-orange-500 stroke-slate-50 ${className}`}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
//       <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
//    </svg>
// );
// export const Javascript = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`fill-yellow-500 stroke-slate-50 ${className}`}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
//       <path d="M7.5 8h3v8l-2 -1"></path>
//       <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
//    </svg>
// );
// export const Typescript = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`stroke-slate-50 `}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path>
//       <path d="M9 12h4"></path>
//       <path d="M11 12v6"></path>
//       <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path>
//    </svg>
// );

// export const Tailwind = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`stroke-[#3ebff8] ${className}`}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path>
//    </svg>
// );

// export const Php = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`fill-[#8694c1] stroke-[#1d202e] ${className}`}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"></path>
//       <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
//       <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653"></path>
//       <path d="M12 7.5l-1 5.5"></path>
//       <path d="M11.6 10h2.4l-.5 3"></path>
//    </svg>
// );
// export const ReactIcon = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`stroke-[#66dbfb] ${className}`}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
//       <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
//       <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
//       <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
//       <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
//       <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
//       <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
//    </svg>
// );
// export const Git = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
//       <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
//       <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
//       <path d="M12 15v-6"></path>
//       <path d="M15 11l-2 -2"></path>
//       <path d="M11 7l-1.9 -1.9"></path>
//       <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path>
//    </svg>
// );
// export const Mysql = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       // className={`stroke-[#00546b] ${className}`}
//       className={`${className}`}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path>
//       <path d="M9 7h.01"></path>
//    </svg>
// );

// export const Wordpress = ({ className, height }: Icon) => (
//    <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       height={height}
//       viewBox="0 0 24 24"
//       strokeWidth="2"
//       stroke="currentColor"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//    >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//       <path d="M9.5 9h3"></path>
//       <path d="M4 9h2.5"></path>
//       <path d="M11 9l3 11l4 -9"></path>
//       <path d="M5.5 9l3.5 11l3 -7"></path>
//       <path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z"></path>
//       <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
//    </svg>
// );

