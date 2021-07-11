const albuns = require('./database')
//console.log(albuns)

// pegar o input 

console.log('Seja bem-vindx ao Jukebox do Metal!')

const readline = require('readline-sync')

const entradaInicial = readline.question('\nInserir moeda => S\nApenas ver discografia => N\n')

// se for Sim, a gente mostra os generos disponiveis
// e a gente pergunta qual ela quer

// se escolher Nao, a gente mostra todos os albuns
// em ordem crescente por ano

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('\nEsses sao os generos disponiveis:\n')
    console.log('>| Death Metal\n>| Power Metal\n>| Thrash Metal\n>| Progressive Metal\n')

    const entradaGenero = readline.question('Qual genero voce prefere?\n')
    const retorno = albuns.filter(albuns => albuns.genero === entradaGenero)

    console.log('')
    console.table(retorno)
} else {
    const albunsOrdenados = albuns.sort((a, b) => a.ano - b.ano)
    console.log('\nEstes sao os albuns disponiveis:\n')

    console.log('')
    console.table(albunsOrdenados)
}