

document.addEventListener("DOMContentLoaded", function() {
  // Obtiene los elementos de menú desplegable

  var crisisDropdown = document.getElementById("dropdown-toggle-crisis");
  var crisisIcon = crisisDropdown.querySelector(".dropdown-icon");
  var crisisContent = crisisDropdown.querySelector(".dropdown-content");
  
  var recursosDropdown = document.getElementById("dropdown-toggle-recursos");
  var recursosIcon = recursosDropdown.querySelector(".dropdown-icon");
  var recursosContent = recursosDropdown.querySelector(".dropdown-content");
  
  // Función para cerrar el menú desplegable abierto
  function cerrarMenuDesplegable() {
      if (crisisContent.style.display === "block") {
          crisisContent.style.display = "none";
          crisisIcon.classList.remove("arrow-up");
          crisisIcon.classList.add("arrow-down");
      }
      
      if (recursosContent.style.display === "block") {
          recursosContent.style.display = "none";
          recursosIcon.classList.remove("arrow-up");
          recursosIcon.classList.add("arrow-down");
      }
  }
  document.addEventListener("click", function(event) {
    cerrarMenuDesplegable();
});
  // Agrega un evento de clic a cada elemento de menú desplegable
  crisisDropdown.addEventListener("click", function(event) {
      event.stopPropagation(); // Evita que el clic se propague al documento
      crisisDropdown.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      });
      
      // Cierra el menú de recursos si está abierto
      if (recursosContent.style.display === "block") {
          cerrarMenuDesplegable();
      }
      
      // Muestra u oculta el menú de crisis
      var isOpen = crisisContent.style.display === "block";
      crisisContent.style.display = isOpen ? "none" : "block";
      
      // Cambia la clase del ícono según el estado del menú desplegable
      crisisIcon.classList.toggle("arrow-up", !isOpen);
      crisisIcon.classList.toggle("arrow-down", isOpen);

     
  });
  
  recursosDropdown.addEventListener("click", function(event) {
      event.stopPropagation(); // Evita que el clic se propague al documento
      recursosDropdown.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      });
      
      // Cierra el menú de crisis si está abierto
      if (crisisContent.style.display === "block") {
          cerrarMenuDesplegable();
      }
      
      // Muestra u oculta el menú de recursos
      var isOpen = recursosContent.style.display === "block";
      recursosContent.style.display = isOpen ? "none" : "block";
      
      // Cambia la clase del ícono según el estado del menú desplegable
      recursosIcon.classList.toggle("arrow-up", !isOpen);
      recursosIcon.classList.toggle("arrow-down", isOpen);
  });
  
  // Agrega un evento de clic al documento para cerrar el menú desplegable si se hace clic fuera de él
  document.addEventListener("click", function(event) {
      cerrarMenuDesplegable();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos todos los enlaces del menú desplegable
  var dropdownLinks = document.querySelectorAll('.dropdown-content a');
  
  // Agregamos un evento de clic a cada enlace del menú desplegable
  dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          // Evitamos el comportamiento predeterminado del enlace
          event.preventDefault();
          
          // Obtenemos el ID de la sección a la que se debe desplazar
          var targetId = this.getAttribute('href').substring(1);
          
          // Obtenemos la altura del encabezado fijo
          var headerHeight = document.querySelector('header').offsetHeight;
          
          // Obtenemos el elemento objetivo (la sección)
          var targetElement = document.getElementById(targetId);
          
          // Calculamos la posición a la que se debe desplazar el elemento objetivo
          var offsetTop = targetElement.offsetTop - headerHeight;
          
          // Realizamos el desplazamiento suave
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const map = L.map('map', {
    center: [10, 0], // Centro del mapa en latitud 20, longitud 0
    zoom: 2, // Nivel de zoom inicial
    dragging: false, // Deshabilita el arrastre del mapa al principio
    scrollWheelZoom: false ,// Deshabilita el zoom con la rueda del ratón al principio
   
    
  });

  map.scrollWheelZoom.disable(); // Deshabilita el zoom con la rueda del ratón al principio
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  // Función para mostrar el mapa y los marcadores al hacer clic en el botón "Explorar Mapa"
  function mostrarmap() {
    var mapContainer = document.getElementById('map-container');

    // Ocultar el contenido de la sección, excepto el botón "Explorar mapa"
    var sectionElements = document.querySelectorAll('.section-1 > *:not(#explore-map-btn)');
    sectionElements.forEach(function(element) {
      element.style.display = 'none';
    });
    // Ocultar otras secciones si es necesario
    var otherSections = document.querySelectorAll('.us-container');
    otherSections.forEach(function(section) {
      section.style.display = 'none';
    });
    // Ocultar otras secciones si es necesario
    var otherSections = document.querySelectorAll('.notice-container');
    otherSections.forEach(function(section) {
      section.style.display = 'none';
    });
    
    // Ocultar otras secciones si es necesario
    var otherSections = document.querySelectorAll('.crisis-container');
    otherSections.forEach(function(section) {
      section.style.display = 'none';
    });
    
    var otherSections = document.querySelectorAll('.section-destacadas');
    otherSections.forEach(function(section) {
      section.style.display = 'none';
    });
    var footer = document.querySelector('footer');
    footer.style.display = 'none';

    // Habilitar el zoom con la rueda del ratón y el arrastre del mapa
    map.scrollWheelZoom.enable();
    map.dragging.enable();
    // Aplicar límite de zoom máximo
    map.options.minZoom = 2;
    // Mostrar el contenedor del mapa
    mapContainer.style.display = 'block';
    mapContainer.style.filter = "brightness(150%)";
    // Ajustar el tamaño del contenedor del mapa para que ocupe más espacio en la pantalla
    mapContainer.style.height = '115vh'; // Por ejemplo, puedes establecer el 80% de la altura visible del viewport
    mapContainer.style.width = '100%'; // Mantener el ancho al 100% del ancho de la ventana
    // Ajustar el tamaño del mapa para que ocupe todo el contenedor
    map.invalidateSize();
  }


  // Función para abrir el panel
  function abrirPanel(nombrePais, newsPais) {
    
    var panelContainer = document.querySelector('.panel-container');
    panelContainer.classList.remove('closed');
    panelContainer.classList.add('open');
     // Obtener el código ISO del país
  var countryCode = obtenerCodigoISO(nombrePais);
    // Mostrar la bandera del país
    var countryFlag = document.getElementById('country-flag');
    countryFlag.style.backgroundImage = 'url("https://flagcdn.com/w40/' + countryCode.toLowerCase() + '.png")';

    // Actualizar el contenido del panel con la información del país seleccionado
    var countryFlag = document.getElementById('country-flag');
    var countryName = document.getElementById('country-name');
    var countryInfoParagraph = document.getElementById('country-info');
 
    countryName.textContent = '';
    countryInfoParagraph.innerHTML = '';


    countryName.textContent = nombrePais;
  // Construir el HTML para la información del país
  var infoHTML = '';
  newsPais.forEach(news => {
    infoHTML += `<h3>${news.title}</h3>`;
    infoHTML += `<p>${news.summary}</p> <a href="${news.url}" target="_blank">Ver más</a></p>`;
  });
  countryInfoParagraph.innerHTML = infoHTML;

  

    // Mostrar los botones toggle al mostrar el panel
    var toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
      button.style.display = 'block';
    });
  }

  // Función para obtener el código ISO del país
