import './App.css';
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <LayerOne />
      <LayerTwo />
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
}

export default App;
