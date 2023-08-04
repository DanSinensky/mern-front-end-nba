import { useState, useEffect } from 'react';
import { getTeams } from '../services/teams.js'
import Team from '../components/Team.jsx'

export default function Teams() {

  const [teams, setTeams] = useState([])
  
  useEffect(() => {
    fetchTeams()
  }, [])

  async function fetchTeams() {
    const allTeams = await getTeams()
    setTeams(allTeams)
  }
  
  return (
    <div>
      <h1>All NBA Teams</h1>
      <div className='teams-container'>
        {teams.map((team) => (
          <Team team={team} key={team._id}/>
        ))}
      </div>
    </div>
  )
}