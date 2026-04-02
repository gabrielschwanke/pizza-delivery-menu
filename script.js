function pedir(sabor) {
const numero = "5599999999999"; // coloque o número do cliente
const mensagem = `Olá, quero pedir uma pizza de ${sabor}`;
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

window.open(url, '_blank');
}
