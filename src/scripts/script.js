let currentQuestionIndex = 0;

//TABLEAU DES REFERENCES
//nom : nom de la référence
//quantité : quantité de la référence
//unitéQuantité : unité de la quantité
//valeur : valeur de la référence
//unitéValeur : unité de la valeur

let shareLinks = [
    {
        name: " Facebook",
        link: "https://www.facebook.com/sharer/sharer.php?u=[URL]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg>`,
    },
    {
        name: " Twitter",
        link: "https://twitter.com/intent/tweet?text=Découvrez à quel point votre utilisation du numérique pollue : [URL]",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg>`,
    },
    {
        name: " Intsagram",
        link: "https://www.instagram.com/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
      </svg>`,
    },
    {
        name: " Threads",
        link: `https://www.facebook.com/dialog/send?link=[URL]&app_id=464891386855067" target="_blank`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
        <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
      </svg>`,
    },
    {
        name: " WhatsApp",
        link: `whatsapp://send?text= Découvrez à quel point votre utilisation du numérique pollue : [URL]`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>`,
    }
];

let references = [
    {
        nom: "trajet[plural] Genève-Paris en avion pour 1 personne.",
        quantité: "1",
        unitéQuantité: "",
        valeur: "98",
        unitéValeur: "Kg CO2",
    },
    {
        nom: "sac[plural] plastique[plural].",
        quantité: "1",
        unitéQuantité: "",
        valeur: "0.25",
        unitéValeur: "Kg CO2",
    },
    {
        nom: "mégot[plural] de cigarette.",
        quantité: "1",
        unitéQuantité: "",
        valeur: "0.14",
        unitéValeur: "Kg CO2",
    },
];

//ILLUSTRATIONS, LES EXEMPLES NE SONT PAS REELS
let activities = [
    {
        activiyType: "sport",
        activityName : "Fitness",
        activitySentence : "Se surpasser en <mark>Fitness.</mark>",
        activityLink : "https://vie-de-campus.unige.ch/catalogue/321-fitness-abonnement?structureIds=3",
        activityIllustration : "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg",
    },
    {
        activiyType: "sport",
        activityName : "Padel",
        activitySentence : "Défier ses amis sur le terrain au <mark>Padel.</mark>",
        activityLink : "https://vie-de-campus.unige.ch/catalogue/252-padel--terrain?structureIds=3",
        activityIllustration : "https://cdn.pixabay.com/photo/2021/06/09/05/38/padel-6322458_1280.jpg",
    },
    {
        activiyType: "sport",
        activityName : "Escalade",
        activitySentence : "Gravir de nouveaux sommets en <mark>Escalade.</mark>",
        activityLink: "https://vie-de-campus.unige.ch/catalogue/461-escalade-en-salle?structureIds=3&pageNo=1",
        activityIllustration : "https://cdn.pixabay.com/photo/2014/10/12/19/50/climbing-wall-486020_960_720.jpg",
    },
    {
        activiyType: "Culture",
        activityName : "Théâtre",
        activitySentence : "S'immerger dans l'univers du <mark>Théâtre.</mark>",
        activityLink: "https://www.unige.ch/dife/culture/activites/th%C3%A9%C3%A2tre/actions-theatrales",
        activityIllustration : "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_640.jpg",
    },
    {
        activiyType: "Culture",
        activityName : "Cinéma",
        activitySentence : "Partager ma passion du <mark>Cinéma.</mark>",
        activityLink: "https://www.unige.ch/dife/vie-de-campus/retour-sur-les-evenements/le-cine-club/",
        activityIllustration : "https://cdn.pixabay.com/photo/2014/08/19/23/40/projector-422145_1280.jpg",
    },
    {
        activiyType: "compétences personnelles",
        activityName : "Dévolopper mes soft-skills",
        activitySentence : "Développer mes <mark>Soft-Skills.</mark>",
        activityLink: "https://vie-de-campus.unige.ch/se-perfectionner/competences-transversales",
        activityIllustration : "https://cdn.pixabay.com/photo/2021/02/24/20/53/abstract-6047465_1280.jpg",
    },
    {
        activiyType: "Compétences personnelles",
        activityName : "Initiation à l'art oratoire",
        activitySentence : "apprendre à maitriser l'<mark>Art Oratoire.</mark>",
        activityLink: "https://www.unige.ch/dife/culture/activites/%C3%A9criture/le-discours-en-debat",  
        activityIllustration : "https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_1280.jpg", 
    },
    {
        activiyType: "sport",
        activityName : "Yoga",
        activitySentence : "Trouver la paix intérieure avec le <mark>Yoga.</mark>",
        activityLink: "https://vie-de-campus.unige.ch/catalogue/348-yoga?structureIds=3",
        activityIllustration : "https://cdn.pixabay.com/photo/2020/03/27/08/45/stone-lotus-4972881_640.jpg",
    },
    {
        activiyType: "sport",
        activityName : "Badminton",
        activitySentence : "Améliorer votre jeu sur le court de <mark>Badminton.</mark>",
        activityLink: "https://vie-de-campus.unige.ch/catalogue/421-badminton-cours?structureIds=3&pageNo=1",
        activityIllustration : "https://cdn.pixabay.com/photo/2016/05/31/23/21/badminton-1428047_1280.jpg",
    },
    {
        activiyType: "sport",
        activityName : "all",
        activitySentence : "<mark>Découvrir</mark> de nouvelles activités sportives à l'UNI.",
        activityLink: "https://vie-de-campus.unige.ch/sport-culture/sport",
        activityIllustration : "https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg",
    },
    {
        activiyType: "Culture",
        activityName : "all",
        activitySentence : "<mark>Découvrir</mark> de nouvelles activités culturelles à l'UNI.",
        activityLink: "https://www.unige.ch/dife/culture/",
        activityIllustration : "https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_640.jpg",
    },
];

//PILE DES ACTIONS
//c'est une pile qui enregiste les pages par lesquelles l'utilisateur est passé pour que 
//l'utilisateur puisse revenir en arrière
let path = [];

//TABLEAU DES REPONSES
//c'est un tableau qui enregistre les réponses de l'utilisateur à la fin
let answers = [];

