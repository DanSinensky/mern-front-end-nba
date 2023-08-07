import { useState, useEffect } from 'react';
import { getTeams, getTeamsEast, getTeamsWest } from '../services/teams.js';
import AccordionItem from './AccordionItem.jsx';

export default function Accordion({ teams }) {
  const [teams1, setTeams1] = useState([])

  useEffect(() => {
    fetchTeams()
  }, [])

  async function fetchTeams() {
    const allTeams = await getTeams()
    setTeams1(allTeams)
  }

  async function fetchTeamsEast() {
    const allTeams = await getTeamsEast()
    setTeams1(allTeams)
  }

  async function fetchTeamsWest() {
    const allTeams = await getTeamsWest()
    setTeams1(allTeams)
  }
  return (
    <section className='info'>
      {teams1.map((team) => (
        <AccordionItem key={team._id} {...team} />
      ))}
    </section>
  );
};