livro={titulo:"catalogo de livros",autor:"Nicolas Matheus",ano:2023,genero:"estudo de caso"}
const catalogo=[livro]
const listav=[]
console.log(catalogo)

const Fcatalogo=[...catalogo]

const adicionarLivro=(titulo,autor,ano,genero,lista=Fcatalogo)=>{
  const nlivro=lista.push({titulo:titulo,autor:autor,ano:ano,genero:genero})
  return lista
  }
adicionarLivro("Orgulho e Preconceito","Jane Austen",1984,"drama")
adicionarLivro("1984","George Orwell",1949,"drama politico")


const listarLivros=(lista=Fcatalogo)=>lista.map((x)=>x)
console.log(listarLivros())

const buscarPorGenero=(genero)=>Fcatalogo.filter((x)=>{
  const nlivro=Fcatalogo.push()
  return x.genero==genero})

console.log(buscarPorGenero('drama'))

const f2catalogo=[...Fcatalogo]

const removerLivro=(titulo,listaf=f2catalogo,listav2=listav)=>{
  const nlista=listav2.push(f2catalogo.filter((x)=>x.titulo.toUpperCase()==titulo.toUpperCase()))
  const concatlista=listav2.reduce((x,acc)=>acc.concat(x))
  const filtrados=f2catalogo.filter((x)=>x=concatlista.indexOf(x)==-1)
  return filtrados
}
   
console.log(removerLivro('1984'))