//TABLEAU DES QUESTIONS
//id : identifiant de la question
//minimum : valeur minimale de la réponse
//question : question posée
//options : options de réponse
//answerType : type de réponse (number, button, checkbox)
//grandeur : grandeur de la réponse (Heures, Go, etc.)
//getAnswer : si la réponse est demandée
//answer : réponse
//formule : formule de calcul
//approx : valeur approximative de la réponse
//placeholder : texte dans l'input (affiché en gris)
//subQuestion : questions suivantes

let questions = [
    {
        id: "0",
        minimum: "0",
        category: "📨 Messagerie",
        question: "En moyenne, combien d'e-mails envoyez-vous par semaine ?",
        advice: "Quand j'envoie des e-mails, des pièces jointes...<br> Si j'envoie un mail à 10 personnes, cela compte pour 10 e-mails.",
        resultsAdvices: "Pour réduire l'impact de mes e-mails: <br> - zipper les pièces jointes (les regrouper dans un seul fichier)<br> - limiter au maximum le nombre de destinataires et de pièces jointes <br> - Au lieu d'envoyer un mail à la personne à coté de moi, je privilégie les transferts USB <br> - supprimer régulièrement les e-mails inutiles (spam, newsletters...)",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: null,
        unitéConvert: null,
        getAnswer: true,
        answer: null,
        userAnswer: 0,
        formule: 0.00364*52,
        approx: 1.086956522,
        placeholder: "Entrez une valeur",
        prevQuestion : null,
        subQuestion: ["1"]
    },
    {
        id: "1",
        minimum: "0",
        category: "📼 Streaming vidéo",
        question: "En moyenne, combien d'heures par semaine passez-vous à regarder des vidéos en streaming ?",
        advice: `Quand je regarde des films sur Netflix, Amazon Prime ou alors des vidéos sur Youtube, TikTok, Instagram, etc...<br>Si vous ne pouvez pas répondre, faites une estimation, l'essentiel c'est d'apprendre !<br>➡️ Sachez que ces informations peuvent se trouver dans les statistiques d'utilisation de votre appareil.`,
        resultsAdvices : "Pour regarder des émissions en direct, il est préférable de privilégier la TNT à l'ADSL (votre box internet). En effet, regarder une émission en streaming HD via sa box ADSL émet autant de gaz à effet de serre que de fabriquer, transporter et lire un DVD ! <br> Un autre bon geste serait d'essayer d'activer dès que possible le mode économie d'énergie sur vos appareils.",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "heures",
        unité: null,
        unitéConvert: null,
        getAnswer: true,
        answer: null,
        userAnswer: 0,
        formule: 0.0622*52,
        approx: 1.081081081,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["0"],
        subQuestion: ["2"]
    },
    {
        id: "2",
        minimum: "0",
        category: "🛜 Transfert de données",
        question: "En moyenne, combien de Go de données transférez-vous par semaine ?",
        advice: `Quand je télécharge des fichiers, des photos, des vidéos, des musiques mais également quand j'envoie des fichiers, des vidéos...<br>➡️ Une image fait en moyenne 2,4Mo.<br>➡️ 1 minute de vidéo en HD fait 5Mo.<br>➡️ Un fichier PDF fait en moyenne 1Mo.`,
        resultsAdvices: "Afin de limiter leurs impact : <br>- Essayer de compresser les fichiers avant de les envoyer, cela réduit la taille des fichiers et donc la consommation d'énergie.",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "Go",
        unité: ["Go", "Mo", "Ko"],
        unitéConvert: [1, 1000, 1000000],
        getAnswer: true,
        answer: null,
        userAnswer: 0,
        formule: 0.249*52,
        approx: 0.8103448276,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["1"],
        subQuestion: ["3"]
    },
    {
        id: "3",
        minimum: "0",
        category: "☁️ Stockage de données dans le cloud",
        question: "Quelle quantité de données stockez-vous dans le cloud (via iCloud, Google Drive, OneDrive, etc.) ?",
        advice: `Quand je stocke des fichiers, des photos, des vidéos sur iCloud, Google Drive, OneDrive... <br>➡️ Ces informations sont accessibles sur les applications de stockage de données`,
        resultsAdvices:"- Avant de stocker des données dans le cloud, il est préférable de les compresser pour réduire la taille des fichiers et donc la consommation d'énergie.<br>- Il est également important de choisir des hébergeur avec une politique environnementale claire, comme des centres de données alimentés par des énergies renouvelables",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "Go",
        unité: ["Go", "Mo", "Ko"],
        unitéConvert: [1, 1000, 1000000],
        getAnswer: true,
        answer: null,
        userAnswer: null,
        formule: 0.000525,
        approx: 1.267037037,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["2"],
        subQuestion: ["4"]
    },
    {
        id: "4",
        question: "Participez-vous à des visioconférences?",
        advice: "Quand je participe à des réunions, des cours, des conférences en ligne, grace à Zoom, Teams, Skype..",
        options: ["oui", "non"],
        answerType: "button",
        getAnswer: false,
        answer: null,
        userAnswer: null,
        formule: null,
        approx: null,
        placeholder: null,
        subQuestion: ["4-1", "5"]
    },
    {
        id: "4-1",
        question: "Allumez-vous votre caméra lors de ces visioconférences ?",
        options: ["oui", "non"],
        answerType: "button",
        getAnswer: false,
        answer: null,
        userAnswer: null,
        formule: null,
        approx: null,
        placeholder: null,
        prevQuestion : ["4"],
        subQuestion: ["4-1-1", "4-1-2"]
    },
    {
        id: "4-1-1",
        minimum: "0",
        category: "📹 Visioconférence avec caméra allumée",
        question: "En moyenne, pendant combien d'heure par semaine êtes-vous en visioconférences ?",
        advice: null,
        resultsAdvices: "Il y a quelques mesures simples: <br>- essayez de regrouper les réunions lorsque cela est possible <br>- de désactiver la vidéo lorsqu'elle n'est pas nécessaire <br>- utiliser des plateformes de visioconférence avec des fonctionnalités d'économie d'énergie.",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "heures",
        unité: null,
        unitéConvert: null,
        getAnswer: true,
        answer: null,
        userAnswer: 0,
        formule: 0.1*52, //A modifier
        approx: 0.8064516129,
        placeholder: "Entrez une valeur en ",
        prevQuestion : ["4-1"],
        subQuestion: ["5"]  
    },
    {
        id: "4-1-2",
        minimum: "0",
        category: "🔊 Visioconférence avec caméra éteinte",
        question: "En moyenne, pendant combien d'heure par semaine êtes-vous en visioconférences ?",
        advice: null,
        resultsAdvices: "Il y a quelques mesures simples: <br>- essayez de regrouper les réunions lorsque cela est possible <br>- utiliser des plateformes de visioconférence avec des fonctionnalités d'économie d'énergie.",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: null,
        unitéConvert: null,
        getAnswer: true,
        answer: null,
        userAnswer: 0,
        formule: 0.1*52, //A modifier
        approx: 0.8064516129,
        placeholder: "Entrez une valeur ",
        prevQuestion : ["4-1"],
        subQuestion: ["5"]
    },
    {
        id: "5",
        minimum: "0",
        category: "💻 Recherches sur le web",
        question: "En moyenne, combien de recherches sur le web faites-vous <U>par jour<U> ?",
        advice: "Quand je fais des recherches sur Google, Bing, Qwant...<br>➡️ Vous pouvez retrouver le nombre de recherches que vous avez effectuées sur votre navigateur en consultant votre historique de recherche.",
        resultsAdvices: "- Il faudrait privilégier des moteurs de recherche écologiques comme certains qui plantent des arbres pour chaque recherche effectuée.<br>- Enregistrez en favoris les sites recherchés régulièrement plutôt que de laisser de nombreux onglets ouverts en permanence.<br>- On peut également rechercher mieux en utilisant des mots-clés précis, en utilisants les raccourcis des différents navigateurs tels que la recherche avancée.",
        exactVal: false,
        options: null,
        answerType: "number",
        grandeur: "",
        unité: null,
        unitéConvert: null,
        getAnswer: true,
        answer: null,
        userAnswer: 0,
        formule: 0.00123*52*7,
        approx: 6.039726027/7,
        placeholder: "Entrez une valeur",
        prevQuestion : ["4-1-1", "4-1-2"],
        subQuestion: ["6"]
    },
    {
        id: "6",
        minimum: "0",
        category: "⚡ Appareils électroniques",
        question: "Lesquels de ces appareils possédez-vous ?",
        advice: null,
        resultsAdvices: `- Le plus important réside dans le choix des nouveaux appareil: il faut privilégier les appareils reconditionnés aux appareils neufs. Acheter un appareil neuf n'est pas interdit pour autant, il faut en profiter pour le garder le plus longtemps possible (+ de 4 ans de préférence). <br><br>Si vous en prenez soin, un smartphone peut être utilisé pendant 5 ans et un ordinateur portable plus de 10 ans ! <br><br>- Lors de l'achat, privilégiez les labels environnementaux (<a href="https://www.blauer-engel.de/en">Blue Angel</a>, <a href="https://tcocertified.com/fr/tco-certified/">TCO</a>, <a href="https://epeat.net/about-epeat">EPEAT</a>…) pour le matériel informatique, ils garantissent une utilisation plus responsable des ressources lors de la création des appareils et contribuent à réduire leur impact environnemental tout au long de leur cycle de vie, nottament à la fin. <br><br>- En effet, le numérique est responsable de 4% des émissions de gaz à effet de serre dans le monde, pour réduire cela, le recyclage est primordial. Si un appareil vient à être obsolète ou innutilisable, il est important de se renseigner quant aux oportunités de recyclage en magasins ou dans un point de collecte adapté.`,
        exactVal: true,
        options: [
            `<span class="material-symbols-outlined">smartphone</span> Smartphone`,
            `<span class="material-symbols-outlined">laptop_mac</span> Ordinateur portable`,
            `<span class="material-symbols-outlined">settop_component</span> Ordinateur fixe`,
            `<span class="material-symbols-outlined">desktop_windows</span> Ecran d'ordinateur`,
            `<span class="material-symbols-outlined">phone_iphone</span> Tablette`,
            `<span class="material-symbols-outlined">tv</span> Télévision`,
            `<span class="material-symbols-outlined">router</span> Box internet`,
            `<span class="material-symbols-outlined">usb</span> Clé USB`,
            `<span class="material-symbols-outlined">database</span> Disque dur externe`
        ],
        answerType: "checkbox",
        getAnswer: true,
        answer: [
            null, 
            null, 
            null, 
            null, 
            null, 
            null, 
            null, 
            null, 
            null
        ],
        userAnswer: [
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1, 
            1
        ],
        formule: [
            33.6,
            35,
            46.1,
            9.81,
            25.3,
            45,
            7.22,
            1.25,
            3.16
        ],
        prevQuestion : ["5"],
        subQuestion: null
    }
];

