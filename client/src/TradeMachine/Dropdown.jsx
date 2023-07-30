import React, { useState, useEffect } from 'react';

const DropDown = ({ teamName, changeTeamName, index, list }) => {

  const [selectedTeam, setSelectedTeam] = useState('0');

  return (
    <select
      value= {teamName[index]}
      onChange={e => {
        setSelectedTeam(e.target.value)
        changeTeamName(e.target.value, index)
      }}
    >
      {list.map((team, index) => {
        return (
          <option value= {team.name} key= {index}>{team.name}</option>
        )
      })}
    </select>
  )
}

export default DropDown
