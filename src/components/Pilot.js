import { useState, useEffect } from "react";

function Pilot(props) {
  const { pilot } = props;

  const [pilotName, setPilotName] = useState('')
  
  useEffect(() => {
    fetch(pilot)
    .then(res => res.json())
    .then(json => {
        setPilotName(json.name)
    })
    } , [pilot])


  return <span>{pilotName}, </span>;
}

export default Pilot;