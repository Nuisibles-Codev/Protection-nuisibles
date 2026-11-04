import type { InterventionZone } from '@/lib/intervention-zones'

// Les exemples sont conditionnels : aucun chantier, tarif ou délai local n'est inventé.
export const sectorCopy = {
  metropole: {
    heading: 'Agglomération perpignanaise',
    habitat: "Dans l'agglomération, immeubles, pavillons, commerces et locaux techniques n'ont pas les mêmes points d'entrée. Une inspection utile distingue les circulations entre pièces, caves, garages et réserves.",
    rongeurs: "L'examen des gaines, seuils, réserves et points d'eau permet de rechercher les trajets des rongeurs, avant de choisir un dispositif adapté.",
    insectes: "Blattes, fourmis et puces demandent une identification distincte. Dans un immeuble, le diagnostic peut inclure les parties communes et les pièces techniques.",
    frelons: "Un nid situé sous une avancée de toit, près d'un balcon ou dans un jardin exige une évaluation de sa hauteur et des passages fréquentés.",
    conseils: "La protection des denrées, la surveillance des gaines et le colmatage des ouvertures utiles complètent la prévention."
  },
  salanque: {
    heading: "Salanque et vallée de l'Agly",
    habitat: "Maisons, jardins, annexes et locaux professionnels peuvent présenter des contraintes différentes. Le traitement dépend des signes observés et de l'usage du bâtiment.",
    rongeurs: "Un garage ou cellier portant des traces de grignotage doit faire l'objet d'une recherche des ouvertures et des sources de nourriture.",
    insectes: "Le traitement contre les fourmis ou les blattes se définit après localisation des foyers, en particulier autour des zones de rangement et des points humides.",
    frelons: "Des allées et venues près d'une haie ou d'une toiture doivent être observées à distance pour localiser le nid en sécurité.",
    conseils: "L'entretien des annexes et la vérification des seuils, conduites et ouvertures d'aération contribuent à limiter les intrusions."
  },
  littoral66: {
    heading: 'Littoral catalan',
    habitat: "Les résidences principales, logements de vacances et établissements accueillant du public impliquent des calendriers de traitement parfois différents.",
    rongeurs: "Les locaux de stockage, garages et réserves doivent être inspectés avant la pose de dispositifs : traces anciennes et activité récente ne se traitent pas de la même manière.",
    insectes: "Pour un logement occupé ponctuellement, le contrôle des couchages, plinthes et pièces humides aide à distinguer blattes, puces et punaises de lit.",
    frelons: "Une terrasse fréquentée ou un auvent proche d'une entrée nécessite une sécurisation adaptée si un nid de guêpes ou frelons est repéré.",
    conseils: "Une vérification avant la remise en location, la fermeture des accès et la protection des denrées facilitent la prévention."
  },
  albères: {
    heading: 'Piémont des Albères',
    habitat: "Maisons avec jardins, garages et dépendances demandent un repérage des accès intérieurs et extérieurs avant toute intervention.",
    rongeurs: "Une activité dans des combles ou une remise justifie l'analyse des trajets des rats ou souris, puis l'adaptation des dispositifs et obturations.",
    insectes: "Une infestation d'insectes rampants doit être localisée précisément ; traiter toute la maison sans identifier les foyers n'est pas toujours pertinent.",
    frelons: "Arbres, auvents et charpentes peuvent nécessiter une reconnaissance professionnelle avant de détruire un nid en hauteur.",
    conseils: "La surveillance des remises et la fermeture des passages accessibles aident à limiter de nouveaux accès."
  },
  coteVermeille: {
    heading: 'Côte Vermeille',
    habitat: "Dans les logements et locaux installés sur des terrains parfois en pente, l'accessibilité des façades, caves et toitures doit être prise en compte.",
    rongeurs: "Le contrôle des caves, réserves et passages techniques permet de chercher l'origine d'une activité de rats ou souris.",
    insectes: "Pour les cafards, fourmis ou punaises, le diagnostic se concentre sur les zones où des indices ont été observés.",
    frelons: "Un nid sur une façade ou dans une toiture difficile d'accès impose de vérifier les possibilités d'approche avant neutralisation.",
    conseils: "Le suivi après traitement et l'inspection des ouvertures et conduites sont utiles dans les bâtiments à plusieurs niveaux."
  },
  vallespir: {
    heading: 'Vallespir',
    habitat: "Maisons, annexes et espaces de stockage peuvent posséder des volumes moins fréquentés qui nécessitent un contrôle ciblé.",
    rongeurs: "Dans une cave ou une remise, distinguer l'espèce et trouver les passages reste essentiel avant toute dératisation.",
    insectes: "Les foyers de fourmis ou de blattes nécessitent des méthodes distinctes ; les punaises de lit impliquent un examen spécifique des chambres.",
    frelons: "En cas de nid près d'un jardin ou d'une toiture, l'espèce et la proximité des occupants orientent la sécurisation.",
    conseils: "Le rangement des réserves et l'entretien des accès extérieurs participent à la prévention."
  },
  conflent: {
    heading: 'Conflent et vallée de la Têt',
    habitat: "Villages, habitations anciennes et maisons avec annexes nécessitent d'adapter le contrôle à la construction et à ses ouvertures.",
    rongeurs: "Les rongeurs peuvent emprunter de petits passages dans les caves, les combles ou les réserves ; le diagnostic sert à les identifier.",
    insectes: "Avant de traiter une présence de blattes, fourmis ou punaises, il faut localiser les refuges et choisir un protocole adapté.",
    frelons: "Un nid proche d'une entrée ou d'un jardin doit être évalué avec prudence ; ne tentez pas de le détruire vous-même.",
    conseils: "Un suivi des passages après traitement et des conseils d'entretien peuvent prévenir une nouvelle infestation."
  },
  fenouilledes: {
    heading: 'Fenouillèdes',
    habitat: "Maisons, jardins, caves et bâtiments annexes présentent des configurations variées qui imposent un examen des lieux.",
    rongeurs: "Des traces dans une remise ou un grenier conduisent à identifier les points d'accès et le type de rongeur concerné.",
    insectes: "La reconnaissance des insectes et de leurs abris précède toute décision de traitement ; tous les produits ne conviennent pas à toutes les espèces.",
    frelons: "Un nid sous toiture ou dans un arbre ne doit pas être manipulé sans évaluation de la hauteur, de l'accès et du danger.",
    conseils: "L'entretien des dépendances, le stockage correct des denrées et la fermeture des ouvertures aident à limiter les récidives."
  },
  aspres: {
    heading: 'Aspres et plaine sud',
    habitat: "Habitations, garages, dépendances et locaux d'activité appellent des méthodes différentes selon la configuration et les nuisibles observés.",
    rongeurs: "La présence d'emballages endommagés ou de déjections justifie une recherche des voies de passage plutôt qu'une réponse indifférenciée.",
    insectes: "Les fourmis, puces et blattes n'ont pas les mêmes foyers. L'identification permet d'éviter des traitements inadaptés.",
    frelons: "L'emplacement d'un nid dans un arbre ou sous une toiture détermine les moyens d'accès et les mesures de protection.",
    conseils: "L'entretien des abords et la fermeture des points de passage sont utiles après la phase curative."
  },
  roussillon: {
    heading: 'Plaine du Roussillon',
    habitat: "Logements, espaces de stockage et commerces nécessitent une inspection adaptée à leur usage et au type de signalement.",
    rongeurs: "Bruits, déjections et traces de grignotage doivent être étudiés pour distinguer rats et souris et sélectionner une action ciblée.",
    insectes: "Les cafards, fourmis ou puces réclament des contrôles distincts ; les punaises de lit nécessitent un examen des couchages.",
    frelons: "La présence d'un nid près des accès, terrasses ou toitures exige une reconnaissance sécurisée avant intervention.",
    conseils: "La gestion des denrées et la surveillance des ouvertures contribuent à éviter le retour des nuisibles."
  },
  littoral11: {
    heading: 'Littoral audois',
    habitat: "Les résidences, commerces et hébergements saisonniers peuvent nécessiter une préparation spécifique. Pour l'Aude, le déplacement doit être confirmé au préalable.",
    rongeurs: "L'inspection des garages, réserves et locaux techniques vise les voies de passage et l'accès aux denrées.",
    insectes: "Le diagnostic des pièces, textiles et zones humides permet de choisir une méthode en cas de blattes, puces ou punaises.",
    frelons: "Un nid proche d'une terrasse ou d'un auvent doit faire l'objet d'une évaluation de sécurité avant toute action.",
    conseils: "Le contrôle des accès avant la réoccupation d'un logement et la protection des denrées participent à la prévention."
  },
  corbieres: {
    heading: 'Corbières audoises',
    habitat: "Maisons et annexes de villages peuvent offrir des points de passage difficiles à surveiller. Les déplacements au départ de Perpignan sont à confirmer.",
    rongeurs: "En cas d'indices dans une cave ou remise, la recherche des entrées et l'identification des rongeurs précèdent le traitement.",
    insectes: "Une invasion de fourmis ou cafards et une suspicion de punaises de lit ne justifient pas le même protocole.",
    frelons: "La neutralisation d'un nid sous toiture ou dans un arbre exige une inspection prudente et des équipements adaptés.",
    conseils: "L'entretien des réserves et la surveillance des passages identifiés facilitent un suivi durable."
  }
} as const

