import Image from "next/image";

import {Swiper, SwiperSlide } from 'swiper/react'

 export default function Hero(){
    return(

        <section className="relative min-h-screen mb-30">
            <div className="mx-auto grid items-center gap-10 relative">


                {/* Text */}
                <div className="max-w-xl absolute m-16 xl:text-2xl">
                    <h1 className="text-white max-w-3xl text-6xl text-[clamp(2.5rem,5vw,5rem)] font-fraunces">Consultas de psicólogos e nutricionistas 
                        <span className="text-blue-600"> em um só lugar</span></h1>  

                    <h2 className="my-10 text-white">Plataforma  com diversos nutricionistas e psicólogos para atender a sua necessidade.</h2>
                 
                    <button className="flex items-center shadow-3xl shadow-green-500 bg-green1 rounded-full m-0 p-4 px-8 text-white font-bold lg:h-20 lg:w-64 lg:text-[18px] xl:px-6 xl:py-3 xl:w-90 xl:text-2xl">
                        <img src="/cronograma.png" alt="" className="w-12 lg:w-10 xl:w-15"/>
                        Agendar uma consulta</button>
                </div>

                <Image
                    src="/psicologo.jpeg"
                    alt="Psicologo e Paciente"
                    width={1200}
                    height={700}
                    className="w-full h-full object-cover"
                />  
            </div>
        </section>


    )
 }

