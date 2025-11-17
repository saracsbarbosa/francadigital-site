const seletorCor = document.getElementById("seletorCor");
const btnAplicarCor = document.getElementById("btnAplicarCor");

btnAplicarCor.addEventListener("click", (e) => {
    const cor = seletorCor.value;
    document.documentElement.style.setProperty("--cor-fundo", cor);
});

const chips = document.querySelectorAll(".chip");
const galeria = document.getElementById("galeriaHero");
const imagemInicial = chips[0].dataset.imagem;
galeria.style.backgroundImage = `url(${imagemInicial})`;

// forEach: para cada objeto ele vai repetir
chips.forEach((chip) => {
    chip.addEventListener("click", () => {
        galeria.classList.add("ativa");
        galeria.style.backgroundImage = `url(${chip.dataset.image})`;
    })
})