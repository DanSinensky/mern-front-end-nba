import { useState, useEffect } from 'react';
import { getTeam, deleteTeam } from '../services/teams.js';
import { Link, useParams, useNavigate } from 'react-router-dom';


export default function TeamDetail() {
  const [team, setTeam] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()
  useEffect(() => {
    fetchTeam()
  }, [])
  async function fetchTeam() {
    const oneTeam = await getTeam(id)
    setTeam(oneTeam)
  }
  async function handleDelete() {
    await deleteTeam(id)
    navigate("/teams")
  }
  return (
    <div>
      <h1>{team.full_name}</h1>
      <p>{team.conference} - {team.division} - {team.city}</p>
      <p>{team.abbreviation}</p>
      <div>
        <Link to={`/teams/${id}/edit`}> 
          <button>Edit Team</button>
        </Link>
        <button onClick={handleDelete}>Delete Team</button>
      </div>
    </div>
  )
}
