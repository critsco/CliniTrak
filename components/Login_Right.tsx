import { P_FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Login_Right = () => {
  return (
    <div className='bg-blue-900 max-container w-full text-white shadow-2xl'>
      <div className='flexCenter mt-[3rem] text-lg'>
        Features
      </div>
      <ul className='relative grid grid-cols-2 gap-10 mt-[3rem] mb-[-8rem] padding-container text-center'>
        {P_FEATURES.map((feature) => (
          <FeatureItem 
            title={feature.title}
            key={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
        <div className="relative h-[14rem] w-[1px] top-[-36rem] left-[315px] bg-white"></div>
        <div className="relative h-[14rem] w-[1px] top-[-18rem] left-[-11px] bg-white"></div>
      </ul>
    </div>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex justify-top items-center w-full flex-1 flex-col">
      <div>
        <Image 
          src={icon}
          alt="icon"
          width={40}
          height={40}
        />
      </div>
      <h2 className="font-bold lg:font-bold md:text-[18px] lg:text-[22px] mt-1 capitalize items-start">
        {title}
      </h2>
      <p className="text-[15px] mb-[2rem] text-white lg:mt-3 lg:bg-none items-start">
        {description}
      </p>
    </li>
  )
}

export default Login_Right