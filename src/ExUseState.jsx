
import React from 'react'
import Produtox from './useState/Produtox';

const ExUseState = () => {
    const [dados, setDados] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);

    async  function handleClick(event) {
        setCarregando(true);
        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
        );
        const json = await response.json();
        setDados(json);
        setCarregando(false);
    }

  return (
    <div>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
            notebook
        </button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
            smartphone
        </button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
            tablet
        </button>
        {carregando && <p>Carregando...</p> }
        {!carregando && dados && <Produtox dados={dados} />}
    </div>
  )
}

export default ExUseState