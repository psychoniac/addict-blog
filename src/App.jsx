import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import CreatePostPage from "./pages/CreatePostPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { AuthProvider } from "./AuthProvider"
import ContactMe from "./pages/ContactMe"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./ProtectedRoute"
import Header from "./components/Header"


const App = () => {
  return (
    <AuthProvider>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/create-post" element={<ProtectedRoute><CreatePostPage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactMe />} />
      </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;