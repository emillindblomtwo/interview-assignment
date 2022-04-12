import React, {useState} from 'react';
import './App.css';
import Posts from './components/posts/posts';
import Navbar from './components/navbar/navbar';
import Impacters from './components/impacters/impacters';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Posts', 'Impacters'];

  return (
    <div className="App">
      <Navbar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {activeTab === 0 && <Posts />}
        {activeTab === 1 && <Impacters />}
      </div>
    </div>
  );
}

export default App;
