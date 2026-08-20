"use client"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 export default function Hero(){
    return(

        <section className="min-h-screen mb-0">
            <div className="">

            <Swiper
                className='relative overflow-hidden gap-10'
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={2}
                pagination={{ clickable: true}}
                onSlideChange={() => console.log('slide change')}    
            >
                <SwiperSlide>                
                    <img src="/psicologo2.jpg" width={2000} height={1000} className="inset-0 w-full h-full object-contain  object-[100%_center] rounded-2xl"/>  
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/psicologo.jpeg" width={2000} height={1000} className="inset-0 w-full h-full object-contain  object-[100%_center] rounded-2xl"/>
                </SwiperSlide>
            </Swiper>


                {/* Text */}

                <div className="inset-0 min-h-[800px] relative z-10 flex flex-col justify-center bg-linear-65 from-blue-200 to-green-200 md:w-[50%] md:rounded-r-[100px] md:px-12 lg:px-20 overflow-hidden border-1 border-green-700">
                    <div className="max-w-3xl">
                        <h1 className="md:text-4xl xl:text-6xl font-fraunces leading-tight">Consultas de psicólogos e nutricionistas 
                        <span className="text-blue-600"> em um só lugar</span></h1>  
                        <h2 className="my-10 md:text-2xl">Plataforma  com diversos nutricionistas e psicólogos para atender a sua necessidade.</h2>
                    </div>
                    

                    <button className="flex items-center  bg-green1 rounded-4xl mb-10 p-2 w-65 text-white font-bold">
                        <img src="/cronograma.png" alt="" className="w-10 mx-2  "/>
                        Agendar uma consulta
                    </button>

                </div>

        
            </div>
        </section>


    )
 }

