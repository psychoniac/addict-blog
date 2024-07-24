import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { auth } from '../firebaseConfig';

const Navbar = () => {
    const { currentUser } = useAuth();

    return (
        <nav>
            <div>
                {currentUser ? (
                    <ul className='min-w-96 flex justify-evenly gap-5'>
                        <li className='bg-white border rounded-xl p-3 hover:bg-slate-300'>
                            <Link to='/profile' className='text-blue-800 hover:text-red-800'>
                                Profil 
                            </Link>
                        </li>
                        <li className='bg-white border rounded-xl p-3 hover:bg-slate-300'>
                            <Link to='/create-post' className='text-blue-800 hover:text-red-800'>Créer un article</Link>
                        </li>
                        <li className='bg-white border rounded-xl p-3 hover:bg-slate-300'>
                            <button onClick={() => auth.signOut()} className='text-blue-800 hover:text-red-800'>Déconnexion</button>
                        </li>
                    </ul>
                ) : (
                    <ul className='min-w-96 flex justify-evenly gap-5 '>
                        <li className='bg-white border rounded-xl p-3 hover:bg-slate-300'>
                            <Link to='/about' className='text-blue-800 hover:text-red-800'>A propos</Link>
                        </li>
                        <li className='bg-white border rounded-xl p-3 hover:bg-slate-300'>
                            <Link to='/login' className="text-blue-800 hover:text-red-800">Connexion</Link>
                        </li>
                        <li className='bg-white border rounded-xl p-3 hover:bg-slate-300'>
                            <Link to='/register' className='text-blue-800 hover:text-red-800'>Inscription</Link>
                        </li>
                    </ul> 
                    )}
            </div>
        </nav>
    )
};

export default Navbar;