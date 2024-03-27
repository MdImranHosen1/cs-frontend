import { Navbar } from "./components/Navbar";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/users/UsersPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/auth/login" element={<LoginPage />} />
        <Route exact path="/users" element={<UsersPage />} />
        <Route exact path="/users/:userId" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
