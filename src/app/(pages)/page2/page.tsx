"use client"

import React from "react";
import Link from 'next/link';
import FadeIn from "@/Components/fadein";

import RenderWidget from "@/Components/renderwidget";
import renderbrain from "./Assets/brainrender.png"
import renderSpear from "./Assets/Invertedspearofheaven.png"
import renderMusashi from "./Assets/musashi.png"
import darkmoonRender from "./Assets/darkmoonrender.png"
import shrineRender from "./Assets/shrine2.png"


export default function Home() {
const mainText = "Blender"
    const textDesc = "Blender is a program for designing 3d models and renders. Here is some of my work in this program."
  return (
    <main className="text-white">
      <div className="flex gap-5 md:flex-row absolute top-5 right-5">
        <Link href='Historypage' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">History</Link> 
        <Link href='futureprojects' className="justify-center items-center text-[2vw] font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Socials</Link>
        <button className=" flex justify-center items-center text-[2vw  font-bold md:pr-10 md:pl-10 md:flex md:justify-center md:items-center md:text-[1vw] md:font-bold">Future projects</button>
      </div>
      <h1 className=" h-[45vh] flex justify-center items-center text-[15vw] font-bold md:h-[45vh] md:flex md:justify-center md:items-center md:text-[15vw] md:font-bold ">{mainText}</h1>
      <p className="h-[10vh] flex justify-center pr-20 pl-20 items-center text-[5vw] font-bold md:h-[20vh] md:flex md:justify-center md:pr-80 md:pl-80 md:items-center md:text-[2vw] md:font-bold">{textDesc} </p>
      <div className="width-full p-[10vw] rounded-[3vw] flex flex-col gap-10">
        <FadeIn delay={0}>
          <RenderWidget src={renderbrain}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={renderSpear}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={renderMusashi}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={darkmoonRender}></RenderWidget>
        </FadeIn>
        <FadeIn delay={0}>
          <RenderWidget src={shrineRender}></RenderWidget>
        </FadeIn>
      </div>
      <footer>
        
      </footer>
      
      
      

      
      
      
    


    </main>
  );
}
