import "./App.css";
import Navbar from "./components/Navbar";
import SectionImage from "./components/Section-Image";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <main>
        <section>
          <SectionImage
            src="https://source.unsplash.com/random/1920x1080"
            alt="random image"
          />
        </section>
        <section>
          <SectionImage
            src="https://source.unsplash.com/random/1200x1500"
            alt="random image"
          />
        </section>
        <Button
          text="Click me"
        className="custom-button"
        />
      </main>

      <footer>
        <Button
          text="Contact us"
          className="custom-button"
        />
        <p>© 2024 Epicode React. All Rights Reserved.</p>{" "}
      </footer>
    </div>
  );
}

export default App;
