
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function Landing(){
  return(
    <div>
      <Hero></Hero>
      
    <section className="">
      <div className="flex justify-center items-center gap-40 flex-col flex-1">
        <h1 className="font-fraunces text-7xl font-medium">Como Funciona?</h1>

        <img src="/Como funciona.svg" alt="" className="w-9/12" />

        <div className="flex gap-64 text-center">
          <div className="cards-landing font-fraunces">
            <h2>Faça seu cadastro e preencha seu perfil de saúde</h2>
            <img src="/cadastro.png" alt="" />
            </div>
          <div className="cards-landing font-fraunces">
            <h2>Escolha o profissional ideal</h2>
            <img src="/medico.png" alt="" />
          </div>
          <div className="cards-landing font-fraunces">
            <h2>Agende sua consulta e comece seu acompanhamento</h2>
            <img src="/consultando.png" alt=""/>  
          </div>
        </div>

      </div>


    </section>


    </div>
  )
}