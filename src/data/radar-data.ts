export type Ring = 'adopt' | 'trial' | 'assess';
export type Category =
  | 'cloud'
  | 'communication'
  | 'collaborative'
  | 'wiki'
  | 'project'
  | 'ai'
  | 'cyber'
  | 'identity'
  | 'lowcode';

export interface RingMeta {
  id: Ring;
  label: string;
  color: string;
  description: string;
}

export interface CategoryMeta {
  id: Category;
  label: string;
}

export interface Blip {
  id: number;
  name: string;
  ring: Ring;
  category: Category;
  description: string;
  pov: string;
}

export interface RadarData {
  meta: {
    title: string;
    subtitle: string;
    date: string;
    rings: RingMeta[];
    categories: CategoryMeta[];
  };
  blips: Blip[];
}

const radarData: RadarData = {
  meta: {
    title: 'Radar Technologies Souveraines',
    subtitle: 'Le point de vue Theodo GovTech',
    date: 'Mai 2026',
    rings: [
      {
        id: 'adopt',
        label: 'Adopt',
        color: '#0F8B5F',
        description:
          'Nous recommandons la solution pour les projets du secteur public français.',
      },
      {
        id: 'trial',
        label: 'Trial',
        color: '#D4910F',
        description:
          "La pertinence dépend du contexte projet et du niveau d'exigence réglementaire.",
      },
      {
        id: 'assess',
        label: 'Assess',
        color: '#7C6CC4',
        description:
          "En cours d'évaluation — les premiers résultats sont prometteurs.",
      },
    ],
    categories: [
      { id: 'cloud', label: 'Cloud & Infrastructure' },
      { id: 'communication', label: 'Communication & Messagerie' },
      { id: 'collaborative', label: 'Suite Collaborative' },
      { id: 'wiki', label: 'Wiki & Documentation' },
      { id: 'project', label: 'Gestion de Projet' },
      { id: 'ai', label: 'IA & LLMs' },
      { id: 'cyber', label: 'Cybersécurité' },
      { id: 'identity', label: 'Identité & Signature' },
      { id: 'lowcode', label: 'Low-Code / No-Code' },
    ],
  },
  blips: [
    {
      id: 1,
      name: 'OVHcloud',
      ring: 'adopt',
      category: 'cloud',
      description:
        "Leader européen du cloud computing, fondé à Roubaix. IaaS/PaaS complet : Kubernetes managé, stockage objet, bases de données. Qualification SecNumCloud 3.1 obtenue, 3.2 en cours. Gouvernance européenne indépendante (famille Klaba). Conforme RGPD nativement, sans transfert de données hors UE.",
      pov: "Recommandation par défaut pour les projets du secteur public nécessitant un hébergement qualifié. L'offre Public Cloud est suffisamment mature pour la majorité des workloads web et data (Kubernetes, PostgreSQL managé, stockage S3). Le catalogue de services managés reste en retrait par rapport à AWS, ce qui implique parfois davantage d'ops — mais c'est un compromis acceptable pour la circulaire « Cloud au centre ». Notre expérience montre que les équipes s'adaptent vite avec une bonne IaC (Terraform).",
    },
    {
      id: 2,
      name: 'Outscale',
      ring: 'adopt',
      category: 'cloud',
      description:
        'Filiale de Dassault Systèmes. Qualifié SecNumCloud depuis 2019. API compatible AWS (EC2, S3). Brique d\'infrastructure sous-jacente de NumSpot et CollabNext (Jamespot).',
      pov: 'Solution solide pour les projets exigeant SecNumCloud effectif et prouvé. La compatibilité API AWS réduit la friction pour les équipes habituées à cet écosystème. Idéal pour données sensibles et DR diffusion restreinte. Catalogue de services plus restreint qu\'OVHcloud.',
    },
    {
      id: 3,
      name: 'Scalingo',
      ring: 'trial',
      category: 'cloud',
      description:
        'PaaS français basé à Strasbourg. Certifié ISO 27001, HDS et repose sur un socle SecNumCloud. Supporte Node.js, Python, Ruby, Go, PHP, Java + bases de données managées.',
      pov: "Alternative très crédible à Clever Cloud, avec l'avantage de la certification HDS pour les projets santé. L'approche PaaS convient parfaitement à nos projets — déploiement rapide, zéro gestion d'infra. Catalogue plus restreint qu'OVHcloud mais excellent choix pour des applications web classiques.",
    },
    {
      id: 4,
      name: 'Cloud Temple',
      ring: 'trial',
      category: 'cloud',
      description:
        'Opérateur de cloud souverain qualifié SecNumCloud, positionné sur les secteurs sensibles : santé, finance, industrie et sphère publique. Approche d\'accompagnement personnalisé.',
      pov: "Intéressant pour les projets publics nécessitant un accompagnement rapproché sur l'infrastructure souveraine. Pertinent pour les opérateurs de santé ou les collectivités. À évaluer en benchmark face à OVHcloud et Outscale.",
    },
    {
      id: 5,
      name: 'Scaleway',
      ring: 'trial',
      category: 'cloud',
      description:
        "Filiale cloud d'Iliad (Free). Catalogue large : Kubernetes managé, GPU cloud, inférence IA (Managed Inference). DX soignée, tarification agressive. ISO 27001, HDS. Pas SecNumCloud.",
      pov: "Excellente option pour les projets publics sans exigence SecNumCloud formelle — POC, plateformes open data, sites institutionnels. La DX est supérieure à OVHcloud, l'offre GPU/inférence IA est pertinente pour les expérimentations.",
    },
    {
      id: 6,
      name: 'Clever Cloud',
      ring: 'trial',
      category: 'cloud',
      description:
        'PaaS français basé à Nantes. Le développeur pousse son code, Clever Cloud gère le scaling, la sécurité, le monitoring. Certifié HDS et ISO 27001.',
      pov: "Très bon choix pour les projets applicatifs web de taille moyenne dans le public. L'approche PaaS réduit la charge d'exploitation — un vrai sujet dans les DSI publiques sous-dimensionnées en ops.",
    },
    {
      id: 7,
      name: 'Scality',
      ring: 'assess',
      category: 'cloud',
      description:
        'Éditeur français de stockage de données distribué. Leader mondial du stockage objet compatible S3 à très grande échelle. Cyber-résilient, dédié IA, datalakes et protection ransomware.',
      pov: 'Pertinent pour les projets impliquant de très gros volumes de données — archivage national, datalakes interministériels, stockage de données de santé. Cas d\'usage très spécifiques (pétaoctets, cloud privé).',
    },
    {
      id: 8,
      name: 'NumSpot',
      ring: 'assess',
      category: 'cloud',
      description:
        'Cloud souverain porté par Docaposte, Dassault Systèmes, Bouygues Telecom et Banque des Territoires. Vise SecNumCloud, combine l\'infrastructure Outscale avec des services PaaS enrichis.',
      pov: 'Acteur à surveiller de très près. Le consortium envoie un signal fort de pérennité et d\'ancrage institutionnel. Offre encore jeune mais alignement stratégique GovTech excellent.',
    },
    {
      id: 9,
      name: 'S3NS',
      ring: 'assess',
      category: 'cloud',
      description:
        'Coentreprise Thales × Google Cloud. Propose les services GCP (BigQuery, Vertex AI, GKE) opérés par Thales en France. Vise SecNumCloud 3.2.',
      pov: "Promesse ambitieuse : la puissance de GCP dans un cadre SecNumCloud. Calendrier de qualification incertain. On recommande de concevoir les architectures de manière cloud-portable pour pouvoir basculer le moment venu.",
    },
    {
      id: 10,
      name: 'Bleu',
      ring: 'assess',
      category: 'cloud',
      description:
        "Coentreprise Orange × Capgemini × Microsoft. Propose Azure et M365 dans un cadre SecNumCloud. Qualification en cours.",
      pov: "Répond à un besoin réel : les administrations utilisent massivement Microsoft. La qualification n'est pas encore obtenue. Pour les applicatifs métier, on oriente vers des socles cloud déjà qualifiés.",
    },
    {
      id: 11,
      name: 'Olvid',
      ring: 'adopt',
      category: 'communication',
      description:
        "Messagerie instantanée française avec chiffrement E2E décentralisé (aucun annuaire centralisé). Certifiée CSPN par l'ANSSI. Circulaire de décembre 2023 imposant son adoption au gouvernement.",
      pov: "Référence pour la messagerie sécurisée dans le secteur public. Préconisée systématiquement dans nos PAS. Pour les communications sensibles (COPIL, RSSI, projets classifiés), recommandation incontournable.",
    },
    {
      id: 12,
      name: 'Tchap',
      ring: 'adopt',
      category: 'communication',
      description:
        "Messagerie de l'État basée sur Matrix/Element. Accessible à tous les agents publics (.gouv.fr). Messagerie texte, partage de fichiers, salons de discussion. Hébergement sur l'infrastructure de l'État.",
      pov: "Le « Slack du public » par défaut. Effet réseau massif : tout agent public peut y accéder. Canal de communication projet systématique avec nos interlocuteurs dans les administrations.",
    },
    {
      id: 13,
      name: 'Tixeo',
      ring: 'adopt',
      category: 'communication',
      description:
        'Visioconférence sécurisée qualifiée ANSSI (CSPN). Seule solution de visio qualifiée en Europe. Chiffrement E2E réel, y compris en réunion multipartite. Utilisée par les ministères et OIV.',
      pov: 'Recommandation pour la visioconférence dans les contextes à forte exigence de sécurité. Mentionné systématiquement dans nos PAS et mémoires techniques.',
    },
    {
      id: 14,
      name: 'BlueMind',
      ring: 'trial',
      category: 'communication',
      description:
        'Messagerie collaborative française, nativement compatible Outlook. Alternative à MS Exchange et 365. Disponible en messagerie principale ou en solution de gestion de crise.',
      pov: "Atout stratégique : la compatibilité Outlook lève le principal frein à l'abandon d'Exchange. Pour le cas d'usage « messagerie + calendrier souverain », c'est notre première recommandation.",
    },
    {
      id: 15,
      name: 'Pexip',
      ring: 'trial',
      category: 'communication',
      description:
        'Visioconférence européenne (Norvège). Déploiement on-premise ou cloud privé. Forte interopérabilité (SIP, H.323). Conformité NIS2, RGPD. Utilisé par des gouvernements européens.',
      pov: 'Alternative européenne à Tixeo avec un spectre fonctionnel plus large (interopérabilité forte avec les systèmes de visio hérités). Tixeo reste la référence ANSSI pour la sécurité maximale.',
    },
    {
      id: 16,
      name: 'Element / Matrix',
      ring: 'trial',
      category: 'communication',
      description:
        "Client de référence du protocole Matrix, standard ouvert de communication décentralisée et chiffrée. Adopté par la France (Tchap), l'Allemagne (Bundeswehr), le Luxembourg.",
      pov: "Socle protocolaire de Tchap. Pour les projets nécessitant une messagerie dédiée (plateforme métier avec chat intégré), on recommande Matrix. L'approche fédérée est un atout pour les projets interministériels.",
    },
    {
      id: 17,
      name: 'Jitsi',
      ring: 'trial',
      category: 'communication',
      description:
        "Visioconférence open source créée par un développeur français. Zéro installation, auto-hébergeable. Moteur derrière la Webconf de l'État et la brique visio de CollabNext.",
      pov: "Choix pragmatique pour la visio sans exigence ANSSI formelle. Open source, auto-hébergeable, zéro friction utilisateur. Limite : qualité à grande échelle et absence de certification ANSSI.",
    },
    {
      id: 18,
      name: 'La Suite Numérique',
      ring: 'adopt',
      category: 'collaborative',
      description:
        'Programme DINUM : Tchap + Webconf + France Transfert + Resana + webmail. Alternative souveraine à Google Workspace / M365. Hébergée sur infrastructure de l\'État.',
      pov: "Socle de référence pour l'environnement de travail de l'agent public. L'enjeu pour nous : l'intégration (AgentConnect, APIs, notifications Tchap). Un investissement de long terme à encourager.",
    },
    {
      id: 19,
      name: 'Jamespot / CollabNext',
      ring: 'trial',
      category: 'collaborative',
      description:
        'Digital Workplace souveraine issue de France 2030. Hébergée sur Outscale SecNumCloud. Intranet collaboratif, 100+ applications, suite bureautique (OnlyOffice), visio (Jitsi), IA Gen (Mistral, LightOn).',
      pov: "Initiative la plus ambitieuse côté Digital Workplace souveraine. La combinaison France 2030 + Outscale SecNumCloud + IA souveraine est très cohérente. L'intégration IA est un point fort différenciant vs M365.",
    },
    {
      id: 20,
      name: 'Jalios',
      ring: 'trial',
      category: 'collaborative',
      description:
        'Leader français de Digital Workplace. Jalios Open Suite : intranet collaboratif, réseau social d\'entreprise, GED, workflows métier, intégration IA. Interopérable et souverain.',
      pov: 'Alternative mature à Jamespot pour les projets d\'intranet et de Digital Workplace dans le secteur public. Bien adapté aux administrations voulant un portail agent avec GED et workflows intégrés.',
    },
    {
      id: 21,
      name: 'CryptPad',
      ring: 'trial',
      category: 'collaborative',
      description:
        'Suite collaborative chiffrée E2E zero-knowledge, développée par XWiki SAS à Paris. Documents, tableurs, présentations, Kanban, code. Open source (AGPL), soutenu par NGI et BPI.',
      pov: "Pépite française pour l'édition collaborative sécurisée. Recommandé pour les contextes où la confidentialité est critique. Chiffrement zero-knowledge = argument massif. UX en retrait par rapport à Google Docs.",
    },
    {
      id: 22,
      name: 'Whaller',
      ring: 'trial',
      category: 'collaborative',
      description:
        "Réseau social d'entreprise français avec espaces cloisonnés (« sphères »). Whaller DONJON = première plateforme collaborative qualifiée SecNumCloud. Utilisé par le Ministère des Armées.",
      pov: "Pertinent pour les organisations publiques nécessitant le cloisonnement des échanges avec garantie de souveraineté. La qualification SecNumCloud de DONJON est un atout unique.",
    },
    {
      id: 23,
      name: 'Twake (Linagora)',
      ring: 'assess',
      category: 'collaborative',
      description:
        "Plateforme collaborative open source : messagerie d'équipe, visio, édition collaborative, calendrier, stockage. Positionnée comme alternative souveraine à Teams, avec IA intégrée.",
      pov: "Ambition séduisante (Teams souverain + open source + IA) mais maturité encore en progression. Concurrence avec La Suite Numérique et CollabNext crée une zone de flou.",
    },
    {
      id: 24,
      name: 'XWiki',
      ring: 'adopt',
      category: 'wiki',
      description:
        "Wiki d'entreprise open source développé à Paris. 20 ans d'existence, 900+ extensions. Utilisé par administrations françaises, grands groupes et organisations internationales.",
      pov: "Recommandation pour les bases de connaissances dans le public. Français, mature, open source, on-premise. Alternative idéale à Confluence pour la souveraineté et le coût.",
    },
    {
      id: 25,
      name: 'Lutece',
      ring: 'trial',
      category: 'wiki',
      description:
        "Framework CMS et portail open source de la Ville de Paris depuis 2002. Propulse Paris.fr et les démarches en ligne. FranceConnect natif, workflows de démarches, licence BSD.",
      pov: "Commun numérique intéressant pour les portails de démarches des collectivités. Écosystème hors Paris restreint, stack Java/Spring potentiellement un frein pour les équipes JS.",
    },
    {
      id: 26,
      name: 'GLPI (Teclib)',
      ring: 'adopt',
      category: 'wiki',
      description:
        "ITSM et gestion de parc open source français. Standard de fait dans les DSI publiques (ministères, collectivités, hôpitaux). Conforme ITIL, intégration LDAP/AD.",
      pov: "Exemplaire de la souveraineté numérique réussie : open source français, dominant son segment. Élément clé du SI public avec lequel nos applications doivent s'intégrer.",
    },
    {
      id: 27,
      name: 'Tuleap (Enalean)',
      ring: 'trial',
      category: 'project',
      description:
        "Plateforme ALM open source développée à Grenoble. Gestion de projet agile, suivi de bugs, Git intégré, CI, tests. Alternative souveraine à Jira + Confluence + GitLab.",
      pov: "Pertinent pour les projets nécessitant un outil souverain de gestion de code et de projet — défense, SI sensibles. UX en retrait par rapport à Jira/Linear.",
    },
    {
      id: 28,
      name: 'OpenProject',
      ring: 'trial',
      category: 'project',
      description:
        'Gestion de projet open source (allemand). Gantt + Agile boards. Conforme RGPD, hébergement UE. Bon hybride cycle en V / agile pour le secteur public.',
      pov: "Recommandation quand un client public a besoin d'un outil souverain avec forte composante planification/Gantt. Excellent pour la MOA/AMOA, moins adapté pour le delivery technique pur.",
    },
    {
      id: 29,
      name: 'Resana (InterStis)',
      ring: 'trial',
      category: 'project',
      description:
        "Plateforme collaborative de l'État (DINUM). Partage documentaire, gestion de projets, salons. Massivement déployée pendant le COVID. InterStis a aussi lancé Hexagone.",
      pov: "Écosystème standard de l'agent public. Utilisé dans nos interactions projet avec les administrations. UX en dessous de Notion/Google Drive, mais pertinent dans l'écosystème existant.",
    },
    {
      id: 30,
      name: 'Mistral AI',
      ring: 'adopt',
      category: 'ai',
      description:
        "Startup française d'IA Gen. Modèles : Small, Medium, Large, Codestral (code), Pixtral (multimodal). Disponible via API, en open source et sur cloud souverain. Basée à Paris.",
      pov: "Recommandation par défaut pour l'IA Gen dans le secteur public français. Modèles performants en français, déployables on-premise. Utilisé pour RAG, synthèse, aide à la rédaction, classification. Argument commercial fort dans les AO.",
    },
    {
      id: 31,
      name: 'Albert (DINUM)',
      ring: 'trial',
      category: 'ai',
      description:
        "LLM de l'État, fine-tuné sur des corpus administratifs français, déployé sur l'infrastructure souveraine. API accessible aux administrations. Hébergement régalien strict.",
      pov: "Brique IA par défaut quand le contexte exige un hébergement régalien strict. Performances inférieures à Mistral Large sur les tâches complexes, mais adapté pour FAQ, classification, pré-remplissage.",
    },
    {
      id: 32,
      name: 'ILLUIN / nAIxt',
      ring: 'trial',
      category: 'ai',
      description:
        "Entreprise française d'IA. Plateforme nAIxt pour déployer des solutions d'IA Gen souveraines à l'échelle dans les grandes organisations. Focus mise en production (au-delà du POC).",
      pov: "Intéressant pour les grandes administrations qui veulent passer de l'expérimentation IA au déploiement en production. À évaluer face à LightOn Paradigm et Prisme.ai.",
    },
    {
      id: 33,
      name: 'Prisme.ai',
      ring: 'trial',
      category: 'ai',
      description:
        "Plateforme française d'orchestration d'agents IA souverains. Créer, connecter, exposer et gouverner des agents IA sur l'infrastructure et le LLM de son choix.",
      pov: "Adresse un besoin émergent et stratégique : l'orchestration d'agents IA souverains. Bien positionné pour les flottes d'agents spécialisés dans le public. Marché naissant mais prometteur.",
    },
    {
      id: 34,
      name: 'Hugging Face',
      ring: 'trial',
      category: 'ai',
      description:
        "Plateforme de référence mondiale pour le ML open source. Fondée à Paris. Hub avec 500K+ modèles. Siège à New York, forte empreinte française.",
      pov: "Incontournable dans notre stack IA (hub de modèles, tokenizers, pipelines). Le « Trial » s'explique par la dépendance à une infra US. Pour les projets sensibles, on télécharge et opère on-premise.",
    },
    {
      id: 35,
      name: 'Dataiku',
      ring: 'trial',
      category: 'ai',
      description:
        "Plateforme française d'IA et data science (DSS). Interface visuelle + code. Data prep, feature engineering, training, MLOps. Utilisée par BPI France et Ministère des Armées.",
      pov: "Option solide pour industrialiser la démarche data/ML avec une plateforme intégrée. Licence coûteuse (frein budgets publics). Pour nos projets en mode build, notre stack Python/MLflow/dbt est souvent plus adaptée.",
    },
    {
      id: 36,
      name: 'Sinequa',
      ring: 'assess',
      category: 'ai',
      description:
        "Éditeur français de recherche augmentée par l'IA (search & analytics). Recherche sémantique + NLP + IA Gen sur données non structurées. Finance, santé, secteur public.",
      pov: "Pertinent pour la gestion documentaire intelligente dans les grandes administrations. Pour la majorité de nos projets, nous construisons notre propre pipeline RAG, mais Sinequa convient aux très gros volumes documentaires.",
    },
    {
      id: 37,
      name: 'LightOn',
      ring: 'assess',
      category: 'ai',
      description:
        "Entreprise française d'IA proposant Paradigm, plateforme d'IA Gen enterprise. Fine-tuning, RAG, orchestration intégrés. Partenaire de Jamespot pour l'IA dans CollabNext (modèle Alfred).",
      pov: "Option intéressante pour une plateforme d'IA managée sans hyperscalers US. L'intégration dans CollabNext montre une dynamique d'écosystème souverain prometteuse.",
    },
    {
      id: 38,
      name: 'Kyutai',
      ring: 'assess',
      category: 'ai',
      description:
        "Labo de recherche IA fondé par Xavier Niel (300M€). Engagement open science. Modèle phare : Moshi (IA conversationnelle vocale temps réel). Collaboration INRIA/ENS.",
      pov: "Signal fort pour la souveraineté de la recherche IA. Perspectives concrètes pour le public : agents vocaux, transcription, accessibilité. Encore des briques de recherche, pas des produits déployables.",
    },
    {
      id: 39,
      name: 'Linto (Linagora)',
      ring: 'assess',
      category: 'ai',
      description:
        "Plateforme d'IA vocale open source. Speech-to-text, text-to-speech, NLU, orchestration de dialogues. Déployable on-premise. Transcription de réunions, commande vocale.",
      pov: "Brique française de référence pour l'IA vocale souveraine. Qualité de transcription en progrès mais en deçà de Whisper. Point de départ naturel pour un POC de transcription souveraine.",
    },
    {
      id: 40,
      name: 'HarfangLab',
      ring: 'adopt',
      category: 'cyber',
      description:
        "Premier EDR européen qualifié ANSSI. Détection comportementale, threat hunting, réponse automatisée. On-premise ou SaaS souverain. Ministères, OIV, défense.",
      pov: "Recommandation EDR pour le secteur public. La qualification ANSSI est décisive dans les AO. Mentionné systématiquement dans nos PAS et architectures de sécurité.",
    },
    {
      id: 41,
      name: 'Sekoia.io',
      ring: 'adopt',
      category: 'cyber',
      description:
        "Plateforme française XDR + CTI. Détection, investigation, réponse automatisée, renseignement sur les menaces. Cloud-native, hébergée en France (OVHcloud).",
      pov: "Acteur majeur pour la couche détection/réponse. CTI intégrée = vision contextuelle des menaces ciblant le public français. Dans notre shortlist sécurité.",
    },
    {
      id: 42,
      name: 'Stormshield',
      ring: 'adopt',
      category: 'cyber',
      description:
        "Filiale d'Airbus. Firewalls qualifiés ANSSI (standard et renforcé), protection des postes, chiffrement. Utilisé dans les réseaux classifiés. Marchés interministériels.",
      pov: "Incontournable de l'infrastructure réseau souveraine. Présent chez la plupart de nos clients publics. Choix par défaut quand la qualification ANSSI réseau est requise.",
    },
    {
      id: 43,
      name: 'Wallix',
      ring: 'trial',
      category: 'cyber',
      description:
        "Éditeur français de PAM (Privileged Access Management). Wallix Bastion : contrôle, traçabilité et audit des accès admin. Qualifié ANSSI (CSPN). Coté en bourse.",
      pov: "Pertinent pour les plateformes critiques, SI de santé, infrastructures multi-acteurs. Intégré dans nos recommandations de sécurité pour les architectures from scratch.",
    },
    {
      id: 44,
      name: 'CrowdSec',
      ring: 'trial',
      category: 'cyber',
      description:
        "Sécurité collaborative open source (« Waze de la cybersécurité »). Détection comportementale + partage communautaire d'IP malveillantes. WAF, IPS, bouncers Nginx/HAProxy/Traefik.",
      pov: "Excellent outil dans nos stacks de déploiement pour les applications publiques exposées. Open source, français, léger. Très bon rapport protection/effort en complément du WAF classique.",
    },
    {
      id: 45,
      name: 'GitGuardian',
      ring: 'trial',
      category: 'cyber',
      description:
        "Détection de secrets dans le code source. Scanne les dépôts Git en temps réel (clés API, mots de passe, tokens). 10M+ secrets détectés sur GitHub public en 2023.",
      pov: "Intégré dans nos pipelines CI de tous les projets. Détection de secrets = risque réel. Éditeur français = bonus pour la souveraineté (scans touchant au code source).",
    },
    {
      id: 46,
      name: 'Tanker (Docaposte)',
      ring: 'assess',
      category: 'cyber',
      description:
        "SDK de chiffrement E2E côté client, intégrable dans des applications existantes. Zero-knowledge : même l'opérateur ne peut lire les données.",
      pov: "Brique intéressante pour les projets nécessitant du chiffrement E2E sans reconstruire l'application. SI de santé, RH, communication sensible. Intégration exige réflexion architecturale sérieuse.",
    },
    {
      id: 47,
      name: 'France Identité',
      ring: 'adopt',
      category: 'identity',
      description:
        "Programme national d'identité numérique (ANTS). Vérification d'identité à distance via la CNIe, signature qualifiée, et portefeuille d'identité numérique européen (EUDI Wallet / eIDAS 2).",
      pov: "Brique fondamentale de l'écosystème numérique public. Intégrée dans la quasi-totalité de nos projets de services numériques citoyens. Le niveau « substantiel » débloque des cas d'usage impossibles avec FranceConnect simple.",
    },
    {
      id: 48,
      name: 'Docaposte',
      ring: 'adopt',
      category: 'identity',
      description:
        "Tiers de confiance majeur : identité numérique, signature électronique (simple, avancée, qualifiée), archivage à valeur probante (Digiposte), envoi recommandé électronique, hébergement HDS.",
      pov: "Partenaire naturel de l'écosystème GovTech. On s'interface avec Docaposte pour la signature électronique dans les parcours de démarches. Pour la signature qualifiée, Docaposte est notre première recommandation.",
    },
    {
      id: 49,
      name: 'Yousign',
      ring: 'trial',
      category: 'identity',
      description:
        "Éditeur français de signature électronique (Caen). API RESTful moderne, UX parmi les meilleures du marché. Données hébergées en France (OVHcloud), certifié eIDAS.",
      pov: "Notre préférence quand un projet nécessite une intégration de signature avec une API moderne et une DX excellente. Intégration en quelques jours. Pour la signature qualifiée au sens strict, Docaposte reste la référence.",
    },
    {
      id: 50,
      name: 'Archipels',
      ring: 'assess',
      category: 'identity',
      description:
        "Wallet d'identité numérique pour entreprises et individus (verifiable credentials / blockchain). Partage de preuves vérifiables sans exposer les données sous-jacentes.",
      pov: "Besoin émergent avec eIDAS 2 et le portefeuille d'identité européen (EUDI Wallet). Fort potentiel dans le public : inscription scolaire, prestations sociales. Adoption précoce. Axe stratégique à surveiller.",
    },
    {
      id: 51,
      name: 'Convertigo',
      ring: 'trial',
      category: 'lowcode',
      description:
        "Plateforme Low-Code / No-Code open source française. Applications web et mobiles souveraines. Auto-hébergeable. Connecteurs enterprise (ERP, CRM, legacy) + IA.",
      pov: "Pertinent pour accélérer la livraison d'applications métier simples (formulaires, workflows) sans dépendance à Power Apps (Microsoft). Open source et auto-hébergeable = forte demande dans le public.",
    },
    {
      id: 52,
      name: 'Ksaar',
      ring: 'assess',
      category: 'lowcode',
      description:
        "Plateforme no-code 100% française. Applications sur mesure avec interface intuitive et hébergement souverain.",
      pov: "À évaluer dans le contexte du « citizen dev » dans les administrations. Marché encore fragmenté, retours dans le public limités. À surveiller en parallèle de Convertigo et TimeTonic.",
    },
    {
      id: 53,
      name: 'TimeTonic',
      ring: 'assess',
      category: 'lowcode',
      description:
        "Plateforme française Data + No-Code + IA. Clients publics : AP-HP, GRDF, ENGIE, Air France, Région Occitanie. Gestion de données et workflows sans code.",
      pov: "Acteur no-code souverain ayant le plus de références dans le public (AP-HP, Région Occitanie). La combinaison Data + No-Code + IA est alignée avec les besoins de digitalisation des processus métier.",
    },
  ],
};

export default radarData;
