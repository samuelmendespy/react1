import Button from './Button'

function Evento({numero}) {

    function meuEvento() {
        console.log(`Hello ${numero}`)
    }

    return (
        <div>
            <p>Clique para confirmar {numero}:</p>
            <Button event={meuEvento()} text="Primeiro Evento" />
        </div>
    )
}

export default Evento