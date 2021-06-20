import React from 'react';

function Home(jogos) {
  console.log(jogos);

  return (
    <main>
      <h1>Top Jogos - JRDev</h1>

      <ol>
        {jogos.map((jogo, indice) => {
          const posicao = indice + 1

          return (
            <li key={jogos.name}>
              <span>
                <span className="indice">
                  {posicao}
                </span>
                <span>
                  {posicao === 1 && "🥇 "}
                  {posicao === 2 && "🥈 "}
                  {posicao === 3 && "🥉 "}

                  {jogo.nome}
                </span>
              </span>
              <img src={jogo.imagem_capa} alt={`Capa do jogo: ${jogo.nome}`} />
            </li>
          );

        })}
      </ol>

      <style jsx>{`

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }

        main {
          padding: 5%;
          max-width: 900px;
          margin: auto;
        }

        h1 {
          text-align: center;
          margin-bottom: 32px;
          color: #333;
        }

      `}

      </style>

    </main>
  );
}