/* ORGANISATION DES DIVs

    <div id="questionsContainer">
        <!-- Chaque question est représentée par une div avec la classe "column" -->
        <div class="column">
            <p>Question</p> <!-- Le texte de la question -->
            <input type="number"> <!-- L'input pour la réponse (si la question est de type "number") -->
            <!-- La div pour contenir les boutons Précédent et Suivant -->
            <div class="buttons-container-row">
                <button>Précédent</button> <!-- Le bouton pour revenir à la question précédente -->
                <button>Suivant</button> <!-- Le bouton pour passer à la question suivante -->
            </div>
        </div>
    </div>
*/

/*Fonction pour démarrer le questionnaire
  Affiche les questions une par une, 
  elles sont immédiatement cachées (sauf la question 0) par la suite dans la fonction displayQuestion();
*/
function startSurvey() {
    for (let i = 0; i < questions.length; i++) {
        displayQuestion(questions[i]);
    }
    document.getElementById('divToDelete').style.display = 'none'; //Cache le bouton de démarrage
    document.getElementById('0').style.display = 'flex'; //Affiche la première question
    progressBar(0); 
}

//Fonction pour afficher les questions
//Insère les questions dans la div principales et les masques
function displayQuestion(question) {
    if(question.answerType == 'number') {
        let questionContainer = document.getElementById('questionsContainer');

        //Création de la div pour englober question et boutons
        let questionGlobal = document.createElement('div')
        questionGlobal.id = question.id;
        questionGlobal.className = "question-global";
        questionContainer.appendChild(questionGlobal);

        //Creation de la div pour la question
        let questionArea = document.createElement('div')
        questionArea.id = question.id;
        questionArea.className = 'column';
        questionGlobal.appendChild(questionArea);

        //Création de la phrase question
        let questionText = document.createElement('p')
        questionText.innerHTML = question.question;
        questionText.className = 'question-text';
        questionArea.appendChild(questionText);

        //Affichage de l'advice
        if(question.advice != null) {
            displayAdvice(question.advice, questionArea);
        }

        //creation d'une checkbox pour savoir si l'utilisateur entre une valeur exacte ou approximative
        let checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-container-row-b';
        questionArea.appendChild(checkboxDiv);
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = "exactVal" + question.id;
        checkbox.addEventListener("change", function() {
            if(checkbox.checked) {
                question.exactVal = true;
                //console.log("valeur exacte");
            } else {
                question.exactVal = false;
                //console.log("valeur approximative");
            }
        });

        let label = document.createElement('label')
        label.innerHTML = "Cocher la case si la valeur entrée est exacte et non approximative";
        label.htmlFor = "exactVal" + question.id;
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);

        let inputDiv = document.createElement('div');
        inputDiv.className = 'input-container-row';
        questionArea.appendChild(inputDiv);

        //Création de la zone d'input pour la réponse
        let input = document.createElement('input')
        input.type = 'number';
        input.min = question.minimum;
        input.placeholder = question.placeholder + question.grandeur;
        input.id = "answer" + question.id;
        input.className = 'number-input';
        inputDiv.appendChild(input);
        questionGlobal.style.display = 'none';

        if(question.unité != null) {
            //un mini menu pour sélectioner la grandeur de la réponse
            let select = document.createElement('select');
            select.id = "unit" + question.id;
            select.className = 'unit-select';
            inputDiv.appendChild(select);

            //on ajoute des options pour les unités
            for (let i = 0; i < question.unité.length; i++) {
                let option = document.createElement('option');
                option.value = question.unité[i];
                option.text = question.unité[i];
                select.appendChild(option);
            }

            select.addEventListener("change", function() {
                input.placeholder = question.placeholder + select.value;
                console.log(select.value);
            });
        }

        displayButtons(questionGlobal, question);
        
    } else if(question.answerType == 'button') {
        let questionContainer = document.getElementById('questionsContainer');

        //Création de la div pour englober question et boutons
        let questionGlobal = document.createElement('div')
        questionGlobal.id = question.id;
        questionGlobal.className = "question-global";
        questionContainer.appendChild(questionGlobal);

        //Creation de la div pour la question
        let questionArea = document.createElement('div')
        questionArea.id = question.id;
        questionArea.className = 'column';
        questionGlobal.appendChild(questionArea);

        //Création de la phrase question
        let questionText = document.createElement('p')
        questionText.innerHTML = question.question;
        questionText.className = 'question-text';
        questionArea.appendChild(questionText);

        //Affichage de l'advice
        if(question.advice != null) {
            displayAdvice(question.advice, questionArea);
        }

        //On créé une div horizontale pour contenir les boutons
        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons-container-row';
        questionArea.appendChild(buttonsDiv);

        //Pour chaque option de réponse, on crée un bouton qui contient le texte de l'option
        for (let i = 0; i < question.options.length; i++) {
            let button = document.createElement('button')
            button.innerHTML = question.options[i];
            button.id = question.id + question.options[i];
            button.className = 'option-btn';
            buttonsDiv.appendChild(button);

            //On ajoute un event listener pour chaque bouton
            button.addEventListener("click", function () {
                //console.log("clicked");
                nextQuestion(question.id, question.subQuestion[i]); //On passe à la question suivante en fonction de la réponse cliquée 
            });
        }

        //Création du bouton pour revenir à la question précédente
        let previousBtn = document.createElement('button');
        previousBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span>Précédent`;
        previousBtn.className = "nav-btn-left";
        previousBtn.addEventListener("click", function () {
            let actualId = question.id;
            let previousId = path.pop();   //On récupère l'id de la question précédente car path.pop() renvoie la dernière valeur du tableau path,c-à-d l'id de la question précédente
            previousQuestion(actualId, previousId); //On revient à la question précédente
        });
        questionGlobal.appendChild(previousBtn);
        
        questionGlobal.style.display = 'none';    //On masque la question pour l'instant
    } else if(question.answerType == 'checkbox') {
        let questionContainer = document.getElementById('questionsContainer');

        //Création de la div pour englober question et boutons
        let questionGlobal = document.createElement('div')
        questionGlobal.id = question.id;
        questionGlobal.className = "question-global";
        questionContainer.appendChild(questionGlobal);

        //Creation de la div pour la question
        let questionArea = document.createElement('div')
        questionArea.id = question.id;
        questionArea.className = 'column';
        questionGlobal.appendChild(questionArea);

        //Création de la phrase question
        let questionText = document.createElement('p')
        questionText.innerHTML = question.question;
        questionText.className = 'question-text';
        questionArea.appendChild(questionText);

        //Affichage de l'advice
        if(question.advice != null) {
            displayAdvice(question.advice, questionArea);
        }

        //creation d'une div verticale pour contenir toutes les checkbox
        let checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-container-column';
        questionArea.appendChild(checkboxDiv);

        //Pour chaque option de réponse, on crée une checkbox et un label
        for (let i = 0; i < question.options.length; i++) {
            //creation d'une div horizontale pour contenir checkboxes et labels
            let checkboxRow = document.createElement('div');
            checkboxRow.className = 'checkbox-container-row';
            checkboxDiv.appendChild(checkboxRow);

            //creation d'une checkbox
            let label = document.createElement('label')
            label.innerHTML = question.options[i];
            label.htmlFor = question.id + question.options[i];
            checkboxRow.appendChild(label);

            //Creation d'une div horizontale pour contenir le bouton +, l'input et le bouton -
            let addRemoveDiv = document.createElement('div');
            addRemoveDiv.className = 'add-remove-container-row';
            checkboxRow.appendChild(addRemoveDiv);

            //creation d'un bouton pour diminuer la valeur du nombre
            let removeBtn = document.createElement('button');
            removeBtn.innerHTML = `<span class="material-symbols-outlined">remove</span>`;
            removeBtn.className = "remove-btn";
            removeBtn.addEventListener("click", function () {
                let input = document.getElementById(question.id + question.options[i]);
                if(input.value > question.minimum) {
                    input.value--;
                }
            });
            addRemoveDiv.appendChild(removeBtn);

            let input = document.createElement('input')
            input.type = 'number';
            input.min = question.minimum;
            input.value = 0;
            input.focus();
            input.id = question.id + question.options[i];
            input.className = 'number-input-b';
            addRemoveDiv.appendChild(input);

            //creation d'un bouton pour augmenter la valeur du nombre
            let addBtn = document.createElement('button');
            addBtn.innerHTML = `<span class="material-symbols-outlined">add</span>`;
            addBtn.className = "add-btn";
            addBtn.addEventListener("click", function () {
                let input = document.getElementById(question.id + question.options[i]);
                input.value++;
            });
            addRemoveDiv.appendChild(addBtn);
        }

        //Afficher les boutons suivant et précédent
        displayButtons(questionGlobal, question);
        questionGlobal.style.display = 'none';  //On masque la question pour l'instant
    }
}

//Fonction pour afficher les boutons suivant et précédent
function displayButtons(questionArea, question) {
    //Création d'une div horizontale pour habriter les boutons suivant et précédent
    let buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons-container-row';
    questionArea.appendChild(buttonsDiv);

    //Création du bouton pour revenir à la question précédente
    if(question.prevQuestion != null) {  //Si la question a une question précédente, on affiche le bouton pour revenir à la question précédente
        let previousBtn = document.createElement('button');
        previousBtn.className = "nav-btn-left";
        previousBtn.innerHTML = `<span class="material-symbols-outlined">arrow_back</span>Précédent`;
        previousBtn.addEventListener("click", function () {
            let actualId = question.id;
            let previousId = path.pop();    //On récupère l'id de la question précédente car path.pop() renvoie la dernière valeur du tableau path,c-à-d l'id de la question précédente
            previousQuestion(actualId, previousId); //On revient à la question précédente
        });
        buttonsDiv.appendChild(previousBtn);
    }

    //Création du bouton pour passer à la question suivante
    if(question.subQuestion == null) {  //Si la question n'a pas de question suivante, on affiche le bouton pour afficher les résultats 
        let nextBtn = document.createElement('button');
        nextBtn.innerHTML = `Découvrir les résultats`;
        nextBtn.onclick = function () {
            let valid = fetchAnswers(question.id);
            if(!valid) {
                //console.log("Veuillez entrer une valeur valide");
                return;
            } else {
                //console.log("Valeur valide");
                displayResults();
            }
        };
        nextBtn.type = "button";
        nextBtn.className = "nav-btn";

        buttonsDiv.appendChild(nextBtn);
    } else {
        let nextBtn = document.createElement('button');
        nextBtn.innerHTML = `Suivant<span class="material-symbols-outlined">arrow_forward</span>`;
        nextBtn.className = "nav-btn-right";
        nextBtn.addEventListener("click", function () {
            let subQuestionId = question.subQuestion[0]; //On récupère l'id de la question suivante
            let actualId = question.id;                  //On récupère l'id de la question actuelle
            nextQuestion(actualId, subQuestionId);
        });
        buttonsDiv.appendChild(nextBtn);
    }
}

function displayAdvice(advice, questionArea) {
    let adviceDiv = document.createElement('div');
    adviceDiv.className = 'advice-container';
    questionArea.appendChild(adviceDiv);

    let adviceText = document.createElement('p');
    adviceText.innerHTML = `<div style="display: flex;"><span class="material-symbols-outlined">help</span></div>`;
    adviceText.className = 'advice-icon';
    adviceDiv.appendChild(adviceText);

    let adviceContent = document.createElement('p');
    adviceContent.innerHTML = `<div>${advice}</div>`;
    adviceContent.className = 'advice-content';
    adviceDiv.appendChild(adviceContent);
}

//Fonction pour passer à la question suivante
//Masque la question actuelle et affiche la question suivante
function nextQuestion(actualId, nextId) {
    path.push(actualId);    //On ajoute l'id de la question actuelle dans la pile path pour savoir quelle question afficher en cas de retour
    //console.log("question actuelle : " + actualId);
    //console.log("prochaine question : " + nextId);
    const valid = fetchAnswers(actualId);
    if(!valid) {
        //console.log("Veuillez entrer une valeur valide");
        return;
    } else {
        //console.log("Valeur valide");
        document.getElementById(actualId).style.display = 'none';
        document.getElementById(nextId).style.display = 'flex';
        progressBar(nextId);
        return;
    }
}

//Fonction pour revenir à la question précédente
//Masque la question actuelle et affiche la question précédente
function previousQuestion(actualId, previousId) {
    //console.log(path)
    //console.log("question précédente : " + previousId);
    //console.log("question actuelle : " + actualId);
    progressBar(previousId);
    document.getElementById(actualId).style.display = 'none';
    document.getElementById(previousId).style.display = 'flex';
}

function progressBar(id) {
    let index = (questions.findIndex(q => q.id === id) * 100)/questions.length;
    //console.log(index);
    document.getElementById("progressBarBg").style.height = '25px';
    document.getElementById("progressBarFg").style.width = `${index}%`;
}

//fonction pour récupérer les réponses de l'utilisateur à chaque passage de question
function fetchAnswers(questionId) {
    var valid = false;
    let userAnswer;
    let definitiveAnswer;
    let correctedAnswer;

    let question = questions.find(q => q.id === questionId);
    if(question.getAnswer && question.answerType == 'number') {
        userAnswer = document.getElementById("answer" + questionId).value;
        if(!isNaN(userAnswer) && userAnswer >= question.minimum) {
            //en fonction de la grandeur de la réponse, on la multiplie par le facteur associé à cette grandeur
            if(question.unité != null) {
                let unit = document.getElementById("unit" + questionId).value;
                let index = question.unité.indexOf(unit);
                userAnswer = userAnswer / question.unitéConvert[index];
                console.log("unité : " + unit);
                console.log("index : " + index);
                console.log("valeur en Go : " + userAnswer);
            }
            question.userAnswer = question.userAnswer * userAnswer;
            if(question.exactVal == false) {    //Si l'utilisateur entre une valeur approximative, on applique la formule d'approximation
                correctedAnswer = (userAnswer*question.approx).toFixed(2)
                ;
                definitiveAnswer = (correctedAnswer*question.formule).toFixed(2);
            } else {    //Sinon, on applique la formule exacte
                definitiveAnswer = (userAnswer*question.formule).toFixed(2);
            }
            question.answer = definitiveAnswer;    //on faiot la multiplication par 52 pour avoir la valeur annuelle
            console.log("réponse donnée par l'utilisateur : " + userAnswer);
            console.log("réponse avec approximation : " + correctedAnswer);
            console.log("réponse définitive en KgCo2: " + definitiveAnswer);
            console.log(questions);
            valid = true;
        } else {
            alert(`La valeur entrée est invalide: \n- Elle est peut être inférieure à ${question.minimum}, il faut entrer des valeurs positives. \n- Le caractère entré n'est pas un nombre. \n- Vous n'avez entré aucune valeur.`);
            valid = false;
        }
    } else if(question.getAnswer && question.answerType == 'checkbox') {
        for (let i = 0; i < question.options.length; i++) {
            userAnswer = document.getElementById(questionId+ question.options[i]).value;
            if(!isNaN(userAnswer) && userAnswer >= question.minimum) {
                question.userAnswer[i] = question.userAnswer[i] * userAnswer;
                if(question.exactVal == false) {
                    correctedAnswer = (userAnswer*question.approx[i]).toFixed(2);
                    definitiveAnswer = (correctedAnswer*question.formule[i]).toFixed(2);
                } else {
                    definitiveAnswer = (userAnswer*question.formule[i]).toFixed(2);
                }
                question.answer[i] = definitiveAnswer;
                //console.log("réponse donnée par l'utilisateur : " + userAnswer);
                //console.log("réponse avec approximation : " + correctedAnswer);
                //console.log("réponse définitive en KgCo2: " + definitiveAnswer);
            } else if(userAnswer == null) {
                valid = true;
            } else {
                alert(`La valeur de ${question.options[i]} est invalide: \n- Elle est peut être inférieure à ${question.minimum}, il faut entrer des valeurs positives. \n- Le caractère entré n'est pas un nombre. \n- Vous n'avez entré aucune valeur`);
                valid = false;
                break;
            }
            valid = true;
        }
    } else if(!question.getAnswer) {
        //console.log("pas de réponse à récupérer");
        valid = true;
    } else {
        //console.log("erreur");
    }
    return valid;
}

//Fonction pour calculer les résultats
function calculateResults() {
    var total = 0;
    let subtotal = 0;
    for (let i = 0; i < questions.length; i++) {
        if(questions[i].answerType == 'number' && questions[i].answer != null) {
            total = total + parseInt(questions[i].answer);
        } else if(questions[i].answerType == 'checkbox' && questions[i].answer != null) {
            //console.log("dans la boucle des checkbox");
            questions[i].answer.forEach(answer => {
                subtotal = subtotal + parseInt(answer);
                //console.log("subtotal : " + subtotal);
            });
        }
    }
    //console.log("total : " + total);
    return [total, subtotal];
}

//Fonction pour afficher les résultats
function displayResults() {
    let total = calculateResults();
    let total1 = total[0];  //On récupère le total des réponses pour les habitudes de consommation
    let total2 = total[1];  //On récupère le total des réponses pour les appaireils
    let questionContainer = document.getElementById('questionsContainer');
    questionContainer.innerHTML = '';   //On vide la div pour afficher les résultats

    //Création de la div pour englober les résultats
    let resultsGlobal = document.createElement('div');
    resultsGlobal.id = "results";
    resultsGlobal.className = "results-global";
    questionContainer.appendChild(resultsGlobal);

    //Création de la div pour afficher les résultats
    let resultsArea = document.createElement('div');
    resultsArea.id = "resultsArea";
    resultsArea.className = 'column';
    resultsGlobal.appendChild(resultsArea);

    //Création de la phrase pour afficher les références
    if(total1 != 0 && total2 != 0) {
        //Affichage du chiffre total des émissions de CO2 sur 1 an
        let totalText = document.createElement('p');
        totalText.innerHTML = `Estimation de votre total d'émissions sur 1 an : ${total1.toLocaleString()} Kg de CO2`;
        totalText.className = 'major-text';
        resultsArea.appendChild(totalText);

        //Création de la phrase pour expliquer les résultats
        let questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.innerHTML = `Cela ne concerne que les émissions de CO2 liées à votre consommation numérique <u>sur 1 an</u>, celle de vos appareils n'est pas prise en compte ici. Au total, vos habitudes de consommation numérique équivalent à :`;
        resultsArea.appendChild(questionText);
        
        let referenceMajorDiv = document.createElement('div')
        referenceMajorDiv.className = 'column-b';
        resultsArea.appendChild(referenceMajorDiv);
        references.forEach(reference => {
            displayReferences(reference, referenceMajorDiv, total1);
        });

        //Création d'une ligne pour séparer les résultats
        resultsArea.appendChild(document.createElement('hr'));

        //Affichage du chiffre total des émissions de CO2 sur 1 an
        let totalText2 = document.createElement('p');
        totalText2.innerHTML = `Estimation du total d'émission de vos appareils: ${total2.toLocaleString()} Kg de CO2`;
        totalText2.className = 'major-text';
        resultsArea.appendChild(totalText2);

        //Création de la phrase pour expliquer les résultats
        let questionText2 = document.createElement('p');
        questionText2.className = 'question-text';
        questionText2.innerHTML = `Cela ne concerne que les émissions de CO2 liées à vos appareils <u>tout au long de leurs vies</u>, de leur fabrication à leur destruction ou recyclage. Au total, la consommation de vos appareils équivaut à :`;
        resultsArea.appendChild(questionText2);
        
        let referenceMajorDiv2 = document.createElement('div')
        referenceMajorDiv2.className = 'column-b';
        resultsArea.appendChild(referenceMajorDiv2);
        references.forEach(reference => {
            displayReferences(reference, referenceMajorDiv2, total2);
        });
        displayStats(resultsGlobal, total1, total2);
    } else if(total1 != 0 && total2 == 0) {
        //Affichage du chiffre total des émissions de CO2 sur 1 an
        let totalText = document.createElement('p');
        totalText.innerHTML = `Estimation de votre total d'émissions sur 1 an : ${total1.toLocaleString()} Kg de CO2`;
        totalText.className = 'major-text';
        resultsArea.appendChild(totalText);

        //Création de la phrase pour expliquer les résultats
        let questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.innerHTML = `Cela ne concerne que les émissions de CO2 liées à votre consommation numérique <u>sur 1 an</u>, celle de vos appareils n'est pas prise en compte ici. Au total, vos habitudes de consommation numérique équivalent à :`;
        resultsArea.appendChild(questionText);

        let referenceMajorDiv = document.createElement('div')
        referenceMajorDiv.className = 'column-b';
        resultsArea.appendChild(referenceMajorDiv);
        references.forEach(reference => {
            displayReferences(reference, referenceMajorDiv, total1);
        });
        displayStats(resultsGlobal, total1, total2);
    } else if(total2 != 0 && total1 == 0){
        //Affichage du chiffre total des émissions de CO2 sur 1 an
        let totalText2 = document.createElement('p');
        totalText2.innerHTML = `Estimation du total d'émission de vos appareils: ${total2.toLocaleString()} Kg de CO2`;
        totalText2.className = 'major-text';
        resultsArea.appendChild(totalText2);

        //Création de la phrase pour expliquer les résultats
        let questionText2 = document.createElement('p');
        questionText2.className = 'question-text';
        questionText2.innerHTML = `Cela ne concerne que les émissions de CO2 liées à vos appareils <u>tout au long de leurs vies</u>, de leur fabrication à leur destruction ou recyclage. Au total, la consommation de vos appareils équivaut à :`;
        resultsArea.appendChild(questionText2);

        let referenceMajorDiv = document.createElement('div')
        referenceMajorDiv.className = 'column-b';
        resultsArea.appendChild(referenceMajorDiv);
        references.forEach(reference => {
            displayReferences(reference, referenceMajorDiv, total2);
        });
        displayStats(resultsGlobal, total1, total2);
    } else if(total1 == 0 && total2 == 0){
        //Création de la phrase pour afficher les résultats
        let questionText = document.createElement('p');
        questionText.className = 'question-text';
        questionText.innerHTML = `On a rien à dire sur votre consommation numérique, vous êtes un modèle pour nous tous !`;
        resultsArea.appendChild(questionText);
    }

    //Création du bouton pour recommencer le questionnaire
    let resetBtn = document.createElement('button');
    resetBtn.innerHTML = `<span class="material-symbols-outlined">restart_alt</span>Recommencer le questionnaire`;
    resetBtn.className = "reset-btn";
    resetBtn.onclick = function () {
        location.reload(); //On recharge la page pour recommencer le questionnaire
    };
    resultsArea.appendChild(resetBtn);
}

