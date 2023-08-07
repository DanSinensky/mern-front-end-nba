import Nav from './components/Nav.jsx';
import Teams from './screens/Teams.jsx';
import TeamCreate from './screens/TeamCreate.jsx';
import TeamEdit from './screens/TeamEdit.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/east" element={<Teams />} />
        <Route path="/teams/west" element={<Teams />} />
        <Route path="/add-team" element={<TeamCreate />} />
        <Route path="/teams/:id/edit" element={<TeamEdit />} />
      </Routes>
    </div>
  )
}

export default App;