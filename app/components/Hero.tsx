import Image from "next/image";

import {Swiper, SwiperSlide } from 'swiper/react'

 export default function Hero(){
    return(

        <section className="relative min-h-screen ">

                <Image
                    src="/psicologo.jpeg"
                    alt="Psicologo e Paciente"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-center px-10  gap-12 w-[45%]">
                    <h1 className="text-white max-w-3xl text-6xl text-[clamp(2.5rem,5vw,5rem)] font-fraunces">Consultas de psicólogos e nutricionistas 
                        <span className="text-blue-600"> em um só lugar</span></h1>  
                 
                    <button className="flex items-center shadow-3xl shadow-green-500 bg-green1 rounded-full m-0 p-4 px-8 text-white font-bold w-90 text-2xl">
                        <img src="/cronograma.png" alt="" className="w-12"/>
                        Agendar uma consulta</button>
                </div>


            {/* <div className="mx-auto w-full max- px-6 lg:px-8 bg-blue-700">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 bg-cyan-500">


    
                    </div>
                </div>
            </div> */}

        </section>


    )
 }

