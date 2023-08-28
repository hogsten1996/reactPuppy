
import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './index.css'

function App() {

  const liStyle = {
    color: 'red',
  };

  
  const [puppies, setPuppies] = useState(puppyList)
  
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(featuredPup)

  console.log(puppies)

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
           })
       }
       {featPupId && (
        <div>
          <h2 className="pupName">{featuredPup.name}</h2>
          <ul>
            <li style={liStyle}>Age: {featuredPup.age}</li>
            <li style={liStyle}>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
