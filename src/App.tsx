import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlePage } from "./pages/article";
import { HomePage } from "./pages/home";
import { Layout } from "./components/common/layout";
import { BottomNavbar } from "./components/common/bottomNavbar";
import { Header } from "./components/common/header";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/article" element={<ArticlePage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
      <BottomNavbar />
    </>
  );
}

export default App;
