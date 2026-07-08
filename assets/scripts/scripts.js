const linkSobre = document.querySelector(".sobre-btn");


linkSobre.addEventListener("click", () => {
    // 3. Altera o título da aba do navegador
    document.title = "Tec-Máquinas | Sobre";
});


const linkServicos = document.querySelector(".servicos-btn");

linkServicos.addEventListener("click", () => {
    document.title = "Tec-Máquinas | Segmentos";
});

const linkTrabalhos = document.querySelector(".trabalhos-btn");

linkTrabalhos.addEventListener("click", () => {
    document.title = "Tec-Máquinas | Trabalhos"
})


// Botão topo
const botao_topo = document.getElementById("btn-topo");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    const alturaTotalDoSite = document.documentElement.scrollHeight - window.innerHeight;
    const porcentagemRolada = (window.scrollY / alturaTotalDoSite) * 100;

    const footerTopo = footer.getBoundingClientRect().top;

    if (porcentagemRolada > 25 && footerTopo > window.innerHeight) {
        botao_topo.style.display = "inline-block";
    } else {
        botao_topo.style.display = "none";
    }
});

botao_topo.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const menu = document.querySelector(".nav_header");
const botaoMenu = document.querySelector(".menu-toggle");

botaoMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

document.querySelectorAll(".nav_header a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !botaoMenu.contains(e.target)
    ) {
        menu.classList.remove("active");
    }
});
const botaoWhatsapp = document.querySelector(".whatsapp-float");

window.addEventListener("scroll", () => {
    const footerTopo = footer.getBoundingClientRect().top;

    if (footerTopo <= window.innerHeight) {
        botaoWhatsapp.classList.add("hide");
    } else {
        botaoWhatsapp.classList.remove("hide");
    }
});