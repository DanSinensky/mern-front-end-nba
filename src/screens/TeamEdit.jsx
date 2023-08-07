import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTeam, getTeam } from '../services/teams';

export default function TeamEdit() {
  const [team, setTeam] = useState({
    abbreviation: "",
    city: "",
    conference: "",
    division: "",
    full_name: "",
    name: "",
  })
  let navigate = useNavigate()
  let { id } = useParams()
  useEffect(() => {
    fetchTeam()
  }, [])
  async function fetchTeam() {
    const oneTeam = await getTeam(id)
    setTeam(oneTeam)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateTeam(id, team)
    navigate(`/`)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setTeam((prevTeam) => ({
      ...prevTeam,
      [name]: value
    }))
  }
  return (
    <div>
      <h3>Edit this NBA Team</h3>
      <form className='create-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add the teams's abbreviation"
          size="35"
          name="abbreviation"
          value={team.abbreviation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the teams's city"
          size="35"
          name="city"
          value={team.city}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the teams's conference"
          size="35"
          name="conference"
          value={team.conference}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the team's division"
          size="35"
          name="division"
          value={team.division}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the team's full name"
          size="35"
          name="full_name"
          value={team.full_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add the team's name"
          size="35"
          name="name"
          value={team.name}
          onChange={handleChange}
        />
        <button type="submit">Create The Team!</button>
      </form>
    </div>
  )
}
