import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import CreatePostPage from "./pages/CreatePostPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { AuthProvider } from "./AuthProvider"
import ContactMe from "./pages/ContactMe"


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;