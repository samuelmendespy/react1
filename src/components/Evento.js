function Evento({numero}) {

    function meuEvento() {
        console.log(`Hello ${numero}`)
    }

    return (
        <div>
            <p>Clique para confirmar {numero}:</p>
            <button onClick={meuEvento}>Confirmar</button>
        </div>
    )
}

export default Evento