import '../../css/estilos.css'

function render(element, content, attributes = {}){   
    create(element, content, attributes)
}

function append(element){
    document.body.appendChild(element)
}

const create = (element, content, attributes) =>{
        const el = document.createElement(element)
        el.textContent = content
        el.setAttribute(attributes.name, attributes.value)               
        append(el)
}

export default render