import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { auth } from '../firebaseConfig';

const Navbar = () => {
    const { currentUser } = useAuth();

    return (
        <nav>
            <div className='bg-black'>
                <Link to='/' className='text-white text-2xl font-bold'>Addiction App</Link>
                <div>
                    {currentUser ? (
                        <div>
                            <Link to='/profile' className='text-white'>
                                Profil 
                            </Link>
                            <Link to='/create-post' className='text-white'>Créer un article</Link>
                            <button onClick={() => auth.signOut()} className='text-white'>Déconnexion</button>
                        </div>
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