import React from 'react';
import { Root, createRoot } from "react-dom/client";
import App from "./components/App";
import {importFunc } from './DSAnalyzer/main';
import { importArgs } from './DSAnalyzer/main';
import { visualize } from './DSAnalyzer/visualize';
declare const window: any;
window.DSAnalyzer = {};
window.DSAnalyzer.importFunc = importFunc;
window.DSAnalyzer.importArgs = importArgs;
window.DSAnalyzer.visualize = visualize;
const rootEl: HTMLElement | null = document.getElementById("app");

if (!rootEl) throw new Error('No div in index.html');
const root: Root = createRoot(rootEl);

root.render(<App />);