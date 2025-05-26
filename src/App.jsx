import "./App.css";
import Fire from "../src/assets/fire.png";
import Star from "../src/assets/glowing-star.png";
import Party from "../src/assets/Party.png";
import MovieList from "./MovieList";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" title="popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="upcoming" emoji={Party} />
      </main>
    </div>
  );
};

export default App;
