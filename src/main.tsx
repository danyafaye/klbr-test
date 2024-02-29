import {createRoot} from 'react-dom/client'
import * as ST from './styles.ts'
import {App} from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <App />
        <ST.GlobalStyles />
    </>
);
