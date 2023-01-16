const ul = document.querySelector('.albuns-encontrados')
let arrayExibido = products
const inputRange = document.querySelector('.input-range')





function adiconandoEventoClick () { 

    document.addEventListener('click',  (e) => {
        const el = e.target


        if (el.classList.contains('generos-musicais')) {
            let index = categories.indexOf(el.id)

            if (index == 0) {


                arrayExibido = products
            
                renderizandoCards(arrayExibido)

            } 

            else {
                
              let arrayFiltrada = products.filter((objeto) => {
                    return objeto.category == index
                })
                arrayExibido = arrayFiltrada
                renderizandoCards(arrayExibido)
                
                
            } 
        }
    })
    
}

adiconandoEventoClick()


function adicionandoEventoAORange () {

    document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('input-range')){
            let valueInputRange = inputRange.value
            
           let arrayExibidoValor = arrayExibido.filter((mercadoria) => {
               
               return mercadoria.price <= valueInputRange
            })
            
            renderizandoCards(arrayExibidoValor)
        }
            
        
    })
}
adicionandoEventoAORange()



function renderizandoCards (lista){

    ul.innerHTML = ""
    

    lista.forEach((element) => {

        const li = document.createElement('li')
        li.setAttribute('class', 'albuns')
        const imgAlbun = document.createElement('img')
        imgAlbun.setAttribute('class', 'img-album')
        const divAlbum = document.createElement('div')
        divAlbum.setAttribute('class', 'tags-albuns')
        const pBanda = document.createElement('p')
        pBanda.setAttribute('class', 'banda')
        const pAno = document.createElement('p')
        pAno.setAttribute('class', 'ano-lancamento')
        const h2NomeAlbum = document.createElement('h2')
        h2NomeAlbum.setAttribute('class', 'nome-album')
        const divFootCard = document.createElement('div')
        divFootCard.setAttribute('class', 'footer-card')
        const pPreco = document.createElement('p')
        pPreco.setAttribute('class', 'preco')
        const botaoComprar = document.createElement('button')
        botaoComprar.setAttribute('class', 'botao-comprar botao')
        botaoComprar.innerText = 'Comprar'

        imgAlbun.setAttribute('src', `${element.img}`)
        pBanda.innerText = `${element.band} `
        pAno.innerText = ` ${element.year}`
        h2NomeAlbum.innerText = `${element.title}`
        pPreco.innerText = `R$ ${element.price}`
        li.setAttribute('id', `${element.id}`)
        li.setAttribute('value', `${element.category}`)
        divAlbum.append(pBanda, pAno)
        divFootCard.append(pPreco, botaoComprar)
        li.append(imgAlbun, divAlbum, h2NomeAlbum,divFootCard)
        ul.appendChild(li)
        
     });    
}

renderizandoCards(arrayExibido)  

