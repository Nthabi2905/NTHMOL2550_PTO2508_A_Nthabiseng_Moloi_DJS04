import { PodcastProvider } from "./context/PodcastContext.jsx";
import Controls from "./components/Controls.jsx";
import PodcastList from "./components/PodcastList.jsx";
import Pagination from "./components/Pagination.jsx";
import "./App.css";

/**
 * Root application component for the podcast browsing experience.
 * @returns {JSX.Element}
 */
export default function App() {
  return (
    <PodcastProvider>
      <div className="app">
        <header className="app-header">
          <h1>Podcast Explorer</h1>
          <p className="app-header__subtitle">
            Search, sort, filter, and browse podcasts in one place.
          </p>
        </header>
        <main className="app-main">
          <Controls />
          <PodcastList />
          <Pagination />
        </main>
      </div>
    </PodcastProvider>
  );
}