//Fonction pour afficher les références
function displayReferences(reference, resultsArea, total) {
    if(total == 0) {
        return;
    } else {
        let convertion = total / reference.valeur;

        let referenceDiv = document.createElement('div');
        resultsArea.appendChild(referenceDiv);
        referenceDiv.innerHTML = `
            <div class="references-container">
                <div>
                    <h1>${convertion.toFixed(0).toLocaleString()}</h1>
                </div>
                <div>
                    <h2 id="questionText">${convertion >= 2 ? reference.nom.replaceAll("[plural]", 's') : reference.nom.replaceAll("[plural]", '')}</h2>
                </div>
            </div>`;
    }
}

//Fonction pour afficher les résultats
function displayStats(resultsGlobal, total1, total2) {
    let row = document.createElement('div');
        row.id = "row";
        row.className = 'row';
        resultsGlobal.appendChild(row);
    if(total1 == 0) {
        //
    } else {
        let statsArea = document.createElement('div');
        statsArea.id = "statsArea";
        statsArea.className = 'column';
        row.appendChild(statsArea);

        let title = document.createElement('p');
        title.className = 'reference-title';
        title.innerHTML = "Les émissions de votre consommation";
        statsArea.appendChild(title);

        questions.forEach(question => {
            if(question.answerType == 'number') {
                let value = question.answer;
                if (value == 0 || value == null) {
                    return;
                } else {
                    value = question.answer;
                    let percent = ((value * 100)/total1);
                    if(percent > 100) {
                        percent = 100;
                    }
                    let div = document.createElement('div');
                    div.className = 'column-a';
                    statsArea.appendChild(div);

                    let resultText = document.createElement('p');
                    resultText.className = 'p-label';
                    resultText.innerHTML = `${question.category} : ${value.toLocaleString()} Kg de CO2 émis par an.`;
                    div.appendChild(resultText);
                    displayProgressBar(div, percent);
                }
                //On affiche les conseils pour réduire les émissions
                let adviceDiv = document.createElement('div');
                adviceDiv.className = 'advice-container';
                let adviceText = document.createElement('p');
                adviceText.innerHTML = `<div style="display: flex;"><span class="material-symbols-outlined">nest_eco_leaf</span></div>`;
                adviceText.className = 'advice-icon';
                adviceDiv.appendChild(adviceText);
                let adviceContent = document.createElement('p');
                adviceContent.innerHTML = `<div>${question.resultsAdvices}</div>`;
                adviceContent.className = 'advice-content';
                adviceDiv.appendChild(adviceContent);
                statsArea.appendChild(adviceDiv);
            }
        });
    }
    if(total2 == 0) {
        //
    } else {
        let statsArea1 = document.createElement('div');
        statsArea1.id = "statsArea1";
        statsArea1.className = 'column';
        row.appendChild(statsArea1);

        let title = document.createElement('p');
        title.className = 'reference-title';
        title.innerHTML = "Les émissions de vos appareils.";
        statsArea1.appendChild(title);

        questions.forEach(question => {
            if(question.answerType == 'checkbox') {
                let i = 0;
            
                //On affiche les conseils pour réduire les émissions
                let adviceDiv = document.createElement('div');
                adviceDiv.className = 'advice-container';
                let adviceText = document.createElement('p');
                adviceText.innerHTML = `<div style="display: flex;"><span class="material-symbols-outlined">nest_eco_leaf</span></div>`;
                adviceText.className = 'advice-icon';
                adviceDiv.appendChild(adviceText);
                let adviceContent = document.createElement('p');
                adviceContent.innerHTML = `<div>${question.resultsAdvices}</div>`;
                adviceContent.className = 'advice-content';
                adviceDiv.appendChild(adviceContent);
                statsArea1.appendChild(adviceDiv);

                //On affiche les résultats pour chaque appareil
                question.answer.forEach(answer => {
                    let value = answer;
                    if (value == 0 || value == null) {
                        return;
                    } else {
                        value = answer;
                        let percent = ((value * 100)/total2);
                        if(percent > 100) {
                            percent = 100;
                        }
                        let div = document.createElement('div');
                        div.className = 'column-a';
                        statsArea1.appendChild(div);

                        let resultText = document.createElement('p');
                        resultText.className = 'p-label';
                        resultText.innerHTML = `${question.options[i]} : ${value.toLocaleString(1)} Kg de CO2 émi${value.toLocaleString >= 2 ? "" : "s"}.`;
                        div.appendChild(resultText);
                        displayProgressBar(div, percent);
                    }
                    i++;
                });
            }
        });
    }
    let alternativesDivs = document.createElement("div");
    alternativesDivs.className = "scrollmenu";
    displayAlternatives(alternativesDivs);  
    resultsGlobal.appendChild(alternativesDivs);

    //creation d'une ligne pour séparer
    resultsGlobal.appendChild(document.createElement('hr'));

    //creation du texte pour les boutons de partage
    let shareText = document.createElement('p');
    shareText.innerHTML = "Partagez le questionnaire avec vos amis !";
    shareText.className = 'reference-title';
    shareText.style.padding = '20px 20px 0px 20px';
    shareText.style.fontSize = 'calc(1.5em + 1vw)';
    document.getElementById("shareDiv").appendChild(shareText);

    //creation d'une div qui contiendra les boutons de partage
    let shareDiv = document.createElement('div');
    shareDiv.style.display = 'flex';
    shareDiv.style.justifyContent = 'center';
    shareDiv.style.margin = '20px';
    shareDiv.style.padding = '20px';
    shareDiv.style.flexDirection = 'column';
    shareDiv.style.gap = '10px';
    shareDiv.style.backgroundColor = "var(--md-sys-color-on-tertiary-container)";
    shareDiv.style.borderRadius = '25px';
    document.getElementById("shareDiv").appendChild(shareDiv);
    displayShareBtn(shareDiv);
}

