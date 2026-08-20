import { div } from "framer-motion/client";

interface Props_Aval{
    titulo: string
    avaliacao: string
    img: string
}


export default function Card_Avaliacoes({titulo, avaliacao, img} : Props_Aval){
    return(
        <div>
            <div className="flex flex-col justify-center items-center  w-[620px] h-[420px] border-1 border-[#FFAE00] border-2 bg-white rounded-2xl gap-4 pt-20 p-10 shadow-3xl">
                <img src="/estrelas.svg" alt="" className="my-2"/>
                <div>
                    <h1 className="font-bold">{titulo}</h1>
                </div>

                <div>
                    <h2 className="text-center text-[18px] text-gray-600 font-medium">"{avaliacao}"</h2>
                </div>

                <div>
                    <img src={img} alt="" className="my-10"/>
                </div>

            </div>
        </div>
        
    )
}