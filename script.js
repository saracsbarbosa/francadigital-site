
const campoNome = document.getElementById("campo-nome");
campoNome.addEventListener("input", (e) => {
    console.log(e.target.value);
});

const caixa = document.getElementById("caixa");
// caixa.innerHTML = "<h2>Conteúdo adicionado via JavaScript</h2>";

const botao = document.getElementById("bnt");
const mensagem = document.getElementById("mensagem");
botao.addEventListener("click", (e) => {
    const valor = campoNome.value;
    mensagem.textContent = "Oiii " + valor;
});
