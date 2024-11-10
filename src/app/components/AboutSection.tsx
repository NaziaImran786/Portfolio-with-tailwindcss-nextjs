'use client';
import React,{useTransition, useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { title } from "process";


const TAB_DATA = [
  {
    title: "Skills",
    id:  "skills",
    content: (
      <ul className="list-dics pl-2">
        <li>Node.js</li>
        <li>UX/UI</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id:  "education",
    content: (
      <ul className="list-dics pl-2">
        <li>Fullstack Developer from Governor Sindh Initiative</li>
        <li>Matriculation from Khan Children Academy</li>
        <li>Fsc from Abdullah Govt. Girls College</li>
        <li>BA from Karachi University</li>        
      </ul>
    )
  },
  {
    title: "Certifications",
    id:  "certifications",
    content: (
      <ul className="list-dics pl-2">
        <li>CIT from Anus Academy</li>
        <li>Fullstack Developer from Governor Sindh Initiative</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] =useState('skills')
  const [isPending, startTransition] = useTransition()

  const  handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id)
    })
  };
  return (
    <>
    <section id="about" className="text-white lg:py-8">
      <div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/lab.jpg" alt="lab.jpg" width={500} height={700} />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack developer witha passion for creating innovative
            and user-friendly applications. I Have experience working with
            typescript , react, node.js, HTML, CSS, TailwindCSS and UI /UX. I am
            a quick learner and I am Always looking to expand my knowlwdge and
            skill set. I am a team player and I am excited to wort with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            
            <TabButton 
               selectTab={()=> handleTabChange('skills')} 
               active={tab ==="skills"}
              >
               {" "}
               Skills{" "}
            </TabButton>
            <TabButton 
               selectTab={()=> handleTabChange('education')} 
               active={tab ==="education"}
              >
               {" "}
               Education{" "}
            </TabButton>
            <TabButton 
               selectTab={()=> handleTabChange('certifications')} 
               active={tab ==="certifications"}
              >
               {" "}
               Certifications{" "}
            </TabButton>            
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)!.content}</div>
        </div>
      </div>
    </section>
   
    </>
  );
};

export default AboutSection;
