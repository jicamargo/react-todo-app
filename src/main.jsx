import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "@/components/Navbar";

import TodoApp from "@/components/TodoApp";
import Modal from "@/components/Modal";
import Form from "@/components/Form";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Navbar />
    <Modal />
    <TodoApp />
    <Form />
  </React.StrictMode>
);
