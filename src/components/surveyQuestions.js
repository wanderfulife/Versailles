export const questions = [
  {
    id: "Poste",
    text: "Zone de l'enquête",
    options: [
      { id: 1, text: "Quai B/C", next: "Q2" },
      { id: 2, text: "Quai D/E", next: "Q2" },
      { id: 3, text: "Quai E/F", next: "Q2" },
      { id: 4, text: "Quai F/G", next: "Q2" },
    ]
  },
  {
    id: "Q2",
    text: "De quelle commune arrivez-vous ?",
    options: [
      { id: 1, text: "Versailles", next: "Q3_quartier" },
      { id: 2, text: "Autre", next: "Q3" },
    ]
  },
  {
    id: "Q3_quartier",
    text: "Précisez le quartier",
    freeText: true,
    next: "Q4"
  },
  {
    id: "Q3",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "Q4"
  },
  {
    id: "Q4",
    text: "Ce lieu est-il … ?",
    options: [
      { id: 1, text: "Votre domicile", next: "Q5" },
      { id: 2, text: "Votre lieu de travail habituel", next: "Q5" },
      { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q5" },
      { id: 4, text: "Votre établissement scolaire, université", next: "Q5" },
      { id: 5, text: "Un lieu d'achats, courses, …", next: "Q5" },
      { id: 6, text: "Un lieu de loisirs", next: "Q5" },
      { id: 7, text: "Autres", next: "Q4_autre" }
    ]
  },
  {
    id: "Q4_autre",
    text: "Précisez",
    freeText: true,
    next: "Q5"
  },
  {
    id: "Q5",
    text: "Dans quelle commune vous rendez-vous ?",
    usesCommuneSelector: true,
    next: "Q6"
  },
  {
    id: "Q6",
    text: "Ce lieu est-il … ?",
    options: [
      { id: 1, text: "Votre domicile", next: "Q7" },
      { id: 2, text: "Votre lieu de travail habituel", next: "Q7" },
      { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q7" },
      { id: 4, text: "Votre établissement scolaire, université", next: "Q7" },
      { id: 5, text: "Un lieu d'achats, courses, …", next: "Q7" },
      { id: 6, text: "Un lieu de loisirs", next: "Q7" },
      { id: 7, text: "Autres", next: "Q6_autre" }
    ]
  },
  {
    id: "Q6_autre",
    text: "Précisez",
    freeText: true,
    next: "Q7"
  },
  {
    id: "Q7",
    text: "Par quelle entrée êtes vous arrivé à la gare ?",
    options: [
      { id: 1, text: "Parvis Nord", next: "Q8" },
      { id: 2, text: "Accès gare routière", next: "Q8" },
      { id: 3, text: "Accès Porte de Buc (accès sud)", next: "Q8" }
    ]
  },
  {
    id: "Q8",
    text: "Par quel mode de transport êtes-vous venu à la gare ?",
    options: [
      { id: 1, text: "en voiture conducteur", next: "Q9" },
      { id: 2, text: "en voiture passager", next: "Q10" },
      { id: 3, text: "en deux-roues motorisés", next: "Q11" },
      { id: 4, text: "en bus/car", next: "Q11" },
      { id: 5, text: "à vélo", next: "Q13a" },
      { id: 6, text: "à pied exclusivement", next: "Q11" },
      { id: 7, text: "autres", next: "Q8_autre" }
    ]
  },
  {
    id: "Q8_autre",
    text: "Précisez le mode de transport",
    freeText: true,
    next: "Q11"
  },
  {
    id: "Q9",
    text: "Comment êtes-vous venu en voiture ?",
    options: [
      { id: 1, text: "Seul", next: "Q11" },
      { id: 2, text: "en co-voiturage", next: "Q11" },
      { id: 3, text: "à plusieurs hors co-voiturage", next: "Q11" }
    ]
  },
  {
    id: "Q10",
    text: "Voiture passager :",
    options: [
      { id: 1, text: "Déposé", next: "Q11" },
      { id: 2, text: "en co-voiturage", next: "Q11" }
    ]
  },
  {
    id: "Q11",
    text: "Combien de temps avez-vous mis pour arriver à la gare où nous nous trouvons actuellement ?",
    freeText: true,
    next: "Q12a"
  },
  {
    id: "Q12a",
    text: "Où êtes-vous garé ?",
    options: [
      { id: 1, text: "Parking de la Gare", next: "Q12b" },
      { id: 2, text: "Parking de Sceaux", next: "Q12b" },
      { id: 3, text: "Parking clinique des franciscaines", next: "Q12b" },
      { id: 4, text: "Sur voirie", next: "Q12_voirie" },
      { id: 5, text: "Autre parking", next: "Q12_autre" }
    ]
  },
  {
    id: "Q12_voirie",
    text: "Précisez le lieu de stationnement",
    freeText: true,
    next: "Q11"
  },
  {
    id: "Q12_autre",
    text: "Précisez le parking",
    freeText: true,
    next: "Q11"
  },
  {
    id: "Q12b",
    text: "Combien de temps êtes-vous / allez-vous rester stationné ?",
    freeText: true,
    next: "Q12c"
  },
  {
    id: "Q12c",
    text: "Pourquoi n'êtes-vous pas venu en bus ?",
    options: [
      { id: 1, text: "pas de desserte bus", next: "Q12d" },
      { id: 2, text: "bus trop lents", next: "Q12d" },
      { id: 3, text: "horaires inadaptés", next: "Q12d" },
      { id: 4, text: "bus inconfortables", next: "Q12d" },
      { id: 5, text: "préférence pour la voiture", next: "Q12d" },
      { id: 6, text: "n'y a pas pensé", next: "Q12d" },
      { id: 7, text: "autres", next: "Q12c_autre" }
    ]
  },
  {
    id: "Q12c_autre",
    text: "Précisez la raison",
    freeText: true,
    next: "Q12d"
  },
  {
    id: "Q12d",
    text: "Pourquoi n'êtes-vous pas venu à vélo ?",
    options: [
      { id: 1, text: "pas de vélo", next: "Q14" },
      { id: 2, text: "distance trop longue", next: "Q14" },
      { id: 3, text: "pas de stationnement sécurisé", next: "Q14" },
      { id: 4, text: "itinéraire dangereux", next: "Q14" },
      { id: 5, text: "n'y a pas pensé", next: "Q14" },
      { id: 6, text: "autres, précisez...", next: "Q12d_autre" }
    ]
  },
  {
    id: "Q12d_autre",
    text: "Précisez la raison",
    freeText: true,
    next: "Q14"
  },
  {
    id: "Q13a",
    text: "Où êtes-vous stationné ?",
    options: [
      { id: 1, text: "Arceau Entrée historique (sous l'horloge)", next: "Q13b" },
      { id: 2, text: "Arceau Gare routière", next: "Q13b" },
      { id: 3, text: "Arceau Porte de Buc (parvis sud)", next: "Q13b" },
      { id: 4, text: "Parking souterrain", next: "Q13b" },
      { id: 5, text: "Vélo embarqué dans le train", next: "Q13b" },
      { id: 6, text: "Sur voirie hors arceau", next: "Q13b" },
      { id: 7, text: "Autre parking", next: "Q13a_autre" }
    ]
  },
  {
    id: "Q13a_autre",
    text: "Précisez le lieu de stationnement",
    freeText: true,
    next: "Q13b"
  },
  {
    id: "Q13b",
    text: "Avez-vous déjà utilisé le parking vélo souterrain ?",
    options: [
      { id: 1, text: "Oui", next: "Q14" },
      { id: 2, text: "Non", next: "Q13c" }
    ]
  },
  {
    id: "Q13c",
    text: "Pourquoi ?",
    options: [
      { id: 1, text: "Situé trop loin / ne sait pas comment y accéder", next: "Q14" },
      { id: 2, text: "Ne connait pas ce parking", next: "Q14" },
      { id: 3, text: "Peu attractif (souterrain)", next: "Q14" },
      { id: 4, text: "autres", next: "Q13c_autre" }
    ]
  },
  {
    id: "Q13c_autre",
    text: "Précisez la raison",
    freeText: true,
    next: "Q14"
  },
  {
    id: "Q14",
    text: "A quelle fréquence vous rendez vous à la gare ?",
    options: [
      { id: 1, text: "tous les jours (7j/7j)", next: "end" },
      { id: 2, text: "régulièrement (5-6 fois par semaine)", next: "end" },
      { id: 3, text: "souvent (3-4 fois par semaine)", next: "end" },
      { id: 4, text: "de temps en temps (1-2 fois par semaine)", next: "end" },
      { id: 5, text: "occasionnellement (moins d'1 fois par semaine)", next: "end" },
      { id: 6, text: "rarement (quelquefois par an)", next: "end" }
    ]
  }
];
