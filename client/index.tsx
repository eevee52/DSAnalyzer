import React from 'react'
import { Root, createRoot } from "react-dom/client";
import App from "./components/App";

const rootEl: HTMLElement | null = document.getElementById("app");

if (!rootEl) throw new Error('No div in index.html');

const root: Root = createRoot(rootEl);

root.render(<App />);