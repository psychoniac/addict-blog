import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { auth } from '../firebaseConfig';

const Navbar = () => {
    const { currentUser } = useAuth();

    return (
        <nav>
            <div className='bg-black min-h-20 flex justify-between items-center'>
                <div>
                    {currentUser ? (
                        <ul>
                            <li>
                                <Link to='/profile' className='text-white'>
                                    Profil 
                                </Link>
                            </li>
                            <Link to='/create-post' className='text-white'>Créer un article</Link>
                            <button onClick={() => auth.signOut()} className='text-white'>Déconnexion</button>
                        </ul>
                    ) : (
                    <>
                        <Link to='/about' className='text-white'>A propos</Link>
                        <Link to='/login' className="text-white">Connexion</Link>
                        <Link to='/register' className='text-white'>Inscription</Link>
                    </> 
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;