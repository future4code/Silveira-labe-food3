import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupUserPage from "../pages/SignupPage/SignupUserPage";
import SignupAdressPage from "../pages/SignupPage/SignupAdressPage";
import HomePage from "../pages/HomePage/HomePage";
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage/RestaurantDetailsPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ProfileEditUserPage from "../pages/ProfilePage/ProfileEditUserPage";
import ProfileEditAdressPage from "../pages/ProfilePage/ProfileEditAdressPage";
import InitialPage from '../pages/InitialPage/InitialPage';


const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <InitialPage />} />
          <Route path="login" element={ <LoginPage />} />
          <Route path="signup/user" element={ <SignupUserPage />} />
          <Route path="signup/adress" element={ <SignupAdressPage />} />
          <Route path="feed" element={ <HomePage />} />
          <Route path="restaurant/:id" element={ <RestaurantDetailsPage />} />
          <Route path="cart" element={ <CartPage />} />
          <Route path="profile" element={ <ProfilePage />} />
          <Route path="profile/edit/user" element={ <ProfileEditUserPage />} />
          <Route path="profile/edit/adress" element={ <ProfileEditAdressPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;