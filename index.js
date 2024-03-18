const pedido = document.querySelector(".pedido");
const aceitado = document.querySelector(".aceitado");
const botoes = document.querySelectorAll(".botoes button");

let perguntas = [
  "Tem certeza disso?",
  "De verdade?",
  "Certeza absoluta?",
  "Certeza mesmo?",
  "Certeza certeza de verdade?",
  "Ta completamente convencida?",
  "Tem alguma dúvida sobre isso?",
  "Pode pensar um pouco se quiser",
  "Tem certeza absoluta ou ainda tem alguma margem de dúvida?",
  "Você tem total confiança disso?",
  "Posso confiar plenamente nessa afirmação?",
  "Você tem total convicção?",
  "Não há espaço para questionamentos?",
  "Ta convencida sem sombra de dúvidas?",
  "Você não ta apenas supondo?",
  "Sério mesmo?",
  "Última chance",
  "Última última chance mesmo",
  "Só mais uma chance",
  "0,5 chances",
  "0,1 chances",
  "0,001 chances",
  "0,00001 chances",
  "Depois dessa não tem volta",
  "To avisando, não tem volta",
  "Não quer pensar denovo?",
  "Nem um pouquinho mais?",
  "Só um tiquinho?",
  "Essa é uma verdade incontestável para você?",
  "Tem total clareza sobre isso?",
  "Ta decidida mesmo?",
  "Tem total fé nessa informação?",
  "Não ta apenas supondo?",
  "Não tem nenhuma suspeita sobre isso?",
  "Não tem a menor chance de estar errada?",
  "Não pode reconsiderar?",
  "Afirma isso com total certeza?",
  "Não tem espaço na sua mente para uma outra decisão talvez?",
  "Vou te dar 10 chances",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Ainda continua apertando o botão?",
  "Pensa denovo"
];

function aceitar() {
   aceitado.style.display = "flex";
   pedido.style.display = "none";
}

function recusar() {
  let tamanhoPerguntas = perguntas.shift();
  perguntas.push(tamanhoPerguntas);
  botoes[1].innerText = tamanhoPerguntas;
}