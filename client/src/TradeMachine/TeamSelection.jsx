import React, { useState, useEffect } from 'react';
import DropDown from './Dropdown.jsx'
import ListNBATeams from '../../../NBATeams.js'

const TeamSelection = () => {

  const [dropDown, setDropDown] = useState([ <DropDown />, <DropDown /> ])
  const [teamName, setTeamName] = useState([ 'Atlanta Hawks', 'Atlanta Hawks'])

  const handleAddTeam = () => {
    setDropDown([...dropDown, <DropDown />])
    setTeamName([...teamName, 'Atlanta Hawks'])
  }

  const handleRemoveTeam = (index) => {
    let tempDropDown = [...dropDown]
    tempDropDown.splice(index, 1)

    let tempTeamName = [...teamName]
    tempTeamName.splice(index, 1)

    setDropDown(tempDropDown)
    setTeamName(tempTeamName)
  }

  const changeTeamName = (name, index) => {
    let tempTeamName = [...teamName]
    tempTeamName[index] = name
    setTeamName(tempTeamName)
  }

  return (
    <div>
      {dropDown.map((team, index) => {
        return  (
          <div key= {index}>
            <span>{<DropDown teamName= {teamName} changeTeamName= {changeTeamName} index= {index} list= {ListNBATeams}/>}</span>
            {dropDown.length >1 &&<button onClick= {() => handleRemoveTeam(index)}>Remove Team</button>}
          </div>
        )
      })}
      {dropDown.length < 4 && <button onClick= {handleAddTeam}>Add One More!</button>}
    </div>
  )
}

export default TeamSelection
