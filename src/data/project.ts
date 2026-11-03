export interface Project {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  context: string
  objectives: string[]
  features: string[]
  tech: string[]
  image?: string
  gallery?: string[]
  link?: string
}

type ProjectCopy = Pick<Project, 'subtitle' | 'description' | 'context' | 'objectives' | 'features'>

/* =========================================
   HELPERS
   ========================================= */
const img = (filename: string) =>
  `${import.meta.env.BASE_URL}images/projects/${filename}`

/* =========================================
   01 — FELLAH
   ========================================= */
const fellahCover = img('fellah-cover.jpg')
const fellahDashboard = img('dashboard.png')
const fellahCalendrier = img('calendrier.png')
const fellahChatbot = img('chatbot.png')
const fellahParcelle = img('parcelle.png')
const fellahProduits = img('produits.png')
const fellahAjoutParcelle = img('ajoutparcelle.png')
const fellahProfil = img('profil.png')
const fellahCommandes = img('commandes.png')

/* =========================================
   02 — SMART SAFI
   ========================================= */
const smartSafiCover = img('smartsafi-cover.png')
const smartSafiLogin = img('smartsafi-login.png')
const smartSafiDechets = img('smartsafi-dechets.png')
const smartSafiDechetsSud = img('smartsafi-notif.png')
const smartSafiDechetsEst = img('smartsafi-dechets-cards.png')
const smartSafiDechetsOuest = img('smartsafi-dechets-chauf.png')
const smartSafiDechetsNord = img('smartsafi-dechets-profil.png')
const smartSafiEau = img('smartsafi-eau.png')
const smartSafiAir = img('smartsafi-air.png')
const smartSafiIrrigation = img('smartsafi-irrigation.png')
const smartSafiEclairageA = img('smartsafi-eclairage-a.png')
const smartSafiEclairageB = img('smartsafi-eclairage-b.png')
const smartSafiChauffeurs = img('smartsafi-chauffeurs.png')
const smartSafiProfil = img('smartsafi-profil.png')
const smartSafiChauffeur = img('smartsafi-chauffeur.png')

/* =========================================
   03 — BREASTCARE
   ========================================= */
const breastCover = img('breastcare-cover.png')
const breastLogIn = img('breastcare-log.png')
const breastRegister = img('breastcare-register.png')
const breastAnalysis = img('breastcare-analyse.png')
const breastAnalysisEcho = img('breastcare-anlyse0.png')
const breastResult = img('breastcare-resulat.png')
const breastMalin = img('breastcare-malin.png')

/* =========================================
   04 — MEDEQUIP
   ========================================= */
const medequipCover = img('medequip-cover.png')
const medequipDashboard = img('medequip-dashboard.png')
const medequipEquipe = img('medequip-equipe.png')
const medequipEquipements = img('medequip-equipements.png')
const medequipMaintenance = img('medequip-maintenance.png')
const medequipRapport1 = img('medequip-rapport0.png')
const medequipRapport2 = img('medequip-rapport1.png')
const medequipRapport3 = img('medequip-rapport2.png')

/* =========================================
   05 — PRESENCE ENSA SAFI
   ========================================= */
const presenceDashboard = img('presence-dashboard.png')
const presenceDashboard1 = img('presence-dashboard1.png')
const presenceEtudiants = img('presence-etudiants.png')
const presenceEnseigants = img('presence-enseignants.png')
const presenceAjoutEnseigants = img('presence-ajout-enseignants.png')
const presenceEmploi = img('presence-emploi.png')
const presenceEmploi1 = img('presence-emploi1.png')
const presenceEditEmploi = img('presence-edit-emploi.png')
const presenceDeleteEmploi = img('presence-delete-emploi.png')
const presenceAdmin = img('presence-admin.png')

/* =========================================
   06 — GESTION DES PFE
   ========================================= */
const pfeCover = img('pfe-cachier.png')
const pfeDashboard = img('pfe-cachier0.png')
const pfeKanban = img('pfe-cachier1.png')
const pfePdf = img('pfe-pdf.png')
const pfeListecahciers = img('pfe-liste-cachiers.png')
const pferesultatsrecommadations = img('pfe-resultats-recommendations.png')
const pfeRecommendation = img('pfe-recommendation.png')


/* =========================================
   PROJETS
   ========================================= */
