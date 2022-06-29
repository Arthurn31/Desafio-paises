//Declaração de variaveis
const url = 'https://restcountries.com/v2/all'
var paises = document.querySelector('#tabCountries')
var mostrarF = document.querySelector('#tabFavorites')
var populacao = document.querySelector('#totalPopulationList')
var populacaoF = document.querySelector('#totalPopulationFavorites')
var contador = document.querySelector('#countCountries')
var contadorF = document.querySelector('#favoritoscount')
var pesquisar = document.querySelector('#pesquisar')
var pesquisarF = document.querySelector('#pesquisarF')
var favoritos = []
var ArrPais = []

fetch(url)
  .then(promise => promise.json())
  .then(resul => {
    resul.forEach(a => {
      ArrPais.push(a)
    })
    tela()
  })
//Função para exibir paises
function tela() {
  var p
  var soma = 0
  var count = 0
  console.log(ArrPais)
  ArrPais.forEach((element, i) => {
    if (element != '') {
      soma += parseInt(element.population)
      count++
      p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
        element.numericCode
      }</td><td>${element.name}</td><td>${
        element.region
      }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
    }
    contador.innerHTML = count
    paises.innerHTML = p
    populacao.innerHTML = soma.toLocaleString()
  })
}
//Função para mostrar na tela de favoritos
function mostrarTelaf() {
  var paisf
  var soma = 0
  var counte = 0
  favoritos.forEach((element, i) => {
    if (element != '') {
      soma += parseInt(element.population)
      counte++
      paisf += `
      <tr><td><img src="${element.flag}" width="50px"></td> <td>${
        element.numericCode
      }</td><td>${element.name}</td>
      <td>${
        element.region
      }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favoritos('${i}')"> -</button></td> </tr>
      `
    }
  })
  contadorF.innerHTML = counte
  mostrarF.innerHTML = paisf
  populacaoF.innerHTML = soma.toLocaleString()
}

function tela_favorito(pais) {
  favoritos[pais] = ArrPais[pais]
  ArrPais[pais] = ''
  mostrarTelaf()
  tela()
}
function tela_favoritos(pais) {
  ArrPais[pais] = favoritos[pais]
  favoritos[pais] = ''
  mostrarTelaf()
  tela()
}
// função para pesquisar
var valor_pesquisa
pesquisar.addEventListener('input', () => {
  valor_pesquisa = pesquisar.value
  aparecer(valor_pesquisa)
})
function aparecer(aparece) {
  var p
  var soma = 0
  var count = 0
  ArrPais.forEach((element, i) => {
    if (element != '') {
      if (element.name.startsWith(aparece)) {
        soma += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
      }
    }
    contador.innerHTML = count
    paises.innerHTML = p
    populacao.innerHTML = soma.toLocaleString()
  })
}
function aparecerF(aparece) {
  var p
  var soma = 0
  var count = 0
  favoritos.forEach((element, i) => {
    if (element != '') {
      if (element.name.startsWith(aparece)) {
        soma += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> -</button></td> </tr>
      `
      }
    }
    contador.innerHTML = count
    mostrarF.innerHTML = p
    populacao.innerHTML = soma.toLocaleString()
  })
}
function regiao(continente) {
  var p
  var soma = 0
  var count = 0
  ArrPais.forEach((element, i) => {
    if (element != '') {
      if (element.region == continente) {
        soma += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
      }
    }
    contador.innerHTML = count
    paises.innerHTML = p
    populacao.innerHTML = soma.toLocaleString()
  })
}
document.querySelector('#BtnAmericas').addEventListener('click', () => {
  regiao('Americas')
})
document.querySelector('#BtnEuropa').addEventListener('click', () => {
  regiao('Europe')
})
document.querySelector('#BtnOceania').addEventListener('click', () => {
  regiao('Oceania')
})
document.querySelector('#BtnAfrica').addEventListener('click', () => {
  regiao('Africa')
})
document.querySelector('#BtnAsia').addEventListener('click', () => {
  regiao('Asia')
})
document.querySelector('#Polos').addEventListener('click', () => {
  regiao('Polar')
})
function regiaoF(continenteF) {
  var p = ''
  var soma = 0
  var count = 0
  favoritos.forEach((element, i) => {
    if (element != '') {
      if (element.region == continenteF) {
        console.log('entrou')
        soma += parseInt(element.population)
        count++
        p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
          element.numericCode
        }</td><td>${element.name}</td><td>${
          element.region
        }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
      }
    }
    contadorF.innerHTML = count
    mostrarF.innerHTML = p
    populacaoF.innerHTML = soma.toLocaleString()
  })
}
document.querySelector('#BtnAmericasF').addEventListener('click', () => {
  regiaoF('Americas')
})

document.querySelector('#BtnEuropaF').addEventListener('click', () => {
  regiaoF('Europe')
})
document.querySelector('#BtnOceaniaF').addEventListener('click', () => {
  regiaoF('Oceania')
})
document.querySelector('#BtnAfricaF').addEventListener('click', () => {
  regiaoF('Africa')
})
document.querySelector('#BtnAsiaF').addEventListener('click', () => {
  regiaoF('Asia')
})
document.querySelector('#PolosF').addEventListener('click', () => {
  regiaoF('Polar')
})
//função pesquisar nos favoritos
var valor_pesquisaF
pesquisarF.addEventListener('input', () => {
  valor_pesquisaF = pesquisarF.value
  aparecerF(valor_pesquisaF)
})
