import Logo from "./Logo"

export default function Header(){
    return(
        <div>
           <header className="bg-blue1 text-white h-20 flex items-center justify-between px-8">
                <Logo/>
            <nav className="flex items-center gap-14 text-white">
                <a href="#">Home</a>
                <a href="#">Profissionais</a>
                <a href="#">Sobre nós</a>
            </nav>
            <button className="bg-green1 p-3 px-10 rounded-4xl font-bold">Cadastre-se</button>
            </header> 

        </div>
    )
}