import React from "react";
import Header from "./comp/Header";
import Home from "./comp/home";
import Produtos from "./comp/Produtos";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const ExComp = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <section>
      <Header />
      <Pagina/>
    </section>
  );
};

export default ExComp;
