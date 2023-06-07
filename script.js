const catalogo =[
    {
        img: "./assets/casa.jpg",
        nome: "Casa",
        tipo: ["Casa"],
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
        tipo: ["Prédio", "Apartamento"],
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
        tipo: ["Comercial"],
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
        tipo: ["Comercial"],
        descricao: "Espaço comercial para venda de produtos.",
        preco: "350.000", //R$
        area: "200", //m2
        vitrine: true,
        estoque: "grande",
      },
      {
        img: "./assets/apdeluxo.jpg",
        nome: "Apartamento de Luxo",
        tipo: ["Apartamento"],
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
        tipo: ["Comercial"],
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
        tipo: ["Comercial"],
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
        tipo: ["Apartamento", "Comercial"],
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
 *  const div-modal = CriaElemento("div", null, {id: "modal"});
 * ```
 * No HTML, equivale a: 
 * ```
 * <div id="modal"> </div>
 * ```
 * ---------------------------------------
 * Criando um elemento com content e com atributos:
 * ```
 *  const button = CriaElemento("button", "Saber mais", {onClick: "abrirSaberMais()"});
 * ```
 * No HTML, equivale a:
 * ```
 * <button onclick = "abrirSaberMais()">Saber mais</button>
 * ```
 * 
*/
function CriaElemento (elemento, content = null, atributo = null, valorAtt = null){
    let elemt = document.createElement(elemento);



    if( atributo === null || valorAtt === null ) {
        elemt.textContent = content;
        return elemt

    } else {
        elemt.textContent = content;
        elemt.setAttribute(atributo, valorAtt);
        return elemt
    }
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
function fechaModal(){
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
function ModalCatalog(){
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    modal.innerHTML = ""

    const modalContainer = CriaElemento("div");
    modalContainer.setAttribute("class", "modal-container");
    
    const modalContent = CriaElemento("div");
    modalContent.setAttribute("class", "modal-content");

    const header = CriaElemento("header");
    
    const botaoFechar = CriaElemento("button");
    botaoFechar.setAttribute("onClick", "fechaModal()");

    const iconBotaoFechar = CriaElemento("i");
    iconBotaoFechar.setAttribute("class", "fas fa-times");

    const sectionCards = CriaElemento("section");
    sectionCards.setAttribute("class", "section-cards");

    const footer = CriaElemento("footer");
    footer.setAttribute("class", "footer-modal");

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
function CriaCard(){
    const sectionCards = document.querySelector(".section-cards");
    sectionCards.innerHTML = ""

    catalogo.map(item =>{
    
        const card = CriaElemento("div");
        card.setAttribute("class", "card");
    
        const divImgCard = CriaElemento("div", null, {class: "div-img-card"});
        divImgCard.setAttribute("class", "div-img-card");
        
        const divInfosCard = CriaElemento("div");
        divInfosCard.setAttribute("class", "div-infos-card");
        
        const imgCard = CriaElemento("img");
        imgCard.setAttribute("src",  item.img)
    
        const titulo = CriaElemento("p", item.nome);
    
        divImgCard.append(imgCard)
        divInfosCard.append(titulo)
        card.append(divImgCard, divInfosCard);
        sectionCards.append( card);

    })
}