export const cityInsights: Record<string, string> = {
  perpignan: "Le centre-ville, les appartements, restaurants et locaux commerciaux demandent des diagnostics distincts. Dans un commerce alimentaire, les réserves et les accès techniques sont prioritaires ; dans un logement, on examine les pièces et passages réellement concernés.",
  cabestany: "À Cabestany, une demande peut concerner un pavillon, un garage ou un espace professionnel. La protection des stocks et l'accès aux locaux sont des points à préciser lors du diagnostic.",
  'saint-esteve': "À Saint-Estève, la recherche de rongeurs autour d'une gaine technique n'a rien à voir avec l'identification d'un foyer d'insectes dans une cuisine : chaque situation appelle un protocole distinct.",
  bompas: "À Bompas, l'inspection des abords d'une maison ou de son garage peut être utile pour localiser des passages avant dératisation.",
  toulouges: "À Toulouges, les bruits nocturnes dans les cloisons et les mouvements de guêpes près d'une toiture demandent des vérifications très différentes.",
  pia: "À Pia, garages, jardins et espaces de stockage peuvent être concernés par des signalements distincts ; le contrôle est ciblé sur les indices réellement présents.",
  pollestres: "À Pollestres, le diagnostic dans un commerce doit aussi intégrer ses contraintes d'ouverture et de sécurité des occupants.",
  baho: "À Baho, la surveillance des dépendances et des passages de réseaux peut compléter une dératisation lorsque les traces le justifient.",
  'canet-en-roussillon': "À Canet-en-Roussillon, l'occupation d'un logement à l'année ou d'une location saisonnière change la préparation du traitement, notamment lorsqu'il concerne les chambres.",
  'saint-cyprien': "À Saint-Cyprien, les résidences utilisées ponctuellement peuvent conserver des traces anciennes ; le diagnostic doit confirmer qu'une activité est toujours présente.",
  'argeles-sur-mer': "À Argelès-sur-Mer, la prévention dans un hébergement touristique ne se confond pas avec la sécurisation d'une terrasse lorsqu'un nid de guêpes est signalé.",
  elne: "À Elne, une maison avec annexe et un local commercial imposent des vérifications différentes : accès, réserves et sécurité des occupants.",
  rivesaltes: "À Rivesaltes, l'inspection des locaux de stockage s'attache aux denrées, emballages et accès, tandis qu'un traitement d'habitation vise les foyers observés.",
  'le-barcares': "Au Barcarès, un logement resté fermé plusieurs semaines peut nécessiter un contrôle avant réoccupation, sans confondre traces anciennes et infestation active.",
  'sainte-marie-la-mer': "À Sainte-Marie-la-Mer, une intervention dans une location et une recherche de nid près d'un jardin impliquent des préparations et mesures de sécurité différentes.",
  torreilles: "À Torreilles, l'identification d'un nid à proximité d'un espace fréquenté doit précéder toute intervention ; pour les rongeurs, les points d'entrée restent prioritaires.",
  'saint-laurent-de-la-salanque': "À Saint-Laurent-de-la-Salanque, un garage avec traces de rongeurs et une infestation de blattes dans une cuisine demandent des diagnostics séparés.",
  thuir: "À Thuir, un traitement dans un commerce doit tenir compte des denrées et des contraintes d'activité, tandis que celui d'un logement vise les pièces réellement touchées.",
  'le-boulou': "Au Boulou, les maisons et dépendances demandent parfois une inspection des ouvertures et volumes de stockage avant installation de dispositifs contre les rongeurs.",
  ceret: "À Céret, les caves, garages et jardins méritent une inspection ciblée lorsqu'un passage de rats ou un nid sous toiture est signalé.",
  prades: "À Prades, les maisons, locaux professionnels et annexes peuvent avoir des points d'accès différents qu'il faut identifier avant tout traitement.",
  'ille-sur-tet': "À Ille-sur-Têt, une demande concernant des caves, réserves ou locaux commerciaux demande de distinguer les passages de rongeurs des refuges d'insectes.",
  millas: "À Millas, un garage ou un grenier peut abriter un passage de rongeurs ; le traitement inclut le repérage des ouvertures lorsqu'elles existent.",
  collioure: "À Collioure, l'accès aux bâtiments, façades et toitures peut nécessiter une préparation particulière pour traiter un nid en sécurité.",
  'port-vendres': "À Port-Vendres, locaux professionnels et logements peuvent impliquer des réserves ou pièces techniques : il faut identifier la zone infestée avant traitement.",
  'banyuls-sur-mer': "À Banyuls-sur-Mer, un diagnostic peut concerner une cave, une terrasse ou une toiture, avec des précautions très différentes selon le nuisible.",
  'amelie-les-bains-palalda': "À Amélie-les-Bains-Palalda, l'inspection des chambres en cas de punaises de lit ne suit pas la même méthode que la recherche de rats dans un bâtiment annexe.",
  'leucate': "À Leucate, une location saisonnière et un local d'activité n'ont pas les mêmes contraintes d'accès et de réoccupation. Tout déplacement depuis Perpignan doit être confirmé.",
  fitou: "À Fitou, les garages, remises et abords extérieurs peuvent nécessiter une inspection ciblée ; la possibilité de déplacement est confirmée lors du contact.",
  sigean: "À Sigean, les besoins de traitement dépendent du type de logement ou commerce. Le déplacement depuis Perpignan est à confirmer avant un rendez-vous.",
  'port-la-nouvelle': "À Port-la-Nouvelle, la préparation d'un traitement peut dépendre du rythme d'occupation des logements et des locaux professionnels, sous réserve de déplacement.",
  gruissan: "À Gruissan, le calendrier d'une location saisonnière peut modifier l'organisation d'une intervention sur punaises de lit ou blattes.",
  'peyrestortes': "À Peyrestortes, la recherche des passages dans les annexes et la localisation de nids en hauteur demandent des précautions spécifiques.",
  canohes: "À Canohès, une maison avec jardin et un commerce ne présentent pas les mêmes conditions d'inspection ni de traitement.",
  saleilles: "À Saleilles, les garages, jardins et intérieurs peuvent être examinés séparément afin de ne pas confondre rongeurs, insectes et nids.",
  claira: "À Claira, les réserves professionnelles, les garages et les pièces habitées exigent des méthodes de lutte proportionnées à l'activité constatée.",
  'salses-le-chateau': "À Salses-le-Château, les espaces de rangement et annexes méritent une recherche de points d'accès lorsque des traces de souris apparaissent.",
  baixas: "À Baixas, le diagnostic distingue les signes de rongeurs des refuges d'insectes avant de choisir le protocole.",
  vinca: "À Vinça, la configuration des maisons et des caves conduit à examiner les ouvertures avant tout traitement contre les rongeurs.",
  'vernet-les-bains': "À Vernet-les-Bains, les chambres d'un hébergement et les points d'accès d'un garage imposent des contrôles très différents.",
  'saint-paul-de-fenouillet': "À Saint-Paul-de-Fenouillet, l'inspection des caves, annexes et pièces habitées est adaptée aux indices réellement observés."
}
const rodent = [
 "Les bruits dans une cloison ne permettent pas à eux seuls de distinguer rat et souris : notez les horaires et lieux observés.",
 "Des emballages rongés ou des déjections dans une réserve doivent être documentés avant l'intervention.",
 "Un piège posé sans recherche des accès ne résout pas toujours le problème : les passages doivent être identifiés.",
 "Précisez la présence d'enfants ou d'animaux pour adapter la protection et l'emplacement des dispositifs.",
 "Des traces anciennes ne prouvent pas une activité actuelle : le diagnostic sert aussi à distinguer ces situations.",
 "Les caves et les combles doivent être vérifiés avec précaution si des bruits ou des dégâts y sont signalés."
]
const insects = [
 "Les blattes se réfugient souvent dans des espaces chauds et humides : l'examen des foyers guide le traitement.",
 "Pour les fourmis, relever leur trajet et les points d'entrée permet d'orienter les mesures.",
 "En cas de suspicion de punaises de lit, les coutures des matelas et le sommier doivent être inspectés.",
 "Les puces peuvent nécessiter un contrôle des textiles et zones de repos des animaux lorsque c'est pertinent.",
 "Des piqûres ne suffisent pas à identifier une punaise de lit : la confirmation de l'espèce est importante.",
 "Évitez de mélanger plusieurs produits avant le diagnostic ; ils risquent d'être inadaptés à l'espèce."
]
const nests = [
 "Ne bouchez pas l'entrée d'un nid en activité et ne tentez pas de le brûler ou de l'arroser.",
 "Une photo prise à distance, sans s'exposer, peut aider à préparer le diagnostic.",
 "Le retrait matériel du nid dépend de son accessibilité après neutralisation.",
 "La proximité d'une terrasse ou d'une porte impose d'abord de sécuriser les passages.",
 "La différence entre guêpe, frelon européen et frelon asiatique influence les précautions.",
 "Un nid dans une toiture peut être caché : l'observation des allées et venues précède la localisation."
]
export function getLocalEditorial(zone: InterventionZone) {
  const id=Number(zone.code)
  return { sector: sectorCopy[zone.region], city: cityInsights[zone.slug] || null,
    rTip: rodent[id%rodent.length], iTip: insects[Math.floor(id/3)%insects.length],
    fTip: nests[Math.floor(id/7)%nests.length] }
}
