interface CardProps{
    titulo: string;
    descricao: string;
    image: string
    cor?: 'branco' | 'azul';
}


export default function Card({titulo, descricao, image, cor = 'branco'} : CardProps){
    return(
        <div>
            <div className={`cards-landing2 ${cor == 'azul' ? 'bg-blue3' : 'bg-white'}`}>
                <img src={image} alt="" className="numbers-icon"/>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
        </div>

)

}