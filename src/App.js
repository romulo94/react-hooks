import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('@hooks/tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem('@hooks/tech', JSON.stringify(tech));
  }, [tech]);

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
