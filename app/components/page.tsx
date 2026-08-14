"use client";
import Image from "next/image";
import { useState } from "react";


export default function Home() {

  const [log, setLog] = useState(false);

const status = () => {
  if(log){
    return <h1 className="text-green-500">Usuário logado!</h1>
  } else {
    return <h1 className="text-red-800">Usuário não logado!</h1>
  }
}
 
function cumprimento(){
      const hora = 17;
      if (hora > 6 && hora < 13){
        return <h1>Bom dia</h1>
      } else if (hora > 13 && hora < 18){
        return <h1>Boa tarde</h1>
      } else {
        return <h1>Boa noite</h1>
      }
  }

// const musicaNirvana = ["Pennyroyal Tea", "Polly", "The man who sold the world", "Dumb", "Lithium", "In bloom"]
//   const listaMusicas = musicaNirvana.map((musica, index) => {
//     return <h1>{musica}</h1>
//   }
// )
  return (
    <div>
      {/* {status()}
      <button className="bg-amber-600" onClick={()=> setLog(!log)} >{log?'Logoff':'Login'}</button> */}

        {/* <ul>{musicaNirvana.map((musica, index) => 
          (
            <li key={index}>{musica}</li>
          )
        )}</ul> */}
    </div>
  );
}
