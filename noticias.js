
// Datos simulados de noticias
const noticiass = [
    {
        titulo: "Nicaragua: Represión podría afectar censo nacional, según sociólogos",
        imagen: "noticiasact/nicaragua.jpeg", // 
        resumen: "Los sociólogos advierten que la represión del régimen de Ortega podría disuadir a los nicaragüenses de participar en el censo nacional que comienza el 30 de abril.",
        enlace: "https://www.laprensani.com/"
      },
      {
        titulo: "Berlín rechaza acusación de Nicaragua sobre armas a Israel",
        imagen: "noticiasact/berlin.jpg", // 
        resumen: "El gobierno alemán negó las acusaciones de Nicaragua de que violó la Convención de Ginebra al facilitar armas a Israel en el conflicto con Hamás.",
        enlace: "https://www.dw.com/es/actualidad/s-30684"
      },
      {
        titulo: "Ayuso reabre debate sobre Palestina que Feijóo intentó zanjar",
        imagen: "noticiasact/ayuso.avif", // 
        resumen: "La presidenta de la Comunidad de Madrid, Isabel Díaz Ayuso, ha reabierto el debate sobre el reconocimiento de Palestina como Estado independiente, un tema que el presidente del PP, Alberto Núñez Feijóo, había intentado zanjar en el Congreso.",
        enlace: "https://english.elpais.com/" 
      },
      {
        titulo: "Noruega se suma a España y se declara 'lista para reconocer al Estado palestino'",
        imagen: "noticiasact/noruega.jpg", // 
        resumen: "Noruega se ha sumado a España y se ha declarado 'lista para reconocer al Estado palestino', una nueva muestra del apoyo europeo a la causa palestina.",
        enlace: "https://english.elpais.com/"
      },
      {
        titulo: "El INE da seis horas a AMLO para que elimine un anuncio de su conferencia",
        imagen: "noticiasact/mexico.jpg", // 
        resumen: "El Instituto Nacional Electoral (INE) de México ha dado un plazo de seis horas al presidente Andrés Manuel López Obrador para que elimine de sus redes sociales un anuncio de su conferencia del pasado 5 de febrero, que considera propaganda electoral.",
        enlace: "https://english.elpais.com/"
      }
  
  ];
  
  // Función para cargar las noticias destacadas 
  function cargarNoticias() {
    const noticiasDestacadasContainer = document.getElementById("noticias-destacadas");
    noticiass.forEach(noticia => {
        const noticiaHTML = `
            <div class="noticia">
                <img src="${noticia.imagen}" alt="${noticia.titulo}">
                <div class="contenido-noticia">
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.resumen}</p>
                    <a href="${noticia.enlace}" target="_blank">Leer más</a>
                </div>
            </div>
        `;
        noticiasDestacadasContainer.innerHTML += noticiaHTML;
    });
  }
  
  // Llama a la función para cargar las noticias destacadas al cargar la página
  window.onload = cargarNoticias;

