import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTeam, deleteTeam } from '../services/teams.js'


export default function AccordionItem(team) {
  const [isActive, setIsActive] = useState(false)
  const [team1, setTeam1] = useState({})
  const [isDeleted, setDeleted] = useState(false)
  useEffect(() => {
    fetchTeam()
  }, [])
  async function fetchTeam() {
    const oneTeam = await getTeam(team._id)
    setTeam1(oneTeam)
  }
  async function handleDelete() {
    setDeleted(true)
    await deleteTeam(team._id)
  }
  if (isDeleted === true) {
    return <div></div>
  } else {
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{team.abbreviation}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="accordion-content">
          <h4>{team.full_name}</h4>
          <p>{team.conference} - {team.division} - {team.city}</p>
          <div className='buttons'>
            <Link to={`/teams/${team._id}/edit`}>
              <button>Edit Team</button>
            </Link>
            <button onClick={handleDelete}>Delete Team</button>
          </div>
        </div>}
      </div>
    )
  }
}