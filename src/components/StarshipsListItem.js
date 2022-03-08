import { useState, useEffect } from "react";

import Pilot from './Pilot'

function StarshipsListItem(props) {
  const { starship } = props;

  const [pilots, setPilots] = useState("")

  useEffect(() => {
    if(starship.pilots === []) return
    setPilots(starship.pilots)
    } , [starship])


  return <li>{starship.name} - Pilots: {pilots === "" ? "None" : pilots.map(pilot => <Pilot pilot={pilot}/>)}</li>;
}

export default StarshipsListItem;
