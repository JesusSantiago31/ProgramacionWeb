const Header = (props) =>{
    return(
        <header 
        className="bg-cyan-800 w-full text-end text-white px-4 py-2 font-bold text-2xl shadow">
            Bienvenido {props.user.username}
            </header>
    )
}

export default Header;