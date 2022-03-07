import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import './App.css'


function getDateFromTimestamp(timestamp) {
  let date = new Date(timestamp);
  let currentDate = String(date.getDate()).padStart(2, "0") + "/" + String(date.getMonth()).padStart(2, "0") + "/" + date.getFullYear();
  return currentDate;
}

function getTimeFromTimestamp(timestamp) {
  let time = new Date(timestamp);
  let currentTime = String(time.getUTCHours()).padStart(2, "0") + ":" + String(time.getUTCMinutes()).padStart(2, "0");
  return currentTime;
}

function App() {
  const { data, isFetching } = useQuery('matches', async () => {
    const response = await axios.get('https://mocki.io/v1/697926f0-4999-4cd6-bd3e-fa876fdc4f4b')
    return response.data;
  })

  return (
    <div className="App">
      <ul>
        {isFetching && <p>Carregando...</p>}
        {data?.map(match => {
          return (
            <li key={match.id}>
              {match.team1 ? <strong>{match.team1?.name} X {match.team2?.name}</strong> : <strong>{match.title}</strong>}
              {match.format === "bo3" && <p>Melhor de 3</p>}
              {match.format === "bo1" && <p>Melhor de 1</p>}
              {match.date ? <p>Data:  {getDateFromTimestamp(match.date) + " " + getTimeFromTimestamp(match.date)}</p> : null}
              <p>{match.id}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
