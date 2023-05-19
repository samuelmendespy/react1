function Form() {
    function confirmarEnvio(e) {
        e.preventDefault()
        console.log("Suas informações foram enviadas")
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={confirmarEnvio}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Confirmar"/>
                </div>
            </form>
        </div>
    )
}

export default Form