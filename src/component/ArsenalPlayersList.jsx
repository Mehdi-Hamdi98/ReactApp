import React, { useState, useEffect } from 'react';

function ArsenalPlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal')
      .then(response => response.json())
      .then(data => {setPlayers(data.player);
        })
      .catch(error => console.error('Error fetching Arsenal players', error));
  }, []);

  return (
    <div>
      <h2>Arsenal Players:</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.idPlayer}>
              <td>{player.strPlayer}</td>
              <td>{player.strNationality}</td>
              <td>{player.strPosition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArsenalPlayersList;
