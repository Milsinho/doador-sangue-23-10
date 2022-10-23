function verificar() {

    const valueDoador = document.getElementById("inputDoador").value;
    const spanRecebedor = document.getElementById("spanRecebedor")

    spanRecebedor.texContent = obtemReceber(valueDoador.toUpperCase());
}

function obtemRecebedor(Doador) {
    switch (Doador) {
        case "A":
            return "A e AB";
        case "B":
            return 'B e AB';
        case "AB":
            return 'AB';
        case "O":
            return 'A, B, AB e O';
        default:
            return "tipo inválido"
    }
}
