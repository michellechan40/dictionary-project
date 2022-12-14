import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="zen" />
        </main>
        <footer className="App-footer">
          This React project was coded by{" "}
          <a
            href="https://cozy-palmier-cefde3.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michelle Chan {""}
          </a>
          and is{" "}
          <a
            href="https://github.com/michellechan40/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
