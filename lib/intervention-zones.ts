import { geoZones, regions, type GeoZone } from '@/lib/zones-geo'

export type FeaturedInterventionZone = {
  slug: string
  name: string
  setting: string
  intro: string
  rodents: string
  insects: string
  nests: string
  prevention: string
}

export const featuredInterventionZones: FeaturedInterventionZone[] = [
  {
    slug: 'perpignan',
    name: 'Perpignan',
    setting: 'centre-ville, quartiers résidentiels et locaux professionnels',
    intro: "À Perpignan, les demandes de lutte contre les nuisibles peuvent concerner aussi bien les appartements du centre-ville que les maisons individuelles, commerces et restaurants. L’identification de l’espèce et des points d’accès détermine le traitement approprié.",
    rodents: "Dans les immeubles et les commerces, la recherche de passages autour des réseaux, caves et réserves aide à traiter les rats et les souris sans se limiter aux seuls signes visibles.",
    insects: "Pour les cafards, blattes, puces et fourmis, le diagnostic précise les pièces concernées et les conditions favorisant leur présence.",
    nests: "Les nids de guêpes ou de frelons peuvent se trouver sous une toiture, dans un jardin ou près d’une ouverture. Une évaluation de l’accès est indispensable.",
    prevention: "En ville, le rangement des denrées, la gestion des déchets et la fermeture des points d’entrée complètent les traitements professionnels."
  },
  {
    slug: 'canet-en-roussillon',
    name: 'Canet-en-Roussillon',
    setting: 'habitations du littoral, locations saisonnières et commerces',
    intro: "À Canet-en-Roussillon, les résidences principales, logements de vacances et commerces n’ont pas les mêmes contraintes de disponibilité. Protection Nuisibles adapte l’organisation du diagnostic à la nature des lieux et au nuisible identifié.",
    rodents: "Dans une maison ou une réserve commerciale, la recherche des accès de rongeurs et la protection des denrées sont les premières étapes d’une dératisation ciblée.",
    insects: "Pour les logements occupés ponctuellement, un contrôle des pièces, plinthes, textiles et zones humides aide à distinguer une infestation active d’une présence isolée.",
    nests: "Jardins, façades et avancées de toit méritent une inspection prudente en présence d’allées et venues de guêpes ou de frelons.",
    prevention: "Avant la remise en location d’un logement, une vérification des points d’entrée et des signes d’activité évite de laisser évoluer un problème non repéré."
  },
  {
    slug: 'argeles-sur-mer',
    name: 'Argelès-sur-Mer',
    setting: 'logements, hébergements touristiques et espaces extérieurs',
    intro: "À Argelès-sur-Mer, les maisons, hébergements touristiques et établissements accueillant du public demandent des solutions compatibles avec leur fréquentation. Chaque intervention commence par l’identification du nuisible et du niveau d’infestation.",
    rodents: "La sécurisation des réserves et l’examen des accès autour des bâtiments sont essentiels lorsque des traces de rats ou de souris sont constatées.",
    insects: "Dans les chambres et pièces de vie, reconnaître correctement les punaises de lit, puces ou blattes permet de choisir un protocole adapté plutôt qu’un traitement généraliste.",
    nests: "Autour des terrasses et espaces de passage, la localisation précise d’un nid de guêpes ou frelons évite les interventions improvisées.",
    prevention: "L’inspection entre deux périodes d’occupation et l’entretien des abords contribuent à réduire les risques de récidive."
  },
  {
    slug: 'saint-cyprien',
    name: 'Saint-Cyprien',
    setting: 'résidences du littoral, commerces et jardins',
    intro: "À Saint-Cyprien, les besoins de traitement concernent les habitations à l’année comme les résidences secondaires. Les interventions sont adaptées aux espaces concernés, à l’accès au bâtiment et aux contraintes des occupants.",
    rodents: "Dans les garages, annexes et espaces de stockage, repérer les traces de passage et les ouvertures permet de définir une stratégie contre les rongeurs.",
    insects: "Pour les fourmis, blattes, puces ou punaises de lit, le traitement dépend des indices relevés et des pièces réellement touchées.",
    nests: "Les jardins, auvents et toitures doivent être examinés à distance lorsqu’un trafic régulier de guêpes ou de frelons est observé.",
    prevention: "Le contrôle des ouvertures, l’entretien des réserves et la vigilance après une période d’inoccupation sont particulièrement utiles."
  },
  {
    slug: 'saint-esteve',
    name: 'Saint-Estève',
    setting: 'maisons, résidences et petits locaux d’activité',
    intro: "À Saint-Estève, Protection Nuisibles accompagne les particuliers et professionnels confrontés à des rongeurs, insectes ou nids de guêpes. Le diagnostic tient compte du type de construction et des espaces où les nuisibles sont signalés.",
    rodents: "Les combles, garages, dépendances et passages de canalisations sont examinés pour repérer les voies d’entrée possibles des rats et souris.",
    insects: "En intérieur, la localisation des foyers de blattes, fourmis ou puces guide un traitement ciblé des surfaces concernées.",
    nests: "Lorsqu’un nid apparaît près d’une habitation ou d’une terrasse, la priorité est de sécuriser les abords avant toute neutralisation.",
    prevention: "L’obturation des accès et la surveillance des zones de stockage complètent l’action curative et limitent les nouvelles intrusions."
  },
  {
    slug: 'cabestany',
    name: 'Cabestany',
    setting: 'habitations, entreprises et locaux commerciaux',
    intro: "À Cabestany, les besoins de dératisation ou désinsectisation diffèrent selon qu’il s’agit d’un logement, d’un espace de vente ou de stockage. Une visite ciblée permet d’éviter de traiter inutilement des zones non concernées.",
    rodents: "Dans les locaux commerciaux, l’observation des réserves, bas de portes et passages techniques aide à localiser les chemins empruntés par les rongeurs.",
    insects: "Pour les insectes rampants, l’identification de l’espèce et de ses abris permet de sélectionner les méthodes et emplacements de traitement.",
    nests: "Les zones de livraison, jardins et avancées de toiture peuvent nécessiter une inspection lorsqu’un nid de guêpes ou frelons est suspecté.",
    prevention: "La protection des denrées et des stocks ainsi que les bonnes pratiques d’entretien sont intégrées aux recommandations après intervention."
  },
  {
    slug: 'rivesaltes',
    name: 'Rivesaltes',
    setting: 'habitations, entrepôts et commerces',
    intro: "À Rivesaltes, la présence de nuisibles peut toucher des logements autant que des locaux d’activité. Protection Nuisibles procède à une évaluation des indices d’infestation avant de proposer un protocole.",
    rodents: "Dans les espaces de stockage, la vérification des emballages, accès et traces de passage oriente la lutte contre les rats et les souris.",
    insects: "Les blattes, fourmis et autres insectes exigent une identification précise des foyers, notamment dans les pièces techniques et les réserves.",
    nests: "La destruction d’un nid près d’un bâtiment ou d’une aire de circulation nécessite de déterminer l’espèce et les conditions d’accès.",
    prevention: "La réduction des sources de nourriture, la sécurisation des accès et le suivi des points sensibles contribuent à limiter le retour des nuisibles."
  },
  {
    slug: 'elne',
    name: 'Elne',
    setting: 'maisons, commerces et espaces extérieurs',
    intro: "À Elne, les interventions anti-nuisibles concernent des configurations variées : maisons avec dépendances, logements collectifs ou petits commerces. Chaque situation est évaluée avant de décider d’une méthode de traitement.",
    rodents: "Autour des annexes et passages techniques, le repérage des ouvertures et des traces de rongeurs permet de traiter les accès prioritaires.",
    insects: "Le contrôle des zones d’humidité et des points de refuge aide à identifier les foyers de cafards, fourmis ou autres insectes rampants.",
    nests: "Les nids situés près des jardins ou des toits imposent de ne pas tenter d’intervention sans protection adaptée.",
    prevention: "L’entretien des abords, le rangement des réserves et le colmatage des ouvertures sont recommandés lorsque le diagnostic le justifie."
  },
  {
    slug: 'ceret',
    name: 'Céret',
    setting: 'habitations et propriétés du Vallespir',
    intro: "À Céret et dans le Vallespir, les caractéristiques des habitations et de leurs dépendances peuvent influencer la circulation des nuisibles. Protection Nuisibles examine les points d’accès et l’environnement immédiat avant de choisir son intervention.",
    rodents: "Dans les caves, combles, garages et remises, l’identification des passages aide à mettre en place une dératisation adaptée aux lieux.",
    insects: "Un diagnostic des pièces et espaces de rangement permet de distinguer une invasion de fourmis ou blattes d’autres nuisibles.",
    nests: "Les jardins, arbres et éléments de toiture doivent être observés avec prudence lorsqu’un nid de guêpes ou de frelons est suspecté.",
    prevention: "La surveillance des dépendances et la fermeture des ouvertures accessibles contribuent à prévenir une réinstallation."
  },
  {
    slug: 'prades',
    name: 'Prades',
    setting: 'habitations et bâtiments du Conflent',
    intro: "À Prades et dans le Conflent, maisons, dépendances et bâtiments professionnels nécessitent parfois une lutte adaptée contre les rongeurs ou insectes. La méthode retenue dépend toujours des indices relevés sur place.",
    rodents: "Les points d’entrée au niveau des caves, combles et locaux de stockage sont examinés pour cibler les déplacements des rats et souris.",
    insects: "Pour les insectes rampants et les punaises de lit, l’identification des zones infestées guide la préparation et le suivi de l’intervention.",
    nests: "En cas de présence d’un nid dans un arbre, sous une toiture ou à proximité d’une entrée, il convient de faire évaluer les risques avant d’agir.",
    prevention: "L’entretien des espaces de stockage et le contrôle périodique des accès participent à la prévention des infestations."
  },
  {
    slug: 'le-barcares',
    name: 'Le Barcarès',
    setting: 'résidences côtières, locations et établissements saisonniers',
    intro: "Au Barcarès, les périodes d’occupation variables des logements et les activités de saison rendent le repérage précoce des nuisibles important. Protection Nuisibles propose un diagnostic adapté aux résidences et locaux professionnels.",
    rodents: "Dans les annexes, garages ou réserves, il faut rechercher les accès des rongeurs et protéger les zones de stockage.",
    insects: "Les contrôles dans les logements comprennent l’identification des insectes observés, notamment blattes, puces ou punaises de lit, avant toute décision de traitement.",
    nests: "Les nids de guêpes et de frelons proches des terrasses et passages extérieurs nécessitent une prise en charge sécurisée.",
    prevention: "Avant une réouverture saisonnière, l’inspection des pièces, des denrées et des ouvertures peut révéler une activité passée inaperçue."
  }
]


/** Tous les lieux dans le rayon géographique, y compris les fiches existantes déjà enrichies. */
export type InterventionZone = GeoZone & FeaturedInterventionZone
export const interventionZones: InterventionZone[] = geoZones.map(zone => {
  const featured = featuredInterventionZones.find(item => item.slug === zone.slug)
  return {
    ...zone,
    setting: featured?.setting || regions[zone.region].label,
    intro: featured?.intro || '',
    rodents: featured?.rodents || '',
    insects: featured?.insects || '',
    nests: featured?.nests || '',
    prevention: featured?.prevention || '',
  }
})
export function getInterventionZone(slug: string): InterventionZone | undefined {
  return interventionZones.find(zone => zone.slug === slug)
}
