import "./bootstrap";
import ReactDOM from "react-dom/client";

function App() {
    return <h1 style={{ color: "gold" }}>React App</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
