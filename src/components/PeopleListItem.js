import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');

  useEffect(() => {
    fetch(person.homeworld)
      .then(res => res.json())
      .then(json => {
        setHomeworld(json.name)
      })
    
  }, [person]) 

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
