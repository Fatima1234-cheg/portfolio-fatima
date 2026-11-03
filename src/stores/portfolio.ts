import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  category: 'web' | 'mobile' | 'data' | 'ai'
  year: number
}

export interface Experience {
  id: number
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
  type: 'internship' | 'job' | 'freelance'
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'tools' | 'ai'
  icon: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  url?: string
  category: 'cloud' | 'data' | 'programming' | 'language'
}

export const usePortfolioStore = defineStore('portfolio', () => {
  // State
  const currentLanguage = ref<'fr' | 'en'>('fr')
  const isLoading = ref(true)

  // Getters
  const projects = computed<Project[]>(() => [
    {
      id: 1,
      title: currentLanguage.value === 'fr' ? 'Fellah' : 'Fellah',
      description: currentLanguage.value === 'fr' 
        ? 'Plateforme tout-en-un pour agriculteurs avec prédiction de rendement'
        : 'All-in-one platform for farmers with yield prediction',
      longDescription: currentLanguage.value === 'fr'
        ? 'Fellah est une plateforme complète dédiée aux agriculteurs, offrant des fonctionnalités avancées comme la prédiction de rendement agricole, le monitoring IoT, des recommandations personnalisées, le diagnostic de maladies des plantes et un assistant vocal intelligent.'
        : 'Fellah is a comprehensive platform dedicated to farmers, offering advanced features such as agricultural yield prediction, IoT monitoring, personalized recommendations, plant disease diagnosis, and an intelligent voice assistant.',
      image: '/projects/fellah.jpg',
      tags: ['Vue.js', 'Laravel', 'FastAPI', 'Random Forest', 'NLP', 'MySQL'],
      githubUrl: 'https://github.com/fatimachegdani/fellah',
      category: 'web',
      year: 2025
    },
    {
      id: 2,
      title: 'BreastCare',
      description: currentLanguage.value === 'fr'
        ? 'Analyse d\'échographies mammaires avec IA'
        : 'Breast ultrasound analysis with AI',
      longDescription: currentLanguage.value === 'fr'
        ? 'BreastCare utilise l\'intelligence artificielle pour la détection et la segmentation des masses suspectes sur les échographies mammaires. Le système repose sur un pipeline avancé basé sur ResNet et U-Net pour une précision optimale.'
        : 'BreastCare uses artificial intelligence for the detection and segmentation of suspicious masses on breast ultrasounds. The system relies on an advanced pipeline based on ResNet and U-Net for optimal accuracy.',
      image: '/projects/breastcare.jpg',
      tags: ['React.js', 'Node.js', 'Flask', 'ResNet', 'U-Net', 'MongoDB'],
      githubUrl: 'https://github.com/fatimachegdani/breastcare',
      category: 'ai',
      year: 2025
    },
    {
      id: 3,
      title: 'MedEquip',
      description: currentLanguage.value === 'fr'
        ? 'GMAO pour équipements biomédicaux'
        : 'CMMS for biomedical equipment',
      longDescription: currentLanguage.value === 'fr'
        ? 'MedEquip est une plateforme de Gestion de Maintenance Assistée par Ordinateur (GMAO) dédiée au suivi et à la gestion des équipements biomédicaux dans les établissements de santé.'
        : 'MedEquip is a Computerized Maintenance Management System (CMMS) dedicated to tracking and managing biomedical equipment in healthcare facilities.',
      image: '/projects/medequip.jpg',
      tags: ['React.js', 'Node.js', 'MySQL'],
      githubUrl: 'https://github.com/fatimachegdani/medequip',
      category: 'web',
      year: 2025
    },
    {
      id: 4,
      title: currentLanguage.value === 'fr' ? 'Présence ENSA' : 'ENSA Attendance',
      description: currentLanguage.value === 'fr'
        ? 'Gestion automatique de présence multi-rôles'
        : 'Multi-role automated attendance management',
      longDescription: currentLanguage.value === 'fr'
        ? 'Application web de gestion de présence utilisant le QR code, le NFC et la reconnaissance faciale. La plateforme offre des espaces dédiés pour les étudiants, les enseignants et les administrateurs.'
        : 'Web application for attendance management using QR code, NFC, and facial recognition. The platform offers dedicated spaces for students, teachers, and administrators.',
      image: '/projects/presence.jpg',
      tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API', 'Scrum'],
      githubUrl: 'https://github.com/fatimachegdani/presence-ensa',
      category: 'web',
      year: 2025
    },
    {
      id: 5,
      title: currentLanguage.value === 'fr' ? 'Gestion des PFE' : 'PFE Management',
      description: currentLanguage.value === 'fr'
        ? 'Recommandation et suivi de projets de fin d\'études'
        : 'Recommendation and tracking of end-of-study projects',
      longDescription: currentLanguage.value === 'fr'
        ? 'Plateforme intelligente qui recommande des sujets de PFE, affecte automatiquement les encadrants, détecte le plagiat et permet un suivi visuel via des tableaux Kanban.'
        : 'Intelligent platform that recommends PFE topics, automatically assigns supervisors, detects plagiarism, and enables visual tracking via Kanban boards.',
      image: '/projects/pfe.jpg',
      tags: ['Laravel', 'Vue.js', 'MongoDB', 'APIs'],
      githubUrl: 'https://github.com/fatimachegdani/gestion-pfe',
      category: 'web',
      year: 2025
    },
    {
      id: 6,
      title: 'IdeaToMarket',
      description: currentLanguage.value === 'fr'
        ? 'Application mobile pour entrepreneurs'
        : 'Mobile app for entrepreneurs',
      longDescription: currentLanguage.value === 'fr'
        ? 'Application mobile développée lors du stage chez ARIMAY pour accompagner les entrepreneurs dans la réalisation de leurs idées. L\'application offre des outils de gestion de projet et de business model.'
        : 'Mobile application developed during the internship at ARIMAY to support entrepreneurs in realizing their ideas. The app offers project management and business model tools.',
      image: '/projects/ideatomarket.jpg',
      tags: ['Flutter', 'Dart'],
      category: 'mobile',
      year: 2026
    }
  ])

  const experiences = computed<Experience[]>(() => [
    {
      id: 1,
      company: 'ARIMAY',
      position: currentLanguage.value === 'fr' ? 'Stagiaire Full Stack' : 'Full Stack Intern',
      location: 'France',
      startDate: '2026-07',
      endDate: '2026-10',
      description: currentLanguage.value === 'fr'
        ? 'Conception et développement d\'une application mobile pour la plateforme IdeaToMarket, qui accompagne les entrepreneurs à mettre leurs idées en réalité.'
        : 'Design and development of a mobile application for the IdeaToMarket platform, which helps entrepreneurs turn their ideas into reality.',
      technologies: ['Flutter', 'Dart', 'Test d\'intégration'],
      type: 'internship'
    },
    {
      id: 2,
      company: 'SRM-CS',
      position: currentLanguage.value === 'fr' ? 'Stagiaire Full Stack' : 'Full Stack Intern',
      location: 'El Jadida, Maroc',
      startDate: '2025-07',
      endDate: '2025-09',
      description: currentLanguage.value === 'fr'
        ? 'Développement de FIXO, application de gestion des réclamations clients intégrant un chatbot conversationnel.'
        : 'Development of FIXO, a customer complaint management application integrating a conversational chatbot.',
      technologies: ['React.js', 'Node.js', 'MongoDB'],
      type: 'internship'
    },
    {
      id: 3,
      company: 'OCP',
      position: currentLanguage.value === 'fr' ? 'Stagiaire Full Stack' : 'Full Stack Intern',
      location: 'El Jadida, Maroc',
      startDate: '2024-04',
      endDate: '2024-06',
      description: currentLanguage.value === 'fr'
        ? 'Développement de DIGIMINE, plateforme de gestion des tâches administratives.'
        : 'Development of DIGIMINE, an administrative task management platform.',
      technologies: ['Laravel', 'Bootstrap', 'Chart.js'],
      type: 'internship'
    }
  ])

  const skills = computed<Skill[]>(() => [
    // Frontend
    { name: 'Vue.js', level: 95, category: 'frontend', icon: 'vue' },
    { name: 'React', level: 90, category: 'frontend', icon: 'react' },
    { name: 'TypeScript', level: 88, category: 'frontend', icon: 'typescript' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: 'javascript' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: 'tailwind' },
    { name: 'HTML5/CSS3', level: 95, category: 'frontend', icon: 'html' },
    
    // Backend
    { name: 'Node.js', level: 88, category: 'backend', icon: 'nodejs' },
    { name: 'Laravel', level: 90, category: 'backend', icon: 'laravel' },
    { name: 'FastAPI', level: 85, category: 'backend', icon: 'fastapi' },
    { name: 'Flask', level: 82, category: 'backend', icon: 'flask' },
    { name: 'Python', level: 88, category: 'backend', icon: 'python' },
    { name: 'PHP', level: 85, category: 'backend', icon: 'php' },
    { name: 'Express', level: 87, category: 'backend', icon: 'express' },
    
    // Database
    { name: 'MongoDB', level: 88, category: 'database', icon: 'mongodb' },
    { name: 'MySQL', level: 90, category: 'database', icon: 'mysql' },
    { name: 'PostgreSQL', level: 85, category: 'database', icon: 'postgresql' },
    { name: 'Pandas', level: 82, category: 'database', icon: 'pandas' },
    
    // Mobile
    { name: 'Flutter', level: 88, category: 'mobile', icon: 'flutter' },
    { name: 'Dart', level: 85, category: 'mobile', icon: 'dart' },
    
    // AI
    { name: 'TensorFlow', level: 78, category: 'ai', icon: 'tensorflow' },
    
    // Tools
    { name: 'Git', level: 92, category: 'tools', icon: 'git' },
    { name: 'GitHub', level: 92, category: 'tools', icon: 'github' },
    { name: 'Docker', level: 82, category: 'tools', icon: 'docker' },
    { name: 'Figma', level: 85, category: 'tools', icon: 'figma' },
    { name: 'VS Code', level: 95, category: 'tools', icon: 'vscode' }
  ])

  const certifications = computed<Certification[]>(() => [
    {
      name: 'Oracle Cloud Infrastructure 2025 Foundations Associate',
      issuer: 'Oracle University',
      date: '2025',
      category: 'cloud'
    },
    {
      name: 'Machine Learning in Python',
      issuer: 'Online Certification',
      date: '2024',
      category: 'data'
    },
    {
      name: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'programming'
    },
    {
      name: 'Python Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'programming'
    }
  ])

  // Actions
  const setLanguage = (lang: 'fr' | 'en') => {
    currentLanguage.value = lang
    document.documentElement.lang = lang
  }

  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  return {
    // State
    currentLanguage,
    isLoading,
    
    // Getters
    projects,
    experiences,
    skills,
    certifications,
    
    // Actions
    setLanguage,
    setLoading
  }
})
