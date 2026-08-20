import { div } from "framer-motion/client"


export default function Footer(){
    return(
    
   <div>   
        <div className="p-10 border-t-1 border-b-1 border-gray-300">
            <div className="flex flex-row gap-96 p-20 mb-50 ">
                {/* Contato */}
                <div className="flex flex-col gap-10"> 
                    <h1 className="font-bold titulo-footer">Contato</h1>
                    <div className="flex flex-row gap-5 items-center">
                        <img src="/email.png" className="w-10"/>
                        <p>nutrimente@gmail.com</p>
                    </div>  
                    <img src="/nutrimenteLogo.png" className="w-40"/>
                </div>
            
                {/* Navegue */}
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold titulo-footer">Navegue</h1>
                    <p>Home</p>
                    <p>Profissionais</p>
                    <p>Serviços</p>
                </div>

                {/* Institucional */}
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold titulo-footer">Institucional</h1>
                    <p>Privacidade & Política</p>
                    <p>Termos & Condições</p>
                    <p>Sobre nós</p>
                </div>
            </div>
        </div>
        <div className="border-t-1 border-gray-400 p-15">
            <p>@Copyrights NutriMente todos os direitos reservados 2026</p>
        </div>
    </div>  
    )
}