import { useState, useEffect } from 'react';
import { getTeams, getTeamsEast, getTeamsWest } from '../services/teams.js';
import Team from '../components/Team.jsx';
import Conferences from '../components/Conferences.jsx';
import Accordion from '../components/Accordion.jsx';

export default function Teams() {
  return (
    <div>
      <Conferences />
      <Accordion />
    </div>
  )
}