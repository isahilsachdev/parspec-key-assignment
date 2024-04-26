import logo from './logo.svg';
import './App.css';
import ReactKeyPress from './components/ReactKeypress.jsx';
import HelpContainer from './components/HelpContainer.jsx';
import { useState } from 'react';
import ReactKeypressItem from './components/ReactKeypressItem.jsx';

function App() {
  var listener = new window.keypress.Listener();
  const [activeShortcuts, setActiveShortcuts] = useState([{shortcut:"shift a", title:"A"}, {shortcut:"shift b", title:"B"}])

  const handleActiveShortcuts = (shortcut, title) => {
    const titleExist = activeShortcuts.find(activeShortcut => activeShortcut.title === title);
    if (titleExist) {
      const updatedList = activeShortcuts.filter(activeShortcut => activeShortcut.title !== title);
      setActiveShortcuts(updatedList);
    } else {
      setActiveShortcuts([...activeShortcuts, {shortcut, title}])
    }
  };

  return (
    <div className="App">
      <ReactKeyPress>
        <ReactKeypressItem listener={listener} shortcut="shift a" title={"A"} handleActiveShortcuts={handleActiveShortcuts} />
        <ReactKeypressItem listener={listener} shortcut="shift b" title={"B"} handleActiveShortcuts={handleActiveShortcuts} />
        <HelpContainer activeShortcuts={activeShortcuts} />
      </ReactKeyPress>
    </div>
  );
}

export default App;
