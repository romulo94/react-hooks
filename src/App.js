import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

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

  const techSize = useMemo(() => tech.length, [tech]);

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
      <br />
      <strong>Você tem {techSize} tecnologias</strong>
    </>
  );
}

export default App;
