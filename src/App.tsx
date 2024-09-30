import './styles/global.css'

import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import FavoritesPage from "./pages/Favorites/Favorites";
import Cars from "./pages/Cars/Cars";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Cars />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
