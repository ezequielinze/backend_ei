import { Button } from "bootstrap"
import './codigo.scss'




function Codigo() {

  // const mascotas = []
  // const libros = []

  class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre
      this.apellido = apellido
      this.libros = libros
      this.mascotas = mascotas
    }

    //listo
    getFullName() {
      console.log('Nombre:' + `${this.nombre}` + ' Apellido:' + `${this.apellido}`)
    }

    //listo
    addMascota(e) {
      this.mascotas.push(e)
    }

    //listo
    countMascotas() {
      console.log('cantidad de mascotas de ' + `${this.nombre}` + ':' + this.mascotas.length)
    }

    //listo
    addBook(nombre, autor) {
      this.libros.push({ libro: nombre, autor: autor })
    }

    //listo
    getBookName() {
      const NombreLibro = this.libros.map((e) => e.libro)
      console.log(`${this.nombre}` + ' lee estos libros:')
      console.log(NombreLibro)
    }

  }
  // class: nombre, apellido, libros, mascotas
  const usuario1 = new Usuario('Pepe', 'Perez', [], [])
  const usuario2 = new Usuario('Juan', 'Ramirez', [], [])

  usuario1.addMascota('perrito')
  usuario1.countMascotas()
  usuario1.addBook('libro1', 'autor1')
  usuario1.addBook('libro2', 'autor2')
  usuario1.addBook('libro3', 'autor3')
  usuario1.getFullName()
  usuario1.getBookName()

  usuario2.addMascota('gato')
  usuario2.addMascota('loro')
  usuario2.countMascotas()
  usuario2.addBook('libro4', 'autor4')
  usuario2.getFullName()
  usuario2.getBookName()



























  return (
    <div className="conteiner fondo">
      <h1 className="text-center">Hola Ezequiel!!</h1>
      <button className="btn btn-primary">boton</button>
    </div>



  )



}

export default Codigo