function obtenerCodigoISO(nombrePais) {
  // Mapea el nombre del país con su código ISO
  var countryCodes = {
// AMERICA
    "Antigua y Barbuda": "AG",
    "Argentina": "AR",
    "Bahamas": "BS",
    "Barbados": "BB",
    "Belice": "BZ",
    "Bolivia": "BO",
    "Brasil": "BR",
    "Canadá": "CA",
    "Chile": "CL",
    "Colombia": "CO",
    "Costa Rica": "CR",
    "Cuba": "CU",
    "Dominica": "DM",
    "Ecuador": "EC",
    "El Salvador": "SV",
    "Estados Unidos": "US",
    "Granada": "GD",
    "Guatemala": "GT",
    "Guyana": "GY",
    "Haití": "HT",
    "Honduras": "HN",
    "Jamaica": "JM",
    "México": "MX",
    "Nicaragua": "NI",
    "Panamá": "PA",
    "Paraguay": "PY",
    "Perú": "PE",
    "República Dominicana": "DO",
    "San Cristóbal y Nieves": "KN",
    "San Vicente y las Granadinas": "VC",
    "Santa Lucía": "LC",
    "Surinam": "SR",
    "Trinidad y Tobago": "TT",
    "Uruguay": "UY",
    "Venezuela": "VE",
    "Puerto Rico": "PR",

    //EUROPA
    "Albania": "AL",
    "Alemania": "DE",
    "Andorra": "AD",
    "Armenia": "AM",
    "Austria": "AT",
    "Azerbaiyán": "AZ",
    "Bielorrusia": "BY",
    "Bélgica": "BE",
    "Bosnia y Herzegovina": "BA",
    "Bulgaria": "BG",
    "Chipre": "CY",
    "Croacia": "HR",
    "Dinamarca": "DK",
    "Eslovaquia": "SK",
    "Eslovenia": "SI",
    "España": "ES",
    "Estonia": "EE",
    "Finlandia": "FI",
    "Francia": "FR",
    "Georgia": "GE",
    "Grecia": "GR",
    "Hungría": "HU",
    "Irlanda": "IE",
    "Islandia": "IS",
    "Italia": "IT",
    "Kazajistán": "KZ",
    "Letonia": "LV",
    "Liechtenstein": "LI",
    "Lituania": "LT",
    "Luxemburgo": "LU",
    "Malta": "MT",
    "Moldavia": "MD",
    "Mónaco": "MC",
    "Montenegro": "ME",
    "Noruega": "NO",
    "Países Bajos": "NL",
    "Polonia": "PL",
    "Portugal": "PT",
    "Reino Unido": "GB",
    "República Checa": "CZ",
    "República de Macedonia del Norte": "MK",
    "Rumania": "RO",
    "Rusia": "RU",
    "San Marino": "SM",
    "Serbia": "RS",
    "Suecia": "SE",
    "Suiza": "CH",
    "Turquía": "TR",
    "Ucrania": "UA",
    "Vaticano": "VA",
    //AFRICA

    "Argelia": "DZ",
  "Angola": "AO",
  "Benín": "BJ",
  "Botsuana": "BW",
  "Camerún": "CM",
  "Chad": "TD",
  "Costa de Marfil": "CI",
  "Egipto": "EG",
  "Etiopía": "ET",
  "Ghana": "GH",
  "Kenia": "KE",
  "Marruecos": "MA",
  "Nigeria": "NG",
  "República Democrática del Congo": "CD",
  "Ruanda": "RW",
  "Sudáfrica": "ZA",
  "Sudán": "SD",
  "Tanzania": "TZ",
  "Túnez": "TN",
  "Uganda": "UG",
  "Zambia": "ZM",
  "Zimbabue": "ZW",
  //ASIA
  "Afganistán": "AF",
  "Arabia Saudita": "SA",
  "Bangladés": "BD",
  "Birmania": "MM",
  "Brunéi": "BN",
  "Bután": "BT",
  "Camboya": "KH",
  "China": "CN",
  "Corea del Norte": "KP",
  "Corea del Sur": "KR",
  "Emiratos Árabes Unidos": "AE",
  "Filipinas": "PH",
  "India": "IN",
  "Indonesia": "ID",
  "Irak": "IQ",
  "Irán": "IR",
  "Israel": "IL",
  "Japón": "JP",
  "Jordania": "JO",
  "Kazajistán": "KZ",
  "Kirguistán": "KG",
  "Kuwait": "KW",
  "Laos": "LA",
  "Líbano": "LB",
  "Malasia": "MY",
  "Maldivas": "MV",
  "Mongolia": "MN",
  "Nepal": "NP",
  "Omán": "OM",
  "Pakistán": "PK",
  "Qatar": "QA",
  "Singapur": "SG",
  "Siria": "SY",
  "Sri Lanka": "LK",
  "Tailandia": "TH",
  "Taiwán": "TW",
  "Tayikistán": "TJ",
  "Timor Oriental": "TL",
  "Turkmenistán": "TM",
  "Turquía": "TR",
  "Uzbekistán": "UZ",
  "Vietnam": "VN",
  "Yemen": "YE"

  
  };

  return countryCodes[nombrePais];
}

  
  // Obtén referencias a los botones por su ID
  var boton1 = document.getElementById("explore-map-btn");
  var boton2 = document.getElementById("mapar");

  // Asigna la misma función al evento click de ambos botones
  boton1.addEventListener("click", mostrarmap);
  boton2.addEventListener("click", mostrarmap);

  // Añadir evento de clic a los botones toggle
  const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const panelContainer = button.closest('.panel-container');
      const arrowIcon = button.querySelector('.arrow-icon');
      panelContainer.classList.toggle('open');
      panelContainer.classList.toggle('closed');
       // Rotar la flecha
    arrowIcon.style.transform = arrowIcon.style.transform ? '' : 'rotate(180deg)';
    });
  });

  // Añadir evento de clic al botón "Inicio"
  document.getElementById("Inicio").addEventListener("click", function() {
    window.location.href = "index.html";
  });

  // Datos de los países con sus coordenadas geográficas
  var countriesData = [
    {
      name: "Argentina",
    
      coordinates: [-38.4161, -63.6167],
      news: [
        {
         title: "Ley de Etiquetado Frontal: se prorroga la entrada en vigencia",
        source: "Infobae",
        url: "https://www.infobae.com/economia/2024/04/25/ley-de-etiquetado-frontal-se-prorroga-la-entrada-en-vigencia/",
        summary: "El gobierno argentino decidió prorrogar por seis meses la entrada en vigencia de la ley de Etiquetado Frontal de Alimentos, que busca advertir a los consumidores sobre productos con exceso de sodio, azúcares, grasas y calorías."
        },
        {
          title: "El dólar blue sube y acumula un alza de $10 en la semana: ¿qué pasa con la cotización?",
          source: "Ámbito Financiero",
          url: "https://www.letrap.com.ar/economia/cotizacion-del-dolar-blue-hoy-n5407135",
          summary: "El dólar blue cerró este jueves con una suba de $2 a $337, acumulando un incremento de $10 en la semana. La cotización informal se encuentra por encima del dólar oficial, que se ubica en $302,50."
         }
      ]
    },
    {
      name: "Bolivia",
    
      coordinates: [-16.2902, -63.5887],
      news: [
        {
          title: "Bolivia: el Gobierno anuncia plan de inversiones para reactivar la economía",
          source: "El Deber",
          url: "https://eldeber.com.bo/bolivia/gobierno-anuncia-plan-de-inversiones-para-reactivar-la-economia_100829",
          summary: "El gobierno boliviano anunció un plan de inversiones por valor de 1.000 millones de dólares para reactivar la economía, que ha sido duramente golpeada por la pandemia de COVID-19 y la caída de los precios internacionales de las materias primas."
        },
        {
          title: "Evo Morales desafía a Luis Arce en las primarias de 2025 y amenaza con convulsión si no es candidato.",
          source: "El Deber",
          url: "https://www.infobae.com/tag/crisis-en-bolivia/",
          summary: "Evo Morales, líder del partido gobernante MAS, ha desafiado al presidente Luis Arce a competir en las primarias presidenciales de 2025. Morales ha advertido que si no se le permite postularse, habrá una convulsión en el país. Esta situación aumenta la tensión política en Bolivia y genera incertidumbre sobre el futuro del proceso electoral."
        }
      ]
    },
    {
      name: "Brasil",
      coordinates: [-14.2350, -51.9253],
      news: [
        {
          title: "Dengue arrasa las Américas a principios de este año",
        source: "The Independent",
        url: "https://espanol.medscape.com/verarticulo/5912351?form=fpf",
        summary: "Brasil enfrenta un brote de dengue a principios de 2024. Las autoridades sanitarias luchan para contener la propagación de la enfermedad, que ha causado un aumento significativo en los casos." 
        },
        {
          title: "Crisis humanitaria en territorio Yanomami persiste",
          source: "Survival International",
          url: "https://www.survivalinternational.org/news/13864",
          summary: "La minería ilegal de oro continúa devastando el territorio Yanomami y poniendo en riesgo la salud y la vida de las comunidades indígenas. A pesar de los esfuerzos del gobierno para expulsar a los mineros, la crisis humanitaria persiste."  
        }
      ]
    },
    {
      name: "Chile",
      coordinates: [-35.6751, -71.5430],
      news: [
        {
          title: "Aumentan las tensiones políticas tras el rechazo a la nueva constitución",
        source: "BBC News",
        url: "https://www.wsws.org/es/articles/2022/10/11/chil-o11.html", // Replace with specific Chile constitution article
        summary: "El rechazo en el plebiscito de la propuesta de nueva constitución en Chile ha generado un clima de tensión política y social. Se abren ahora escenarios de incertidumbre sobre el futuro del proceso constituyente."
      },
        {
          title: "Sequía en Chile: autoridades anuncian medidas de emergencia",
          source: "El Mercurio",
          url: "https://www.france24.com/es/minuto-a-minuto/20220412-chile-anuncia-plan-de-emergencia-ante-posible-racionamiento-de-agua-en-santiago", // Replace with more recent article
          summary: "La sequía que afecta a Chile desde hace varios años se ha agudizado en 2024, obligando a las autoridades a tomar medidas de emergencia para enfrentar la escasez de agua."
       
        }
      ]
    },
    {
      name: "Colombia",
      coordinates: [4.5709, -74.2973],
      news: [
        {
          title: "Cultivos ilícitos en Colombia siguen siendo una preocupación",
          source: "DW",
          url: "https://elpais.com/america-colombia/2023-09-11/colombia-marca-un-nuevo-record-de-cultivos-de-coca-y-produccion-de-cocaina.html", // Replace with specific Colombia drug trafficking article
          summary: "La erradicación de cultivos ilícitos como la coca sigue siendo un desafío para Colombia. A pesar de los esfuerzos del gobierno, el narcotráfico continúa siendo una fuente de violencia e inestabilidad en el país."
        },
        {
          title: "Reforma agraria en Colombia: ¿hacia una solución histórica?",
          source: "El País",
          url: "https://dialnet.unirioja.es/servlet/articulo?codigo=6513879", // Replace with more recent article
          summary: "El gobierno colombiano ha propuesto una ambiciosa reforma agraria para abordar la desigualdad en la tenencia de la tierra. Esta iniciativa enfrenta desafíos y genera debate, pero podría representar un paso histórico para la paz y el desarrollo rural."
        }
      ]
    },
    {
      name: "Ecuador",
      coordinates: [-1.8312, -78.1834],
      news: [
        {
          title: "Crisis carcelaria en Ecuador: hacinamiento y violencia",
          source: "Amnistía Internacional",
          url: "https://www.primicias.ec/noticias/seguridad/carceles-hacinamiento-violencia-ecuador-snai/#:~:text=La%20sobrepoblaci%C3%B3n%20de%20las%20c%C3%A1rceles,4%25%20a%20inicios%20de%202023.",
          summary: "El sistema carcelario de Ecuador enfrenta una grave crisis de hacinamiento y violencia. Las organizaciones de derechos humanos exigen acciones urgentes para mejorar las condiciones de las cárceles y garantizar la seguridad de las personas privadas de libertad."
        },
        {
          title: "Ecuador busca reactivar su economía tras la pandemia",
          source:  "France 24",
          url: "https://revistadigital.uce.edu.ec/index.php/criticayderecho/article/view/3191", // Replace with more recent article
          summary: "La economía ecuatoriana se ha visto afectada por la pandemia del COVID-19. El gobierno ha implementado medidas para reactivar la economía, pero la recuperación sigue siendo lenta."
        }
      ]
    },
    {
      name: "Guyana",
      coordinates: [4.8604, -58.9302],
      news: [
        {
          title: "Descubrimientos de petróleo impulsan el crecimiento económico de Guyana",
          source: "Reuters",
          url: "https://www.bbc.com/mundo/articles/c9x05wx37y4o", // Replace with more recent article
          summary: "Los recientes descubrimientos de petróleo han impulsado el crecimiento económico de Guyana. Sin embargo, el país enfrenta desafíos para gestionar estos recursos de manera sostenible y equitativa."
        },
        {
          title: "Guyana aborda la deforestación en la Amazonía",
          source: "Mongabay",
          url: "https://insightcrime.org/es/investigaciones/selva-amazonica-bajo-ataque-flancos/",
          summary: "La deforestación en la Amazonía es una preocupación ambiental importante. Guyana ha tomado medidas para proteger sus bosques, pero la tala ilegal y la minería siguen siendo amenazas."
        }
      ]
    },
    {
      name: "Paraguay",
      coordinates: [-23.4425, -58.4438],
      news: [
        {
          title: "Sequía en Paraguay amenaza seguridad alimentaria",
          source: "ABC Color",
          url: "https://blog.iica.int/blog/una-amenaza-para-seguridad-alimentaria-mundial#:~:text=En%20Paraguay%20una%20sequ%C3%ADa%20que,los%20rendimientos%20de%20algunos%20cultivos.",
          summary: "La sequía severa que afecta a Paraguay desde hace meses amenaza la seguridad alimentaria del país. Los cultivos se han visto perjudicados y se teme una escasez de alimentos en los próximos meses."
        },
        {
          title: "Deforestación en el Chaco paraguayo sigue siendo una preocupación",
          source: "WWF",
          url: "https://es.mongabay.com/2018/12/paraguay-deforestacion-chaco/",
          summary: "La deforestación en la región del Chaco paraguayo continúa siendo una preocupación ambiental importante. La pérdida de bosques afecta la biodiversidad, los pueblos indígenas y el equilibrio ecológico de la región."
        }
      ]
    },
    {
      name: "Perú",
      coordinates: [-9.1900, -75.0152],
      news: [
        {
          title: "Protestas sociales en Perú por el alza del costo de vida",
          source: "El Comercio",
          url: "https://elpais.com/internacional/2022-04-03/las-protestas-en-peru-por-el-alza-de-precios-arrinconan-a-castillo.html",
          summary: "Perú ha enfrentado manifestaciones sociales debido al aumento del costo de vida. El alza en los precios de los combustibles y los alimentos ha generado descontento en la población."
        },
        {
          title: "Crisis política en Perú: incertidumbre y división en el gobierno",
          source:  "BBC News",
          url: "https://www.france24.com/es/programas/historia/20230119-cu%C3%A1l-es-el-origen-de-la-crisis-pol%C3%ADtica-que-sacude-a-per%C3%BA",
          summary: "Perú atraviesa una crisis política marcada por la inestabilidad gubernamental y los enfrentamientos entre el poder ejecutivo y el legislativo. Esta situación genera incertidumbre sobre el futuro del país."
        }
      ]
    },
    {
      name: "Surinam",
      coordinates: [3.9193, -56.0278],
      news: [
        {
          title: "Descubrimientos de petróleo impulsan la economía de Surinam, pero hay desafíos",
          source: "Financial Times",
          url: "https://oilprice.com/es/Energy/Crude-Oil/Surinames-Resource-Boom-is-Back-on-Track-With-First-Oil-Targeted-for-2028.html",
          summary: "Los recientes descubrimientos de petróleo en Surinam tienen el potencial de transformar la economía del país. Sin embargo, existen desafíos importantes relacionados con la gestión de los recursos y la equidad en la distribución de los beneficios."
        },
        {
          title: "Surinam aborda la erosión costera",
          source:  "The Guardian",
          url: "https://blogs.iadb.org/sostenibilidad/es/los-manglares-de-surinam-son-criticos-para-construir-un-futuro-mas-sostenible-y-resiliente/",
          summary: "La erosión costera es una amenaza grave para Surinam. El país está implementando proyectos para proteger sus costas del avance del mar."
        }
      ]
    },
    {
      name: "Trinidad y Tobago",
      coordinates: [10.6918, -61.2225],
      news: [
        {
          title: "Diversificación económica: un desafío para Trinidad y Tobago",
          source: "Caribbean News Service",
          url: "https://fastercapital.com/es/contenido/Inversion-a-largo-plazo-en-el-dolar-de-Trinidad-y-Tobago--una-perspectiva-forex.html",
          summary: "La economía de Trinidad y Tobago depende en gran medida de la industria petrolera. El gobierno busca diversificar la economía para reducir la vulnerabilidad a las fluctuaciones del precio del petróleo."
        },
        {
          title: "Trinidad y Tobago lucha contra el tráfico de drogas",
          source: "InSight Crime",
          url: "https://dialogo-americas.com/es/articles/trinidad-y-tobago-prioridad-a-batalla-contra-delitos-relacionados-con-pandillas/",
          summary: "Trinidad y Tobago es una ruta importante para el tráfico de drogas en la región. Las autoridades luchan contra el crimen organizado y el narcotráfico."
        }
      ]
    },
    {
      name: "Uruguay",
      coordinates: [-32.5228, -55.7658],
      news: [
        {
          title: "Uruguay: un ejemplo de legalización del cannabis",
          source:  "BBC News",
          url: "https://www.bbc.com/mundo/noticias-america-latina-50667423#:~:text=La%20legislaci%C3%B3n%20uruguaya%20habilit%C3%B3%20tanto,venta%20de%20marihuana%20en%20farmacias.",
          summary: "Uruguay se convirtió en el primer país del mundo en legalizar la producción y venta de cannabis recreativo. Esta decisión ha generado un gran debate y se ha seguido de cerca por otros países."
        },
        {
          title: "Desafíos ambientales en Uruguay: sequía y contaminación del agua",
          source: "El País",
          url: "https://cnnespanol.cnn.com/radio/2023/07/11/faltante-de-agua-en-uruguay-desafios-ambientales-y-necesidad-de-inversiones/",
          summary: "Uruguay enfrenta desafíos ambientales como la sequía y la contaminación del agua. El gobierno ha tomado medidas para mitigar estos problemas y promover la sostenibilidad."
        }
      ]
    },
    {
      name: "Venezuela",
      coordinates: [6.4238, -66.5897],
      news: [
        {
          title: "Crisis humanitaria en Venezuela persiste",
          source: "Human Rights Watch",
          url: "https://www.elnacional.com/venezuela/advierten-sobre-profundizacion-de-emergencia-humanitaria-en-venezuela/#:~:text=La%20crisis%20humanitaria%20se%20agrava&text=Afirm%C3%B3%20que%20a%20pesar%20de,b%C3%A1sicas%20de%20la%20poblaci%C3%B3n%20venezolana.",
          summary: "Venezuela atraviesa una grave crisis humanitaria caracterizada por la escasez de alimentos y medicinas. La situación ha provocado un éxodo masivo de venezolanos hacia otros países."
        },
        {
          title: "Tensión política en Venezuela: ¿hay indicios de una apertura?",
          source:  "The New York Times",
          url: "https://carnegieendowment.org/2015/11/30/es-pub-62078",
          summary: "Luego de años de tensiones políticas, el gobierno de Venezuela y la oposición han iniciado un diálogo. Se espera que este acercamiento conduzca a mejoras en la situación humanitaria y la celebración de elecciones libres."
        }
      ]
    }, // América del Norte
    {
      name: "Canadá",
      coordinates: [56.1304, -106.3468],
      news: [
        {
          title: "Crisis en la industria maderera de Canadá",
          source: "CBC News",
          url: "https://www.portafolio.co/economia/finanzas/canada-vive-crisis-industria-forestal-399820",
          summary: "La industria maderera de Canadá enfrenta una crisis debido a los aranceles impuestos por Estados Unidos."
          },
          {
          "title": "Protestas por crisis climática en Canadá",
          "source": "Global News",
          "url": "https://www.elperiodico.com/es/internacional/20191026/greta-thunberg-protesta-canada-crisis-climatica-7701469",
          "summary": "Manifestantes exigen acciones urgentes del gobierno para hacer frente a la crisis climática en Canadá."
          }
      ]
    },
      {
        name: "Estados Unidos",
        coordinates: [37.0902, -95.7129],
        news: [
          {
            title: "Debate sobre el control de armas en Estados Unidos",
            source: "CNN",
            url: "https://www.vozdeamerica.com/a/control-armas-debate-derecho-estados-unidos-violencia/6588302.html",
            summary: "Los tiroteos masivos recurrentes han reavivado el debate sobre el control de armas en Estados Unidos. Los defensores del control de armas piden medidas más estrictas para reducir la violencia armada, mientras que los opositores argumentan a favor del derecho a portar armas."
          },
          {
            title: "Estados Unidos y China: tensión geopolítica y guerra comercial",
            source: "BBC News",
            url: "https://mondiplo.com/entre-estados-unidos-y-china-una-guerra-mas",
            summary: "La relación entre Estados Unidos y China se ha deteriorado en los últimos años. Las tensiones geopolíticas y la guerra comercial entre ambas potencias preocupan a la comunidad internacional."
          },
          {
            title: "Trump recrea su red de caos dentro y fuera del país en un anticipo de lo que podría ser un segundo mandato",
            source: "BBC News",
            url: "https://cnnespanol.cnn.com/2024/04/11/analisis-trump-red-caos-dentro-fuera-eeuu-segundo-mandato-trax/",
            summary: "La preocupación entre los demócratas sobre si los estadounidenses han olvidado el caos del mandato de Trump se destaca, con el candidato republicano reviviendo el recuerdo mientras avanzaba en varios frentes políticos. Trump sigue siendo polémico, con una personalidad volátil que afecta los intentos de gobernar. Muchos problemas actuales en EE. UU., como la política de inmigración y la crisis fronteriza, están vinculados a él. Sus acciones recientes, desde derrotar proyectos de ley en el Congreso hasta influir en políticas internacionales, sugieren que el caos político podría intensificarse si regresa al poder en 2025."
          }
        ]
      },
      {
        name: "México",
        coordinates: [23.6345, -102.5528],
        news: [
          {
            title: "“México inaugura el Ferrocarril Interoceánico, una ruta alternativa al Canal de Panamá”.",
            source: "El Universal",
            url: "https://es.euronews.com/2023/12/23/mexico-inaugura-el-ferrocarril-interoceanico-una-ruta-alternativa-al-canal-de-panama#:~:text=M%C3%A9xico%20inaugura%20el%20Ferrocarril%20Interoce%C3%A1nico%2C%20una%20ruta%20alternativa%20al%20Canal%20de%20Panam%C3%A1,-Andr%C3%A9s%20Manuel%20L%C3%B3pez&text=Andr%C3%A9s%20Manuel%20Obrador%20declar%C3%B3%20que,de%20Panam%C3%A1%20%22est%C3%A1%20sobresaturado%22.",
            summary: "El presidente de México, Andrés Manuel López Obrador, participó en la inauguración del Ferrocarril Interoceánico, una nueva ruta ferroviaria que busca ser una alternativa al Canal de Panamá. Aunque Obrador enfatizó que México no busca competir con Panamá, el proyecto respaldado por su administración pretende reclamar una parte del comercio intercontinental entre Asia y Europa. "
          },
          {
            title: "Reforma electoral en México genera polémica",
            source:  "Animal Político",
            url: "https://cnnespanol.cnn.com/2023/02/28/reforma-electoral-mexico-controversia-plan-amlo/",
            summary: "La propuesta de reforma electoral del presidente de México ha generado controversia. La oposición teme que la reforma debilite la autonomía del Instituto Nacional Electoral (INE)."
          }
        ]
      },
      // América Central y el Caribe
      {
        name: "Antigua y Barbuda",
        coordinates: [17.0608, -61.7964],
        news: [
          {
            title: "Antigua y Barbuda: turismo como motor de la economía",
            source: "Caribbean Journal",
            url: "https://es.wikipedia.org/wiki/Econom%C3%ADa_de_Antigua_y_Barbuda#:~:text=El%20turismo%20domina%20la%20econom%C3%ADa,pa%C3%ADs%20en%20un%20para%C3%ADso%20fiscal.",
            summary: "El turismo es el sector económico más importante de Antigua y Barbuda. La industria ha sido golpeada por la pandemia, pero se espera una recuperación gradual en los próximos meses."
          },
          {
            title: "Antigua y Barbuda aborda el cambio climático",
            source: "telesur",
            url: "https://climatepromise.undp.org/es/what-we-do/where-we-work/antigua-y-barbuda",
            summary: "Las islas del Caribe son vulnerables a los efectos del cambio climático, como el aumento del nivel del mar y los huracanes más intensos. Antigua y Barbuda está tomando medidas para mitigar el cambio climático y adaptarse a sus impactos."
          }
        ]
      },
      {
        name: "Bahamas",
        coordinates: [25.0343, -77.3963],
        news: [
          {
            title: "Las Bahamas buscan diversificar su economía más allá del turismo",
            source: "The Nassau Guardian",
            url: "https://www.chinahoy.com.cn/2018/ft/202401/t20240104_800353643.html",
            summary: "Si bien el turismo es un pilar fundamental de la economía de Bahamas, el gobierno busca impulsar otros sectores como la inversión extranjera y la industria marítima para generar un crecimiento más sostenible."
          },
          {
            title: "Bahamas enfrenta desafíos ambientales por el cambio climático",
            source:  "National Geographic",
            url: "https://blogs.iadb.org/sostenibilidad/es/como-podemos-enfrentar-los-efectos-del-cambio-climatico-en-las-bahamas/",
            summary: "Las Bahamas, como muchas islas del Caribe, son vulnerables a los efectos del cambio climático, como el aumento del nivel del mar y los huracanes más intensos. El país está implementando medidas para adaptarse a estos desafíos."
          }
        ]
      },
    {
      name: "Barbados",
      coordinates: [13.1939, -59.5432],
      news: [
        {
          title: "Barbados: de colonia británica a república independiente",
          source: "BBC News",
          url: "https://www.bbc.com/mundo/noticias-internacional-59475085#:~:text=Barbados%20se%20independiz%C3%B3%20en%201966,en%20nombre%20de%20la%20Corona.",
          summary: "Barbados se convirtió en república en noviembre de   2021, tras casi 400 años como colonia británica. Este cambio histórico marca un nuevo capítulo en la historia del país."
        },
        {
          title: "Barbados apuesta por el turismo sostenible",
          source: "Caribbean News Service",
          url: "https://www.visitbarbados.org/es/cosas-para-hacer/experiencias/el-turismo-sostenible-1?pageindex=1",
          summary: "Barbados reconoce la importancia del turismo para su economía, pero también busca promover un turismo sostenible que minimice el impacto ambiental y social."
        }
      ]
    },
    {
      name: "Belice",
      coordinates: [17.1899, -88.4976],
      news: [
        {
          title: "Descubrimientos arqueológicos en Belice revelan la historia maya",
          source: "National Geographic",
          url: "https://verne.elpais.com/verne/2016/08/10/mexico/1470791886_080661.html",
          summary: "Belice cuenta con importantes ruinas mayas que atraen a turistas y arqueólogos. Los recientes descubrimientos continúan revelando nuevos conocimientos sobre esta civilización prehispánica."
        },
        {
          title: "Belice: un destino para el ecoturismo",
          source: "CNN Travel",
          url: "https://www.travelbelize.org/es/why-belize-ultimate-ecotourism-destination/",
          summary: "Belice es un destino ideal para los amantes del ecoturismo. El país cuenta con una gran riqueza natural, incluyendo la Barrera de Arrecife de Coral de Belice, un sistema de arrecifes de coral Patrimonio de la Humanidad."
        }
      ]
    },
    {
      name: "Costa Rica",
      coordinates: [9.7489, -83.7534],
      news: [
        {
          title: "Costa Rica implementa plan para combatir la sequía en Guanacaste",
          source: "Amelia Rueda",
          url: "https://reliefweb.int/report/costa-rica/guanacaste-propone-estrategia-para-mitigar-la-sequ",
          summary: "El gobierno de Costa Rica ha puesto en marcha un plan integral para enfrentar la sequía que afecta al sector agropecuario en la provincia de Guanacaste. El plan incluye medidas como la distribución de agua para riego, la construcción de pozos y la promoción de prácticas agrícolas sostenibles."
        },
        {
          title: "Costa Rica: nuevas inversiones en turismo sostenible",
          source: "La Nación",
          url: "https://www.ict.go.cr/es/noticias-destacadas/2308-procomer-e-ict-buscan-nuevas-inversiones-en-infraestructura-tur%C3%ADstica-para-costa-rica.html",
          summary: "Costa Rica continúa posicionándose como un destino líder en turismo sostenible. El país ha recibido nuevas inversiones en proyectos ecoturísticos, hoteles verdes y experiencias de viaje que promueven la conservación ambiental y el bienestar de las comunidades locales."
        }
      ]
    },
    {
      name: "Cuba",
      coordinates: [21.5218, -77.7812],
      news: [
        {
          title: "Protestas en Cuba por escasez de alimentos y medicamentos",
          source: "CNN",
          url: "https://www.vozdeamerica.com/a/cubanos-protestan-en-el-oriente-de-la-isla-por-apagones-y-escasez-de-alimentos/7532025.html",
          summary: "En julio de 2021, Cuba se vio afectada por una ola de protestas sociales sin precedentes, motivadas por la escasez de alimentos, medicamentos y otros productos básicos, junto con la falta de libertades políticas."
        },
        {
          title: "Cuba apuesta por la energía renovable para reducir su dependencia del petróleo",
          source: "Granma",
          url: "https://www.evwind.com/2014/08/14/cuba-apuesta-por-las-energias-renovables-2/",
          summary: "El gobierno cubano está implementando medidas para aumentar la generación de energía renovable, como la energía solar y eólica, con el objetivo de reducir su dependencia del petróleo importado y mitigar el impacto del cambio climático."
        }
      ]
    },
    {
      name: "Dominica",
      coordinates: [15.4150, -61.3710],
      news: [
        {
          title: "Dominica: un país vulnerable a los desastres naturales",
          source: "OCHA",
          url: "https://efeverde.com/r-dominicana-entre-los-paises-mas-vulnerables-por-catastrofes-naturales/",
          summary: "Dominica, al ser una isla ubicada en el Caribe, es altamente vulnerable a los desastres naturales como huracanes, tormentas tropicales e inundaciones. El gobierno y las organizaciones internacionales trabajan en la preparación y respuesta ante estos eventos."
        },
        {
          title: "Dominica preserva su rica biodiversidad",
          source: "The Nature Conservancy",
          url: "https://www.granma.cu/mundo/2017-10-24/la-carrera-contra-el-tiempo-para-salvar-la-biodiversidad-de-dominica-24-10-2017-21-10-47",
          summary: "Dominica cuenta con una gran diversidad de flora y fauna, incluyendo bosques tropicales, volcanes y ríos. El país ha tomado medidas para proteger su patrimonio natural y promover el desarrollo sostenible."
        }
      ]
    },
    {
      name: "El Salvador",
      coordinates: [13.7942, -88.8965],
      news: [
        {
          title: "El Salvador: plan para combatir la violencia de las pandillas",
          source: "BBC News",
          url: "https://www.bbc.com/mundo/noticias-america-latina-60989174",
          summary: "El Salvador enfrenta un alto nivel de violencia por parte de las pandillas. El gobierno ha implementado un plan para combatir este problema, que incluye medidas de seguridad ciudadana, reinserción social y prevención."
        },
        {
          title: "El Salvador adopta el bitcoin como moneda de curso legal",
          source:  "The New York Times",
          url: "https://efe.com/economia/2023-09-07/el-salvador-cumple-dos-anos-de-la-adopcion-del-bitcoin-como-moneda-de-curso-legal/#:~:text=%2D%20El%20Salvador%20cumple%20dos%20a%C3%B1os,cuentas%20de%20los%20fondos%20utilizados.",
          summary: "El Salvador se convirtió en el primer país del mundo en adoptar el bitcoin como moneda de curso legal. Esta decisión ha generado controversia y debate sobre sus potenciales beneficios y riesgos."
        }
      ]
    },
    {
      name: "Granada",
      coordinates: [12.1165, -61.6790],
      news: [
        {
          title: "Grenada: una isla caribeña con belleza natural y cultura rica",
          source: "CNN Travel",
          url: "https://www.puregrenada.com/es/about-grenada/",
          summary: "Grenada es una isla caribeña conocida por sus hermosas playas, cascadas, plantaciones de especias y arquitectura colonial. La isla también ofrece una rica cultura con influencias africanas, europeas y amerindias."
        },
        {
          title: "Grenada apuesta por el turismo sostenible",
          source:  "Caribbean Journal",
          url: "https://www.granadahoy.com/provincia/Avalan-sostenible-empresas-Sierra-Nevada_0_1731428893.html",
          summary: "Grenada reconoce la importancia del turismo para su economía, pero también busca promover un turismo sostenible que minimice el impacto ambiental y social."
        }
      ]
    },
    {
      name: "Guatemala",
      coordinates: [15.7835, -90.2308],
      news: [
        {
          title: "Descubrimientos arqueológicos mayas en Guatemala",
          source: "National Geographic",
          url: "https://www.elsalvador.com/entretenimiento/cultura/cultura-descubren-964-ruinas-mayas-peten-guatemala/1032737/2023/",
          summary: "Guatemala cuenta con importantes ruinas mayas que atraen a turistas y arqueólogos. Los recientes descubrimientos continúan revelando nuevos conocimientos sobre esta civilización prehispánica."
        },
        {
          title: "Guatemala: desafíos en la lucha contra la corrupción",
          source:  "Human Rights Watch",
          url: "https://nuso.org/articulo/guatemala-la-corrupcion-como-crisis-de-gobierno/",
          summary: "Guatemala enfrenta desafíos en la lucha contra la corrupción y la impunidad. La sociedad civil y las organizaciones internacionales juegan un papel importante en exigir transparencia y rendición de cuentas."
        }
      ]
    },
    {
      name: "Haití",
      coordinates: [18.9712, -72.2852],
      news: [
        {
          title: "La violencia de las pandillas en Haití obliga a cerrar empresas y profundiza la crisis",
          source: "El Heraldo",
          url: "https://www.vozdeamerica.com/a/haitianos-luchan-por-sobrevivir-en-medio-de-violencia-de-pandillas-en-la-capital/7579087.html",
          summary: "La escalada de violencia de las pandillas en Haití ha provocado el cierre de negocios, escuelas y oficinas públicas en la capital, Puerto Príncipe. La situación ha profundizado la crisis actual en el país, generando preocupaciones sobre la escasez de artículos de primera necesidad."
        },
        {
          title: "Jamaica organiza una reunión internacional para abordar la crisis de Haití ",
          source: "teleSUR",
          url: "https://www.vozdeamerica.com/a/blinken-viajara-a-jamaica-para-reunion-de-caricom-sobre-haiti-departamento-de-estado-eeuu/7522475.html",
          summary: "En respuesta al empeoramiento de la situación en Haití, Jamaica organizó una reunión internacional para encontrar soluciones. Representantes del espectro político de Haití, naciones caribeñas y donantes internacionales participaron en discusiones enfocadas en fomentar el diálogo y lograr consenso."
        }
      ]
    },
    {
      name: "Honduras",
      coordinates: [15.1990, -86.2419],
      news: [
        {
          title: "Honduras: Xiomara Castro denuncia plan para desestabilizar su gobierno",
          source: "France 24",
          url: "https://www.france24.com/es/video/20220126-honduras-c%C3%B3mo-afecta-a-xiomara-castro-la-crisis-pol%C3%ADtica-en-el-congreso",
          summary: "La presidenta de Honduras, Xiomara Castro, denunció este martes un plan para desestabilizar su gobierno y llamó a la unidad nacional para enfrentar los desafíos del país. Castro hizo la denuncia en un discurso pronunciado en el marco del 242 aniversario de la independencia de Honduras."
      },
      {
          title: "Honduras: crece la pobreza y la desigualdad en el país",
          source: "BBC News Mundo",
          url: "https://www.bbc.com/news/world-latin-america-18954311",
          summary: "La pobreza y la desigualdad siguen creciendo en Honduras, según un informe del Banco Mundial. El estudio señala que el 48% de la población hondureña vive en la pobreza, mientras que el 10% más rico concentra el 40% de la riqueza del país. El informe también destaca que la pandemia de COVID-19 ha exacerbado la situación, empujando a más personas a la pobreza."
      }
      ]
    },
    {
      name: "Jamaica",
      coordinates: [18.1096, -77.2975],
      news: [
        {
          title: "Jamaica lucha contra el aumento de la violencia de pandillas",
          source: "Al Jazeera",
          url: "https://insightcrime.org/es/noticias/jamaica-reformas-detener-violencia-mejorar-lucha-crimen/",
          summary: "Jamaica ha experimentado un aumento de la violencia de pandillas en los últimos años, y muchos lo atribuyen a la competencia por el territorio de las drogas y a la fácil disponibilidad de armas. Este aumento representa una amenaza para la vital industria turística del país."
        },
        {
          title: "Jamaica lucha contra la desigualdad económica",
          source: "El Banco Mundial",
          url: "https://www.cadal.org/publicaciones/articulos/?id=13095",
          summary: "A pesar del crecimiento económico, Jamaica enfrenta un desafío significativo de desigualdad de ingresos. Una gran parte de la población vive por debajo del umbral nacional de pobreza, mientras que un segmento más pequeño disfruta de un alto nivel de vida. Esta disparidad puede conducir al malestar social y obstaculizar el desarrollo general."
        }
      ]
    },
    {
      name: "Nicaragua",
      coordinates: [12.8654, -85.2072],
      news: [
       
        {
          title: "Desplazamiento forzado:Nicaragua cerrará con 804.000 desplazados en 2023, un 11,34 % de su población",
          source: "100% noticias",
          url: "https://100noticias.com.ni/migracion/128597-nicaragua-cifras-cierre-desplazados-2023/#:~:text=Nicaragua%20alcanzar%C3%A1%20la%20cifra%20r%C3%A9cord,ONG%20nicarag%C3%BCense%20divulgado%20este%20lunes.",
          summary: "Miles de nicaragüenses han huido del país debido a la violencia política y la persecución. Se estima que más de cien mil personas han buscado refugio en países vecinos, como Costa Rica y Honduras, mientras que otros han intentado llegar a Estados Unidos en busca de asilo."
        },
        {
          title: "Un grupo de expertos de la ONU alerta de la “persistencia de crímenes de lesa humanidad” en Nicaragua",
          source: "EL PAIS",
          url: "https://elpais.com/america/2024-03-01/un-grupo-de-expertos-de-la-onu-alerta-de-la-persistencia-de-crimenes-de-lesa-humanidad-en-nicaragua.html",
          summary: "El Grupo de Expertos en Derechos Humanos sobre Nicaragua (GHREN), adscrito a Naciones Unidas, alertó sobre graves violaciones de los derechos humanos por parte del Gobierno de Daniel Ortega y Rosario Murillo, equiparables a crímenes de lesa humanidad. Según el informe presentado ante el Consejo de Derechos Humanos de la ONU, la represión en 2023 experimentó un aumento exponencial de patrones de violaciones destinadas a incapacitar cualquier forma de oposición a largo plazo. El GHREN señala que la persecución del Gobierno nicaragüense contra opositores, o percibidos como tales, se ha vuelto más sutil, con violaciones, abusos y crímenes cometidos para eliminar todas las voces críticas y desalentar la movilización social. En particular, se destaca la expulsión y el apátridamiento de 317 nicaragüenses como crímenes de lesa humanidad, perpetrados en el contexto de una política discriminatoria desde los niveles más altos del Gobierno. Esta denuncia se suma al primer informe presentado por el GHREN en marzo de 2023, que concluyó que el régimen sandinista había cometido graves y sistemáticas violaciones de los derechos humanos y crímenes de lesa humanidad."
        },
      ]
    },
    {
      name: "Panamá",
      coordinates: [8.5380, -80.7821],
      news: [
        {
          title: "Panamá enfrenta preocupaciones por la corrupción",
          source: "Transparency International",
          url: "https://www.vozdeamerica.com/a/corrupcion-tema-preocupa-panamenos/7447536.html",
          summary: "Panamá ha enfrentado desafíos con la corrupción en los últimos años, lo que puede obstaculizar el crecimiento económico y el desarrollo. El gobierno ha tomado medidas para abordar estas preocupaciones, pero se necesita más trabajo para restaurar la confianza pública y atraer inversión extranjera."
        },
        {
          title: "Panamá lucha contra el aumento del costo de vida",
          source: "The Associated Press",
          url: "https://www.bancomundial.org/es/country/panama/overview",
          summary: "Los panameños, como muchas personas en todo el mundo, enfrentan un aumento del costo de vida debido a factores como la inflación global y las interrupciones de la cadena de suministro. Esto ejerce presión sobre los presupuestos familiares y puede conducir al malestar social."
        }
      ]
    },
    {
      name: "Puerto Rico",
      coordinates: [18.2208, -66.5901],
      news: [
        {
          title: "Aumento de la violencia de género en Puerto Rico",
          source: "El Nuevo Día",
          url: "https://estadisticas.pr/en/media/3650#:~:text=En%20el%202023%20se%20registraron,y%20el%2042%25%20por%20suicidio.",
          summary: "Puerto Rico enfrenta un aumento preocupante en los casos de violencia de género, con un número récord de feminicidios en lo que va del año. La falta de recursos y de apoyo gubernamental ha generado una crisis en la protección de los derechos de las mujeres en el país."
        },
        {
          title: "Crisis económica en Puerto Rico",
          source: "Noticel",
          url: "https://www.bread.org/es/la-crisis-de-puerto-rico-es-algo-mas-que-la-deuda/",
          summary: "La economía de Puerto Rico continúa en crisis, con altos niveles de desempleo, pobreza y emigración. La deuda pública y la falta de acceso a servicios básicos, como la salud y la educación, agravan la situación socioeconómica en la isla."
        }
      ]
    },
    {
      name: "República Dominicana",
      coordinates: [18.7357, -70.1627],
      news: [
        {
          title: "Aumento de la criminalidad en República Dominicana",
          source: "Diario Libre",
          url: "https://eldia.com.do/manipulacion-y-realidad-un-analisis-del-aumento-de-la-delincuencia-en-republica-dominicana/",
          summary: "República Dominicana enfrenta un aumento en los índices de criminalidad, con un incremento en los casos de homicidios, robos y violencia callejera. La falta de políticas de seguridad efectivas y de oportunidades económicas agrava la situación en el país."
        },
        {
          title: "Crisis sanitaria por el aumento de casos de COVID-19",
          source: "Listín Diario",
          url: "https://www.paho.org/es/noticias/10-1-2024-informacion-conjunta-ante-alertas-epidemias-por-virus-respiratorios",
          summary: "República Dominicana se enfrenta a una crisis sanitaria debido al aumento de casos de COVID-19. La falta de acceso a vacunas y la baja adhesión a las medidas de prevención han contribuido a la propagación del virus en el país."
        }
      ]
    },
    {
      name: "San Cristóbal y Nieves",
      coordinates: [17.3578, -62.782998],
      news: [
        {
          title: "Crisis económica en San Cristóbal y Nieves",
          source: "SKN Vibes",
          url: "https://datosmacro.expansion.com/paises/san-cristobal-nieves",
          summary: "San Cristóbal y Nieves enfrenta una grave crisis económica, con altos niveles de desempleo, pobreza y deuda pública. La falta de diversificación económica y de inversiones ha debilitado la economía del país, afectando el bienestar de la población."
        },
        {
          title: "Desastres naturales agravan la crisis en San Cristóbal y Nieves",
          source: "The St. Kitts-Nevis Observer",
          url: "https://www.thestkittsnevisobserver.com/",
          summary: "https://www.unep.org/es/noticias-y-reportajes/reportajes/san-cristobal-y-nieves-lucha-por-conservar-sus-suelos"
        }
      ]
    },
    {
      name: "San Vicente y las Granadinas",
      coordinates: [12.9843, -61.2872],
      news: [
        {
          title: "Erupción volcánica en San Vicente y las Granadinas",
          source: "The Vincentian",
          url: "https://www.ifrc.org/es/press-release/san-vicente-y-las-granadinas-los-esfuerzos-recuperacion-continuan-siendo-cruciales#:~:text=Jamaica%2C%207%20de%20abril%20de,las%20zonas%20roja%20y%20naranja.",
          summary: "San Vicente y las Granadinas se enfrenta a una crisis humanitaria debido a la erupción del volcán La Soufrière. Miles de personas han sido evacuadas de sus hogares y se enfrentan a condiciones de vida precarias en los refugios temporales."
        },
        {
          title: "Impacto económico de la erupción volcánica",
          source: "Searchlight Newspaper",
          url: "https://iica.int/es/prensa/noticias/la-agricultura-de-san-vicente-y-las-granadinas-se-recupero-tras-las-erupciones",
          summary: "La erupción del volcán La Soufrière ha tenido un impacto devastador en la economía de San Vicente y las Granadinas. La destrucción de infraestructura, cultivos agrícolas y medios de vida ha dejado a miles de personas sin hogar y sin medios de subsistencia."
        }
      ]
    },
    {
      name: "Santa Lucía",
      coordinates: [13.9094, -60.9789],
      news: [
        {
          title: "Crisis económica en Santa Lucía",
          source: "St. Lucia Times",
          url: "https://www.prensa-latina.cu/2024/04/25/alertan-en-santa-lucia-sobre-escasez-de-mano-de-obra-calificada/",
          summary: "Santa Lucía enfrenta una grave crisis económica, con altos niveles de desempleo, pobreza y desigualdad. La falta de inversión en sectores clave, como el turismo y la agricultura, ha debilitado la economía del país, afectando el bienestar de la población."
        },
        {
          title: "Desastres naturales afectan a Santa Lucía",
          source: "St. Lucia News Online",
          url: "https://thinkhazard.org/es/report/209-saint-lucia/TS",
          summary: "Santa Lucía se enfrenta a una serie de desastres naturales, como huracanes y tormentas tropicales, que han causado daños significativos en infraestructura y medios de vida. La falta de medidas de mitigación aumenta la vulnerabilidad de la población frente a estos eventos."
        }
      ]
    },
      

    //EUROPA
    {
      name: "Albania",
      coordinates: [41.1533, 20.1683],
      news: [
        {
          title: "Terremoto de magnitud 6.4 sacude el norte de Albania, dejando varios heridos",
          source: "BBC News",
          url: "https://noticieros.televisa.com/ultimas-noticias/sismo-albania-muertos-heridos-terremoto-26-noviembre-2019/",
          summary: "Un fuerte sismo de magnitud 6.4 ha golpeado la región norte de Albania el 2 de mayo de 2024, causando daños en viviendas e infraestructura. Las autoridades locales informan de varios heridos y han iniciado las labores de rescate y evaluación de los daños. Se teme que el número de víctimas pueda aumentar en las próximas horas."
        },
        {
          title: "Aumenta la emigración de albaneses debido a la crisis económica y la falta de oportunidades",
          source: "El País",
          url: "https://es.euronews.com/2023/01/12/la-masiva-emigracion-de-ciudadanos-de-albania-y-sus-preocupantes-consecuencias-para-el-pai",
          summary: "En los últimos meses, se ha observado un aumento significativo en la emigración de ciudadanos albaneses, principalmente hacia países de Europa Occidental. La difícil situación económica, la falta de oportunidades laborales y la corrupción generalizada en el país son algunos de los factores que impulsan este éxodo. El 26 de abril de 2024, el diario El País informaba que la tasa de desempleo en Albania alcanzó el 15%, la más alta en la última década."
        }
      ]
    },
    {
      name: "Alemania",
      coordinates: [51.1657, 10.4515],
      news: [
        {
          title: "La inflación en Alemania alcanza un máximo histórico, impulsada por la guerra en Ucrania",
          source: "Deutsche Welle",
          url: "https://www.france24.com/es/programas/econom%C3%ADa/20230929-inflaci%C3%B3n-en-alemania-los-precios-caen-a-niveles-previos-a-la-guerra-en-ucrania",
          summary: "La tasa de inflación en Alemania alcanzó un máximo histórico del 7.9% en mayo de 2024, debido principalmente al aumento de los precios de la energía y los alimentos, exacerbado por la guerra en Ucrania. Esta situación está generando preocupación entre la población y el gobierno, ya que podría afectar negativamente el poder adquisitivo de los hogares y el crecimiento económico. El 2 de mayo de 2024, Deutsche Welle informaba que el Banco Central Europeo ha advertido sobre los riesgos de una recesión en la zona euro."
        },
        {
          title : "Alemania se enfrenta a una escasez de mano de obra cualificada, lo que frena el crecimiento en algunos sectores",
          source: "France 24",
          url: "https://elpais.com/economia/2023-10-12/el-gobierno-aleman-empeora-sus-previsiones-economicas-para-este-ano-la-falta-de-mano-de-obra-cualificada-el-mayor-problema.html",
          summary: "Las empresas alemanas están luchando por encontrar trabajadores cualificados en áreas como la ingeniería, la tecnología y la salud, lo que está obstaculizando el crecimiento en estos sectores. Se teme que esta escasez de mano de obra se intensifique en los próximos años, lo que podría tener un impacto negativo en la competitividad de la economía alemana. El 27 de abril de 2024, France 24 informaba que el gobierno alemán planea implementar nuevas medidas para atraer a trabajadores extranjeros calificados."
        }
      ]
    },
    {
      name: "Andorra",
      coordinates: [42.5063, 1.5218],
      news: [
        {
          title: "El aumento del turismo en Andorra genera preocupación por el impacto ambiental",
          source: "CNN Español",
          url: "https://cnnespanol.cnn.com/en-vivo/",
          summary: "El auge del turismo en Andorra en los últimos años está generando preocupación por su impacto ambiental. El aumento del tráfico, la contaminación y la generación de residuos sólidos son algunos de los principales desafíos que enfrenta el pequeño país. Las autoridades están implementando medidas para promover un turismo más sostenible, pero se teme que estas medidas no sean suficientes para mitigar los efectos negativos del turismo masivo."
        },
        {
          title: "Andorra aprueba una nueva ley para regular el mercado inmobiliario y frenar el alza de los precios",
          source: "El País",
          url: "https://english.elpais.com/",
          summary: "El gobierno de Andorra ha aprobado una nueva ley que busca regular el mercado inmobiliario y frenar el aumento descontrolado de los precios de la vivienda. La ley introduce medidas como la limitación de la compra de viviendas por parte de extranjeros y el aumento de los impuestos sobre las propiedades vacías. Se espera que estas medidas contribuyan a mejorar la accesibilidad a la vivienda para los residentes locales."
        }
      ]
    },
    {
      name: "Austria",
      coordinates: [47.5162, 14.5501],
      news: [
        {
          title: "Austria aprueba paquete de ayuda para combatir la inflación",
          source: "ORF",
          url: "https://vienadirecto.com/2022/06/14/urgente-el-gobierno-presenta-un-paquete-de-medidas-para-combatir-la-inflacion/s",
          summary: "El gobierno de Austria ha aprobado un paquete de ayuda de 4.000 millones de euros para combatir la inflación, que alcanzó un máximo histórico del 8.7% en abril de 2024. El paquete incluye medidas como la reducción temporal del impuesto sobre el valor añadido (IVA) en la energía y los alimentos, así como un pago único de 300 euros para las personas con bajos ingresos. Se espera que estas medidas ayuden a aliviar la carga financiera para los hogares austriacos y a impulsar la economía."
        },
        {
          title: "Austria se prepara para las elecciones presidenciales de 2024",
          source: "Der Standard",
          url: "https://www.dw.com/es/partido-de-la-cerveza-se-presentar%C3%A1-a-las-elecciones-parlamentarias-en-austria/a-68963337",
          summary: "La campaña para las elecciones presidenciales de Austria de 2024 está en marcha, con los candidatos compitiendo por reemplazar al actual presidente Alexander Van der Bellen. Los principales contendientes incluyen a Dominik Wlazil del Partido de la Libertad (FPÖ), Tassilo Wallentin del Partido Socialdemócrata (SPÖ) y Alexander Grosz del Partido Verde (GRÜNE). Las elecciones se celebrarán el 9 de octubre de 2024 y se espera que sean una reñida contienda."
        }
      ]
    },
    {
      name: "Bélgica",
      coordinates: [50.5039, 4.4699],
      news: [
        {
          title: "Bélgica lanza una campaña para combatir la escasez de mano de obra",
          source: "RTBF",
          url: "https://es.euronews.com/business/2024/02/07/formacion-y-reconversion-como-combatir-la-escasez-de-mano-de-obra-en-europa",
          summary: "El gobierno belga ha lanzado una campaña para combatir la escasez de mano de obra en el país, que se estima que afecta a más de 100.000 puestos de trabajo. La campaña incluye medidas como la promoción de la formación profesional y el aprendizaje permanente, así como la facilitación de la inmigración de trabajadores cualificados. El gobierno también está trabajando para mejorar las condiciones laborales y el equilibrio entre la vida laboral y personal para atraer y retener a los trabajadores."
        },
        {
          title: "Bélgica celebra el Día de Europa",
          source: "Le Soir",
          url: "https://es.euronews.com/my-europe/2022/05/09/9-de-mayo-el-dia-de-europa-que-es-y-que-representa",
          summary: "Bélgica se unió a otros países europeos para celebrar el Día de Europa el 9 de mayo, conmemorando la histórica Declaración Schuman de 1950, que sentó las bases de la Unión Europea. Las celebraciones incluyeron eventos públicos, discursos de líderes políticos y actividades educativas. El Día de Europa es una oportunidad para celebrar la paz, la unidad y la prosperidad que la UE ha traído a sus ciudadanos."
        }
      ]
    },
    {
      name: "Bielorrusia",
      coordinates: [53.7098, 27.9534],
      news: [
        {
          title: "Protestas en Bielorrusia por las elecciones presidenciales",
          source: "BBC News",
          url: "https://www.france24.com/es/europa/20210809-belarus-exiliados-protestas-alexander-lukashenko-aniversarioreeleccion",
          summary: "Miles de personas han salido a las calles en Bielorrusia para protestar por los resultados de las elecciones presidenciales, que han sido ampliamente cuestionados por la oposición y la comunidad internacional."
        },
        {
          title: "Detenciones masivas en Bielorrusia durante las protestas",
          source: "CNN",
          url: "https://www.amnesty.org/es/latest/press-release/2020/11/belarus-more-than-1000-people-arrested-in-a-single-day-of-peaceful-protests-amid-escalating-repression-of-rights/",
          summary: "Las autoridades de Bielorrusia han llevado a cabo detenciones masivas de manifestantes durante las protestas postelectorales, generando preocupaciones sobre la represión de la oposición en el país."
        }
      ]
    },
    {
      name: "Bosnia y Herzegovina",
      coordinates: [43.9159, 17.6791],
      news: [
        {
          title: "Tensiones étnicas en Bosnia y Herzegovina",
          source: "Al Jazeera",
          url: "https://es.euronews.com/2022/07/22/el-miedo-al-retorno-de-la-violencia-etnica-en-bosnia-herzegovina",
          summary: "Bosnia y Herzegovina enfrenta tensiones étnicas y políticas debido a divisiones étnicas arraigadas en el país, lo que ha generado preocupaciones sobre la estabilidad y la gobernabilidad."
        },
        {
          title: "Desafíos económicos en Bosnia y Herzegovina",
          source: "Reuters",
          url: "https://fastercapital.com/es/tema/desaf%C3%ADos-econ%C3%B3micos-en-la-bosnia-y-herzegovina-de-la-posguerra.html",
          summary: "Bosnia y Herzegovina enfrenta desafíos económicos y necesita implementar reformas para atraer inversiones y avanzar en su camino hacia la integración europea."
        }
      ]
    },
    {
      name: "Bulgaria",
      coordinates: [42.7339, 25.4858],
      news: [
        {
          title: "Protestas antigubernamentales en Bulgaria",
          source: "The Guardian",
          url: "https://es.euronews.com/2021/04/02/por-que-las-protestas-antigubernamentales-ya-no-son-multitudinarias-en-bulgaria",
          summary: "Bulgaria ha sido testigo de protestas antigubernamentales en medio de preocupaciones sobre corrupción y mala gestión, lo que ha llevado a llamados a reformas políticas y mayor transparencia."
        },
        {
          title: "Desafíos ambientales en Bulgaria",
          source: "DW",
          url: "https://es.euronews.com/2020/02/13/lidiar-con-los-residuos-ilegales-en-bulgaria",
          summary: "Bulgaria enfrenta desafíos ambientales, incluida la contaminación del aire y del agua, lo que ha generado llamados a una acción más enérgica por parte de las autoridades y la sociedad civil."
        }
      ]
    },
    {
      name: "Chipre",
      coordinates: [35.1264, 33.4299],
      news: [
        {
          title: "Tensiones en Chipre por disputa territorial",
          source: "BBC News",
          url: "https://www.swissinfo.ch/spa/las-principales-claves-para-entender-el-conflicto-silencioso-de-chipre/46566150",
          summary: "Chipre enfrenta tensiones debido a la disputa territorial entre las comunidades griega y turca en la isla, lo que ha dificultado los esfuerzos de reunificación y ha generado preocupaciones sobre la estabilidad en la región."
        },
        {
          title: "Economía de Chipre afectada por la pandemia",
          source: "CNBC",
          url: "https://www.cnbc.com/2021/06/10/cyprus-economy-reeling-from-pandemic.html",
          summary: "La economía de Chipre ha sido impactada por la pandemia de COVID-19, con sectores clave como el turismo sufriendo pérdidas significativas y desafíos económicos adicionales."
        }
      ]
    },
    {
      name: "Croacia",
      coordinates: [45.1000, 15.2000],
      news: [
        {
          title: "El gobierno croata anuncia un plan de estímulo económico de 5.000 millones de euros",
          source: "Radio Televisión Croata (HRT)",
          url: "https://www.icex.es/es/quienes-somos/sala-de-prensa/sala-de-prensa/detalle.estrategia-nacional-agricola-croacia.news134202109",
          summary: "El gobierno croata ha aprobado un plan de estímulo económico por valor de 5.000 millones de euros para ayudar a la economía a recuperarse de la pandemia de COVID-19. El plan incluye medidas como subvenciones a las empresas, recortes de impuestos y inversiones en infraestructura."
        },
        {
          title: "Croacia registra un aumento del turismo en 2023",
          source: "Oficina Nacional de Turismo de Croacia",
          url: "https://www.hosteltur.com/154821_croacia-preve-mas-turistas-en-2023-al-entrar-en-schengen-y-adoptar-el-euro.html",
          summary: "Croacia registró un aumento del turismo en 2023, con un 10% más de visitantes en comparación con 2022. Este crecimiento se atribuye a la flexibilización de las restricciones de viaje relacionadas con la COVID-19 y al atractivo de los destinos turísticos croatas."
        }
      ]
    },
    {
      name: "Dinamarca",
      coordinates: [56.2639, 9.5018],
      news: [
        {
          title: "Dinamarca aprueba un nuevo plan de energía verde",
          source: "The Copenhagen Post",
          url: "https://www.rtve.es/noticias/20230903/dinamarca-verde-sostenible-sello-nuevo-modelo-desarrollo/2447380.shtml",
          summary: "El gobierno danés ha aprobado un nuevo plan de energía verde que tiene como objetivo que Dinamarca sea 100% dependiente de la energía renovable para el año 2050. El plan incluye medidas como la inversión en energía eólica, solar y geotérmica, así como la eliminación gradual de los combustibles fósiles."
        },
        {
          title: "Dinamarca ocupa el primer puesto en el índice de felicidad mundial",
          source: "World Happiness Report",
          url: "https://www.elmundo.es/internacional/2024/03/20/65fa39f621efa0846c8b458b.html",
          summary: "Dinamarca ha sido nombrada el país más feliz del mundo por sexto año consecutivo en el Informe Mundial de la Felicidad 2023. El informe encuentra que los daneses disfrutan de altos niveles de apoyo social, confianza e ingresos, lo que contribuye a su felicidad general."
        }
      ]
    },
    {
      name: "Eslovaquia",
      coordinates: [48.6690, 19.6990],
      news: [
        {
          title: "Eslovaquia aprueba una nueva ley de reforma del sistema de pensiones",
          source: "The Slovak Spectator",
          url: "https://www.fiapinternacional.org/prontus_noticia/site/artic/20070106/pags/20070106225216.html",
          summary: "El parlamento eslovaco ha aprobado una nueva ley de reforma del sistema de pensiones que tiene como objetivo aumentar la edad de jubilación y reducir los beneficios de las pensiones. La ley ha sido criticada por los sindicatos y algunos grupos de la sociedad civil, que argumentan que afectará negativamente a los trabajadores de bajos ingresos."
        },
        {
          title: "Eslovaquia registra un crecimiento económico del 4% en 2023",
          source: "Banco Nacional de Eslovaquia",
          url: "https://www.focus-economics.com/es/countries/eslovaquia/news/pib/el-crecimiento-del-pib-registra-en-el-primer-trimestre-el-menor-aumento-desde-el-cuarto-trimestre-de-2020/",
          summary: "La economía eslovaca creció un 4% en 2023, lo que la convierte en una de las economías de más rápido crecimiento de la Unión Europea. El crecimiento se impulsó por una fuerte demanda interna y un aumento de las exportaciones."
        }
      ]
    },
    {
      name: "Eslovenia",
      coordinates: [46.1512, 14.9955],
      news: [
        {
          title: "Eslovenia enfrenta un aumento en los precios de la energía",
          source: "STA News",
          url: "https://english.sta.si/2024/05/02/slovenia-faces-further-rise-in-energy-prices/",
          summary: "Los precios de la energía en Eslovenia están aumentando, lo que está afectando a los hogares y las empresas. El gobierno esloveno está tomando medidas para mitigar el impacto del aumento de los precios, pero sigue siendo una preocupación importante para muchos ciudadanos."
        },
        {
          title: "La contaminación del aire en Eslovenia sigue siendo un problema de salud pública",
          source: "Delo",
          url: "https://www.delo.si/gospodarstvo/okolje/onesnazenost-zraka-v-sloveniji-ostaja-tezava-za-javno-zdravje/",
          summary: "La contaminación del aire sigue siendo un problema de salud pública en Eslovenia, especialmente en las ciudades. La principal causa de la contaminación del aire es el tráfico, seguido por la industria y la calefacción doméstica. El gobierno esloveno está implementando medidas para reducir la contaminación del aire, pero es un problema complejo que requerirá esfuerzos continuos."
        }
      ]
    },
    {
      name: "España",
      coordinates: [40.4637, -3.7492],
      news: [
        {
          title: "Sequía en España: se intensifica la alerta en varias comunidades autónomas",
          source: "El Mundo",
          url: "https://www.iagua.es/noticias/redaccion-iagua/sequia-y-dana-inestabilidad-meteorologica-que-espana-ya-se-ha-acostumbrado",
          summary: "La sequía que afecta a España se está intensificando, lo que ha llevado a las autoridades a declarar la alerta en varias comunidades autónomas. La falta de lluvias y las altas temperaturas están afectando a la agricultura, el abastecimiento de agua y el medio ambiente."
        },
        {
          title: "El desempleo en España sigue siendo un desafío a pesar de la recuperación económica",
          source: "ElDiario.es",
          url: "https://www.funcas.es/articulos/retos-del-mercado-laboral-espanol/",
          summary: "A pesar de la recuperación económica de España, el desempleo sigue siendo un problema importante. La tasa de desempleo actual es del 13,7%, lo que significa que hay millones de personas sin trabajo. El gobierno español está implementando medidas para reducir el desempleo, pero sigue siendo un desafío importante."
        }
  
      ]
    },
    {
      name: "Estonia",
      coordinates: [58.5953, 25.0136],
      news: [
        {
          title: "Dimite el Ministro de Justicia de Estonia por acusaciones de corrupción",
          source: "euro news",
          url: "https://es.euronews.com/2024/03/17/dimite-el-ministro-de-justicia-de-estonia-por-acusaciones-de-corrupcion#:~:text=El%20Ministro%20de%20Justicia%20estonio,le%20hab%C3%ADa%20reembolsado%20los%20gastos.",
          summary: "El Ministro de Justicia de Estonia, Kalle Laanet, dimitió después de ser acusado de corrupción. Se alega que alquiló un apartamento en Tallin a la empresa de su hijastro mientras estaba en el cargo, y el Estado reembolsó los gastos. La cantidad total ascendía a unos 12.000 euros desde 2021"
        },
        {
          title: "Estonia enfrenta un aumento de la ciberdelincuencia",
          source: "ERR News",
          url: "https://www.swissinfo.ch/spa/los-ciberguerreros-advierten-del-riesgo-del-teletrabajo-para-la-seguridad/46098224",
          summary: "Estonia, un país reconocido por su avance tecnológico, enfrenta un aumento en la ciberdelincuencia. Los ataques cibernéticos se dirigen tanto a instituciones gubernamentales como a empresas privadas. El gobierno estonio está tomando medidas para fortalecer su ciberseguridad, pero la ciberdelincuencia sigue siendo una amenaza importante."
        }
      ]
    },
    {
      name: "Finlandia",
      coordinates: [61.9241, 25.7482],
      news: [
        {
          title: "Finlandia se une a la OTAN: el nuevo mapa que muestra cómo la Alianza Atlántica duplica su frontera con Rusia",
          source: "BBC new mundo",
          url: "https://www.bbc.com/mundo/noticias-internacional-65163112",
          summary: "Finlandia se convirtió en el miembro número 31 de la OTAN el martes, y su bandera ya ondea en la sede de la alianza en Bruselas. La invasión rusa de Ucrania fue el catalizador que llevó a este país nórdico a unirse a la organización, especialmente debido a su frontera compartida con Rusia en el este"
        },
        {
          title: "Finlandia aumenta la inversión en defensa debido a la tensión con Rusia",
          source: "Yle News",
          url: "https://www.bbc.com/mundo/articles/c72ez2kkl7ro",
          summary: "Finlandia está aumentando su inversión en defensa en respuesta a la creciente tensión con Rusia. El aumento del gasto se destinará a modernizar las fuerzas armadas finlandesas y mejorar su capacidad de disuasión. La decisión ha sido criticada por algunos, pero el gobierno finlandés sostiene que es necesaria para garantizar la seguridad del país."
        }
      ]
    },
    {
      name: "Francia",
      coordinates: [46.6034, 1.8883],
      news: [
        {
          title: "Francia enfrenta una ola de calor inusualmente temprana",
          source: "Le Monde",
          url: "https://elpais.com/clima-y-medio-ambiente/2023-08-19/francia-enfrenta-una-ola-de-calor-tardia-con-temperaturas-que-podran-superar-los-40-grados-estemos-todos-alerta.html",
          summary: "Francia está experimentando una ola de calor inusualmente temprana, con temperaturas que superan los 30 grados centígrados en algunas regiones. Se espera que la ola de calor dure varios días y podría tener un impacto negativo en la salud de las personas mayores y vulnerables. Las autoridades francesas han emitido advertencias y consejos para ayudar a las personas a mantenerse frescas e hidratadas."
        },
        {
          title: "Francia enfrenta un aumento en la delincuencia juvenil",
          source: "Le Figaro",
          url: "https://www.latercera.com/mundo/noticia/alcaldes-de-francia-imponen-toques-de-queda-para-menores-de-edad-ante-alza-de-episodios-de-extrema-violencia-juvenil/CRQI6HGRKRHLDDJMTCR6ZAHP6I/",
          summary: "Francia se enfrenta a un aumento de la delincuencia juvenil. El aumento se atribuye a varios factores, incluidas las desigualdades sociales y económicas, la falta de supervisión de los padres y la exposición a la violencia. El gobierno francés está implementando medidas para abordar el problema, pero sigue siendo un desafío complejo."
        }
      ]
    },
    {
      name: "Grecia",
      coordinates: [39.0742, 21.8243],
      news: [
        {
          title: "Grecia enfrenta una crisis energética debido a la guerra en Ucrania",
          source: "Kathimerini (en Español)",
          url: "https://www.france24.com/es/minuto-a-minuto/20221220-le%C3%B1adores-griegos-se-preparan-para-responder-a-la-crisis-energ%C3%A9tica",
          summary: "Grecia enfrenta una crisis energética debido a la guerra en Ucrania. El conflicto ha interrumpido el suministro de energía y ha elevado los precios, lo que ha puesto a prueba la economía y los hogares griegos. El gobierno griego está tomando medidas para reducir su dependencia de la energía rusa y encontrar fuentes alternativas, pero se espera que la crisis continúe durante algún tiempo."
        },
        {
          title: "Grecia enfrenta un aumento en el desempleo",
          source: "Ekathimerini (en Español)",
          url: "https://www.ilo.org/es/resource/news/grecia-enfrenta-el-riesgo-de-una-crisis-social-prolongada",
          summary: "Grecia enfrenta un aumento en el desempleo. La tasa de desempleo alcanzó el 12,7% en marzo de 2024, lo que es más alto que el promedio de la zona euro. El aumento del desempleo se atribuye al impacto económico de la pandemia de COVID-19 y la crisis energética en curso."
        }
      ]
    },
    {
      name: "Hungría",
      coordinates: [47.1625, 19.5033],
      news: [
        {
          title: "Hungría enfrenta una alta inflación y un aumento en el costo de vida",
          source: "Portfolio (en Español)",
          url: "https://es.euronews.com/business/2023/12/14/21-euros-por-un-perro-caliente-los-irreales-precios-del-mercado-navideno-en-hungria",
          summary: "Hungría enfrenta una alta inflación y un aumento en el costo de vida. La inflación ha alcanzado un máximo de 20 años, impulsada por el aumento de los precios de la energía y los alimentos. El aumento del costo de vida está ejerciendo presión sobre los hogares húngaros, particularmente las familias de bajos ingresos. El gobierno húngaro está tomando medidas para frenar la inflación, pero sigue siendo un desafío importante."
        },
        {
          title: "Hungría enfrenta una escasez de mano de obra",
          source: "HVG (en Español)",
          url: "https://www.france24.com/es/20190305-en-foco-fabricas-hungria-trabajo",
          summary: "Hungría enfrenta una escasez de mano de obra. La escasez se debe a una serie de factores, incluida la baja tasa de natalidad, el envejecimiento de la población y la emigración. La escasez de mano de obra está dificultando que las empresas encuentren trabajadores calificados y está presionando los salarios. El gobierno húngaro está implementando medidas para abordar la escasez de mano de obra, pero es un problema complejo que requerirá esfuerzos continuos."
        }
      ]
    },


    //sin verificar link




    {
      name: "Irlanda",
      coordinates: [53.4129, -8.2439],
      news: [
        {
          title: "Irlanda enfrenta una crisis de vivienda",
          source: "The Irish Times",
          url: "https://es.euronews.com/2023/07/05/la-crisis-de-la-vivienda-azota-irlanda-y-obliga-a-los-jovenes-a-emigrar-del-pais",
          summary: "Irlanda se enfrenta a una crisis de vivienda que está provocando problemas de asequibilidad, falta de vivienda y hacinamiento. La crisis se atribuye a una serie de factores, incluida la escasez de oferta, el aumento de la demanda y los bajos salarios. El gobierno irlandés está tomando medidas para abordar la crisis, pero sigue siendo un desafío importante."
        },
        {
          title: "Irlanda enfrenta un aumento en la delincuencia juvenil",
          source: "RTÉ News",
          url: "https://www.bbc.com/mundo/noticias-internacional-56685116",
          summary: "Irlanda se enfrenta a un aumento de la delincuencia juvenil. El aumento se atribuye a varios factores, incluidas las desigualdades sociales y económicas, la falta de supervisión de los padres y la exposición a la violencia. El gobierno irlandés está implementando medidas para abordar el problema, pero sigue siendo un desafío complejo."
        }
      ]
    },
    {
      name: "Islandia",
      coordinates: [64.9631, -19.0208],
      news: [
        {
          title: "Islandia enfrenta una crisis climática",
          source: "RÚV",
          url: "https://viajesislandia.com/cambio-climatico-islandia#:~:text=El%20impacto%20del%20cambio%20clim%C3%A1tico%20en%20Islandia%20es%20especialmente%20grave,glaciares%20en%20Islandia%20es%20devastador.",
          summary: "Islandia se enfrenta a una crisis climática que está provocando un aumento de las temperaturas, el derretimiento de los glaciares y fenómenos meteorológicos más extremos. La crisis se atribuye a las emisiones de gases de efecto invernadero causadas por el hombre. El gobierno islandés está tomando medidas para abordar la crisis, incluido el establecimiento de objetivos ambiciosos de reducción de carbono e inversión en energía renovable."
        },
        {
          title: "Islandia enfrenta una escasez de mano de obra",
          source: "Visir",
          url: "https://www.larepublica.co/globoeconomia/islandia-enfrenta-una-nueva-crisis-10-anos-despues-de-su-colapso-economico-2778327",
          summary: "Islandia se enfrenta a una escasez de mano de obra que está provocando dificultades a las empresas y ejerciendo presión sobre los salarios. La escasez se atribuye a una serie de factores, incluido el envejecimiento de la población, el bajo desempleo y la falta de viviendas asequibles. El gobierno islandés está implementando medidas para abordar la escasez, pero sigue siendo un desafío."
        }
      ]
    },
    {
      name: "Italia",
      coordinates: [41.8719, 12.5674],
      news: [
        {
          title: "Italia enfrenta una crisis económica",
          source: "Il Corriere della Sera",
          url: "https://es.euronews.com/2022/10/25/italia-politica-economia",
          summary: "Italia está enfrentando una crisis económica que está causando un alto desempleo, bajo crecimiento y una gran deuda pública. La crisis se atribuye a varios factores, incluida la crisis de deuda en la zona euro, la inestabilidad política y la falta de competitividad. El gobierno italiano está tomando medidas para abordar la crisis, pero sigue siendo un desafío importante."
        },
        {
          title: "Italia enfrenta una crisis migratoria",
          source: "La Repubblica",
          url: "https://www.dw.com/es/lampedusa-una-crisis-operativa-no-una-crisis-migratoria/a-66847642",
          summary: "Italia está enfrentando una crisis migratoria que está viendo llegar a una gran cantidad de refugiados y solicitantes de asilo al país. La crisis está poniendo una presión sobre los recursos y la infraestructura de Italia, y también está causando tensiones sociales y políticas. El gobierno italiano está trabajando para abordar la crisis, pero es un problema complejo sin soluciones fáciles."
        }
      ]
    },
    {
      name: "Kosovo",
      coordinates: [42.6026, 20.9030],
      news: [
        {
          title: "Kosovo enfrenta una crisis política",
          source: "Radio Free Europe",
          url: "https://www.swissinfo.ch/spa/las-claves-de-la-crisis-de-las-matr%C3%ADculas-que-enfrenta-a-kosovo-y-serbia/46985766",
          summary: "Kosovo está enfrentando una crisis política que ha llevado a protestas, la falta de gobierno y preocupaciones sobre la estabilidad. La crisis tiene sus raíces en viejas quejas políticas y disputas. Los actores internacionales están llamando al diálogo y al compromiso, pero la situación sigue sin resolverse."
        },
        {
          title: "Kosovo enfrenta un alto desempleo",
          source: "Kosovo Statistics Agency",
          url: "https://www.ilo.org/es/resource/news/el-mercado-de-trabajo-de-kosovo-en-situacion-de-colapsola-oit-llama-un",
          summary: "Kosovo está enfrentando un alto desempleo, con una tasa del 25.5% en el cuarto trimestre de 2023. La tasa de desempleo es particularmente alta entre los jóvenes y las mujeres. La falta de oportunidades de empleo es un gran desafío para la economía y la sociedad de Kosovo."
        }
      ]
    },
    {
      name: "Letonia",
      coordinates: [56.8796, 24.6032],
      news: [
        {
        title: "Letonia enfrenta una crisis energética",
        source: "LSM.lv",
        url: "https://www.imf.org/es/Publications/fandd/issues/2022/12/beating-the-european-energy-crisis-Zettelmeyer",
        summary: "Letonia está enfrentando una crisis energética debido a la guerra en Ucrania. El conflicto ha interrumpido los suministros de energía y ha aumentado los precios, lo que ha puesto una presión sobre la economía y los hogares de Letonia. El gobierno letón está tomando medidas para reducir su dependencia de la energía rusa y encontrar fuentes alternativas, pero se espera que la crisis continúe por algún tiempo."
      },
      {
        title: "Letonia enfrenta una inflación alta",
        source: "Latvijas Banka",
        url: "https://www.swissinfo.ch/spa/pa%C3%ADses-b%C3%A1lticos-enfrentan-peligro-de-recesi%C3%B3n-tras-haber-reducido-la-inflaci%C3%B3n/48871022",
        summary: "Letonia está enfrentando una alta inflación, con una tasa de inflación anual que alcanzó el 19.1% en marzo de 2024. La alta inflación está impulsada por el aumento de los precios de la energía y los alimentos. El banco central letón está tomando medidas para frenar la inflación, pero sigue siendo un gran desafío."
      }
      ]
    },
    {
      name: "Liechtenstein",
      coordinates: [47.1660, 9.5554],
      news: [
        {
          title: "Liechtenstein enfrenta una escasez de vivienda",
          source: "Liechtensteiner Volksblatt",
          url: "https://www.eltiempo.com/mundo/europa/liechtenstein-la-ultima-monarquia-absoluta-de-europa-815711",
          summary: "Liechtenstein está enfrentando una escasez de viviendas que está causando problemas de asequibilidad y dificultando que las personas encuentren hogares. La escasez se atribuye a varios factores, incluido el crecimiento de la población, la disponibilidad limitada de tierras y el aumento de los costos de construcción. El gobierno de Liechtenstein está tomando medidas para abordar la escasez, pero sigue siendo un desafío."
        },
        {
          title: "Liechtenstein enfrenta un aumento en el costo de vida",
          source: "Radio Liechtenstein",
          url: "https://datos.bancomundial.org/pais/liechtenstein?display=default",
          summary: "Liechtenstein está enfrentando un aumento en el costo de vida, impulsado por la inflación y el aumento de los precios de bienes y servicios. El aumento en el costo de vida está poniendo una presión sobre los presupuestos familiares, especialmente de las familias de bajos ingresos. El gobierno de Liechtenstein está tomando medidas para ayudar a las personas a enfrentar los costos crecientes, pero sigue siendo una preocupación."
        }
      ]
    },
    {
      name: "Lituania",
      coordinates: [55.1694, 23.8813],
      news: [
        {
          title: "Lituania enfrenta una crisis migratoria en la frontera con Bielorrusia",
          source: "Deutsche Welle",
          url: "https://www.swissinfo.ch/spa/lituania-tambi%C3%A9n-bajo-tensi%C3%B3n-por-la-crisis-de-los-migrantes-en-bielorrusia/47147722",
          summary: "Lituania está enfrentando una crisis migratoria en su frontera con Bielorrusia. En 2021, llegó una gran cantidad de migrantes y solicitantes de asilo a la frontera, poniendo una presión sobre los recursos y la infraestructura de Lituania. La crisis ha disminuido un poco, pero las tensiones siguen siendo altas."
        },
        {
          title: "Lituania enfrenta una alta inflación",
          source: "Lietuvos bankas",
          url: "https://es.euronews.com/business/2024/03/05/que-paises-tienen-las-tasas-de-inflacion-mas-altas-y-bajas-de-europa",
          summary: "Lituania está enfrentando una alta inflación, con una tasa de inflación anual que alcanzó el 18.5% en marzo de 2024. La alta inflación está impulsada por el aumento de los precios de la energía y los alimentos. El banco central de Lituania está tomando medidas para frenar la inflación, pero sigue siendo un gran desafío."
        }
      ]
    },
    {
      name: "Luxemburgo",
      coordinates: [49.8153, 6.1296],
      news: [
        {
          title: "Luxemburgo enfrenta una crisis de vivienda",
          source: "Luxemburger Wort",
          url: "https://es.euronews.com/2023/10/06/luxemburgo-ni-comprar-ni-alquilar-precios-por-las-nubes",
          summary: "Luxemburgo está enfrentando una crisis de vivienda que está causando problemas de asequibilidad y dificultando que las personas encuentren hogares. La escasez se atribuye a varios factores, incluido el crecimiento de la población, la disponibilidad limitada de tierras y el aumento de los costos de construcción. El gobierno de Luxemburgo está tomando medidas para abordar la escasez, pero sigue siendo un desafío."
        },
        {
          title: "Luxemburgo enfrenta una escasez de mano de obra",
          source: "L'Essentiel",
          url: "https://www.expat.com/es/expat-mag/8107-luxemburgo-afronta-dificultades-para-contratar-talento-extranjero.html",
          summary: "Luxemburgo está enfrentando una escasez de mano de obra que está causando dificultades para las empresas y presionando los salarios. La escasez se atribuye a varios factores, incluida una población envejecida, un bajo desempleo y la falta de viviendas asequibles. El gobierno de Luxemburgo está implementando medidas para abordar la escasez, pero sigue siendo un desafío."
        }
      ]
    },
    {
      name: "Macedonia del Norte",
      coordinates: [41.6086, 21.7453],
      news: [
        {
          title: "Macedonia del Norte enfrenta una crisis política",
          source: "Balkan Insight",
          url: "https://es.euronews.com/2021/11/16/crisis-politica-en-macedonia-del-norte-es-muy-probable-que-en-los-proximos-meses-haya-elec",
          summary: "Macedonia del Norte ha estado enfrentando una crisis política desde 2020, con desacuerdos entre el gobierno y la oposición que han llevado a boicots parlamentarios y elecciones anticipadas. La crisis ha obstaculizado el progreso en las reformas necesarias para que Macedonia del Norte se una a la Unión Europea."
        },
        {
          title: "Macedonia del Norte enfrenta una alta tasa de desempleo",
          source: "State Statistical Office of the Republic of North Macedonia",
          url: "https://www.swisscontact.org/es/paises/macedonia-del-norte",
          summary: "Macedonia del Norte está enfrentando una alta tasa de desempleo, que se situó en el 22.9% en marzo de 2024. La tasa de desempleo es particularmente alta entre los jóvenes y las mujeres. La falta de oportunidades de empleo es un gran desafío para la economía y la sociedad de Macedonia del Norte."
        }
      ]
    },
    {
      name: "Malta",
      coordinates: [35.9375, 14.3754],
      news: [
        {
          title: "Malta enfrenta una crisis de migración",
          source: "Times of Malta",
          url: "https://www.france24.com/es/europa/20230929-en-malta-los-pa%C3%ADses-mediterr%C3%A1neos-intentaron-acordar-sus-posiciones-acerca-del-reto-migratorio",
          summary: "Malta está enfrentando una crisis de migración, ya que es uno de los principales puntos de entrada para los migrantes y solicitantes de asilo que cruzan el Mar Mediterráneo. La pequeña nación insular está luchando por hacer frente a la gran cantidad de llegadas, lo que ha puesto una presión sobre sus recursos e infraestructura. Malta está solicitando más apoyo de la Unión Europea para ayudar a manejar la crisis."
        },
        {
          title: "Malta enfrenta una escasez de agua",
          source: "Malta Independent",
          url: "https://www.eea.europa.eu/es/senales/senales-2018-el-agua-es-vida/articulos/entrevista-malta-la-escasez-de",
          summary: "Malta está enfrentando una escasez de agua debido a una combinación de factores, incluido el cambio climático, el crecimiento de la población y los recursos hídricos limitados. La escasez está causando preocupaciones sobre la disponibilidad de agua tanto para los hogares como para las empresas. El gobierno maltés está tomando medidas para conservar el agua y desarrollar fuentes alternativas de agua, pero sigue siendo un desafío a largo plazo."
        }
      ]
    },
    {
      name: "Moldavia",
      coordinates: [47.4116, 28.3699],
      news: [
        {
          title: "Moldavia enfrenta una crisis energética",
          source: "Radio Free Europe",
          url: "https://es.euronews.com/2022/11/09/deficit-energetico-en-moldavia-una-encrucijada-entre-rusia-y-occidente",
          summary: "Moldavia está enfrentando una crisis energética debido a su dependencia del gas ruso y la guerra en Ucrania. El conflicto ha interrumpido los suministros de energía y ha aumentado los precios, lo que ha puesto una presión sobre la economía y los hogares de Moldavia. El gobierno moldavo está tomando medidas para reducir su dependencia de la energía rusa y encontrar fuentes alternativas, pero se espera que la crisis continúe por algún tiempo."
        },
        {
          title: "Moldavia enfrenta una inflación alta",
          source: "National Bank of Moldova",
          url: "https://www.swissinfo.ch/spa/europa-apoya-a-moldavia-con-m%C3%A1s-de-800-millones-para-paliar-efectos-de-guerra-en-ucrania/48899500",
          summary: "Moldavia está enfrentando una alta inflación, con una tasa de inflación anual que alcanzó el 25.2% en marzo de 2024. La alta inflación está impulsada por el aumento de los precios de la energía y los alimentos. El Banco Nacional de Moldavia está tomando medidas para frenar la inflación, pero sigue siendo un gran desafío."
        }
    
      ]
    },
    {
      name: "Mónaco",
      coordinates: [43.7384, 7.4246],
      news: [
        {
          title: "Mónaco enfrenta una crisis de vivienda",
          source: "Monaco-Matin",
          url: "https://www.vanitatis.elconfidencial.com/casas-reales/2023-07-19/alberto-charlene-monaco-corrupcion-despido-palmero_3703208/",
          summary: "Mónaco está enfrentando una crisis de vivienda que está causando problemas de asequibilidad y dificultando que las personas encuentren hogares. La escasez se atribuye a varios factores, incluido el crecimiento de la población, la disponibilidad limitada de tierras y el aumento de los costos de construcción. El gobierno de Mónaco está tomando medidas para abordar la escasez, pero sigue siendo un desafío."
        },
        {
          title: "Mónaco enfrenta un aumento en el costo de vida",
          source: "L'Observateur de Monaco",
          url: "https://www.expatistan.com/es/costo-de-vida/monaco",
          summary: "Mónaco está enfrentando un aumento en el costo de vida, impulsado por la inflación y el aumento de los precios de bienes y servicios. El aumento en el costo de vida está poniendo una presión sobre los presupuestos familiares, especialmente de las familias de bajos ingresos. El gobierno de Mónaco está tomando medidas para ayudar a las personas a enfrentar los costos crecientes, pero sigue siendo una preocupación."
        }
      ]
    },
    {
      name: "Montenegro",
      coordinates: [42.7087, 19.3744],
      news: [
        {
          title: "Montenegro enfrenta una crisis de corrupción",
          source: "Vijesti",
          url: "https://www.coe.int/es/web/portal/-/montenegro-must-strengthen-public-trust-in-preventing-and-fighting-corruption-at-the-top-executive-level-and-in-the-police",
          summary: "Montenegro está enfrentando una crisis de corrupción que ha erosionado la confianza pública en el gobierno y las instituciones. El país ha sido criticado por organismos internacionales por su falta de progreso en la lucha contra la corrupción. Montenegro está tomando medidas para abordar el problema, pero sigue siendo un gran desafío."
        },
        {
          title: "Montenegro enfrenta un alto desempleo",
          source: "Statistical Office of Montenegro",
          url: "https://datos.bancomundial.org/indicator/SL.UEM.TOTL.ZS?locations=ME",
          summary: "Montenegro está enfrentando un alto desempleo, con una tasa de desempleo que alcanzó el 21.3% en marzo de 2024. La tasa de desempleo es particularmente alta entre los jóvenes y las mujeres. La falta de oportunidades de empleo es un gran desafío para la economía y la sociedad de Montenegro."
        }
      ]
    },
    
    {
      name: "Noruega",
      coordinates: [60.4720, 8.4689],
      news: [
        {
          title: "Noruega enfrenta una crisis climática",
          source: "NRK",
          url: "https://www.nrk.no/klima/norges-klimakrise-1.17153170",
          summary: "Noruega enfrenta una crisis climática que está causando un aumento de las temperaturas, el derretimiento de los glaciares y eventos climáticos más extremos. La crisis se atribuye a las emisiones de gases de efecto invernadero causadas por el hombre. El gobierno noruego está tomando medidas para abordar la crisis, incluyendo el establecimiento de ambiciosos objetivos de reducción de carbono y la inversión en energía renovable."
        },
        {
          title: "Noruega enfrenta una escasez de mano de obra",
          source: "SSB",
          url: "https://www.ssb.no/en/arbeid-og-lonn/statistikker/arbeidskraftsundersokelsen/artikler/mange-leddige-stillinger-i-norge",
          summary: "Noruega enfrenta una escasez de mano de obra que está causando dificultades a las empresas y poniendo presión sobre los salarios. La escasez se atribuye a una serie de factores, entre ellos el envejecimiento de la población, el bajo desempleo y la falta de viviendas asequibles. El gobierno noruego está implementando medidas para abordar la escasez, pero sigue siendo un desafío."
        }
      ]
    },
    {
      name: "Países Bajos",
      coordinates: [52.1326, 5.2913],
      news: [
        {
          title: "Países Bajos enfrenta una crisis de vivienda",
          source: "NOS",
          url: "https://nos.nl/artikel/2452870-woningnood-in-nederland-wordt-erger-en-erger-dit-zijn-de-cijfers",
          summary: "Los Países Bajos enfrentan una crisis de vivienda que está causando problemas de asequibilidad y dificultando que las personas encuentren un hogar. La escasez se atribuye a una serie de factores, entre ellos el crecimiento de la población, la disponibilidad limitada de tierra y el aumento de los costos de construcción. El gobierno holandés está tomando medidas para abordar la escasez, pero sigue siendo un desafío."
        },
        {
          title: "Países Bajos enfrenta una escasez de agua",
          source: "Rijkswaterstaat",
          url: "https://www.rijkswaterstaat.nl/water/watertekorten/droogte-2023/",
          summary: "Los Países Bajos enfrentan una escasez de agua debido a una combinación de factores, que incluyen el cambio climático, el crecimiento de la población y los recursos hídricos limitados. La escasez está causando preocupación por la disponibilidad de agua tanto para los hogares como para las empresas. El gobierno holandés está tomando medidas para conservar el agua y desarrollar fuentes de agua alternativas, pero sigue siendo un desafío a largo plazo."
        }
      ]
    },
    {
      name: "Polonia",
      coordinates: [51.9194, 19.1451],
      news: [
        {
          title: "Polonia enfrenta una crisis de refugiados",
          source: "Rzeczpospolita",
          url: "https://www.rp.pl/polityka/artykul/2315124-kryzys-uchodzcow-w-polsce-jakie-sa-liczby-i-jakie-wyzwania.html",
          summary: "Polonia enfrenta una crisis de refugiados debido al gran número de personas que huyen de la guerra en Ucrania. El país ha acogido a millones de refugiados, lo que ha puesto a prueba sus recursos e infraestructura. El gobierno polaco está trabajando para brindar apoyo a los refugiados y reubicarlos en otros países, pero la crisis sigue siendo un desafío importante."
        },
        {
          title: "Polonia enfrenta una alta inflación",
          source: "Narodowy Bank Polski",
          url: "https://www.nbp.pl/statystyki/inflacja/inflacja-w-marcu-2024.html",
          summary: "Polonia enfrenta una alta inflación, con una tasa de inflación anual que alcanzó el 12.3% en marzo de 2024. La alta inflación está impulsada por el aumento de los precios de la energía y los alimentos. El Banco Nacional de Polonia está tomando medidas para controlar la inflación, pero sigue siendo un desafío importante."
        }
      ]
    },
    {
      name: "Portugal",
      coordinates: [39.3999, -8.2245],
      news: [
        {
          title: "Portugal enfrenta una crisis de incendios forestales",
          source: "Público",
          url: "https://www.publico.pt/2024/04/24/local/incendios/incendios-florestais-preocupam-especialistas-que-pedem-mais-meios-e-prevencao/news/20240424000000968",
          summary: "Portugal enfrenta una crisis de incendios forestales que está causando daños a la propiedad, la pérdida de vidas y el deterioro del medio ambiente. Los incendios forestales se atribuyen a una combinación de factores, que incluyen el clima seco, las altas temperaturas y la actividad humana. El gobierno portugués está tomando medidas para prevenir incendios forestales y mejorar la respuesta a los mismos, pero la crisis sigue siendo un desafío importante."
        },
        {
          title: "Portugal enfrenta una crisis de vivienda",
          source: "Expresso",
          url: "https://expresso.pt/economia/2024-04-23-crise-da-habitacao-em-portugal-aumenta-a-pressao-sobre-o-governo-e-especialistas-alertam-para-o-risco-de-uma-bolha",
          summary: "Portugal enfrenta una crisis de vivienda que está causando problemas de asequibilidad y dificultando que las personas encuentren un hogar. La escasez se atribuye a una serie de factores, entre ellos el crecimiento de la población, la disponibilidad limitada de tierra y el aumento de los costos de construcción. El gobierno portugués está tomando medidas para abordar la escasez, pero sigue siendo un desafío."
        }
      ]
    },
    {
      name: "Reino Unido",
      coordinates: [55.3781, -3.4360],
      news: [
        {
          title: "El Reino Unido enfrenta una crisis del costo de vida",
          source: "BBC News",
          url: "https://www.bbc.com/news/business-60721507",
          summary: "El Reino Unido enfrenta una crisis del costo de vida impulsada por el aumento de la inflación, el aumento de los precios de la energía y el estancamiento de los salarios. La crisis está poniendo a prueba los presupuestos de los hogares y está llevando a un aumento de la pobreza. El gobierno del Reino Unido está tomando medidas para ayudar a las personas con el costo de vida, pero la crisis sigue siendo un desafío importante."
        },
        {
          title: "El Reino Unido enfrenta una escasez de mano de obra",
          source: "The Guardian",
          url: "https://www.theguardian.com/business/2024/apr/23/uk-faces-worst-labour-shortage-in-50-years-warns-british-chambers-of-commerce",
          summary: "El Reino Unido enfrenta una escasez de mano de obra que está causando dificultades a las empresas y obstaculizando el crecimiento económico. La escasez se atribuye a una serie de factores, que incluyen el Brexit, el envejecimiento de la población y la pandemia de COVID-19. El gobierno del Reino Unido está tomando medidas para abordar la escasez, pero sigue siendo un desafío importante."
        }
      ]
    },
    {
      name: "República Checa",
      coordinates: [49.8175, 15.4729],
      news: [
        {
          title: "La República Checa enfrenta una crisis energética",
          source: "ČTK",
          url: "https://www.ctk.cz/en/czech-republic-faces-energy-crisis-says-prime-minister-babis-25600130.html",
          summary: "La República Checa enfrenta una crisis energética debido a su dependencia del gas ruso y la guerra en Ucrania. El conflicto ha interrumpido los suministros de energía y ha hecho subir los precios, lo que ha puesto a prueba la economía checa y los hogares. El gobierno checo está tomando medidas para reducir su dependencia de la energía rusa y encontrar fuentes de energía alternativas, pero la crisis sigue siendo un desafío importante."
        },
        {
          title: "La República Checa enfrenta una alta inflación",
          source: "Český statistický úřad",
          url: "https://www.czso.cz/csu/cz/tendencni-statistiky/inflace",
          summary: "La República Checa enfrenta una alta inflación, con una tasa de inflación anual que alcanzó el 15.1% en marzo de 2024. La alta inflación está impulsada por el aumento de los precios de la energía y los alimentos. El Banco Central Checo está tomando medidas para controlar la inflación, pero sigue siendo un desafío importante."
        }
      ]
    },
    // con revision de url 
    {
      name: "Rumania",
      coordinates: [45.9432, 24.9668],
      news: [
        {
          title: "Camioneros y agricultores bloquen las carreteras de Rumanía para presionar al Gobierno",
          source: "Euro news",
          url: "https://es.euronews.com/2024/01/12/camioneros-y-agricultores-bloquen-las-carreteras-de-rumania-para-presionar-al-gobierno",
          summary: "Camioneros y agricultores bloquean las carreteras por tercer día en todo el país descontentos por los altos precios de los seguros, el combustible y los fertilizantes. Los agricultores y transportistas se quejan de que se favorece a las empresas extranjeras."
        },
        {
          title: "Rumanía, uno de los países con mayor tasa de muertos por COVID-19",
          source: "Datos marco",
          url: "https://datosmacro.expansion.com/otros/coronavirus/rumania",
          summary: "Rumanía registra, según los últimos datos, 3.526.775 personas confirmadas de coronavirus, 183 más que el valor anterior. En estos momentos, la tasa de pacientes confirmados de coronavirus en los últimos 14 días es de 2,29 por cada cien mil habitantes, luego su tasa confirmados de coronavirus es muy baja en comparación con la del resto de los 195 países que tienen casos confirmados en la actualidad."
        }
      ]
    },
    {
      name: "Rusia",
      coordinates: [61.5240, 105.3188],
      news: [
        {
          title: "Rusia intensifica ataques en el este de Ucrania, mientras se teme por Mariupol",
          source: "El País",
          url: " https://elpais.com/internacional/2023-12-30/el-kremlin-asegura-que-ucrania-ha-lanzado-misiles-y-drones-sobre-belgorod-y-otras-ciudades-del-suroeste-de-rusia.html",
          summary: "Las fuerzas rusas han intensificado sus ataques en el este de Ucrania, donde se teme por la ciudad de Mariupol, que sigue asediada y donde las condiciones humanitarias son cada vez más precarias."
        },
        {
          title: "Zelensky acusa a Rusia de querer convertir Mariupol en una nueva Pompeya",
          source: "El País",
          url: "https://www.hrw.org/es/news/2024/02/08/ucrania-nuevos-hallazgos-sobre-la-devastacion-rusa-la-ciudad-de-mariupol",
          summary: "El presidente de Ucrania, Volodimir Zelensky, ha acusado a Rusia de querer convertir la ciudad de Mariupol en una nueva Pompeya, arrasándola por completo. Zelensky ha pedido a la comunidad internacional que tome medidas para detener la destrucción de la ciudad."
        }
      ]
    },
    {
      name: "San Marino",
      coordinates: [43.9424, 12.4578],
      news: [
        {
          title: "San Marino al borde del colapso económico: ¿Podrá el pequeño país sobrevivir?",
          source: "confidencial",
          url: "https://www.elconfidencial.com/mundo/2018-10-07/san-marino-una-gran-crisis-bancaria-en-miniatura_1625633/",
          summary: " La pandemia y la guerra en Ucrania han golpeado duramente a la economía de San Marino, lo que ha generado serias preocupaciones sobre el futuro del pequeño país. El gobierno está buscando soluciones para diversificar la economía y crear nuevos puestos de trabajo, pero el camino a la recuperación será largo y difícil."
        },
        {
          title: "El turismo en San Marino se desploma: ¿Hay esperanza para la recuperación?",
          source: "",
          url: "https://www.unwto.org/es/news/la-omt-presenta-la-agenda-de-accion-de-san-marino-a-fin-de-lograr-un-turismo-accesible-para-todos",
          summary: "El sector turístico de San Marino, que alguna vez fue un motor de la economía, ha sufrido un duro golpe debido a la pandemia y la guerra en Ucrania. Las restricciones de viaje y el miedo al contagio han disuadido a muchos turistas de visitar el país. El gobierno está tomando medidas para reavivar el turismo, pero la recuperación será lenta."
        }
      ]
    },
    {
      name: "Serbia",
      coordinates: [44.0165, 21.0059],
      news: [
        {
          title: "Tensiones en Kosovo amenazan con desestabilizar los Balcanes",
          source: "",
          url: "https://www.elindependiente.com/internacional/2023/10/04/tension-en-kosovo-razones-de-un-conflicto-latente-en-europa/",
          summary: "Un reciente incidente en el que un grupo de serbios étnicos bloqueó una carretera en Kosovo ha aumentado las preocupaciones de que la región podría volver a la violencia. La comunidad internacional ha pedido a ambas partes que dialoguen y eviten la escalada de la tensión."
        },
        {
          title: " Serbia se enfrenta a un dilema geopolítico: ¿Oriente o Occidente?",
          source: "",
          url: "https://www.bbc.com/mundo/noticias-internacional-60961162",
          summary: "Serbia se encuentra en una difícil posición geopolítica, ya que se ve presionada para elegir entre unirse a la Unión Europea o mantener estrechos lazos con Rusia. La guerra en Ucrania ha intensificado este dilema, y el gobierno serbio tendrá que tomar una decisión difícil en el futuro."
        }
      ]
    },
    {
      name: "Suecia",
      coordinates: [60.1282, 18.6435],
      news: [
        {
          title: "Delincuencia desbocada en Suecia: ¿Qué está fallando?",
          source: "",
          url: "https://www.bbc.com/mundo/articles/ckvp79xj9qdo",
          summary: "Suecia ha experimentado un aumento de la delincuencia en los últimos años, lo que ha generado preocupación entre la población. El gobierno ha tomado medidas para abordar el problema, como aumentar el número de policías y fortalecer las leyes contra el crimen. Sin embargo, el problema sigue siendo complejo y no hay una solución fácil."
        },
        {
          title: "Suecia: ¿Un modelo de bienestar social en declive?",
          source: "",
          url: "https://es.euronews.com/2023/01/26/el-modelo-sueco-plagado-de-violencia-de-bandas-y-desigualdad",
          summary: " El famoso modelo de bienestar social de Suecia se enfrenta a una serie de desafíos, como el aumento de la delincuencia, el envejecimiento de la población y la creciente desigualdad. Algunos expertos advierten que el modelo podría estar en declive, lo que genera un debate sobre el futuro del estado de bienestar en Suecia."
        }
      ]
    },
    {
      name: "Suiza",
      coordinates: [46.8182, 8.2275],
      news: [
        {
          title: "La neutralidad de Suiza en la cuerda floja en medio de la crisis geopolítica",
          source: "",
          url: "https://www.swissinfo.ch/spa/politica-exterior/en-qu%C3%A9-medida-es-neutral-suiza/45810440",
          summary: "La guerra en Ucrania y el aumento de las tensiones entre Rusia y Occidente han puesto a prueba la capacidad de Suiza de permanecer neutral. El gobierno suizo ha reafirmado su compromiso con la neutralidad, pero es posible que tenga que reconsiderar su política en el futuro."
        },
        {
          title: "Suiza: ¿Un refugio seguro en tiempos de incertidumbre?",
          source: "",
          url: "https://www.swissinfo.ch/spa/economia/en-un-mundo-en-crisis-suiza-mantiene-su-estabilidad-pol%c3%adtica/48010274",
          summary: " La neutralidad y la estabilidad política de Suiza la han convertido en un refugio seguro para personas y capitales de todo el mundo en tiempos de crisis. Sin embargo, la guerra en Ucrania y el cambiante panorama geopolítico están poniendo a prueba la capacidad de Suiza para mantener su neutralidad y su estatus de refugio seguro."
        }
      ]
    },
    {
      name: "Ucrania",
      coordinates: [48.3794, 31.1656],
      news: [
        {
          title: " La guerra en Ucrania continúa: ¿Habrá un final a la vista?",
          source: "",
          url: "https://www.bbc.com/mundo/articles/c0v0g8y07j9o",
          summary: "La guerra en Ucrania continúa sin tregua, con miles de muertos y millones de desplazados. Las ciudades ucranianas siguen siendo bombardeadas y destruidas, y la situación humanitaria es cada vez más grave. La comunidad internacional ha condenado la invasión rusa y ha impuesto duras sanciones a Rusia, pero no está claro cuánto tiempo durará la guerra o cómo terminará."
        },
        {
          title: "Ucrania: Un país en ruinas y un futuro incierto",
          source: "",
          url: "https://www.imf.org/es/Blogs/Articles/2022/03/15/blog-how-war-in-ukraine-is-reverberating-across-worlds-regions-031522",
          summary: "La guerra en Ucrania ha causado una devastación generalizada en el país. Las ciudades han sido reducidas a escombros, la infraestructura ha sido destruida y la economía está en ruinas. Millones de personas han huido de sus hogares y se enfrentan a un futuro incierto. El impacto de la guerra se sentirá durante generaciones."
        }
      ]
    },
    {
      name: "Vaticano",
      coordinates: [41.9029, 12.4534],
      news: [
        {
          title: "El Papa Francisco pide un alto el fuego inmediato en Ucrania",
          source: "",
          url: "https://www.france24.com/es/europa/20240331-alto-el-fuego-inmediato-en-gaza-e-intercambio-de-prisioneros-en-ucrania-pidi%C3%B3-el-papa-francisco",
          summary: "El Papa Francisco ha hecho un llamamiento urgente a un alto el fuego inmediato en Ucrania, condenando la violencia y la pérdida de vidas humanas. Ha pedido a los líderes mundiales que trabajen por la paz y la resolución pacífica del conflicto."
        },
        {
          title: "El Vaticano ofrece ayuda humanitaria a las víctimas de la guerra en Ucrania",
          source: "",
          url: "https://es.euronews.com/2024/05/01/el-papa-francisco-pide-la-paz-en-ucrania-y-gaza",
          summary: " El Vaticano ha ofrecido su ayuda humanitaria a las víctimas de la guerra en Ucrania. La Iglesia Católica está brindando alimentos, refugio y atención médica a los necesitados, tanto dentro como fuera del país. El Papa Francisco ha pedido a la comunidad internacional que redobla sus esfuerzos para ayudar a los más vulnerables en este momento de crisis."
        }
      ]
    },
      // Asia
  {
    name: "Afganistán",
    coordinates: [33.9391, 67.7100],
    news: [
      {
        title: "Ataque terrorista en Kabul deja decenas de muertos y heridos",
        source: "BBC News",
        url: " https://www.bbc.com/mundo/noticias-internacional-58345570 ",
        summary: "Un ataque terrorista con bomba en Kabul, Afganistán, dejó al menos 50 personas muertas y más de 100 heridas. El ataque ocurrió cerca de una mezquita en el centro de la ciudad y fue reivindicado por el grupo terrorista Estado Islámico de Khorasan (ISIS-K)."
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Arabia Saudita",
    coordinates: [23.8859, 45.0792],
    news: [
      {
        title: " Arabia Saudita ya no espera subir en 8 % su producción de petróleo ",
        source: "Portafolio",
        url: " https://www.portafolio.co/energia/por-que-arabia-saudita-cancelo-sus-planes-de-incrementar-su-produccion-petrolera-597226 ",
        summary: " La reversión de los planes de Arabia Saudita para reforzar su capacidad de producción de petróleo ha planteado dudas sobre el futuro de la demanda, pero apunta a otro riesgo de largo plazo para los ingresos del petróleo energético del reino: los proveedores rivales. "
      }
,
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Bangladés",
    coordinates: [23.6850, 90.3563],
    news: [
      {
        title: " Bangladesh se prepara para celebrar elecciones generales en medio de la tensión política ",
        source: "BBC News",
        url: " https://www.bbc.com/news/world-asia-67889387 ",
        summary: " Bangladesh se prepara para celebrar elecciones generales en medio de una creciente tensión política. La primera ministra Sheikh Hasina, que lleva en el poder desde 2009, busca un quinto mandato, mientras que la oposición denuncia fraude electoral y exige reformas. Las elecciones se consideran una prueba clave para la democracia de Bangladesh. "
      },
,
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Birmania",
    coordinates: [21.9162, 95.9560],
    news: [
      {
        title: " La junta militar de Birmania intensifica la represión contra la disidencia ",
        source: " Al Jazeera ",
        url: " https://www.aljazeera.com/program/newsfeed/2023/3/28/myanmar-parades-military-and-issues-warning-to-terrorists ",
        summary: " La junta militar de Birmania ha intensificado su represión contra la disidencia en los últimos meses, con un aumento en el número de arrestos, asesinatos y torturas de civiles. La comunidad internacional ha condenado enérgicamente la violencia y ha pedido a la junta que ponga fin a sus abusos. "
      }
,
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Brunéi",
    coordinates: [4.5353, 114.7277],
    news: [
      {
        title: " Brunéi y Singapur firman un acuerdo de libre comercio histórico ",
        source: "CNA",
        url: " https://www.channelnewsasia.com/topic/brunei ",
        summary: " Brunéi y Singapur han firmado un acuerdo de libre comercio (TLC) histórico que eliminará las barreras arancelarias y no arancelarias al comercio entre los dos países. El TLC se espera que impulse el comercio y la inversión entre Brunéi y Singapur, y que cree nuevas oportunidades económicas para ambos países. El acuerdo también incluye disposiciones sobre cooperación en una serie de áreas, como la propiedad intelectual, la competencia y la facilitación del comercio. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Bután",
    coordinates: [27.5142, 90.4336],
    news: [
      {
        title: " Cómo el pequeño Bután se volvió un actor clave en las disputas estratégicas entre China e India",
        source: "BBC News",
        url: " https://www.bbc.com/mundo/noticias-internacional-65419838  ",
        summary: " Bután se encuentra entre dos gigantes asiáticos, China e India. Pero esa posición geográfica única tiene un precio.Bután es uno de los dos países con los que China aún debe resolver su disputa fronteriza terrestre. El otro país es India, que tiene un largo desacuerdo sobre su frontera del Himalay con China.El ascenso global de China está ejerciendo presión sobre Bután para llegar a un acuerdo con Pekín, pero cualquier posible avance necesitará la aprobación de su aliado India. "
      }
,
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Camboya",
    coordinates: [12.5657, 104.9910],
    news: [
      {
        title: "Camboya dice que el calor extremo influyó en la explosión mortal de municiones",
        source: "Yahoo noticias",
        url: " https://es-us.noticias.yahoo.com/camboya-calor-extremo-influy%C3%B3-explosi%C3%B3n-101749028.html ",
        summary: " El Ministerio de Defensa de Camboya afirmó el jueves que la fuerte ola de calor que azota el sudeste asiático incidió en la explosión de un depósito de municiones que mató a 20 soldados el fin de semana en una base militar. La explosión, que destruyó un camión de municiones y derribó edificios, también dejó varios soldados y al menos un niño heridos en la provincia rural de Kampong Speu, al oeste de la capital Phnom Penh. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "China",
    coordinates: [35.8617, 104.1954],
    news: [
      {
        title: " La advertencia de China a EE.UU. de que no cruce sus “líneas rojas”",
        source: "BBC News Mundo",
        url: " https://www.bbc.com/mundo/articles/cglxd202kypo ",
        summary: " El ministro de Relaciones Exteriores de China, Wang Yi, advirtió al secretario de Estado de Estados Unidos, Antony Blinken, de que su país no cruce las líneas rojas de la potencia asiática. Wang transmitió el mensaje a Blinken este viernes durante la reunión que mantuvieron ambos cancilleres en Pekín. Por su parte, el presidente chino, Xi Jinping, pidió a Estados Unidos que sean socios, no rivales.El ministro de Exteriores de China también transmitió a su homólogo estadounidense que Pekín plantea demandas “coherentes” y “siempre aboga por el respeto mutuo de los intereses fundamentales”. "
      },
      {
        title: " Un buque chino armado con un cañón de agua ataca un barco filipino en una nueva escalada en el mar de China Meridional, dice Filipinas ",
        source: "CNN Mundo",
        url: " https://cnnespanol.cnn.com/2024/04/30/canon-agua-chino-dana-barco-mar-china-meridional-filipinas-trax/ ",
        summary: " La Guardia Costera de China disparó cañones de agua que dañaron un barco filipino este martes, marcando el último estallido de violencia entre los dos países en el disputado Mar de China Meridional, dijeron las autoridades filipinas.La Guardia Costera de Filipinas dijo que el incidente ocurrió cuando uno de sus barcos y un buque de la agencia de pesca realizaban una “patrulla legítima” cerca de Scarborough Shoal, un afloramiento rocoso controlado por China a 200 kilómetros al oeste de la principal isla filipina de Luzón y dentro de la zona económica exclusiva de Manila."
      }

    ]
  },
  {
    name: "Corea del Norte",
    coordinates: [40.3399, 127.5101],
    news: [
      {
        title: " ¿Se prepara Corea del Norte para la guerra en 2024? ",
        source: " Deutsche Welle DW",
        url: " https://www.dw.com/es/se-prepara-corea-del-norte-para-la-guerra-en-2024/a-68000488 ",
        summary: " Kim Jong-un intensifica una vez más la retórica de guerra de Corea del Norte contra Corea del Sur y Estados Unidos. Esta vez, los analistas advierten que la amenaza va más allá de las fanfarronadas habituales.El líder norcoreano,Kim Jong-un, terminó 2023 con un encendido discurso político ante la dirección del Partido Comunista, prescindiendo de la posibilidad de una reunificación pacífica con Corea del Sur y calificando la relación como la de dos países hostiles y dos beligerantes en guerra, informó la agencia estatal KCNA. Kim pidió una expansión exponencial del arsenal nuclear de Corea del Norte y un aumento de las pruebas de misiles balísticos. Prometió lanzar tres nuevos satélites espías. Acusó a Corea del Sur y Estados Unidos de medidas imprudentes en preparación para una invasión y advirtió que una guerra puede estallar en cualquier momento en la península de Corea. "
      },
      {
        title: " Corea del Norte ha amenazado a los EE. UU. y Corea del Sur ",
        source: "TRT Español",
        url: " https://www.trt.net.tr/espanol/mundo/2024/03/05/corea-del-norte-ha-amenazado-a-los-ee-uu-y-corea-del-sur-2111339 ",
        summary: " Corea del Norte afirmó que participará en actividades militares en respuesta a los ejercicios militares conjuntos de Estados Unidos y Corea del Sur. Según informa la Agencia Central de Noticias de Corea del Norte (KCNA), el Ministerio de Defensa de Corea del Norte hizo una declaración sobre el ejercicio conjunto de Corea del Sur y Estados Unidos, que durará 11 días e incluirá el doble de ejercicios terrestres diferentes en comparación hasta el año pasado.En el comunicado, los ejercicios militares de EE.UU. y Corea del Sur fueron calificados como una clara amenaza encaminada a violar la soberanía de un estado, y se afirmó que EE.UU. y Corea del Sur pagarán un alto precio por la elección equivocada. "
      }

    ]
  },
  {
    name: "Corea del Sur",
    coordinates: [35.9078, 127.7669],
    news: [
      {
        title: " Qué implica el histórico restablecimiento de relaciones entre Corea del Sur y Cuba, país hermano de Corea del Norte",
        source: "BBC News",
        url: " https://www.bbc.com/mundo/articles/crg95eq1lzqo  ",
        summary: " Cuba y Corea del Sur restablecieron sus relaciones diplomáticas tras más de seis décadas de ruptura.Lo formalizaron este miércoles en la sede de Naciones Unidas en Nueva York, donde sus representantes intercambiaron notas y dejaron pendiente la apertura de sus respectivas embajadas.Los dos países comunicaron la noticia del restablecimiento de las relaciones diplomáticas de forma relativamente discreta, en línea con el secretismo que ha marcado sus negociaciones en los últimos años.El Ministerio de Exteriores de Seúl emitió un comunicado en el que deseó que esta nueva conexión marque un punto de inflexión crucial en sus esfuerzos por ampliar sus horizontes diplomáticos y fortalecer la diplomacia con América Latina y el Caribe. "
      },
{
        title: " EEUU, Japón y Corea del Sur estrechan vínculos tras provocaciones de Corea del Norte ",
        source: "Diarios Las Americas",
        url: " https://www.diariolasamericas.com/eeuu/eeuu-japon-y-corea-del-sur-estrechan-vinculos-provocaciones-corea-del-norte-n5352036 ",
        summary: " Corea del Sur y EEUU volaron el viernes cazas furtivos avanzados durante un ejercicio conjunto de intercepción de misiles sobre la Península de Corea. Corea del Sur y Estados Unidos volaron el viernes cazas furtivos avanzados durante un ejercicio conjunto de intercepción de misiles sobre la Península de Corea, dijo la Fuerza Aérea surcoreana, en una aparente respuesta a la serie de pruebas armamentísticas realizadas por Corea del Norte este año. "
      }

    ]
  },
  {
    name: "Emiratos Árabes Unidos",
    coordinates: [23.4241, 53.8478],
    news: [
      {
        title: " Los Emiratos Árabes Unidos luchan por recuperarse de unas inundaciones sin precedentes ",
        source: "Euro News",
        url: " https://es.euronews.com/2024/04/18/los-emiratos-arabes-unidos-luchan-por-recuperarse-de-unas-inundaciones-sin-precedentes ",
        summary: " Los ciudadanos de los Emiratos Árabes Unidos (EAU) están intentando recuperarse de las intensas tormentas que azotaron el país desértico con las lluvias más intensas de su historia El principal aeropuerto del país se esforzó por restablecer la normalidad el jueves, mientras las aguas seguían cubriendo parte de las principales autopistas y carreteras.El Aeropuerto Internacional de Dubái, el de mayor tráfico internacional del mundo, permitió el jueves por la mañana a las compañías aéreas internacionales aterrizar de nuevo en la Terminal 1 del aeródromo."
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Filipinas",
    coordinates: [12.8797, 121.7740],
    news: [
      {
        title: " Estados Unidos, Japón y Filipinas cierran filas ante las presiones de Pekín en el mar del Sur de China ",
        source: "El País",
        url: " https://elpais.com/internacional/2024-04-12/estados-unidos-japon-y-filipinas-cierran-filas-ante-las-presiones-de-pekin-en-el-mar-del-sur-de-china.html ",
        summary: " Un ataque contra las fuerzas filipinas en esas aguas movilizaría a las tropas estadounidenses, ha advertido Biden en una reunión trilateral. China no estaba presente, pero fue el gran protagonista. El primer encuentro trilateral entre los líderes de Estados Unidos, Japón y Filipinas este jueves en la Casa Blanca buscaba hacer un alarde de unidad frente a las presiones, cada vez más intensas, del gigante asiático hacia Manila en el mar del Sur de China, donde el gigante asiático se atribuye la soberanía de casi el total de las aguas y mantiene una agria disputa territorial con el archipiélago. Washington ha tildado las tácticas de Pekín de “intimidación”."
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "India",
    coordinates: [20.5937, 78.9629],
    news: [
      {
        title: " La India celebra las mayores elecciones del planeta con el primer ministro Modi como favorito ",
        source: "El País",
        url: " https://elpais.com/internacional/2024-04-19/la-india-celebra-las-mayores-elecciones-del-planeta-con-el-primer-ministro-modi-como-favorito.html ",
        summary: " La gigantesca maquinaria de las elecciones en la India, el país más poblado del planeta, ha arrancado este viernes con el gobernante Bharatiya Janata Party (BJP), el partido nacionalista hindú del actual primer ministro, Narendra Modi, como favorito. Casi 970 millones de personas están convocadas a las urnas a lo largo de siete fases desplegadas en los próximos 44 días. "
      }
,
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Indonesia",
    coordinates: [-0.7893, 113.9213],
    news: [
      {
        title: " La masiva erupción del monte Ruang activa una alerta de tsunami y provoca la evacuación de miles de personas en Indonesia ",
        source: "BBC News Mundo",
        url: " https://www.bbc.com/mundo/articles/c4n10j00pmlob ",
        summary: " La erupción del volcán Ruang en Indonesia, que empezó el miércoles por la noche, activó las alertas por un posible tsunami en el país del sureste asiático.El Centro de Vulcanología y Mitigación de Peligros Geológicos (PVMBG) de Indonesia ordenó mantener un radio de seguridad de seis kilómetros de distancia desde el volcán en la isla de Tagulandang, por lo que miles de personas fueron evacuadas.La erupción del monte, situado en el archipiélago de las islas Sulawesi, generó en 1871 un tsunami de 24 metros de altura que mató a unas 400 personas. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Irak",
    coordinates: [33.2232, 43.6793],
    news: [
      {
        title: " Irak reafirma su decisión de poner fin a coalición internacional tras ataque de EE. UU. en Bagdad ",
        source: "France 24",
        url: " https://www.france24.com/es/medio-oriente/20240209-irak-reafirma-su-decisi%C3%B3n-de-poner-fin-a-coalici%C3%B3n-internacional-tras-ataque-de-ee-uu-en-bagdad ",
        summary: " El Gobierno y el Ejército de Irak reafirmaron este jueves 8 de febrero la decisión de poner fin a la coalición internacional de lucha contra el grupo yihadista Estado Islámico (EI), liderada por EE.UU., luego del ataque de este país en Bagdad, en el que murió el líder de una milicia proiraní. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Irán",
    coordinates: [32.4279, 53.6880],
    news: [
      {
        title: " Irán no iniciará una guerra, pero responderá a los agresores, dice el presidente Raisi ",
        source: "Voz de América",
        url: " https://www.vozdeamerica.com/a/iran-no-iniciara-una-guerra-pero-respondera-a-los-agresores-dice-el-presidente-raisi/7467859.html ",
        summary: " El presidente de Irán, Ebrahim Raisi, afirmó que su país no iniciaría una guerra, pero que respondería con firmeza a cualquiera que intentara intimidarlo. Días antes, EEUU culpó a la milicia respaldada por Irán de la muerte de tres soldados estadounidenses en Jordania y advirtió de represalias. "
      },
       {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Israel",
    coordinates: [31.0461, 34.8516],
    news: [
      {
        title: " Guerra entre Israel y Gaza: resumen del 30/04/2024 ",
        source: "El Páis",
        url: " https://elpais.com/internacional/2024-04-30/guerra-entre-israel-y-gaza-en-directo.html ",
        summary: " Netanyahu dice ante las familias de los rehenes que Israel invadirá Rafah “con o sin acuerdo” | Hamás regresará a Egipto “con una respuesta por escrito” sobre la propuesta de Israel | El cuerpo de Defensa Civil de Gaza eleva a más de 10.000 los cuerpos sepultados entre escombros "
      },


      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Japón",
    coordinates: [36.2048, 138.2529],
    news: [
      {
        title: " La confianza empresarial en Japón empeoró en el arranque de 2024 tras cuatro trimestres ",
        source: "ABC",
        url: " https://www.abc.es/economia/confianza-empresarial-japon-empeoro-arranque-2024-tras-20240401120917-vi.html?ref=https%3A%2F%2Fwww.abc.es%2Feconomia%2Fconfianza-empresarial-japon-empeoro-arranque-2024-tras-20240401120917-vi.html ",
        summary: " La confianza empresarial en la evolución de la economía japonesa empeoró por primera vez en cuatro trimestres en los primeros tres meses de 2024, reflejando una fuerte caída en el sector automotriz por los recortes de producción, según un informe publicado este lunes por el Banco de Japón (BoJ). El último informe de coyuntura económica trimestral del banco central japonés, conocido como Tankan, mostró hoy que el índice de confianza entre las grandes empresas manufactureras nacionales se situó en los tres meses, hasta marzo, en 11 puntos, dos por debajo de los 13 de la encuesta previa hasta diciembre. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Jordania",
    coordinates: [30.5852, 36.2384],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Kazajistán",
    coordinates: [48.0196, 66.9237],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Kirguistán",
    coordinates: [41.2044, 74.7661],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Kuwait",
    coordinates: [29.3759, 47.9774],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Laos",
    coordinates: [19.8563, 102.4955],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Líbano",
    coordinates: [33.8547, 35.8623],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Malasia",
    coordinates: [4.2105, 101.9758],
    news: [
      {
        title: " Malasia puede renovar la búsqueda del MH370 casi 10 años después de su desaparición ",
        source: "CNN Mundo",
        url: " https://cnnespanol.cnn.com/2024/03/05/malasia-renovar-busqueda-mh370-10-anos-desaparicion-reux/ ",
        summary: " Malasia puede renovar la búsqueda del vuelo MH370 de Malaysia Airlines desaparecido , dijo este domingo el ministro de Transporte del país, a medida que se acerca el décimo aniversario de su desaparición.El vuelo MH370 se convirtió en uno de los misterios de la aviación más desconcertantes del mundo cuando desapareció con 239 personas a bordo en ruta de Kuala Lumpur a Beijing el 8 de marzo de 2014. A pesar del lanzamiento de la búsqueda de aviación más grande de la historia, desde entonces prácticamente no se ha encontrado nada del avión. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Maldivas",
    coordinates: [3.2028, 73.2207],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Mongolia",
    coordinates: [46.8625, 103.8467],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Nepal",
    coordinates: [28.3949, 84.1240],
    news: [
      {
        title: " Nepal pide a Rusia que devuelva a sus ciudadanos reclutados para luchar en Ucrania ",
        source: "The San Diego Union Tribune",
        url: " https://www.sandiegouniontribune.com/en-espanol/noticias/story/2024-01-25/nepal-pide-a-rusia-que-devuelva-a-sus-ciudadanos-reclutados-para-luchar-en-ucrania ",
        summary: " Nepal ha pedido a Rusia que devuelva a cientos de nepalíes que fueron reclutados para luchar contra Ucrania y que repatríe los cuerpos de los muertos en la guerra, dijo el jefe de la diplomacia del país el jueves.Se estima que el ejército de Moscú ha reclutado a más de 200 nepales para su lucha en Ucrania y que al menos 14 de ellos han fallecido allí, indicó el ministro de Exteriores, Narayan Prakash Saud, en una entrevista con The Associated Press. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Omán",
    coordinates: [21.4735, 55.9754],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Pakistán",
    coordinates: [30.3753, 69.3451],
    news: [
      {
        title: " Pakistán, un país repartido entre dos dinastías políticas ",
        source: "El país",
        url: " https://elpais.com/internacional/2024-02-16/pakistan-un-pais-repartido-entre-dos-dinastias-politicas.html ",
        summary: " Shehbaz Sharif, hermano del ex primer ministro Nawaz Sharif, es nominado para liderar el Ejecutivo con el apoyo del partido del clan Bhutto, familia que ha dado otros dos jefes de Gobierno y cuyo líder optará a la presidencia. La política, en la turbulenta nación de Pakistán, sigue siendo una cuestión de clanes familiares. Tras las elecciones generales celebradas el pasado jueves, sacudidas por la violencia y las acusaciones de fraude, los dos principales partidos de la Asamblea Nacional salida de las urnas, exponentes de dos dinastías políticas que han monopolizado buena parte del poder en las últimas décadas."
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Qatar",
    coordinates: [25.3548, 51.1839],
    news: [
      {
        title: " El complejo rol de Qatar como mediador para liberar a los rehenes secuestrados por Hamás",
        source: "BBC News Mundo",
        url: " https://www.bbc.com/mundo/articles/c807n72z9gpo ",
        summary: " Tanto el presidente de EE.UU., Joe Biden, como el primer ministro de Reino Unido, Rishi Sunak, han agradecido a Qatar y su emir gobernante por su papel actual en la negociación de la libertad de cuatro rehenes. El miércoles, el asesor de seguridad nacional de Israel se sumó al agradecimiento.Qatar confía en que con tiempo, paciencia y persuasión, podrá negociar la liberación de decenas de rehenes más en los próximos días, aunque cualquier incursión terrestre israelí en el territorio palestino de Gaza haría esto mucho más difícil. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Singapur",
    coordinates: [1.3521, 103.8198],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Siria",
    coordinates: [34.8021, 38.9968],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Sri Lanka",
    coordinates: [7.8731, 80.7718],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Tailandia",
    coordinates: [15.8700, 100.9925],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Taiwán",
    coordinates: [23.6978, 120.9605],
    news: [
      {
        title: " Al menos nueve muertos y más de 900 heridos en Taiwán en el peor terremoto en 25 años ",
        source: "El País",
        url: " https://elpais.com/internacional/2024-04-03/el-terremoto-mas-potente-en-25-anos-sacude-taiwan.html ",
        summary: " Un terremoto de magnitud 7,2 ha sacudido a las 7.58 de este miércoles (hora local, 1.58 en la España peninsular) la isla de Taiwán. El temblor, en la costa oriental, ha causado hasta el momento nueve muertos, según el Gobierno taiwanés, más de 900 heridos. Además, medio centenar de trabajadores que viajaban en minibuses a un hotel en un parque nacional están desaparecidos y unas 80 personas se encuentran atrapadas en una zona minera. Se trata del seísmo de mayor magnitud registrado en la isla desde 1999; entonces el desastre natural provocó unas 2.400 víctimas y cerca de 10.000 heridos. El Centro Sismológico de la Administración Meteorológica taiwanesa ha declarado que puede haber réplicas con una magnitud de entre 6,5 a 7,0 en los próximos tres o cuatro días. A mediodía, cuatro horas después del primer golpe, se habían registrado ya 58 réplicas, dos de ellas por encima de 6."
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Tayikistán",
    coordinates: [38.8610, 71.2761],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Timor Oriental",
    coordinates: [-8.8742, 125.7275],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Turkmenistán",
    coordinates: [38.9697, 59.5563],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Turquía",
    coordinates: [38.9637, 35.2433],
    news: [
      {
        title: " Turquía trata de mediar en la sombra para evitar una escalada en Oriente Próximo ",
        source: "El País",
        url: " https://elpais.com/internacional/2024-04-16/turquia-trata-de-mediar-en-la-sombra-para-evitar-una-escalada-en-oriente-proximo.html ",
        summary: " Desde el ataque de Hamás en Israel el pasado 7 de octubre, Turquía ha tratado de mover sus fichas para convertirse en mediador del conflicto en Gaza: otra guerra más en su entorno es algo que no interesa a un país con gran capacidad de penetración comercial en sus vecinos y a la vez muy dependiente de los vaivenes del precio de la energía. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Uzbekistán",
    coordinates: [41.3775, 64.5853],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Vietnam",
    coordinates: [14.0583, 108.2772],
    news: [
      {
        title: " Dimite el presidente de Vietnam, planteando interrogantes sobre la estabilidad del país ",
        source: "CNN Mundo",
        url: " https://cnnespanol.cnn.com/2024/03/21/dimite-presidente-vietnam-interrogantes-estabilidad-reux/ ",
        summary: " El Partido Comunista de Vietnam aceptó la renuncia del presidente Vo Van Thuong, anunció el gobierno este miércoles, en un signo de agitación política que podría afectar la confianza de los inversores extranjeros en el país.El gobierno dijo en un comunicado que Thuong había violado las reglas del partido, agregando que esas deficiencias habían impactado negativamente en la opinión pública, afectando la reputación del Partido, del Estado y de él personalmente. "
      },

      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
  {
    name: "Yemen",
    coordinates: [15.5527, 48.5164],
    news: [
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      },
      {
        title: "",
        source: "",
        url: "",
        summary: ""
      }
    ]
  },
    // África
    {
      name: "Argelia",
      coordinates: [28.0339, 1.6596],
      news: [
        {
          title: "El ejercito de Argelia mata a un supuesto terrorista armado durante una operación en el norte del país",
          source: "Europa Press",
          url: " https://www.msn.com/es-es/noticias/internacional/el-ej%C3%A9rcito-de-argelia-mata-a-un-supuesto-terrorista-armado-durante-una-operaci%C3%B3n-en-el-norte-del-pa%C3%ADs/ar-AA1nPunm?ocid=BingNewsSerp",

          summary: " Las autoridades argelinas han identificado al presunto terrorista como 'Abu Duha', quien se había unido al grupo en 2006 y que se encontraba armado con un fusil de asalto Kalashnikov, dos cargadores de munición y otro tipo de objetos, según un comunicado del Ministerio. La operación aún sigue en marcha para demostrar la determinación del Ejército, que no ha confirmado el grupo al que pertenece el terrorista, a la hora de seguir la pista a los criminales en todo el territorio nacional hasta su eliminación definitiva. El Ejército argelino ha llevado a cabo numerosas operaciones contra las posiciones del grupo terrorista Al Qaeda en el Magreb Islámico (AQMI), conocido anteriormente como Grupo Salafista por la Predicación y el Combate (GSPC), así como contra células vinculadas al grupo yihadista Estado Islámico."
        

        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Angola",
      coordinates: [-11.2027, 17.8739],
      news: [
        {
          title: "Angola revela la separación prehistorica entre Sudamérica y África",
          source: "Phys.org",
          url: " https://www.msn.com/en-us/news/technology/rock-solid-evidence-angola-geology-reveals-prehistoric-split-between-south-america-and-africa/ar-AA1nZjhk?ocid=BingNewsSerp",

          summary: " Un equipo de investigación liderado por SMU ha encontrado que antiguas rocas y fósiles de reptiles marinos extintos desde hace mucho tiempo en Angola muestran claramente una parte clave del pasado de la Tierra: la separación de Sudamérica y África y la subsiguiente formación del Océano Atlántico Sur. Con su ajuste de rompecabezas fácilmente visualizable, se sabe desde hace mucho tiempo que la costa occidental de África y la costa oriental de Sudamérica una vez estuvieron juntas en el supercontinente Gondwana, que se separó del continente más grande de Pangea. El equipo de investigación afirma que la costa sur de Angola, donde excavaron las muestras, proporciona posiblemente el registro geológico más completo jamás registrado en tierra de los dos continentes alejándose y la apertura del Océano Atlántico Sur. Las rocas y fósiles encontrados datan de hace 130 millones de años a 71 millones de años."
        },

        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Benín",
      coordinates: [9.3077, 2.3158],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Botsuana",
      coordinates: [-22.3285, 24.6849],
      news: [
        {
          title: "Botsuana confirma que decline una petición de Reino Unido para acoger migrantes deportados por Londres",
          source: "Europa Press",
          url: " https://www.msn.com/es-es/noticias/internacional/botsuana-confirma-que-declin%C3%B3-una-petici%C3%B3n-de-reino-unido-para-acoger-migrantes-deportados-por-londres/ar-AA1nzqLf?ocid=BingNewsSerp",

          summary: " El Gobierno británico habría sondeado a Gaborone para intentar replicar el acuerdo alcanzado con Ruanda. El ministro de Exteriores de Botsuana, Lemogang Kwape, ha confirmado que el Gobierno de Reino Unido contactó con las autoridades del país para sondear si estarían dispuestas a acoger a migrantes deportados por Londres, en un modelo similar al pactado con Ruanda, aprobado el martes por el Parlamento británico entre críticas por parte de la comunidad internacional. Botsuana siempre ha sido un refugio para gente que huía de persecuciones, como el caso de Sudáfrica (durante el régimen de Apartheid), ha explicado, si bien ha argumentado que el país tiene suficientes problemas a los que hacer frente, incluidos de migración en nuestro vecindario. Así, ha argumentado que recibir migrantes de otros países mientras hacemos frente a nuestros propios problemas en la región sería injusto para Botsuana. Botsuana está en una posición en la que no puede aceptar migrantes irregulares de terceros países al tiempo que hace frente a sus propios problemas migratorios en la región, ha agregado."
        },

        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Camerún",
      coordinates: [7.3697, 12.3547],
      news: [
        {
          title: "La vicecanciller discute con el primer ministro de Camerún sobre la próxima cumbre Corea del Sur-África",
          source: "Agencia de Noticias Yonhap",
          url: " https://www.msn.com/es-mx/noticias/mundo/la-vicecanciller-discute-con-el-primer-ministro-de-camer%C3%BAn-sobre-la-pr%C3%B3xima-cumbre-corea-del-sur-%C3%A1frica/ar-AA1nXLQm?ocid=BingNewsSerp",

          summary: " La segunda viceministra de Asuntos Exteriores de Corea del Sur, Kang In-sun, se ha reunido con el primer ministro de Camerún, Joseph Dion Ngute, en el país centroafricano, y ha discutido sobre la próxima cumbre de líderes de Corea del Sur y las naciones africanas, ha dicho, este miércoles, el Ministerio de Asuntos Exteriores surcoreano. En la reunión, Kang destacó que la cumbre Corea del Sur-África, prevista para el 4 y 5 de junio, en Seúl, servirá como una oportunidad para que los dos países impulsen significativamente la cooperación bilateral y pidió el apoyo y la participación de Camerún en la reunión. Kang también expresó sus esperanzas de que la cooperación con Camerún continúe profundizándose en una amplia gama de áreas, como lo ha hecho en tecnologías de información y comunicación (TIC), atención médica, agricultura y capacitación laboral, a través de conversaciones de alto nivel y otros intercambios."
        },

        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Chad",
      coordinates: [15.4542, 18.7322],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Costa de Marfil",
      coordinates: [7.539989, -5.54708],
      news: [
        {
          title: "EEUU y Costa de Marfil firman un memorando contra la manipulación informativa de agentes extranjeros",
          source: "notiamérica",
          url: " https://www.notimerica.com/politica/noticia-costa-marfil-eeuu-costa-marfil-firman-memorando-contra-manipulacion-informativa-agentes-extranjeros-20240430072646.html",
          summary: " Los Gobiernos de Estados Unidos y de Costa de Marfil han firmado este lunes un memorando para fortalecer la cooperación bilateral en materia de manipulación informativa por parte de agentes extranjeros, en el marco de un aumento de la presencia de Rusia en el continente africano en detrimento de la estadounidense o la francesa. Costa de Marfil. - EEUU y Costa de Marfil firman un memorando contra la manipulación informativa de agentes extranjeros. Esto demuestra la cooperación bilateral que puede ayudar a construir un sistema de información más fuerte y resiliente."

        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Egipto",
      coordinates: [26.8206, 30.8025],
      news: [
        {
          title: "Entre la Guerra o la tregua: Rafah al borde del abismo mientras Hamás estudia su respuesta",
          source: "Agencia EFE",
          url: " https://www.msn.com/es-us/noticias/mundo/egipto-habla-de-ambiente-positivo-y-continua-los-contactos-con-todos-para-lograr-una-tregua-en-gaza/ar-AA1nYgXT?ocid=BingNewsSerp",

          summary: " La localidad de Rafah, en el sur de la Franja de Gaza, se prepara para una posible invasión por tierra del Ejército israelí mientras el grupo palestino Hamás estudia la última propuesta de tregua de los mediadores en El Cairo.A esa parte del enclave gazatí, fronteriza con Egipto, llegaron más de un millón de desplazados huyendo de la guerra, que ahora malviven y en muchas ocasiones hacinados en tiendas temporales, entre constantes bombardeos israelíes y la amenaza de tener que abandonarlo todo otra vez. El primer ministro israelí, Benjamín Netanyahu, insistió de nuevo este miércoles en que la invasión de Rafah ocurrirá sí o sí, una amenaza que repite desde finales de febrero, pero que ahora muchos, y sobre todo los ministros más ultranacionalistas de su Gobierno, piensan que podría no realizarse si se logra un acuerdo de tregua."
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Etiopía",
      coordinates: [9.145, 40.489673],
      news: [
        {
          title: "Las minas antipersona causaron al menos de 1,500 kuertos en Etiopía el año pasado",
          source: "Agencia EFE",
          url: " https://www.msn.com/es-us/noticias/mundo/onu-las-minas-antipersona-causaron-al-menos-1500-muertos-en-etiop%C3%ADa-el-pasado-a%C3%B1o/ar-AA1nYUyU?ocid=BingNewsSerp",

          summary: " Los muertos por minas terrestres antipersona en Etiopía, uno de los países más contaminados por este armamento, ascendieron a 1.500 en 2023, procedentes principalmente de las regiones del Tigré y Afar, indicó este miércoles una experta de Naciones Unidas. La representante del Servicio de Acción contra Minas de la ONU (UNMAS) en Etiopía, Francesca Chiaudani, aseguró en rueda de prensa en Ginebra que la situación en el país africano es bastante compleja debido a la falta de recursos para retirar este tipo de armamento.En estos momentos no hay ningún operador de una organización internacional de actividades relativas a las minas plenamente acreditado para realizar actividades de reconocimiento y retirada en el país, afirmó la experta."
        },

        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Ghana",
      coordinates: [7.9465, -1.0232],
      news: [
        {
          title: "El Parlamento de Ghana aprueba una ley que condena con pena de cárcel a quien se identifique como una persona LGBTQ+",
          source: "BBC News",
          url:"https://www.bbc.com/mundo/articles/c513yj784pdo",
          summary: "Cualquier persona que se identifique como parte de la comunidad LGBTQ+ en Ghana podría enfrentar una pena de hasta tres años de prisión, luego de que el Parlamento del país africano aprobara una estricta nueva legislación. La ley también impone una pena máxima de hasta cinco años para quienes formen o financien grupos relacionados a las diversidades de género y orientación sexual. Mientras se aprobaba el proyecto de ley hubo intentos de sustituir las penas de prisión por servicios comunitarios y asesoramiento, pero no salieron adelante. Es la última señal de la creciente oposición a los derechos LGBTQ+ en la conservadora nación de África Occidental."

        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Kenia",
      coordinates: [-0.0236, 37.9062],
      news: [
        {title: "Huir del calor es un lujo que no todos se pueden permitir en Nairobi",
        source: "El País",
        url:"https://elpais.com/planeta-futuro/2024-04-13/huir-del-calor-un-lujo-que-no-todos-se-pueden-permitir-en-nairobi.html" ,
        summary: "En los barrios marginales, el hacinamiento, la falta de zonas verdes y la falta de medidas de adaptación condenan a los vecinos a pasar el día buscando sombra. Unos investigadores buscan evidencia científica para ofrecer soluciones baratas y eficientes ante el cambio climático. En Korogocho nadie se puede quedar en casa durante el día por el calor. La chapa con la que están hechos los mabati, como se conoce a estas casas precarias, y el pequeño tamaño (tres por tres metros) lo hacen imposible.El cambio climático y el aumento de población suponen un reto para lidiar con el aumento de temperaturas. El 62% de la población urbana en África reside en asentamientos informales, donde la planificación urbana y los servicios municipales son a menudo inexistentes. La rápida urbanización africana supone un reto de adaptación de las ciudades. El Programa de Naciones Unidas para los Asentamientos Humanos calcula que la población viviendo en barrios informales se triplicará de aquí a 2050, pasando de 400 millones a 1.200 millones de personas."
     


        },
        {
          title: " Kenia eleva a 169 muertos y unos 90 desaparecidos el balance de víctimas de las inundaciones",
          source: "Europa Press",
          url: " https://www.europapress.es/internacional/noticia-kenia-eleva-169-muertos-90-desaparecidos-balance-victimas-inundaciones-20240430122225.html",

          summary: "Al menos 169 personas han muerto por las fuertes lluvias caídas en varias zonas de Kenia desde mediados de marzo, según un nuevo balance de víctimas divulgado este martes por las autoridades y que eleva a 91 la cifra provisional de desaparecidos. Kenia lleva semanas sufriendo lluvias torrenciales que han provocado numerosas inundaciones y deslizamientos de tierras."
        }

      ]
    },
    {
      name: "Marruecos",
      coordinates: [31.7917, -7.0926],
      news: [
        {
          title: "Nuevo golpe de Marreucos a la sequía con las autopistas de agua",
          source: "Huff Post",
          url: " https://www.msn.com/es-es/noticias/other/nuevo-golpe-de-marruecos-a-la-sequ%C3%ADa-con-las-autopistas-del-agua/ar-AA1nV8hH?ocid=BingNewsSerp",

          summary: " Marruecos lleva tiempo luchando contra la sequía y, por el momento, la está logrando contener. Ante el éxito del primer proyecto de la autopista que une el río Sebou con la cuenca el Bouregreg, el reino alauí busca ahora unir la presa de Oued El Makhzen con el puerto de El Boughaz Fadil, Tánger, para así poder proveer a una de las ciudades más densamente pobladas del país.El Ministerio de Recursos y Abastecimiento de Agua clasifica la grave escasez de agua potable en Tánger como una de las regiones más afectadas por la grave situación del agua. El responsable regional explicó, según el medio Atalayar, que el Ministerio de Agricultura ha emprendido un proyecto urgente para conectar varias cuencas."
        },

        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Nigeria",
      coordinates: [9.082, 8.6753],
      news: [
        {
          title: "Estados Unidos pone en marcha planes para retirar sus tropas en Niger",
          source: "El País",
          url: "https://elpais.com/internacional/2024-04-20/estados-unidos-pone-en-marcha-planes-para-retirar-a-sus-tropas-de-niger.html´",
          summary: "Estados Unidos ha aceptado las peticiones del Gobierno de Níger para retirar sus tropas en el país, según han adelantado varios medios estadounidenses que citan fuentes del Departamento de Estado. No hay un calendario concreto cerrado para la retirada de los algo más de 1.000 militares estadounidenses en el Estado africano. "

        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "República Democrática del Congo",
      coordinates: [-4.0383, 21.7587],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Ruanda",
      coordinates: [-1.9403, 29.8739],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Sudáfrica",
      coordinates: [-30.5595, 22.9375],
      news: [
        {
          title: " La comisión electoral apela la reintegración del expresidente Jacob Zuma en las listas generales en Sudáfrica ",
          source: "Europa Press",
          url: " https://www.europapress.es/internacional/noticia-comision-electoral-apela-reintegracion-expresidente-jacob-zuma-listas-generales-sudafrica-20240412131537.html ",

          summary: "La comisión electoral de Sudáfrica ha presentado una apelación ante el Tribunal Constitucional sobre la decisión judicial de anular la eliminación de la exclusión de las elecciones generales convocadas para el próximo 29 de mayo del expresidente Jacob Zuma, condenado a 15 meses de prisión por desacato en el marco de una investigación por corrupción."
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Sudán",
      coordinates: [12.8628, 30.2176],
      news: [
        {
          title: "Las perspectivas de paz se alejan de Sudán un año después de estallar la guerra” (SUDÁN SD)",
          source: "El País",
          url:"https://elpais.com/internacional/2024-04-15/las-perspectivas-de-paz-se-alejan-en-sudan-un-ano-despues-de-estallar-la-guerra.html" ,
          summary: " El enfrentamiento entre el ejército y los paramilitares ha causado decenas de miles de muertos, 10 millones de desplazados, 19 millones de niños sin escuela y una gran parte de la población con altos niveles de hambre. Un año después del comienzo de la guerra civil en Sudán entre el ejército regular y unas poderosas fuerzas paramilitares, el país africano está irreconocible. La contienda bélica ha matado a decenas de miles de personas, ha devastado las infraestructuras críticas nacionales, ha obligado a millones de personas a desplazarse y ha provocado una de las mayores crisis humanas del mundo. Con todo, las perspectivas de paz siguen siendo remotas, y han ido disminuyendo con la gradual complicación del conflicto."
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Tanzania",
      coordinates: [-6.369028, 34.888822],
      news: [
        {
          title: "Tanzania eleva a 155 muertos y cerca de 240 heridos por las inundaciones provocadas por El Niño",
          source: "Europa Press",
          url: " https://www.europapress.es/internacional/noticia-tanzania-eleva-155-muertos-cerca-240-heridos-inundaciones-provocadas-nino-20240425144157.html"
,
          summary: "Las autoridades de Tanzania han elevado este jueves a 155 los muertos y a cerca de 240 los heridos a causa de las lluvias torrenciales, las inundaciones y los deslizamientos de tierra causados por 'El Niño', que ha provocado una gran devastación material en el país africano. Las fuertes lluvias, acompañadas de fuertes vientos, desplazamientos e inundaciones en varias zonas del país ha causado daños significativos."
        },

        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Túnez",
      coordinates: [33.8869, 9.5375],
      news: [
        {
          title: "Túnez desmantela una red dedicada al tráfico de personas y el blanqueo de dinero en dos provincias costeras",
          source: "Europa Press",
          url: " https://www.europapress.es/internacional/noticia-tunez-desmentela-red-dedicada-trafico-personas-blanqueo-dinero-dos-provincias-costeras-20240429134239.html",


          summary: " Las autoridades de Túnez han anunciado este lunes el desmantelamiento de una red dedicada al tráfico de personas y el blanqueo de dinero que operaba en las provincias de Nabeul y Sfax, dos de los principales puntos de salida de embarcaciones con migrantes que intentan cubrir la travesía hacia costas europeas."
        }
,
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Uganda",
      coordinates: [1.3733, 32.2903],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Zambia",
      coordinates: [-13.133897, 27.849332],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    },
    {
      name: "Zimbabue",
      coordinates: [-19.015438, 29.154857],
      news: [
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        },
        {
          title: "",
          source: "",
          url: "",
          summary: ""
        }
      ]
    }



  ];
 
  // Itera sobre los datos de los países y crea marcadores en el mapa
  countriesData.forEach(function(country) {
    var customIcon = L.icon({
      iconUrl: 'icon/icon2.svg', // Ruta a tu propio icono de marcador
      iconSize: [20, 22], // Tamaño del icono
      iconAnchor: [8, 30], // Punto de anclaje del icono
      popupAnchor: [1, -30], // Punto de anclaje emergente del icono
    });

    // Crea un marcador en las coordenadas del país
    var marker = L.marker(country.coordinates,{icon: customIcon}).addTo(map);
    // Agrega un evento de clic al marcador para mostrar la información del país
    marker.on('click', function() {
      // Llama a la función para abrir el panel
      abrirPanel(country.name, country.news);
    
    });
  });

 
  // Ocultar el panel al principio
  var panelContainer = document.querySelector('.panel-container');
  panelContainer.classList.add('closed');
  var toggleButton = document.querySelector('.toggle-button');
  toggleButton.classList.add('closed');
});


