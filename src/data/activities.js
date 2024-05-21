export const activities = [
  {
    activiyType: "sport",
    activityName: "Fitness",
    activitySentence: "Se surpasser en <mark>Fitness.</mark>",
    activityLink:
      "https://vie-de-campus.unige.ch/catalogue/321-fitness-abonnement?structureIds=3",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg",
  },
  {
    activiyType: "sport",
    activityName: "Padel",
    activitySentence: "Défier ses amis sur le terrain au <mark>Padel.</mark>",
    activityLink:
      "https://vie-de-campus.unige.ch/catalogue/252-padel--terrain?structureIds=3",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2021/06/09/05/38/padel-6322458_1280.jpg",
  },
  {
    activiyType: "sport",
    activityName: "Escalade",
    activitySentence: "Gravir de nouveaux sommets en <mark>Escalade.</mark>",
    activityLink:
      "https://vie-de-campus.unige.ch/catalogue/461-escalade-en-salle?structureIds=3&pageNo=1",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2014/10/12/19/50/climbing-wall-486020_960_720.jpg",
  },
  {
    activiyType: "Culture",
    activityName: "Théâtre",
    activitySentence: "S'immerger dans l'univers du <mark>Théâtre.</mark>",
    activityLink:
      "https://www.unige.ch/dife/culture/activites/th%C3%A9%C3%A2tre/actions-theatrales",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_640.jpg",
  },
  {
    activiyType: "Culture",
    activityName: "Cinéma",
    activitySentence: "Partager ma passion du <mark>Cinéma.</mark>",
    activityLink:
      "https://www.unige.ch/dife/vie-de-campus/retour-sur-les-evenements/le-cine-club/",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2014/08/19/23/40/projector-422145_1280.jpg",
  },
  {
    activiyType: "compétences personnelles",
    activityName: "Dévolopper mes soft-skills",
    activitySentence: "Développer mes <mark>Soft-Skills.</mark>",
    activityLink:
      "https://vie-de-campus.unige.ch/se-perfectionner/competences-transversales",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2021/02/24/20/53/abstract-6047465_1280.jpg",
  },
  {
    activiyType: "Compétences personnelles",
    activityName: "Initiation à l'art oratoire",
    activitySentence: "apprendre à maitriser l'<mark>Art Oratoire.</mark>",
    activityLink:
      "https://www.unige.ch/dife/culture/activites/%C3%A9criture/le-discours-en-debat",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_1280.jpg",
  },
  {
    activiyType: "sport",
    activityName: "Yoga",
    activitySentence: "Trouver la paix intérieure avec le <mark>Yoga.</mark>",
    activityLink:
      "https://vie-de-campus.unige.ch/catalogue/348-yoga?structureIds=3",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2020/03/27/08/45/stone-lotus-4972881_640.jpg",
  },
  {
    activiyType: "sport",
    activityName: "Badminton",
    activitySentence:
      "Améliorer votre jeu sur le court de <mark>Badminton.</mark>",
    activityLink:
      "https://vie-de-campus.unige.ch/catalogue/421-badminton-cours?structureIds=3&pageNo=1",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2016/05/31/23/21/badminton-1428047_1280.jpg",
  },
  {
    activiyType: "sport",
    activityName: "all",
    activitySentence:
      "<mark>Découvrir</mark> de nouvelles activités sportives à l'UNI.",
    activityLink: "https://vie-de-campus.unige.ch/sport-culture/sport",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg",
  },
  {
    activiyType: "Culture",
    activityName: "all",
    activitySentence:
      "<mark>Découvrir</mark> de nouvelles activités culturelles à l'UNI.",
    activityLink: "https://www.unige.ch/dife/culture/",
    activityIllustration:
      "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_640.jpg",
  },
];

export function displayAlternatives() {
  document.getElementById("body").style.display = "block";

  let alternativesTitle = document.createElement("h2");
  alternativesTitle.innerHTML =
    "Moins de temps passé sur les écrans, c'est plus de temps pour...";
  alternativesTitle.className = "reference-title";
  alternativesTitle.style.padding = "20px";
  alternativesTitle.style.color = "white";
  alternativesTitle.style.fontSize = "calc(1.5em + 1vw)";
  document.getElementById("alternatives").appendChild(alternativesTitle);

  let nav = document.createElement("nav");
  nav.className = "navBar";
  document.getElementById("alternatives").appendChild(nav);

  let container = document.createElement("div");
  container.className = "container";
  nav.appendChild(container);

  for (let i = 0; i < activities.length; i++) {
    let activityBox = document.createElement("div");
    activityBox.className = "inscrollmenu";
    activityBox.style.backgroundImage = `url("${activities[i].activityIllustration}")`;
    activityBox.innerHTML = `
            <p>${activities[i].activitySentence}</p>
            <button onclick="window.open('${activities[i].activityLink}')">découvrir</button>
        `;
    container.appendChild(activityBox);
  }
}
