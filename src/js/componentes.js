import '../css/componentes.css'

export const saludar = (nombre) => {
    console.log('Creando H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, Soy ${nombre} `
    document.body.append(h1)
}