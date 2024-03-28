import { Navbar } from "./components/Navbar";
import { LoginPage } from "./pages/auth/LoginPage";
import { HomePage } from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/users/UsersPage";
import { UserDetailsPage } from "./pages/users/UserDetailsPage";
import { PasswordResetPage } from "./pages/auth/PasswordResetPage";
import { PasswordConfirmPage } from "./pages/auth/PasswordConfirmPage";
import { PasswordChangePage } from './pages/auth/PasswordChangePage';
import { ProfilePage } from "./pages/profile/ProfilePage";
import { VehiclesAllPage } from "./pages/vehicles/VehiclesAllPage";
import { StsPage } from "./pages/sts/StsPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* users */}
        <Route exact path="/users" element={<UsersPage />} />
        <Route exact path="/users/:userId" element={<UserDetailsPage />} />
        {/* Profile */}
        <Route exact path="/proﬁle" element={<ProfilePage />} />
        {/* auth */}
        <Route exact path="/auth/login" element={<LoginPage />} />
        <Route exact path="/auth/reset-password/initiate" element={<PasswordResetPage />} />
        <Route exact path="/auth/reset-password/confirm" element={<PasswordConfirmPage />} />
        <Route exact path="/auth/change-password" element={<PasswordChangePage />} />
        {/* Vehicles */}
        <Route exact path="/vehicles" element={<VehiclesAllPage />} />
        {/* STS */}
        <Route exact path="/sts" element={<StsPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