export const projects: Project[] = [
  /* ============ 01 — FELLAH ============ */
  {
    id: 'fellah',
    year: '2025',
    title: 'Fellah',
    subtitle: 'Plateforme tout-en-un pour agriculteurs',
    description:
      "Une plateforme intelligente qui accompagne les agriculteurs dans la gestion de leurs cultures grâce à l'IA, l'IoT et un assistant vocal.",
    context:
      "Projet académique réalisé à l'ENSA Safi. L'objectif était de concevoir une solution complète pour digitaliser le secteur agricole marocain, en combinant plusieurs technologies : prédiction, monitoring, vision par ordinateur et NLP.",
    objectives: [
      "Prédire le rendement des cultures à partir de données historiques",
      "Surveiller les conditions du sol et de l'air en temps réel via IoT",
      "Diagnostiquer automatiquement les maladies des plantes",
      "Offrir un assistant vocal en darija et en français",
    ],
    features: [
      "Tableau de bord avec prédictions et recommandations personnalisées",
      "Monitoring IoT via MQTT (température, humidité, pH)",
      "Détection de maladies par CNN (MobileNetV2)",
      "Assistant vocal avec Llama 3.1, Whisper et gTTS",
    ],
    tech: [
      'Vue.js', 'Laravel', 'Flask', 'FastAPI',
      'MySQL', 'Random Forest', 'NLP', 'MQTT',
    ],
    image: fellahCover,
    gallery: [
      fellahDashboard,
      fellahCalendrier,
      fellahParcelle,
      fellahAjoutParcelle,
      fellahChatbot,
      fellahProduits,
      fellahCommandes,
      fellahProfil,
    ],
  },

  /* ============ 02 — SMART SAFI ============ */
  {
    id: 'smart-safi',
    year: '2025',
    title: 'Smart Safi',
    subtitle: 'Plateforme Smart City pour la ville de Safi',
    description:
      "Une plateforme urbaine connectée qui supervise en temps réel l'éclairage public, la gestion des déchets, l'irrigation intelligente, la qualité de l'air et de l'eau — au service d'une ville durable.",
    context:
      "Projet académique réalisé à l'ENSA Safi dans le cadre du module Smart City. La ville de Safi, à forte activité industrielle et portuaire, fait face à des défis environnementaux concrets : gestion inefficace des déchets, pollution, gaspillage d'eau et consommation énergétique élevée. L'objectif était de concevoir une solution IoT + Cloud intégrée, économique et adaptée aux collectivités locales.",
    objectives: [
      "Optimiser la consommation énergétique de l'éclairage public",
      "Automatiser la collecte des déchets selon le niveau de remplissage des bennes",
      "Surveiller en temps réel la qualité de l'air et de l'eau",
      "Gérer l'irrigation des espaces verts selon l'humidité du sol",
      "Centraliser la supervision dans un tableau de bord unique",
    ],
    features: [
      "Tableau de bord centralisé avec carte interactive et indicateurs temps réel",
      "Éclairage intelligent : détection jour/nuit + présence (économie de 25 % à 100 % selon le mouvement)",
      "Déchets connectés : capteurs à ultrasons (alerte à 80 % de remplissage) + optimisation des trajets de collecte",
      "Suivi de la qualité de l'eau : pH, turbidité, conductivité",
      "Suivi de la qualité de l'air : PM2.5, PM10, SO2, CO, MQ-135",
      "Irrigation intelligente basée sur l'humidité du sol et la température",
      "Gestion des chauffeurs par zone géographique",
      "Interface multi-rôles : administrateur et chauffeur",
      "Simulation IoT complète en temps réel (ESP32 + MQTT)",
      "Alertes automatiques et seuils paramétrables",
    ],
    tech: [
      'Python', 'Flask', 'IoT', 'MQTT', 'ESP32', 'MongoDB',
      'HTML/CSS', 'JavaScript', 'Bootstrap', 'Smart City',
    ],
    image: smartSafiCover,
    gallery: [
      smartSafiLogin,
      smartSafiDechets,
      smartSafiDechetsSud,
      smartSafiDechetsEst,
      smartSafiChauffeurs,
      smartSafiDechetsOuest,
      smartSafiEau,
      smartSafiAir,
      smartSafiIrrigation,
      smartSafiEclairageA,
      smartSafiEclairageB,
      smartSafiProfil,
      smartSafiChauffeur,
      smartSafiDechetsNord,
    ],
  },

  /* ============ 03 — BREASTCARE ============ */
  {
    id: 'breastcare',
    year: '2025',
    title: 'BreastCare',
    subtitle: "Analyse d'échographies mammaires",
    description:
      "Une application médicale qui aide les radiologues à détecter et segmenter les masses suspectes dans les échographies mammaires.",
    context:
      "Projet de fin de module en IA médicale. L'objectif était d'automatiser la détection précoce du cancer du sein en utilisant des réseaux de neurones profonds (ResNet + U-Net).",
    objectives: [
      "Détecter automatiquement les masses suspectes",
      "Segmenter précisément les contours des tumeurs",
      "Fournir un score de confiance au médecin",
      "Faciliter le suivi des patientes",
    ],
    features: [
      "Upload d'échographies avec prévisualisation",
      "Pipeline IA : ResNet pour la classification, U-Net pour la segmentation",
      "Interface médecin avec historique des analyses",
      "Export de rapports PDF",
    ],
    tech: ['React.js', 'Node.js', 'Flask', 'ResNet', 'U-Net', 'MongoDB'],
    image: breastCover,
    gallery: [
      breastLogIn,
      breastRegister,
      breastAnalysisEcho,
      breastAnalysis,
      breastResult,
      breastMalin,
    ],
  },

  /* ============ 04 — MEDEQUIP ============ */
  {
    id: 'medequip',
    year: '2025',
    title: 'MedEquip',
    subtitle: 'GMAO pour équipements biomédicaux',
    description:
      "Une plateforme de gestion de maintenance assistée par ordinateur pour le suivi et l'entretien des équipements biomédicaux hospitaliers.",
    context:
      "Projet académique en collaboration avec un contexte hospitalier. Il répond au besoin des services biomédicaux de tracer, planifier et anticiper la maintenance des appareils.",
    objectives: [
      "Centraliser l'inventaire des équipements",
      "Planifier les maintenances préventives",
      "Tracer les interventions curatives",
      "Générer des rapports et statistiques",
    ],
    features: [
      "Gestion complète du parc d'équipements",
      "Calendrier des maintenances avec alertes",
      "Historique des interventions par appareil",
      "Tableau de bord avec indicateurs clés",
    ],
    tech: ['React.js', 'Node.js', 'MySQL'],
    image: medequipCover,
    gallery: [
      medequipDashboard,
      medequipEquipe,
      medequipEquipements,
      medequipMaintenance,
      medequipRapport1,
      medequipRapport2,
      medequipRapport3,
    ],
  },

  /* ============ 05 — PRESENCE ENSA SAFI ============ */
  {
    id: 'presence-ensa',
    year: '2025',
    title: 'AgoraCampus',
    subtitle: 'Gestion automatique multi-rôles',
    description:
      "Une application web de gestion de présence pour l'ENSA Safi, utilisant QR code, NFC et reconnaissance faciale.",
    context:
      "Projet interne à l'ENSA Safi. L'objectif était de remplacer les feuilles de présence papier par un système automatisé, fiable et multi-rôles (étudiants, enseignants, administration).",
    objectives: [
      "Automatiser le pointage des étudiants",
      "Offrir aux enseignants un espace de gestion de cours",
      "Donner à l'administration une vue globale",
      "Éviter les fraudes grâce à la biométrie",
    ],
    features: [
      "Pointage par QR code (mobile)",
      "Pointage par NFC",
      "Reconnaissance faciale en temps réel",
      "Tableaux de bord par rôle (étudiant / enseignant / admin)",
    ],
    tech: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Scrum'],
    image: presenceDashboard,
    gallery: [
      presenceDashboard1,
      presenceEtudiants,
      presenceAjoutEnseigants,
      presenceEnseigants,
      presenceEmploi,
      presenceEmploi1,
      presenceEditEmploi,
      presenceDeleteEmploi,
      presenceAdmin,
    ],
  },

  /* ============ 06 — GESTION DES PFE ============ */
  {
    id: 'pfe',
    year: '2025',
    title: 'EduFlow',
    subtitle: "Recommandation & suivi de projets de fin d'études",
    description:
      "Une plateforme qui accompagne les étudiants et encadrants tout au long du cycle PFE, de la proposition de sujet à la soutenance.",
    context:
      "Projet académique à l'ENSA Safi. Le but était de digitaliser et simplifier la gestion des PFE, tout en apportant des fonctionnalités intelligentes (recommandation, plagiat).",
    objectives: [
      "Recommander des sujets adaptés au profil de l'étudiant",
      "Affecter automatiquement les encadrants",
      "Détecter les plagiats dans les rapports",
      "Suivre l'avancement via un Kanban",
    ],
    features: [
      "Moteur de recommandation de sujets",
      "Affectation automatique des encadrants",
      "Détection de plagiat",
      "Suivi Kanban du projet",
    ],
    tech: ['Laravel', 'Vue.js', 'MongoDB', 'APIs'],
    image: pfeCover,
    gallery: [
      pfeDashboard,
      pfeKanban,
      pfePdf,
      pfeListecahciers,
      pfeRecommendation,
      pferesultatsrecommadations,
    ],
  },
]

const englishProjectCopy: Record<string, ProjectCopy> = {
  fellah: {
    subtitle: 'All-in-one platform for farmers',
    description: 'An intelligent platform that helps farmers manage their crops using AI, IoT, and a voice assistant.',
    context: 'Academic project completed at ENSA Safi. The goal was to design a complete solution to digitize Morocco’s agricultural sector by combining yield prediction, monitoring, computer vision, and NLP.',
    objectives: [
      'Predict crop yields using historical data',
      'Monitor soil and air conditions in real time through IoT',
      'Automatically diagnose plant diseases',
      'Provide a voice assistant in Darija and French',
    ],
    features: [
      'Dashboard with forecasts and personalized recommendations',
      'IoT monitoring via MQTT (temperature, humidity, pH)',
      'CNN-based disease detection (MobileNetV2)',
      'Voice assistant using Llama 3.1, Whisper, and gTTS',
    ],
  },
  'smart-safi': {
    subtitle: 'Smart City platform for Safi',
    description: 'A connected urban platform that monitors street lighting, waste management, smart irrigation, and air and water quality in real time to support a sustainable city.',
    context: 'Academic project completed at ENSA Safi for the Smart City course. Safi faces practical environmental challenges, including inefficient waste management, pollution, water waste, and high energy consumption. The goal was to design an integrated, affordable IoT and cloud solution for local authorities.',
    objectives: [
      'Optimize street-lighting energy consumption',
      'Automate waste collection based on bin fill levels',
      'Monitor air and water quality in real time',
      'Manage green-space irrigation based on soil moisture',
      'Centralize monitoring in a single dashboard',
    ],
    features: [
      'Centralized dashboard with an interactive map and live indicators',
      'Smart lighting with day/night and presence detection',
      'Connected waste bins with fill alerts and optimized collection routes',
      'Water quality monitoring: pH, turbidity, and conductivity',
      'Air quality monitoring: PM2.5, PM10, SO2, CO, and MQ-135',
      'Smart irrigation based on soil moisture and temperature',
      'Driver management by geographic area',
      'Multi-role interfaces for administrators and drivers',
      'Real-time IoT simulation (ESP32 + MQTT)',
      'Automated alerts and configurable thresholds',
    ],
  },
  breastcare: {
    subtitle: 'Breast ultrasound analysis',
    description: 'A medical application that helps radiologists detect and segment suspicious masses in breast ultrasound images.',
    context: 'Medical AI module project. The goal was to automate early breast cancer detection using deep neural networks (ResNet + U-Net).',
    objectives: [
      'Automatically detect suspicious masses',
      'Precisely segment tumor boundaries',
      'Provide a confidence score to the physician',
      'Make patient follow-up easier',
    ],
    features: [
      'Upload and preview ultrasound images',
      'AI pipeline: ResNet classification and U-Net segmentation',
      'Physician interface with analysis history',
      'PDF report export',
    ],
  },
  medequip: {
    subtitle: 'CMMS for biomedical equipment',
    description: 'A computerized maintenance management platform for tracking and servicing hospital biomedical equipment.',
    context: 'Academic project based on a hospital setting. It addresses biomedical departments’ needs to track, schedule, and anticipate equipment maintenance.',
    objectives: [
      'Centralize equipment inventory',
      'Schedule preventive maintenance',
      'Track corrective maintenance work',
      'Generate reports and statistics',
    ],
    features: [
      'Complete equipment fleet management',
      'Maintenance calendar with alerts',
      'Service history for each device',
      'Dashboard with key indicators',
    ],
  },
  'presence-ensa': {
    subtitle: 'Automated multi-role attendance management',
    description: 'An attendance management web application for ENSA Safi using QR codes, NFC, and facial recognition.',
    context: 'An internal ENSA Safi project designed to replace paper attendance sheets with a reliable, automated system for students, teachers, and administrators.',
    objectives: [
      'Automate student attendance tracking',
      'Provide teachers with a course management area',
      'Give administrators an overview of attendance',
      'Prevent fraud using biometric verification',
    ],
    features: [
      'Attendance tracking by QR code on mobile',
      'NFC attendance tracking',
      'Real-time facial recognition',
      'Role-based dashboards for students, teachers, and administrators',
    ],
  },
  pfe: {
    subtitle: 'Final-year project recommendations & tracking',
    description: 'A platform that supports students and supervisors throughout the final-year project cycle, from topic proposal to defense.',
    context: 'Academic project at ENSA Safi. The goal was to digitize and simplify final-year project management while adding intelligent features such as recommendations and plagiarism detection.',
    objectives: [
      'Recommend topics suited to each student’s profile',
      'Automatically assign supervisors',
      'Detect plagiarism in reports',
      'Track progress with a Kanban board',
    ],
    features: [
      'Project topic recommendation engine',
      'Automatic supervisor assignment',
      'Plagiarism detection',
      'Kanban project tracking',
    ],
  },
}

export function getLocalizedProjects(language: 'fr' | 'en'): Project[] {
  if (language === 'fr') return projects

  return projects.map((project) => ({
    ...project,
    ...englishProjectCopy[project.id],
  }))
}