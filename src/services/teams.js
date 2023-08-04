import api from "./apiConfig.js"

export const getTeams = async () => {
  try {
    const response = await api.get("/teams")
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const getTeamsEast = async () => {
  try {
    const response = await api.get("/teams/east")
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const getTeamsWest = async () => {
  try {
    const response = await api.get("/teams/west")
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const getTeam = async (id) => {
  try {
    const response = await api.get(`/teams/${id}`)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const createTeam = async (teamData) => {
  try {
    const response = await api.post("/teams", teamData)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const updateTeam = async (id, teamData) => {
  try {
    const response = await api.put(`/teams/${id}`, teamData)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}

export const deleteTeam = async (id) => {
  try {
    const response = await api.delete(`/teams/${id}`)
    return response.data
  } catch (error) {
    console.error("Error: ", error)
  }
}