function displayAlternatives(alternativesDivs) {
    document.getElementById("body").style.display = 'block';

    let alternativesTitle = document.createElement('h2');
    alternativesTitle.innerHTML = "Moins de temps passé sur les écrans, c'est plus de temps pour...";
    alternativesTitle.className = 'reference-title';
    alternativesTitle.style.padding = '20px';
    alternativesTitle.style.color = 'white';
    alternativesTitle.style.fontSize = 'calc(1.5em + 1vw)';
    document.getElementById("alternatives").appendChild(alternativesTitle);

    let nav = document.createElement('nav');
    nav.className = 'navBar';
    document.getElementById("alternatives").appendChild(nav);

    let container = document.createElement('div');
    container.className = 'container';
    nav.appendChild(container);

    for (let i = 0; i < activities.length; i++) {
        let activityBox = document.createElement('div');
        activityBox.className = 'inscrollmenu';
        activityBox.style.backgroundImage = `url("${activities[i].activityIllustration}")`;
        activityBox.innerHTML = `
            <p>${activities[i].activitySentence}</p>
            <button onclick="window.open('${activities[i].activityLink}')">découvrir</button>
        `;
        container.appendChild(activityBox);
    }
}

//fonction pour afficher des alternatives

//Fonction pour afficher des barre de progression
function displayProgressBar(statsArea, percent) {
    if(percent == 0) {
        return;
    } else {
        let progressBarBg = document.createElement('div');
        progressBarBg.id = "progressBarBg";
        progressBarBg.style.height = '25px';
        progressBarBg.className = "progress-bar-bg-a";
        progressBarBg.style.width = '100%';
        statsArea.appendChild(progressBarBg); // Add progressBarBg to statsArea

        let progressBarFg = document.createElement('div');
        progressBarFg.id = "progressBarFg";
        progressBarFg.className = "progress-bar-fg-a";
        progressBarFg.style.width = `${percent}%`;
        progressBarBg.appendChild(progressBarFg);
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const bottomLogo = document.getElementById('bottomLogo');
    let btn = document.getElementById('toggleThemeBtn');
    btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_blanc_rvb.png`;
} else {
    const bottomLogo = document.getElementById('bottomLogo');
    let btn = document.getElementById('toggleThemeBtn');
    btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    bottomLogo.src = `src/styles/icon/logo_cours_transversal_blanc_rvb.png`;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const bottomLogo = document.getElementById('bottomLogo');
    let btn = document.getElementById('toggleThemeBtn');
    if (e.matches) {
        bottomLogo.src = 'src/styles/icon/logo_cours_transversal_blanc_rvb.png';
        btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    } else {
        bottomLogo.src = 'src/styles/icon/logo_cours_transversal_blanc_rvb.png';
        btn.innerHTML = `<span class="material-symbols-outlined">format_paint</span>`;
    }
});

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
    }
]

let randomIndex = Math.floor(Math.random() * bgImgUrl.length);
let randomElement = bgImgUrl[randomIndex];
document.getElementById("body").style.backgroundImage = `url(${randomElement.img})`;
document.documentElement.setAttribute('data-theme', randomElement.theme);

let source = randomIndex;

function toggleTheme() {
    randomIndex = Math.floor(Math.random() * bgImgUrl.length);
    source = randomIndex;
    const randomElement = bgImgUrl[randomIndex];
    document.getElementById("body").style.backgroundImage = `url(${randomElement.img})`;
    document.documentElement.setAttribute('data-theme', randomElement.theme);
}

document.getElementById('getImgReferenceBtn').addEventListener('click', function() {
    var r = confirm("Une nouvelle page va s'ouvrir pour vous rediriger vers la source de l'image. Voulez-vous continuer ?");
    if (r == true) {
        window.open(bgImgUrl[randomIndex].source);
    } else {
        return;
    }
});

function copyLink(){
    var copyText = window.location.href;
    navigator.clipboard.writeText(copyText);
    alert("Lien copié dans le presse-papier !")
}

function displayShareBtn(resultsArea) {
    shareLinks.forEach(shareLink => {
        let shareBtn = document.createElement('button');
        shareBtn.className = 'share-btn';
        shareBtn.innerHTML = `${shareLink.icon + shareLink.name}`;
        shareBtn.onclick = function() {
            window.open(shareLink.link.replace("[URL]", window.location.href));
        }
        resultsArea.appendChild(shareBtn);
    });
}