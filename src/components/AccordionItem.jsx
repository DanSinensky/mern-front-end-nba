import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getTeam, deleteTeam } from '../services/teams.js'


export default function AccordionItem(team) {
  const [isActive, setIsActive] = useState(false);
  const [team1, setTeam1] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    fetchTeam()
  }, [])
  async function fetchTeam() {
    const oneTeam = await getTeam(id)
    setTeam1(oneTeam)
  }
  async function handleDelete() {
    await deleteTeam(id)
    navigate("/teams")
  }
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{team.abbreviation}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
        <h2>{team.full_name}</h2>
        <p>{team.conference} - {team.division} - {team.city}</p>
        <Link to={`/teams/${team._id}/edit`}> 
          <button>Edit Team</button>
        </Link>
        <button onClick={handleDelete}>Delete Team</button>
      </div>}
    </div>
  )
}