import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Route } from "wouter";

import App from "./App.jsx";
import About from "./About.jsx";
import Cupcake from "./Cupcake.jsx";

import "./index.css";

const Router = () => (
  <div>
    <div className="max-w-3xl m-auto py-2 px-8">
      <div className="flex gap-4 text-lg">
        <Link href="/">
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            About
          </a>
        </Link>
      </div>
    </div>

    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/cupcakes/:id">{(params) => <Cupcake id={params.id} />}</Route>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
