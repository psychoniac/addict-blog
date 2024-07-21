import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (error) {
      console.error("Erreur d'inscription:", error);
    }
  };
    
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Inscription</h1>
            <form onSubmit={handleRegister} className="mt-4">
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Mot de passe</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">S'inscrire</button>
            </form>
        </div>
    );
}
export default RegisterPage;