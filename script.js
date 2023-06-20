const catalogo = [
  {
    img: "./assets/casa.jpg",
    nome: "Casa",
    tipo: "Casa",
    descricao: "Residência unifamiliar com dois quartos e um jardim.",
    preco: "250.000", //R$
    area: "150", //m2
    quartos: 2,
    banheiros: 2,
    garagem: true,
  },
  {
    img: "./assets/prediodeap.jpg",
    nome: "Prédio de Apartamentos",
    tipo: "Apartamento",
    descricao: "Edifício com vários apartamentos residenciais.",
    preco: "1.500.000", //R$
    area: "1.000", //m2
    apartamentos: 20,
    andares: 5,
    elevador: true,
  },
  {
    img: "./assets/escritorio.jpg",
    nome: "Escritório",
    tipo: "Comercial",
    descricao: "Espaço comercial para fins de escritório.",
    preco: "500.000", //R$
    area: "300", //m2
    salas: 10,
    banheiros: 4,
    estacionamento: true,
  },
  {
    img: "./assets/loja.jpg",
    nome: "Loja",
    tipo: "Comercial",
    descricao: "Espaço comercial para venda de produtos.",
    preco: "350.000", //R$
    area: "200", //m2
    vitrine: true,
    estoque: "grande",
  },
  {
    img: "./assets/apdeluxo.jpg",
    nome: "Apartamento de Luxo",
    tipo: "Apartamento",
    descricao: "Unidade residencial de alto padrão com vista para o mar.",
    preco: "2.000.000", //R$
    area: "250", //m2
    quartos: 3,
    banheiros: 3,
    garagem: true,
  },
  {
    img: "./assets/galpaoindustrial.jpg",
    nome: "Galpão Industrial",
    tipo: "Comercial",
    descricao: "Espaço amplo para fins industriais e de armazenamento.",
    preco: "800.000", //R$
    area: "500", //m2
    escritorios: 2,
    banheiros: 2,
    acessoCaminhoes: true,
  },
  {
    img: "./assets/restaurante.jpg",
    nome: "Restaurante",
    tipo: "Comercial",
    descricao: "Estabelecimento gastronômico com área de jantar e cozinha.",
    preco: "600.000", //R$
    area: "400", //m2
    mesas: 20,
    cozinhas: 2,
    bar: true,
  },
  {
    img: "./assets/edificiocomercial.jpg",
    nome: "Edifício Comercial",
    tipo: "Comercial",
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

const modal = document.getElementById("modal");


/**
 * Função que cria elementos.
 * (o content é opcional)
 * 
 * Ex.:
 * 
 * Criando um elemento sem content e sem atributos:
 * ```
 *  const div = CriaElemento("div");
 * ```
 * No HTML, equivale a:
 * ```
 *  <div> </div>
 * ```
 * ---------------------------------------
 * Criando um elemento com content e sem atributos:
 * ```
 *  const titulo = CriaElemento("h1", "Seu título aqui");
 * ```
 * No HTML, equivale a:
 * ```
 *  <h1>Seu título aqui</h1>
 * ```
 * ---------------------------------------
 * Criando um elemento sem content e com atributos:
 * ```
 *  const div-modal = CriaElemento("div", null, "id", "modal");
 * ```
 * No HTML, equivale a: 
 * ```
 * <div id="modal"> </div>
 * ```
 * ---------------------------------------
 * Criando um elemento com content e com atributos:
 * ```
 *  const button = CriaElemento("button", "Saber mais", "onClick", "abrirSaberMais()");
 * ```
 * No HTML, equivale a:
 * ```
 * <button onclick = "abrirSaberMais()">Saber mais</button>
 * ```
 * 
*/
function CriaElemento(elemento, content = null, atributo = null, valorAtt = null) {
  let elemt = document.createElement(elemento);
  elemt.textContent = content;

  if (atributo === null || valorAtt === null) return elemt;

  elemt.setAttribute(atributo, valorAtt);
  return elemt
}

/**
 * Fechar modal
 * 
 * Ex.:
 * 
 *  Chamando a função:
 * ```
 *  fechaModal();
 * ``` 
 * 
 *  Atribuindo ao click de um botão:
 * ```
 *  botaoFechar.setattribute("onClick", "fechaModal()");
 * ``` 
 */
function fechaModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"
}

/**
 * Função que abre a modal do catálogo.
 * 
 * Ex.:
 * ```
 *  ModalCatalog(props); 
 * ```
 */
function ModalCatalog() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  modal.innerHTML = ""

  const modalContainer = CriaElemento("div", null, "class", "modal-container");
  const modalContent = CriaElemento("div", null, "class", "modal-content");

  const header = CriaElemento("header");
  const botaoFechar = CriaElemento("button", null, "onClick", "fechaModal()");
  const iconBotaoFechar = CriaElemento("i", null, "class", "fas fa-times");

  const sectionCards = CriaElemento("section", null, "class", "section-cards");

  const footer = CriaElemento("footer", null, "class", "footer-modal");
  CriaInsignea()

  botaoFechar.append(iconBotaoFechar)
  header.append(botaoFechar);
  modalContent.append(header, sectionCards, footer);
  modalContainer.append(modalContent);
  modal.append(modalContainer);
  console.log(modalContainer);

  CriaCard()
}

/**
 * Função que cria cards do catálogo
 * Ex.:
 * ```
 *  CriaCard()
 * ```
 */
function CriaCard() {
  const sectionCards = document.querySelector(".section-cards");
  sectionCards.innerHTML = ""

  catalogo.map(item => {

    const card = CriaElemento("div", null, "class", "card");
    const divImgCard = CriaElemento("div", null, "class", "div-img-card");
    const divInfosCard = CriaElemento("div", null, "class", "div-infos-card");
    const imgCard = CriaElemento("img", null, "src", item.img);
    const titulo = CriaElemento("strong", item.nome);
    const descricao = CriaElemento("p", item.descricao);
    const area = CriaElemento("span", `Área: ${item.area}m²`);
    const preco = CriaElemento("strong", `R$${item.preco},00`, "class", "preco-catalogo");

    divImgCard.append(imgCard)
    divInfosCard.append(titulo, descricao, area, preco)
    card.append(divImgCard, divInfosCard);
    sectionCards.append(card);

  })
}

function CriaInsignea() {
  const footer = document.querySelector(".footer-modal");

  const quantidade = 1
  /* 
    Utilizando o médoto reduce para reduzir informações do catálogo,
    buscando pelo tipo do item, e quantos itens do catálogo possuem o mesmo tipo

    Exemplo: { Apartamentos: 2 } --> { tipo: quantidade }
    [{tipo:apartamento, quantidade:2}]
  */
  const insigneas = Object.entries(
    //prev, next, index, arr => arguments
    catalogo.reduce((prev, next) => {
      const { tipo } = next;
      if (!!prev[tipo]) {
        prev[tipo].quantidade += 1;
      } else {
        prev[tipo] = { tipo, quantidade };
      }

      console.log(tipo+ ', '+ quantidade)
      console.log(prev)
      return prev;
    }, {})
  ).map(([tipo, quantidade]) => {

    console.log(quantidade.quantidade)
    // footer.innerHTML = '';

    const insignea = CriaElemento("div", null, "class", "insignea");
    const tipoSpan = CriaElemento("span", tipo)

    return insignea
  })/*.forEach(insignea => footer.append(...insignea))*/;
  //foreach dando erro

  

  console.log(insigneas)
    footer.append(...insigneas);




}


