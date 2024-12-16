
import Booki from "../images/projects/Booki.png";
import Ohmyfood from "../images/projects/OhMyFood.png";
import Sophiebluel from "../images/projects/Portfolio-Sophie.png";
import Kasa from "../images/projects/Kasa.png";
import events from "../images/projects/724events.png";
import Ninacarducci from "../images/projects/Ninacarucci.png";
import Argentbank from "../images/projects/Argentbank.png";



const portfolio = [
  {
    id: "c67ab8a7",
    name: "Booki",
    image: [ Booki],
    text: "En tant que développeur web chez Booki, j'ai intégré l'interface du site à l'aide de HTML et CSS, en collaboration avec Sarah, la CTO, et Loïc, l'UI designer. J'ai travaillé sur des maquettes complètes pour les versions desktop, tablette et mobile, en respectant les spécifications et contraintes techniques. J'ai reçu une structure de fichiers préparée pour démarrer",
    code: "https://github.com/fabjeg/Booki-HTML-CSS",
    site: "https://fabjeg.github.io/Booki-HTML-CSS/",
    competences: ["HTML", "CSS", "Figma"],
  },
  {
    id: "b9123946",
    name: "OhMyFood",
    image: [Ohmyfood],
    text: "Pour OhMyFood, j'ai créé un site 'mobile-first' répertoriant les menus de restaurants haut de gamme. Les clients précommandent leur repas pour éviter les files d'attente. Quatre restaurateurs sont déjà partenaires. J'ai assuré la conception responsive et intégré des animations élégantes pour une expérience optimale.",
    code: "https://github.com/fabjeg/ohmyfood",
    site: "https://fabjeg.github.io/ohmyfood/",
    competences: ["HTML", "SASS", "Figma"],
  },
  {
    id: "46d188c5",
    name: "Portfolio architecte ",
    image: [Sophiebluel],
    text: "Chez ArchiWebos, j'ai contribué à la conception du site portfolio de Sophie Bluel, architecte d'intérieur. Mon rôle en tant que développeur front-end a impliqué la création de la page de présentation, de la page de connexion de l'administrateur, et d'une modale d'upload de médias. ",
    code: "https://github.com/fabjeg/Portfolio-architecte-sophie-bluel-p6",
    site: "https://portfolio.fabwebprojects.fr/projetformation/Sophie-bluel/",
    competences: ["HTML", "CSS", "Javascript", "Swagger"],
  },
  {
    id: "7af00cd6",
    name: "Kasa",
    image: [Kasa],
    text: "En tant que développeur front-end freelance, j'ai travaillé avec Kasa, un leader de la location d'appartements entre particuliers en France. J'ai pris en charge la refonte totale de leur site web en utilisant React. Malgré l'absence temporaire du back-end, j'ai réussi à développer l'ensemble de l'application, les composants React, et les routes React Router.  ",
    code: "https://github.com/fabjeg/Kasa",
    site: "https://arthurblanc.github.io/Kasa/",
    competences: ["React", "SASS", "Figma"],
  },
  {
    id: "0979876d",
    name: "724events",
    image: [events],
    text: "En tant que développeur front-end freelance, j'ai été sollicité par l'agence événementielle 724events pour résoudre des problèmes de bugs et finaliser leur site web vitrine. Le projet avait été initialement démarré par un autre développeur. J'ai repris le travail en corrigeant les bugs, et en complétant le cahier de recette pour assurer un fonctionnement sans faille.",
    code: "https://github.com/fabjeg/724events",
    site: "https://724events-ac.vercel.app/",
    competences: ["React Dev Tools", "Débogage"],
  },
  {
    id: "f72a452f",
    name: "Nina Carducci",
    image: [Ninacarducci],
    text: "En tant que développeur freelance, j'ai proposé mes services d'optimisation SEO à Nina Carducci, une photographe. Après avoir effectué un audit de son site, j'ai identifié des problèmes de vitesse de chargement et de structure. J'ai proposé de résoudre ces problèmes en optimisant les images et le code du site. Mon objectif était d'améliorer son référencement et d'augmenter sa visibilité. ",
    code: "https://github.com/fabjeg/-ninacarducci",
    site: "https://fabjeg.github.io/-ninacarducci/",
    competences: ["SEO", "Wave", "Accessibilité"],
  },
  {
    id: "b4c67936",
    name: "Argent Bank Redux Toolkit",
    image: [Argentbank],
    text: "En tant que développeur front-end chez Argent Bank, j'ai travaillé sur la création du tableau de bord des utilisateurs. La première phase impliquait de créer une application web réactive avec React, en utilisant Redux pour la gestion de l'état. Dans la phase 2, j'ai travaillé sur la conception des transactions et j'ai fourni des spécifications Swagger pour les routes API associées.",
    code: "https://github.com/fabjeg/ArgentBank",
    site: "https://fabjeg.github.io/ArgentBank-Redux/",
    competences: ["React", "Redux Toolkit", "MongoDB"],
  },
  {
    id: "b4c67937",
    name: "Argent Bank Redux",
    image: [Argentbank],
    text: "En tant que développeur front-end chez Argent Bank, j'ai travaillé sur la création du tableau de bord des utilisateurs. La première phase impliquait de créer une application web réactive avec React, en utilisant Redux pour la gestion de l'état. Dans la phase 2, j'ai modifié le backend en créant trois nouvelles routes : une route POST pour envoyer les données dans MongoDB, une route GET pour récupérer les données, et une route PUT pour modifier les types de transaction. J'ai également travaillé sur le nouveau visuel du site, en intégrant des mises à jour visuelles pour améliorer l'interface utilisateur.",
    code: "https://github.com/fabjeg/ArgentBank-Redux",
    site: "https://fabjeg.github.io/ArgentBank-Redux/",
    competences: ["React", "Redux", "MongoDB"],
  }
];

export default portfolio;
