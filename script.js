const catalogo =[
    {
        nome: "Casa",
        descricao: "Residência unifamiliar com dois quartos e um jardim.",
        preco: "250.000", //R$
        area: "150", //m2
        quartos: 2,
        banheiros: 2,
        garagem: true,
      },
      {
        nome: "Prédio de Apartamentos",
        descricao: "Edifício com vários apartamentos residenciais.",
        preco: "1.500.000", //R$
        area: "1.000", //m2
        apartamentos: 20,
        andares: 5,
        elevador: true,
      },
      {
        nome: "Escritório",
        descricao: "Espaço comercial para fins de escritório.",
        preco: "500.000", //R$
        area: "300", //m2
        salas: 10,
        banheiros: 4,
        estacionamento: true,
      },
      {
        nome: "Loja",
        descricao: "Espaço comercial para venda de produtos.",
        preco: "350.000", //R$
        area: "200", //m2
        vitrine: true,
        estoque: "grande",
      },
      {
        nome: "Apartamento de Luxo",
        descricao: "Unidade residencial de alto padrão com vista para o mar.",
        preco: "2.000.000", //R$
        area: "250", //m2
        quartos: 3,
        banheiros: 3,
        garagem: true,
      },
      {
        nome: "Galpão Industrial",
        descricao: "Espaço amplo para fins industriais e de armazenamento.",
        preco: "800.000", //R$
        area: "500", //m2
        escritorios: 2,
        banheiros: 2,
        acessoCaminhoes: true,
      },
      {
        nome: "Restaurante",
        descricao: "Estabelecimento gastronômico com área de jantar e cozinha.",
        preco: "600.000", //R$
        area: "400", //m2
        mesas: 20,
        cozinhas: 2,
        bar: true,
      },
      {
        nome: "Edifício Comercial",
        descricao: "Prédio com várias lojas e escritórios comerciais.",
        preco: "1.200.000", //R$
        area: "800", //m2
        lojas: 10,
        escritorios: 8,
        estacionamento: true,
      },
  ];

const btnCatalog = document.getElementById("catalog");
btnCatalog.setAttribute("onClick", "ModalCatalog()");


/**
 * 
 * @param {*} elemento 
 * @returns 
*/
function CriaElemento (elemento, content = ''){
    let elemt = document.createElement(elemento)
    elemt.textContent = content
    return elemt
}

function ModalCatalog(){
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    const modalContainer = CriaElemento("div");
    modalContainer.classList.add("modal-container");

    modal.append(modalContainer)
    console.log(modalContainer);

}