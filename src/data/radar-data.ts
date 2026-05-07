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
        "Leader européen de l'hébergement et du cloud computing, fondé à Roubaix en 1999. Gamme complète d'IaaS et PaaS : serveurs dédiés, cloud public (instances, stockage objet, Kubernetes managé), cloud privé (VMware on OVHcloud) et services managés (bases de données, registres de conteneurs). Seul hyperscaler européen avec une présence mondiale significative (plus de 40 datacenters). Qualification SecNumCloud 3.1 obtenue pour plusieurs offres, processus 3.2 en cours. Coté à Euronext Paris, capital majoritairement détenu par la famille Klaba — gouvernance européenne indépendante.",
      pov: "Recommandation par défaut pour les projets du secteur public nécessitant un hébergement qualifié ou en passe de l'être. L'offre Public Cloud est suffisamment mature pour la majorité des workloads web et data que nous déployons (Kubernetes, PostgreSQL managé, stockage S3). Le catalogue de services managés reste en retrait par rapport à AWS, ce qui implique parfois davantage d'ops — mais c'est un compromis acceptable pour répondre aux exigences de la circulaire « Cloud au centre ». Notre expérience montre que les équipes projet s'adaptent vite, surtout avec une bonne infrastructure-as-code (Terraform avec le provider OVH).",
    },
    {
      id: 2,
      name: 'Outscale',
      ring: 'adopt',
      category: 'cloud',
      description:
        "Filiale de Dassault Systèmes, qualifié SecNumCloud depuis 2019 — l'un des tout premiers à obtenir cette qualification. IaaS complet (machines virtuelles, stockage bloc et objet, réseau) avec une API compatible AWS (EC2, S3), facilitant les migrations depuis l'écosystème Amazon. Opère ses propres datacenters en France. Brique d'infrastructure sous-jacente du projet CollabNext (Jamespot) et de NumSpot. Certains outils Terraform fonctionnent avec des adaptations mineures.",
      pov: "Solution solide pour les projets nécessitant une qualification SecNumCloud effective et prouvée — argument de poids dans les réponses aux appels d'offres exigeant un hébergement qualifié. La compatibilité API AWS réduit la friction pour les équipes techniques. On le recommande particulièrement pour les projets de ministères ou opérateurs avec des exigences de sécurité élevées (données sensibles, DR diffusion restreinte). La limite est sur l'étendue du catalogue : pour des architectures applicatives complexes, il faut prévoir plus de « build » et moins de « buy » côté services managés.",
    },
    {
      id: 3,
      name: 'Scalingo',
      ring: 'trial',
      category: 'cloud',
      description:
        "PaaS français basé à Strasbourg, conçu pour simplifier le déploiement et l'exploitation d'applications web. Supporte les principaux langages et frameworks (Node.js, Python, Ruby, Go, PHP, Java) et propose des bases de données managées (PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch). Certifié ISO 27001, HDS (Hébergeur de Données de Santé) et repose sur un socle SecNumCloud. Se présente comme « la plateforme 100 % souveraine préférée par les développeurs ».",
      pov: "Alternative très crédible à Clever Cloud pour les projets du secteur public, avec un avantage : la certification HDS le rend directement éligible pour les projets santé (hôpitaux, ARS, plateformes de télémédecine). L'approche PaaS pure convient parfaitement aux projets que nous accompagnons — déploiement rapide, zéro gestion d'infrastructure, focus sur le code métier. Le catalogue de services est plus restreint qu'OVHcloud (pas de Kubernetes managé, pas de stockage objet), mais pour des applications web classiques (API + front + BDD), c'est un excellent choix. La DX est très soignée.",
    },
    {
      id: 4,
      name: 'Cloud Temple',
      ring: 'trial',
      category: 'cloud',
      description:
        "Opérateur de cloud souverain français qualifié SecNumCloud, positionné sur les secteurs sensibles : santé, finance, industrie et sphère publique. Services IaaS et PaaS sécurisés (compute, stockage, réseau, backup) avec un engagement fort sur la cyber-résilience et la conformité réglementaire. Se différencie par une approche de proximité et d'accompagnement personnalisé, à mi-chemin entre l'hyperscaler et l'infogérance dédiée.",
      pov: "Acteur intéressant pour les projets publics nécessitant un accompagnement rapproché sur l'infrastructure souveraine, ce qui est souvent le cas dans les DSI publiques ne disposant pas d'équipes cloud internes étoffées. Notre expérience directe avec Cloud Temple est encore limitée, mais le positionnement SecNumCloud + secteur public + approche accompagnée le rend pertinent pour les projets des opérateurs de santé ou des collectivités. À évaluer en benchmark face à OVHcloud et Outscale selon le contexte.",
    },
    {
      id: 5,
      name: 'Scaleway',
      ring: 'trial',
      category: 'cloud',
      description:
        "Filiale cloud du groupe Iliad (Free). Catalogue large : instances compute, Kubernetes managé (Kapsule/Kosmos), bases de données managées, stockage objet S3-compatible, GPU cloud (H100), fonctions serverless et services d'IA (Managed Inference). Datacenters en France et aux Pays-Bas. Se distingue par une DX soignée, une politique tarifaire agressive et une bonne rapidité d'adoption des technologies récentes.",
      pov: "Excellente option pour les projets publics qui n'exigent pas formellement SecNumCloud — typiquement les POC, les plateformes open data, les sites institutionnels ou les projets des collectivités territoriales. La DX est supérieure à OVHcloud, le Kubernetes managé est mature, et l'offre GPU/inférence IA est pertinente pour les expérimentations d'IA dans le public. L'absence de qualification SecNumCloud le disqualifie pour les projets sensibles ou relevant de la circulaire « Cloud au centre » au sens strict.",
    },
    {
      id: 6,
      name: 'Clever Cloud',
      ring: 'trial',
      category: 'cloud',
      description:
        "PaaS français basé à Nantes qui simplifie le déploiement d'applications web. Le développeur pousse son code, Clever Cloud gère le scaling, les mises à jour de sécurité, le monitoring et les bases de données. Infrastructure hébergée en France. Certifié HDS et ISO 27001. Catalogue plus large que Scalingo (add-ons, langages supportés).",
      pov: "Très bon choix pour les projets applicatifs web du secteur public de taille moyenne. L'approche PaaS permet de réduire considérablement la charge d'exploitation, ce qui est un vrai sujet dans les DSI publiques sous-dimensionnées en ops. On le recommande quand le projet ne nécessite pas SecNumCloud et que l'équipe souhaite se concentrer sur le code métier plutôt que sur l'infra. Face à Scalingo, Clever Cloud offre un catalogue plus large mais Scalingo a l'avantage de la certification HDS native.",
    },
    {
      id: 7,
      name: 'Scality',
      ring: 'assess',
      category: 'cloud',
      description:
        "Éditeur français de logiciel de stockage de données distribué, reconnu comme l'un des leaders mondiaux du stockage objet compatible S3 à très grande échelle. Le logiciel RING permet de construire des infrastructures de stockage cyber-résilientes pour le cloud privé, les datalakes, l'IA et la protection contre les ransomwares. Utilisé par des opérateurs télécoms, des administrations et des laboratoires de recherche pour gérer des pétaoctets de données.",
      pov: "Pertinent pour les projets publics impliquant de très gros volumes de données — archivage national, datalakes interministériels, stockage de données de santé, sauvegarde cyber-résiliente. Ce n'est pas un outil que nous intégrons directement dans notre stack applicative, mais c'est une brique d'infrastructure à connaître quand on conçoit des architectures data souveraines à grande échelle. Cas d'usage très spécifiques (pétaoctets, cloud privé) qui ne correspondent pas à la majorité de nos projets.",
    },
    {
      id: 8,
      name: 'NumSpot',
      ring: 'assess',
      category: 'cloud',
      description:
        "Cloud souverain français lancé en 2023, porté par un consortium composé de Docaposte (La Poste), Dassault Systèmes, Bouygues Telecom et la Banque des Territoires (Caisse des Dépôts). Vise la qualification SecNumCloud, combinant l'infrastructure d'Outscale avec une couche de services PaaS enrichie et un accompagnement dédié aux acteurs publics. Se positionne explicitement sur le marché des administrations, collectivités et opérateurs de services essentiels.",
      pov: "Acteur à surveiller de très près. Le consortium qui le porte envoie un signal fort de pérennité et d'ancrage institutionnel. Pour les projets que nous accompagnons dans le secteur public, NumSpot pourrait devenir un choix naturel une fois le catalogue stabilisé et la qualification SecNumCloud 3.2 obtenue. Offre encore jeune, mais l'alignement stratégique avec les besoins GovTech est excellent. On recommande de l'inclure dans les benchmarks d'hébergement pour les nouveaux projets.",
    },
    {
      id: 9,
      name: 'S3NS',
      ring: 'assess',
      category: 'cloud',
      description:
        "Coentreprise entre Thales et Google Cloud, créée en 2022. Propose les services Google Cloud Platform (BigQuery, Vertex AI, GKE, etc.) depuis des datacenters français, opérés par Thales, avec une architecture garantissant l'immunité aux lois extraterritoriales américaines (FISA, Cloud Act). Vise la qualification SecNumCloud 3.2. Intérêt principal : rendre accessible le catalogue très riche de GCP dans un cadre juridique souverain.",
      pov: "Promesse la plus ambitieuse du marché : accéder à la puissance de GCP (BigQuery, Vertex AI, Cloud Run) dans un cadre SecNumCloud. Si la qualification aboutit, cela change la donne pour les projets data et IA du secteur public. Le calendrier de qualification a déjà glissé, et la dépendance technologique à Google pose des questions de long terme. Notre recommandation est de concevoir les architectures de manière « cloud-portable » (containers, IaC, standards ouverts) pour pouvoir basculer vers S3NS le jour où la qualification sera effective.",
    },
    {
      id: 10,
      name: 'Bleu',
      ring: 'assess',
      category: 'cloud',
      description:
        "Coentreprise entre Orange et Capgemini, visant à proposer Microsoft Azure et Microsoft 365 dans un cadre qualifié SecNumCloud. Répond à la demande massive des administrations pour les outils Microsoft (Teams, SharePoint, Azure AD) tout en respectant les exigences de souveraineté. L'enjeu n'est pas tant le workplace que la couche Azure (App Services, AKS, Cosmos DB) qui pourrait débloquer des architectures aujourd'hui contraintes.",
      pov: "Répond à un besoin réel : une très large part des administrations utilise déjà l'écosystème Microsoft. Offrir Teams, SharePoint et Azure dans un cadre SecNumCloud simplifierait drastiquement les problématiques de conformité. La qualification n'est pas encore obtenue et la timeline reste incertaine. Pour les applicatifs métier que nous développons, nous orientons plutôt vers des socles cloud déjà qualifiés (OVHcloud, Outscale).",
    },
    {
      id: 11,
      name: 'Olvid',
      ring: 'adopt',
      category: 'communication',
      description:
        "Messagerie instantanée française conçue pour offrir un niveau de sécurité maximal. Particularité : le chiffrement de bout en bout ne repose sur aucun annuaire centralisé — l'échange de clés se fait de manière décentralisée. Certifiée CSPN par l'ANSSI. En décembre 2023, une circulaire de la Première ministre a demandé aux membres du gouvernement de migrer vers Olvid.",
      pov: "Référence pour la messagerie sécurisée dans le secteur public français. La circulaire de décembre 2023 en fait un standard de fait pour les communications ministérielles. Pour les communications sensibles (comités de pilotage, échanges avec les RSSI, projets classifiés), Olvid est la recommandation incontournable. On la préconise systématiquement dans nos plans d'assurance sécurité (PAS).",
    },
    {
      id: 12,
      name: 'Tchap',
      ring: 'adopt',
      category: 'communication',
      description:
        "Messagerie instantanée de l'État français, développée par la DINUM, basée sur le protocole Matrix et le client Element. Accessible à tous les agents publics disposant d'une adresse email gouvernementale. Hébergement assuré sur l'infrastructure de l'État. Messagerie texte, partage de fichiers, salons de discussion.",
      pov: "Outil naturel pour les échanges courants entre agents publics sur les projets que nous accompagnons. Avantage majeur : l'effet réseau — tout agent public peut y accéder, ce qui en fait le « Slack du public » par défaut. On le préconise systématiquement comme canal de communication projet avec nos interlocuteurs dans les administrations.",
    },
    {
      id: 13,
      name: 'Tixeo',
      ring: 'adopt',
      category: 'communication',
      description:
        "Solution française de visioconférence sécurisée, qualifiée par l'ANSSI (CSPN) — la seule solution de visioconférence à avoir obtenu cette qualification en Europe. Chiffrement de bout en bout réel, y compris en réunion multipartite. Utilisée par les ministères, les OIV et le secteur de la défense.",
      pov: "Recommandation pour la visioconférence dans les contextes à forte exigence de sécurité. Mentionné systématiquement dans nos PAS et mémoires techniques. Pour les usages courants, Webconf (BigBlueButton de la DINUM) ou la visio Tchap suffisent. Le coût de licence et l'adoption utilisateur (UX moins fluide que Teams/Zoom) limitent le déploiement à grande échelle.",
    },
    {
      id: 14,
      name: 'BlueMind',
      ring: 'trial',
      category: 'communication',
      description:
        "Messagerie collaborative française, seule solution nativement compatible avec le client Outlook de Microsoft, ce qui permet une migration transparente pour les utilisateurs. Alternative à MS Exchange et 365, couvre la messagerie, l'agenda, les contacts et la gestion de tâches. Disponible en messagerie principale ou en solution de gestion de crise (continuité de service en cas de panne Microsoft).",
      pov: "Atout stratégique pour le secteur public : la compatibilité native Outlook lève le principal frein à l'abandon de Microsoft Exchange — les utilisateurs conservent leur client habituel. Pour les administrations qui veulent se libérer de la dépendance M365 sans traumatiser les agents, c'est une option très crédible. L'intégration avec l'écosystème complet (SharePoint, Teams, OneDrive) ne peut pas être entièrement reproduite, mais pour le cas d'usage « messagerie + calendrier souverain », BlueMind est notre première recommandation.",
    },
    {
      id: 15,
      name: 'Pexip',
      ring: 'trial',
      category: 'communication',
      description:
        "Solution de visioconférence d'origine norvégienne (européenne), avec un fort positionnement souveraineté et sécurité. Déploiement on-premise ou cloud privé, interopérabilité avec les systèmes existants (SIP, H.323), conformité NIS2 et RGPD. Utilisé par des gouvernements européens, des OIV et des organisations de défense.",
      pov: "Alternative européenne pertinente à Tixeo, avec un spectre fonctionnel plus large (interopérabilité forte avec les systèmes de visioconférence hérités, salles de réunion physiques). Pour les grandes administrations disposant déjà d'une infrastructure de visioconférence (systèmes Cisco, Poly), Pexip facilite la transition vers une solution souveraine sans rupture. Tixeo reste la référence ANSSI pour la sécurité maximale, mais Pexip répond mieux aux besoins d'interopérabilité à grande échelle.",
    },
    {
      id: 16,
      name: 'Element / Matrix',
      ring: 'trial',
      category: 'communication',
      description:
        "Client de référence du protocole Matrix, standard ouvert de communication décentralisée et chiffrée. Matrix/Element a été adopté par plusieurs gouvernements européens : la France (base de Tchap), l'Allemagne (BwMessenger de la Bundeswehr), le Luxembourg. Architecture fédérée permettant l'interopérabilité entre organisations.",
      pov: "Socle protocolaire sur lequel repose Tchap. Pour les projets nécessitant une messagerie dédiée (plateforme métier avec chat intégré, système de communication pour un GIP ou un opérateur), on recommande Matrix comme couche protocolaire. L'approche fédérée est un atout pour les projets interministériels. Le déploiement d'un homeserver Matrix demande une expertise ops significative.",
    },
    {
      id: 17,
      name: 'Jitsi',
      ring: 'trial',
      category: 'communication',
      description:
        "Solution de visioconférence open source, créée par le développeur français Emil Ivov. Visioconférences directement depuis un navigateur, sans installation. Auto-hébergeable et très légère. Moteur derrière la Webconf de l'État et la brique visio de CollabNext (Jamespot).",
      pov: "Choix pragmatique pour la visioconférence sur les projets publics sans exigence ANSSI formelle. Open source, auto-hébergeable, zéro friction utilisateur — c'est souvent ce qu'on recommande pour les ateliers de co-conception, les démos et les réunions d'équipe. La limite est la qualité de service à grande échelle (> 50 participants) et l'absence de certification ANSSI.",
    },
    {
      id: 18,
      name: 'La Suite Numérique',
      ring: 'adopt',
      category: 'collaborative',
      description:
        "Programme de la DINUM visant à fournir aux agents publics un ensemble d'outils collaboratifs souverains : Tchap (messagerie), Webconf (visioconférence), France Transfert (envoi de fichiers), Resana (partage documentaire), webmail, et progressivement des outils d'édition collaborative et de gestion d'agenda. Hébergée sur l'infrastructure de l'État.",
      pov: "Socle de référence pour l'environnement de travail de l'agent public. Sur nos projets, on s'appuie systématiquement sur ses briques quand elles existent. L'enjeu pour nous est l'intégration : comment les applications métier que nous développons s'articulent avec la Suite (SSO AgentConnect, APIs, notifications Tchap). La Suite progresse vite mais reste fonctionnellement en retrait par rapport à Google Workspace — c'est un investissement de long terme qu'il faut encourager et accompagner.",
    },
    {
      id: 19,
      name: 'Jamespot / CollabNext',
      ring: 'trial',
      category: 'collaborative',
      description:
        "Éditeur français de Digital Workplace fondé il y a plus de 20 ans. Son offre phare CollabNext, née de l'appel à projets « Suites Bureautiques Collaboratives Cloud » du plan France 2030, est hébergée sur Outscale (SecNumCloud 3.2). Se présente comme une alternative à M365 et Google Workspace avec intranet collaboratif, 100+ applications, suite bureautique (OnlyOffice), mail, messagerie, agenda, visio (Jitsi) et IA générative (JamesBot, alimenté par Mistral AI, Llama, LightOn Alfred).",
      pov: "Initiative la plus ambitieuse côté Digital Workplace souveraine. Le fait qu'elle soit issue de France 2030, hébergée sur Outscale SecNumCloud, et qu'elle intègre des LLMs souverains, en fait une réponse cohérente au besoin de se libérer de M365. La maturité fonctionnelle face à M365 reste un sujet (20 ans d'avance côté Microsoft sur l'intégration fine), et les retours à grande échelle sont encore limités. Mais pour les administrations cherchant une suite collaborative souveraine tout-en-un, CollabNext mérite absolument d'être évaluée. L'intégration de l'IA souveraine est un point fort différenciant.",
    },
    {
      id: 20,
      name: 'Jalios',
      ring: 'trial',
      category: 'collaborative',
      description:
        "Éditeur français positionné comme « leader français » de la Digital Workplace. Jalios Open Suite propose un intranet collaboratif, un réseau social d'entreprise, une GED, des workflows métier et une intégration IA. Se présente avec la métaphore du « bison » : robuste, autonome, sans dépendance — par opposition aux solutions propriétaires américaines. Interopérable et souverain.",
      pov: "Alternative mature à Jamespot pour les projets d'intranet et de Digital Workplace dans le secteur public. L'approche « Open Suite » (composants assemblables) est bien adaptée aux administrations qui veulent un portail agent avec GED, actualités, workflows d'approbation et annuaire intégré. C'est davantage un outil de collaboration/communication interne qu'une plateforme de développement applicatif, ce qui limite les cas où nous l'intégrons directement. Mais pour un projet d'intranet souverain, Jalios est dans la shortlist avec Jamespot.",
    },
    {
      id: 21,
      name: 'CryptPad',
      ring: 'trial',
      category: 'collaborative',
      description:
        "Suite collaborative chiffrée de bout en bout, développée par XWiki SAS à Paris. Édition collaborative en temps réel de documents texte, tableurs, présentations, formulaires, tableaux Kanban et pads de code — le tout avec un chiffrement zero-knowledge. Open source (AGPL), soutenu par des financements européens (NGI) et français (BPI).",
      pov: "Pépite française pour l'édition collaborative sécurisée. On le recommande pour les contextes où la confidentialité des documents est critique : groupes de travail interministériels sensibles, rédaction de documents stratégiques. Le chiffrement zero-knowledge est un argument massif. L'UX reste en retrait par rapport à Google Docs/Notion, mais pour le cas d'usage « rédaction collaborative confidentielle », c'est notre première recommandation.",
    },
    {
      id: 22,
      name: 'Whaller',
      ring: 'trial',
      category: 'collaborative',
      description:
        "Réseau social d'entreprise français conçu pour créer des espaces de travail cloisonnés (« sphères »). Whaller DONJON, présenté au sommet IMA, est la première plateforme collaborative qualifiée SecNumCloud. Utilisée par le Ministère des Armées et plusieurs administrations.",
      pov: "Pertinent pour les organisations publiques qui ont besoin de cloisonner les échanges entre différents périmètres avec une garantie de souveraineté. La qualification SecNumCloud de Whaller DONJON est un atout unique dans l'écosystème collaboratif souverain. La limite est l'effet réseau : Whaller reste un outil de niche, et l'adoption nécessite un vrai accompagnement au changement.",
    },
    {
      id: 23,
      name: 'Twake (Linagora)',
      ring: 'assess',
      category: 'collaborative',
      description:
        "Plateforme collaborative open source développée par Linagora. Combine messagerie d'équipe, visioconférence, édition collaborative de documents, calendrier et stockage de fichiers. Positionnée comme l'alternative souveraine à Microsoft Teams, avec une intégration native de l'IA.",
      pov: "Porte une ambition séduisante : un Teams souverain, open source, intégrant l'IA. La maturité produit est encore en progression et la concurrence avec La Suite Numérique et CollabNext crée une zone de flou sur le positionnement. On surveille activement.",
    },
    {
      id: 24,
      name: 'XWiki',
      ring: 'adopt',
      category: 'wiki',
      description:
        "Plateforme wiki d'entreprise open source, développée par XWiki SAS à Paris (le même éditeur que CryptPad). Utilisée par de nombreuses administrations françaises, des grands groupes et des organisations internationales. Plus de 900 extensions disponibles. 20 ans d'existence, maturité éprouvée.",
      pov: "Recommandation pour les bases de connaissances et wikis internes dans le secteur public. Produit français, mature (20 ans), open source, déployable on-premise — il coche toutes les cases. On le préconise pour la documentation projet, les référentiels métier, et les portails de capitalisation. L'alternative souvent rencontrée est Confluence (Atlassian), qui pose des problèmes de souveraineté et de coût à grande échelle.",
    },
    {
      id: 25,
      name: 'Lutece',
      ring: 'trial',
      category: 'wiki',
      description:
        "Framework CMS et portail open source développé par la DSI de la Ville de Paris depuis 2002. Propulse de nombreux portails de services numériques parisiens. Intègre nativement FranceConnect, les workflows de démarches et la gestion de contenus. Licence BSD.",
      pov: "« Commun numérique » intéressant pour les projets de portails de démarches des collectivités. L'écosystème hors de la Ville de Paris est restreint et les technologies sous-jacentes (Java/Spring) peuvent être un frein pour les équipes habituées aux stacks JS modernes. Pour les grandes collectivités avec des besoins de portail de services, c'est un choix crédible et éprouvé.",
    },
    {
      id: 26,
      name: 'GLPI (Teclib)',
      ring: 'adopt',
      category: 'wiki',
      description:
        "Logiciel open source français d'ITSM et de gestion de parc informatique. Développé par Teclib à Paris, utilisé par des milliers d'organisations dans le monde, dont une part considérable d'administrations françaises. Conforme ITIL, intégration LDAP/AD. Standard de fait dans les DSI publiques.",
      pov: "Exemplaire de ce que la souveraineté numérique peut produire : un outil open source français, dominant son segment dans le public, porté par un éditeur pérenne. Ce n'est pas un outil que nous déployons directement (pas notre cœur de métier), mais c'est un élément clé du SI avec lequel nos applications doivent s'intégrer.",
    },
    {
      id: 27,
      name: 'Tuleap (Enalean)',
      ring: 'trial',
      category: 'project',
      description:
        "Plateforme ALM (Application Lifecycle Management) open source développée par Enalean à Grenoble. Couvre la gestion de projet agile (Scrum, Kanban), le suivi de bugs, la gestion de versions (Git intégré), l'intégration continue et les tests. Alternative souveraine à Jira + Confluence + GitLab.",
      pov: "Pertinent pour les projets nécessitant un outil souverain de gestion de projet et de suivi de code — typiquement les projets de la défense ou les SI sensibles. L'UX est en retrait par rapport à Jira ou Linear, ce qui peut freiner l'adoption. Adapté dans les contextes à forte contrainte de souveraineté, mais pas notre recommandation par défaut pour un projet agile classique.",
    },
    {
      id: 28,
      name: 'OpenProject',
      ring: 'trial',
      category: 'project',
      description:
        "Plateforme de gestion de projet open source, développée par une entreprise allemande. Forte sur la planification classique (Gantt, cycle en V) tout en supportant les méthodes agiles — un bon hybride pour le secteur public. Conforme RGPD, hébergement UE.",
      pov: "Notre recommandation quand un client public a besoin d'un outil de gestion de projet souverain avec une forte composante planification/Gantt. Beaucoup de projets publics fonctionnent encore en cycle en V ou en mode hybride. Excellent pour la planification projet publique, moins adapté pour le delivery technique pur.",
    },
    {
      id: 29,
      name: 'Resana (InterStis)',
      ring: 'trial',
      category: 'project',
      description:
        "Plateforme collaborative mise à disposition des agents de l'État par la DINUM. Partage et co-édition de documents, gestion de projets, salons de discussion et stockage de fichiers. Massivement déployée pendant la crise COVID. InterStis a également présenté au sommet IMA la plateforme Hexagone, réponse française aux défis de la souveraineté des données.",
      pov: "Fait partie de l'écosystème standard de l'agent public. On l'utilise régulièrement dans nos interactions projet avec les administrations. La limite est fonctionnelle : l'UX est en dessous de Notion ou Google Drive. Pertinent dans l'écosystème public existant, on espère que les investissements UX continueront.",
    },
    {
      id: 30,
      name: 'Mistral AI',
      ring: 'adopt',
      category: 'ai',
      description:
        "Startup française d'IA générative fondée en 2023. La gamme couvre des modèles de différentes tailles (Mistral Small, Medium, Large) et des modèles spécialisés (Codestral, Pixtral). Disponibles via API, en téléchargement ouvert et via des partenariats cloud. Présenté au sommet IMA comme « l'IA de pointe au service de la souveraineté technologique ».",
      pov: "Recommandation par défaut pour les usages d'IA générative dans le secteur public français. La combinaison d'un acteur français, de modèles performants en français, et de la possibilité de déploiement on-premise ou sur cloud souverain en fait un choix stratégique évident. On utilise Mistral pour les chatbots agents (RAG), la synthèse de documents, l'aide à la rédaction et la classification de demandes usagers. C'est un argument commercial fort dans nos réponses à appels d'offres.",
    },
    {
      id: 31,
      name: 'Albert (DINUM)',
      ring: 'trial',
      category: 'ai',
      description:
        "Modèle de langage de l'État français, développé et opéré par la DINUM. Open source, fine-tuné sur des corpus administratifs français, déployé sur l'infrastructure souveraine de l'État. Intégré dans plusieurs expérimentations ministérielles.",
      pov: "Brique IA « par défaut » quand le contexte exige un hébergement régalien strict. Les performances sont inférieures à Mistral Large sur les tâches complexes, mais adapté pour les cas d'usage simples : FAQ, pré-remplissage de formulaires, classification de courriers. L'enjeu pour Theodo GovTech est d'accompagner les administrations dans le choix du bon modèle au bon endroit : Albert pour le régalien strict, Mistral pour la performance.",
    },
    {
      id: 32,
      name: 'ILLUIN / nAIxt',
      ring: 'trial',
      category: 'ai',
      description:
        "Entreprise française d'IA spécialisée dans le déploiement de solutions d'IA et d'IA générative à l'échelle pour les grandes organisations. La plateforme nAIxt permet de déployer des solutions d'IA Gen souveraines avec un focus sur la mise en production effective (au-delà du POC). Keynote du sommet IMA consacrée à ILLUIN.",
      pov: "Acteur intéressant pour les grandes administrations qui veulent passer de l'expérimentation IA au déploiement en production. La plateforme nAIxt adresse un vrai pain point : beaucoup d'organismes publics ont fait des POC d'IA Gen mais peinent à industrialiser. Nous avons notre propre stack d'industrialisation IA, mais nAIxt peut être pertinent pour les clients qui souhaitent une plateforme managée. À évaluer face à LightOn Paradigm et Prisme.ai selon les besoins.",
    },
    {
      id: 33,
      name: 'Prisme.ai',
      ring: 'trial',
      category: 'ai',
      description:
        "Plateforme française permettant de créer, connecter, exposer et gouverner des agents IA sur l'infrastructure et avec le LLM du choix du client. Insiste sur le fait que « la souveraineté en IA Gen n'est pas seulement une question d'hébergement ou de choix du LLM » — c'est une souveraineté totale, de la maîtrise des données aux parcours métier en passant par l'orchestration des agents.",
      pov: "Adresse un besoin émergent et stratégique : l'orchestration d'agents IA souverains. Avec la montée en puissance de l'IA agentique, les administrations vont avoir besoin de plateformes pour gérer des flottes d'agents IA spécialisés (accueil citoyen, analyse documentaire, aide à la décision). Prisme.ai est bien positionné sur ce créneau. Le marché de l'IA agentique est encore naissant dans le public, mais c'est exactement le type de plateforme dont nous pourrions avoir besoin sur nos projets à horizon 12 mois.",
    },
    {
      id: 34,
      name: 'Hugging Face',
      ring: 'trial',
      category: 'ai',
      description:
        "Plateforme de référence mondiale pour le ML open source. Fondée à Paris en 2016, elle héberge le Hub (500 000+ modèles). Bien que devenue globale (siège à New York), elle conserve une forte empreinte française. Incontournable pour accéder aux modèles open source (Mistral, CamemBERT, Albert).",
      pov: "Incontournable dans notre stack IA : c'est le hub où l'on récupère les modèles (Mistral, CamemBERT, Albert). Le positionnement Trial s'explique par la dépendance à une infrastructure US. Pour les projets sensibles, on télécharge les modèles et les opère on-premise.",
    },
    {
      id: 35,
      name: 'Dataiku',
      ring: 'trial',
      category: 'ai',
      description:
        "Plateforme française d'IA et de data science. La plateforme DSS couvre le data preparation, le feature engineering, le training de modèles, le MLOps et le monitoring. Mode visuel qui démocratise la data science auprès des métiers. Utilisée par BPI France et le Ministère des Armées.",
      pov: "Option solide pour les administrations qui veulent industrialiser leur démarche data/ML. Le mode visuel démocratise la data science auprès des métiers. La licence est coûteuse (frein pour le public), et pour nos projets en mode build, notre stack Python/MLflow/dbt est souvent plus adaptée. Dataiku convient davantage aux organisations qui veulent autonomiser leurs équipes data internes.",
    },
    {
      id: 36,
      name: 'Sinequa',
      ring: 'assess',
      category: 'ai',
      description:
        "Éditeur français spécialisé dans la recherche augmentée par l'IA (search & analytics). Permet de rechercher et exploiter des données non structurées à travers toute l'organisation (documents, emails, bases de données) en combinant recherche sémantique, NLP et IA générative. Utilisé dans la finance, la santé, le manufacturing et le secteur public.",
      pov: "Pertinent pour les projets de gestion documentaire intelligente dans les grandes administrations : recherche unifiée sur des corpus massifs, questions-réponses sur la base documentaire, aide à la veille réglementaire. C'est un cas d'usage RAG (Retrieval Augmented Generation) industrialisé. Pour la majorité de nos projets, nous construisons notre propre pipeline RAG (LangChain/LlamaIndex + Mistral), mais Sinequa peut être la bonne réponse pour les administrations ayant des volumes documentaires très importants et un besoin de search enterprise.",
    },
    {
      id: 37,
      name: 'LightOn',
      ring: 'assess',
      category: 'ai',
      description:
        "Entreprise française d'IA proposant Paradigm, une plateforme d'IA générative pour les entreprises, permettant de déployer des LLMs dans des environnements sécurisés, avec fine-tuning, RAG et orchestration intégrés. Partenaire de Jamespot pour l'IA intégrée dans CollabNext (modèle Alfred).",
      pov: "Option intéressante pour les administrations qui veulent une plateforme d'IA managée sans passer par les hyperscalers américains. Nos retours en production dans le public sont encore limités. L'intégration dans CollabNext (Jamespot) montre une dynamique d'écosystème souverain prometteuse.",
    },
    {
      id: 38,
      name: 'Kyutai',
      ring: 'assess',
      category: 'ai',
      description:
        "Laboratoire de recherche en IA français, fondé par Xavier Niel avec 300M€. Engagement open science. Modèle phare : Moshi (IA conversationnelle vocale en temps réel). Basé à Paris, collaboration avec INRIA et ENS.",
      pov: "Moshi et les travaux sur l'IA vocale ouvrent des perspectives concrètes pour le secteur public : agents vocaux pour l'accueil téléphonique des administrations, transcription de réunions, accessibilité. Encore des briques de recherche, pas des produits déployables. À suivre activement pour les POC d'IA vocale.",
    },
    {
      id: 39,
      name: 'Linto (Linagora)',
      ring: 'assess',
      category: 'ai',
      description:
        "Plateforme d'IA vocale open source développée par Linagora. Speech-to-text, text-to-speech, NLU et orchestration de dialogues. Déployable on-premise. Transcription de réunions, commande vocale, agents conversationnels.",
      pov: "Brique française de référence pour les projets d'IA vocale souveraine. La qualité de transcription en français progresse mais reste en deçà de Whisper. Pour un POC de transcription souveraine, Linto est le point de départ naturel.",
    },
    {
      id: 40,
      name: 'HarfangLab',
      ring: 'adopt',
      category: 'cyber',
      description:
        "Éditeur français d'EDR (Endpoint Detection and Response), qualifié par l'ANSSI — le premier EDR européen à avoir obtenu cette qualification. Détection comportementale, threat hunting, réponse automatisée. Déploiement on-premise ou SaaS souverain. Utilisé par les ministères, OIV et le secteur de la défense.",
      pov: "Recommandation EDR pour les projets du secteur public à forte exigence de sécurité. La qualification ANSSI est décisive dans les appels d'offres. On le mentionne systématiquement dans nos PAS et architectures de sécurité.",
    },
    {
      id: 41,
      name: 'Sekoia.io',
      ring: 'adopt',
      category: 'cyber',
      description:
        "Plateforme française de XDR et CTI (Cyber Threat Intelligence), hébergée en France (OVHcloud). Détection d'incidents, investigation, réponse automatisée et renseignement sur les menaces. Cloud-native, vision contextuelle des menaces ciblant le secteur public français.",
      pov: "Acteur majeur de la cybersécurité française pour la couche détection/réponse. La CTI intégrée permet une vision contextuelle des menaces ciblant le secteur public français. On l'intègre dans nos recommandations d'architecture sécurité pour les projets sensibles.",
    },
    {
      id: 42,
      name: 'Stormshield',
      ring: 'adopt',
      category: 'cyber',
      description:
        "Filiale d'Airbus Defence and Space. Produit des firewalls qualifiés ANSSI (niveau standard et renforcé), protection des postes et chiffrement des données. Acteur historique, référencé sur les marchés interministériels. Utilisé dans les réseaux classifiés.",
      pov: "Incontournable de l'infrastructure réseau souveraine. On le retrouve côté réseau chez la plupart de nos clients publics — c'est l'existant avec lequel nos applications doivent cohabiter.",
    },
    {
      id: 43,
      name: 'Wallix',
      ring: 'trial',
      category: 'cyber',
      description:
        "Éditeur français de PAM (Privileged Access Management). Wallix Bastion permet de contrôler, tracer et auditer les accès des administrateurs. Qualifié ANSSI (CSPN), acteur de référence en Europe sur le segment PAM. Coté en bourse.",
      pov: "Pertinent pour les projets où la gestion des accès d'administration est un enjeu — plateformes critiques, SI de santé, infrastructures multi-acteurs. Quand nous concevons des architectures from scratch, on intègre Wallix dans les recommandations de sécurité.",
    },
    {
      id: 44,
      name: 'CrowdSec',
      ring: 'trial',
      category: 'cyber',
      description:
        "Solution française de sécurité collaborative open source, comparable à un « Waze de la cybersécurité ». Détection comportementale + partage communautaire d'IP malveillantes. WAF, IPS et bouncers pour Nginx, HAProxy, Traefik.",
      pov: "Excellent outil à intégrer dans nos stacks de déploiement pour les applications publiques exposées sur internet. Open source, français, léger. On le recommande sur les projets de plateformes numériques publiques comme complément au WAF classique. Très bon rapport protection/effort.",
    },
    {
      id: 45,
      name: 'GitGuardian',
      ring: 'trial',
      category: 'cyber',
      description:
        "Plateforme française de détection de secrets dans le code source. Scanne les dépôts Git en temps réel pour détecter clés d'API, mots de passe et tokens. Intégrable dans les pipelines CI via ggshield.",
      pov: "On intègre GitGuardian (ou ggshield) dans les pipelines CI de tous nos projets. La détection de secrets committés par erreur est un risque réel. Le fait que ce soit un éditeur français est un bonus — les scans touchent au code source, actif sensible.",
    },
    {
      id: 46,
      name: 'Tanker (Docaposte)',
      ring: 'assess',
      category: 'cyber',
      description:
        "Technologie de chiffrement de bout en bout côté client, intégrée à Docaposte, conçue pour être intégrée dans des applications existantes via un SDK. Zero-knowledge : même l'opérateur ne peut lire les données chiffrées.",
      pov: "Brique intéressante pour les projets nécessitant du chiffrement E2E sans reconstruire l'application. SI de santé, RH, outils de communication sensibles. L'intégration demande une réflexion architecturale sérieuse (gestion des clés, recovery).",
    },
    {
      id: 49,
      name: 'Yousign',
      ring: 'trial',
      category: 'identity',
      description:
        "Éditeur français de signature électronique, fondé à Caen. API RESTful moderne, UX de signature parmi les meilleures du marché. Données hébergées en France (OVHcloud), certifié eIDAS. Intégration en quelques jours.",
      pov: "Notre préférence quand un projet nécessite une intégration de signature avec une API moderne et une DX excellente. Pour la signature qualifiée au sens strict dans le secteur public, Docaposte reste la référence. Mais pour les collectivités ou opérateurs publics nécessitant une signature avancée avec une intégration rapide, Yousign est souvent le meilleur choix technique.",
    },
    {
      id: 50,
      name: 'Archipels',
      ring: 'assess',
      category: 'identity',
      description:
        "Startup française qui développe un wallet d'identité numérique pour entreprises et individus, basé sur les technologies de verifiable credentials (blockchain). Permet de fluidifier les échanges d'informations et de lutter contre la fraude documentaire en permettant de partager des preuves vérifiables sans exposer les données sous-jacentes.",
      pov: "Adresse un besoin émergent avec l'arrivée d'eIDAS 2 et du portefeuille d'identité numérique européen (EUDI Wallet). La vérification de justificatifs sans échange de données personnelles est un cas d'usage à fort potentiel dans le public : inscription scolaire, demandes de prestations sociales, vérification d'éligibilité. La technologie wallet/verifiable credentials est encore en phase d'adoption précoce dans le secteur public, mais c'est clairement un axe stratégique à surveiller pour les 2-3 prochaines années.",
    },
    {
      id: 51,
      name: 'Convertigo',
      ring: 'trial',
      category: 'lowcode',
      description:
        "Plateforme française de Low-Code / No-Code open source, présentée au sommet IMA sur le thème « IA, Low Code et No Code dans le contexte des contraintes de souveraineté ». Permet de développer des applications web et mobiles avec un minimum de code, dans un cadre 100 % souverain et auto-hébergeable. Intègre des connecteurs d'entreprise (ERP, CRM, legacy) et des capacités d'IA.",
      pov: "Pertinent pour les projets publics où l'enjeu est d'accélérer la livraison d'applications métier simples (formulaires, workflows d'approbation, tableaux de bord) sans dépendance à Power Apps (Microsoft) ou AppSheet (Google). Le fait que ce soit open source et auto-hébergeable répond à une demande forte dans le public. Pour les applications complexes, notre approche code-first (React/Node.js) reste supérieure en maintenabilité et performance. Mais pour les cas d'usage « citizen dev » (digitalisation rapide de processus métier par les agents eux-mêmes), Convertigo est un candidat sérieux.",
    },
    {
      id: 52,
      name: 'Ksaar',
      ring: 'assess',
      category: 'lowcode',
      description:
        "Plateforme no-code 100 % française qui permet aux entreprises de créer des applications sur mesure. Interface intuitive et fonctionnalités avancées adaptées aux besoins des entreprises françaises, avec un hébergement souverain.",
      pov: "À évaluer dans le contexte de la montée en puissance du « citizen dev » dans les administrations. L'idée que des agents non-développeurs puissent créer leurs propres applications métier est séduisante pour les DSI publiques manquant de ressources dev. Le marché du no-code souverain est encore fragmenté et les retours d'expérience dans le public sont limités. À surveiller en parallèle de Convertigo et TimeTonic.",
    },
    {
      id: 53,
      name: 'TimeTonic',
      ring: 'assess',
      category: 'lowcode',
      description:
        "Plateforme française de gestion d'entreprise combinant Data + No-Code + IA. Liste de clients publics et privés impressionnante (AP-HP, Orano, GRDF, ENGIE, Air France KLM, Région Occitanie). Permet de construire des applications de gestion de données et de workflows sans code, avec une couche d'IA intégrée.",
      pov: "Acteur no-code souverain ayant le plus de références dans le secteur public français (AP-HP, Région Occitanie). C'est un argument de poids. La combinaison Data + No-Code + IA est bien alignée avec les besoins de digitalisation des processus métier dans les administrations. Nous n'avons pas encore eu l'occasion de l'évaluer en profondeur sur nos projets, mais les références parlent d'elles-mêmes. Pour les projets de gestion de données opérationnelles (suivi d'activité, reporting, workflows métier), c'est une alternative souveraine à Airtable ou Monday.com.",
    },
  ],
};

export default radarData;
