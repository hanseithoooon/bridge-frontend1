import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlePage } from "./pages/article";
import { HomePage } from "./pages/home";
import { RegisterPage } from "./pages/register";
import { ProfilePage } from "./pages/profile";
import { LoginPage } from "./pages/login";
import { Layout } from "./components/common/layout";
import { BottomNavbar } from "./components/common/bottomNavbar";
import { Header } from "./components/common/header";
import { PostPage } from "./pages/post";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/article" element={<ArticlePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/post" element={<PostPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
      <BottomNavbar />
    </>
  );
}

export default App;
