import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  return (
    <>
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
