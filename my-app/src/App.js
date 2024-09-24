import css from './App.module.css';
import RenderingLists from "./components/RenderingLists.js"
import Content from "./components/Content.js"
import LifeCyclesCWU from './components/LifeCyclesCWU.js';
import SearchBar from "./components/SearchBar.js"
function App() {
  return (
    <div className={css.App}>
      < Content />
    </div>
  );
}

export default App;