import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import './assets/estilos-adicionales.css';
import './App.css';

function App() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('/assets/bootstrap-studio-exported.html')
      .then((response) => response.text())
      .then((data) => setHtml(data))
      .catch((error) => console.log(error));
  }, []);

  return <div>{parse(html)}</div>;
}

export default App;

