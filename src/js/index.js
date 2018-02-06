import render from './render/renderDom'

class Persona {

    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad;
    }

    getDatos(){
        return `Hola ${this.nombre}`
    }
}

const persona1 = new Persona('Nicolas', 16)

render('h1', 'Hola!')
render('div', 'Hola!')
render('h3', 'Mis datos')
render('p', persona1.getDatos())
render('a', 'facebook', {name: 'href', value: 'www.facebook.es'})
render('p', 'eres puto!')
