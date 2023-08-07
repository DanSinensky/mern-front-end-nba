import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTeam } from '../services/teams';

export default function TeamCreate() {
  const [team, setTeam] = useState({
    abbreviation: "",
    city: "",
    conference: "",
    division: "",
    full_name: "",
    name: "",
  })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    await createTeam(team)
    navigate("/")
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
      <h3>Add a new NBA Team to the Database</h3>
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
