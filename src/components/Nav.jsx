import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Teams</NavLink>
      <NavLink to="/add-team">Add New Team</NavLink>
    </nav>
  )
}