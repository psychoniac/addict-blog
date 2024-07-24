import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="min-h-40 bg-black text-white flex items-center justify-around">
            <div className="max-w-96">
                <Link to='/'>
                    <h1 className="text-2xl text-red-900">Mes addictions et moi</h1>
                </Link>
                <h2 className="text-xl text-red-700 mt-5">Comment réussir à vivre quand on arrive pas à se débarrasser de ces addictions...</h2>
            </div>
            <div>
                <img className="max-w-40" src="../public/logo/logo3.png" alt="logo de l'app (temporaire)" />
            </div>
            <div>
                <Navbar />
            </div>

        
        </header>
    );
};
export default Header;