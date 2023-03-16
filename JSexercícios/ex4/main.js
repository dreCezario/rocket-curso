/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategorias = booksByCategory.length
console.log(totalCategorias)

for (let category of booksByCategory){
    console.log(`Total de livors na categoria ${category.category}`)
    console.log(category.books.length)
}

function contandoAutores () {
    let autores = []

    for (let category of booksByCategory){
        for (let book of category.books){
            if(autores.indexOf(book.author) == -1) {
                autores.push(book.author)
            }
           
        }
    }

    console.log('O total de autores é de ' + autores.length)
}

contandoAutores()


function contandoLivrosDoAugustoCurry () {
    let livros = []

    for (let category of booksByCategory){
        for (let book of category.books){
            if((book.author) === 'Augusto Cury') {
                livros.push(book.title)
            }
           
        }
    }

    console.log('O total de livros de Augusto Curry é de ' + livros.length + ' livros')
}

contandoLivrosDoAugustoCurry()

function trazendoLivrosDoAutor (autorLivro) {
    let livros = []

    for (let category of booksByCategory){
        for (let book of category.books){
            if((book.author) === autorLivro) {
                livros.push(book.title)

            }
           
        }
    }

    console.log('O total de livros do ' + autorLivro + 'é de ' + livros.length + ' livro(s), e o título é ' + livros)
}

trazendoLivrosDoAutor('T. Harv Eker')