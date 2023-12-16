import {FC} from 'react';

type Icon_media ={
   className:string,
   height:string
}
const Facebook: FC<Icon_media> = ({ className, height }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
   </svg>
);

export const Github: FC<Icon_media> = ({ className, height }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
   </svg>
);

export const Linkedin: FC<Icon_media> = ({ className, height }) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
   >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
      <path d="M8 11l0 5"></path>
      <path d="M8 8l0 .01"></path>
      <path d="M12 16l0 -5"></path>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
   </svg>
);

export const icons_media=[                        
   {
      icon : Linkedin,
      url : "https://www.linkedin.com/in/rene-paul-diaz/"
   },
   {
      icon : Github,
      url : "https://github.com/VoidZaid"
   },
   {
      icon : Facebook,
      url : "https://www.facebook.com"
   }
]