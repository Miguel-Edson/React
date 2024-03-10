function Pessoa ({nome, idade, profissao, foto, genero}) {

    return (
        <div>
            <img src = {foto} alt = {nome}/>
            <h2>Nome:{nome}</h2>
            <p>Genero:{genero}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa