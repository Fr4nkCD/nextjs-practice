import boeing from './sources/Boeing_full_logo.svg'
import Image from 'next/image'

export default function Boeing() {
  return (<>

    <div className="header flex flex-row justify-between items-center mt-[1rem]">
      <a href="">
        <Image
          src={boeing}
          width={200}
          height={200}
          alt="Boeing Logo"
        />
      </a>
      <div className="menu flex justify-end max-[650px]:hidden">
        <button className="bg-none border-none text-base hover:bg-white/25 px-8 py-3">HOME</button>
        <button className="bg-none border-none text-base hover:bg-white/25 px-8 py-3">ABOUT</button>
        <button className="bg-none border-none text-base hover:bg-white/25 px-8 py-3">CONTACT</button>
      </div>
      <button className="hidden bg-none border-none flex flex-col justify-between w-[50px] h-[50px] px-[0.6em] py-[0.8em] hover:bg-[rgba(255,255,255,0.25)] max-[650px]:flex" id="menu_button">
        <div className='line w-[100%] h-[0.225em] bg-white rounded-[5px]'></div>
        <div className='line w-[100%] h-[0.225em] bg-white rounded-[5px]'></div>
        <div className='line w-[100%] h-[0.225em] bg-white rounded-[5px]'></div>
      </button>
    </div>

    <div className="menu_float bg-[#0039a6] rounded-[5px] border-2 border-white w-[200px] h-fit hidden flex-col absolute right-[10px] z-10" id="menu_float">
      <button className="bg-none border-none py-[0.8em] px-[1.6em] hover:bg-[rgba(255,255,255,0.25)]">HOME</button>
      <button className="bg-none border-none py-[0.8em] px-[1.6em] hover:bg-[rgba(255,255,255,0.25)]">ABOUT</button>
      <button className="bg-none border-none py-[0.8em] px-[1.6em] hover:bg-[rgba(255,255,255,0.25)]">CONTACT</button>
    </div>

    <hr className="border-none h-px bg-gradient-to-r from-white/20 via-white to-white/20"></hr>

    <div className="main_panel rounded-[5px] w-full h-[350px] bg-center bg-cover bg-[linear-gradient(to_right,rgba(0,57,166,0.6),rgba(0,57,166,0)),url('https://www.boeing.com/content/theboeingcompany/us/en/features/2024/03/15-years-of-777-freighter-success/jcr%3acontent/cq%3afeaturedimage.img.jpg/1710177882294.jpg')]">
      <div className="textbox absolute flex flex-col h-fit w-full top-1/2 left-[2em] translate-y-[-70%]">
        <span id="subhead" className="font-bold text-2xl drop-shadow-[2px_2px_0_rgba(255,255,255,0.25)]">We Are Boeing</span>
        <span id="head" className="font-bold text-4xl pt-[0.2em] drop-shadow-[2px_2px_0_rgba(255,255,255,0.25)]">WE ARE THE BEST</span>
        <span id="description" className="pt-[1em] pb-[2em] drop-shadow-[2px_2px_0_rgba(255,255,255,0.25)]">We take safety as the first priority.</span>
        <button className="bg-[rgb(25,30,35)] hover:bg-[rgb(55,65,75)] border-none rounded-[5em] w-[12em] h-[3em] font-bold">LEARN MORE</button>
      </div>
    </div>

    <hr className="border-none h-px bg-gradient-to-r from-white/20 via-white to-white/20"></hr>

    <div className="services flex justify-around">
      <button className="bg-none border-0 px-[1.2em] py-[0.6em] w-1/3 hover:bg-[rgba(255,255,255,0.25)]">Service 1</button>
      <button className="bg-none border-0 px-[1.2em] py-[0.6em] w-1/3 hover:bg-[rgba(255,255,255,0.25)]">Service 2</button>
      <button className="hidden min-[650px]:block bg-none border-0 px-[1.2em] py-[0.6em] w-1/3 hover:bg-[rgba(255,255,255,0.25)]">Service 3</button>
    </div>

    <hr className="border-none h-px bg-gradient-to-r from-white/20 via-white to-white/20"></hr>

    <div className="gallery flex flex-row gap-[8px] max-[900px]:grid max-[900px]:grid-cols-2 max-[650px]:flex max-[650px]:flex-col">
      <div className="item rounded-[5px] w-1/4 h-[200px] max-[900px]:w-full bg-cover bg-center bg-[url('https://www.boeing.com/content/theboeingcompany/us/en/commercial/737max/_jcr_content/root/container/container_185340608/carousel/item_1698706074797.coreimg.85.1600.jpeg/1702318128313/737-8-winglet-full-06.jpeg')]"></div>
      <div className="item rounded-[5px] w-1/4 h-[200px] max-[900px]:w-full bg-cover bg-center bg-[url('https://www.supplychainbrain.com/ext/resources/2024/04/10/iStock-458086589.jpg?t=1712769440&width=1080')]"></div>
      <div className="item rounded-[5px] w-1/4 h-[200px] max-[900px]:w-full bg-cover bg-center bg-[url('https://www.boeing.com/content/theboeingcompany/us/en/defense/fa-18-super-hornet/_jcr_content/root/container/container_858146469/container/carousel/item_1698099411406.coreimg.jpeg/1702306622791/fa18-block3-gallery12-960x600.jpeg')]"></div>
      <div className="item rounded-[5px] w-1/4 h-[200px] max-[900px]:w-full bg-cover bg-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d3/Boeing%27s_Starliner_crew_ship_approaches_the_space_station_%28iss067e066735%29_%28cropped%29.jpg')]"></div>
    </div>

    <hr className="border-none h-px bg-gradient-to-r from-white/20 via-white to-white/20"></hr>

    <div className="footer flex flex-col items-center max-[650px]:items-start">
      <span className='font-bold'>Lorem ipsum dolor sit amet</span>
      <span className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora rem atque veritatis voluptatibus ex dolore.</span>
      <span className='font-bold'>Copyright © All Rights Reserved</span>
    </div>

  </>
  );
}