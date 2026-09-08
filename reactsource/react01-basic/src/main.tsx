import { createRoot } from "react-dom/client";
import "./index.css";
import Counter from "./state/Counter";

createRoot(document.getElementById("root")!).render(<Counter />);
