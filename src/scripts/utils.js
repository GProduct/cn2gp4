import { displayQuestion, questions } from "../data/questions.js";

let bgImgUrl = [
  {
    img: "https://cdn.pixabay.com/photo/2022/11/08/21/15/cliffs-7579330_1280.jpg",
    source: "https://pixabay.com/fr/photos/falaises-7579330/",
    theme: "red-theme",
  },
  {
    img: "https://cdn.pixabay.com/photo/2022/11/05/17/15/leaves-7572380_1280.jpg",
    source: "https://pixabay.com/fr/photos/feuilles-7572380/",
    theme: "green-theme",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
    source: "https://pixabay.com/fr/photos/route-1072821/",
    theme: "red-theme",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/01/08/09/34/jellyfish-7704801_1280.jpg",
    source: "https://pixabay.com/fr/photos/meduse-7704801/",
    theme: "blue-theme",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_1280.jpg",
    source: "https://pixabay.com/fr/photos/champ-d-orge-campagne-1684052/",
    theme: "kaki-theme",
  },
];

var randomIndex = Math.floor(Math.random() * bgImgUrl.length);
var source = bgImgUrl[randomIndex].source;

export function toggleTheme() {
  randomIndex = Math.floor(Math.random() * bgImgUrl.length);
  source = bgImgUrl[randomIndex].source;
  const randomElement = bgImgUrl[randomIndex];
  document.getElementById(
    "body"
  ).style.backgroundImage = `url(${randomElement.img})`;
  document.documentElement.setAttribute("data-theme", randomElement.theme);
}

export function init() {
  // events listeners
  document
    .getElementById("toggleThemeBtn")
    .addEventListener("click", toggleTheme);

  document.getElementById("shareBtn").addEventListener("click", copyLink);

  document
    .getElementById("startSurveyBtn")
    .addEventListener("click", startSurvey);

  document
    .getElementById("getImgReferenceBtn")
    .addEventListener("click", () => {
      var r = confirm(
        "Une nouvelle page va s'ouvrir pour vous rediriger vers la source de l'image. Voulez-vous continuer ?"
      );
      r ? window.open(bgImgUrl[randomIndex].source) : null;
    });

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    const bottomLogo = document.getElementById("bottomLogo");
    let btn = document.getElementById("toggleThemeBtn");
    btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_blanc_rvb.png`;
  } else {
    const bottomLogo = document.getElementById("bottomLogo");
    let btn = document.getElementById("toggleThemeBtn");
    btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_blanc_rvb.png`;
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const bottomLogo = document.getElementById("bottomLogo");
      let btn = document.getElementById("toggleThemeBtn");
      if (e.matches) {
        bottomLogo.src = "src/styles/icon/logo_cours_transversal_blanc_rvb.png";
        btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
      } else {
        bottomLogo.src = "src/styles/icon/logo_cours_transversal_blanc_rvb.png";
        btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
      }
    });

  toggleTheme();
}

export function copyLink() {
  var copyText = window.location.href;
  navigator.clipboard.writeText(copyText);
  alert("Lien copié dans le presse-papier !");
}

function startSurvey() {
  for (let i = 0; i < questions.length; i++) {
    displayQuestion(questions[i]);
  }
  document.getElementById("divToDelete").style.display = "none"; //Cache le bouton de démarrage
  document.getElementById("0").style.display = "flex"; //Affiche la première question
  progressBar(0);
}

export function progressBar(id) {
  let index =
    (questions.findIndex((q) => q.id === id) * 100) / questions.length;
  //console.log(index);
  document.getElementById("progressBarBg").style.height = "25px";
  document.getElementById("progressBarFg").style.width = `${index}%`;
}
