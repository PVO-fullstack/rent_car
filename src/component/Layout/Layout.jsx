import React from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Form } from "../SearchForm/Form";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
