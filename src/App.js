import "./App.css";
import Carta from "./Components/Card";
import Review from "./Components/Review";

function App() {
  return (
    <div className="App">
      <Review
        nombre="Andres"
        imagen="perro"
        cargo="ejecutivo"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla urna, dignissim in luctus non, vulputate at ante. Donec dolor dui, rutrum ac tincidunt eu, elementum at justo. Nullam non dolor rhoncus, lobortis nisl at, ornare ipsum."
      ></Review>
      <Review
        nombre="pablo"
        imagen="gato"
        cargo="Directivo"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla urna, dignissim in luctus non, vulputate at ante. Donec dolor dui, rutrum ac tincidunt eu, elementum at justo. Nullam non dolor rhoncus, lobortis nisl at, ornare ipsum."
      ></Review>
      <Review
        nombre="pablo"
        imagen="descarga"
        cargo="Jefe de artes"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla urna, dignissim in luctus non, vulputate at ante. Donec dolor dui, rutrum ac tincidunt eu, elementum at justo. Nullam non dolor rhoncus, lobortis nisl at, ornare ipsum."
      ></Review>
      <div className="row">
        <Carta
          nft="image-equilibrium.jpg"
          nombre="Equilibrio #3712"
          descripcion="Nuestro equilibrio"
          tiempo="3 days left"
          creador="Martin Garrix"
          precio="0,4"
        />

        <Carta
          nft="Nft1.webp"
          nombre="Ozunat #2574"
          descripcion="Un nft con de Ozunat"
          tiempo="6 days left"
          creador="Ozuna Pereira"
          precio="1,4"
        />

        <Carta
          nft="Nft2.jpg"
          nombre="Fumar da estilo #9384"
          descripcion="Le dio estilo en los pulmones"
          tiempo="1 days left"
          creador="Solomeo paredes"
          precio="0,003"
        />
      </div>
    </div>
  );
}

export default App;
