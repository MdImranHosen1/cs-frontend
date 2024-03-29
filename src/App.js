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
import { StsDetailsPage } from './pages/sts/StsDetailsPage';
import { VehiclesDetailsPage } from "./pages/vehicles/VehicleDetailsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginReload } from "./redux/slices/userHandleSlice";
import { LandfillPage } from './pages/landﬁll/LandfillPage';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(loginReload());

  },)


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
        <Route exact path="/vehicles/:id" element={<VehiclesDetailsPage />} />
        {/* STS */}
        <Route exact path="/sts" element={<StsPage />} />
        <Route exact path="/sts/:id" element={<StsDetailsPage />} />

        {/* Landfill */}
        <Route exact path="/landfill" element={<LandfillPage />} />
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
