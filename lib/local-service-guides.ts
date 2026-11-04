import type { InterventionZone } from '@/lib/intervention-zones'

/** Variantes de conseils réels, non attribués à une infestation observée dans une ville précise. */
const ratGuides = [
  "Dans un logement où des bruits apparaissent la nuit, commencez par noter la pièce, la fréquence et les accès possibles aux combles. Les traces de grignotage et les déjections aideront à identifier le type de rongeur ; le professionnel pourra ensuite choisir des moyens proportionnés, sans condamner des ouvertures au hasard.",
  "Pour une réserve alimentaire ou un local commercial, la priorité est de sécuriser les denrées et d'identifier les trajets entre les portes, les canalisations et les zones de stockage. Les dispositifs de capture ou de contrôle doivent être placés en fonction de ces déplacements, puis vérifiés dans le cadre du suivi.",
  "Dans un garage ou une dépendance, les rongeurs peuvent exploiter de petites ouvertures et rester invisibles pendant la journée. Photographier les dégâts, isoler les aliments accessibles et signaler les passages suspects permet de préparer un diagnostic plus utile qu'une pose de pièges sans stratégie.",
  "La découverte de déjections ne suffit pas à établir l'importance d'une infestation. Il faut différencier les indices anciens des signes récents, rechercher les voies d'entrée et tenir compte des occupants. Un protocole correct prévoit des mesures curatives, mais aussi une surveillance des accès après intervention.",
  "Dans un immeuble, les gaines techniques ou les caves peuvent communiquer avec plusieurs espaces. Le diagnostic peut donc nécessiter d'examiner la circulation des rongeurs plutôt que de se limiter à la pièce où un animal a été aperçu. La fermeture des passages s'organise ensuite sans perturber inutilement les installations.",
  "Une souris et un rat ne suivent pas nécessairement les mêmes déplacements ni les mêmes comportements. La taille des traces, leur emplacement et les éventuels dégâts sur les emballages guident l'identification. Les moyens de lutte doivent également être choisis pour limiter les risques envers les enfants et animaux.",
  "Si vous repérez des fils abîmés, des sacs percés ou des bruits dans une cloison, il est utile de documenter ces observations et d'éviter de manipuler les souillures sans protection. Le technicien recherche les points de passage et propose un protocole tenant compte de la sécurité électrique et des denrées.",
  "La présence d'un rongeur dans un espace de stockage justifie de vérifier les ouvertures basses, les réserves et les zones encombrées. L'objectif n'est pas d'appliquer le même dispositif partout : les emplacements, la fréquence des contrôles et les mesures d'hygiène dépendent du niveau d'activité réellement constaté.",
  "Lorsque des traces apparaissent près d'une cuisine ou d'un local technique, les points d'eau et de nourriture peuvent orienter les recherches. La dératisation s'appuie sur l'identification de l'espèce et des trajets, puis sur un plan de sécurisation du bâtiment pour réduire les risques de réintrusion.",
  "Pour un bâtiment utilisé seulement certains jours, on cherche à distinguer une activité toujours présente d'anciens indices. Une inspection des ouvertures, des gaines et des denrées permet de décider si une action curative est nécessaire et quelles vérifications prévoir à la prochaine occupation."
]
const insectGuides = [
  "Une présence répétée de cafards dans une cuisine justifie la recherche des abris près des appareils, conduites et zones humides. Il faut confirmer l'espèce, limiter les ressources accessibles et décider si un traitement localisé est suffisant. Une application générale sans diagnostic ne constitue pas une réponse professionnelle.",
  "Lorsque des fourmis apparaissent sur un plan de travail ou le long d'une plinthe, notez leurs trajets et les points de pénétration. L'observation des allées et venues aide à choisir entre prévention, élimination du foyer et traitement adapté, sans multiplier les pulvérisations près des aliments.",
  "Une infestation de puces doit être différenciée d'une présence de punaises de lit ou d'autres insectes piqueurs. Le contrôle des textiles, tapis et éventuels couchages d'animaux peut faire partie du diagnostic. Les mesures de préparation et de traitement dépendent de la confirmation obtenue.",
  "Dans un commerce alimentaire, des insectes visibles près des réserves imposent une identification des foyers et une prise en compte des contraintes sanitaires. La protection des denrées, l'accès aux équipements et la prévention des récidives sont discutés avant la mise en place du protocole.",
  "Les blattes privilégient souvent des refuges difficiles à voir : arrière des appareils, interstices ou conduites. Le technicien évalue les zones concernées et choisit des méthodes compatibles avec le lieu. Le nettoyage et la réduction de l'humidité peuvent être recommandés lorsque les circonstances s'y prêtent.",
  "Dans une habitation, les insectes observés dans une salle d'eau et ceux repérés dans une chambre ne signalent pas nécessairement la même infestation. Une identification fiable évite de traiter à tort les mauvaises surfaces et permet de préparer les pièces réellement concernées.",
  "Une désinsectisation durable ne consiste pas seulement à éliminer les individus visibles. L'emplacement du foyer, les accès, les sources de nourriture et l'environnement intérieur doivent être étudiés. Le contrôle post-traitement peut être adapté à l'espèce et au niveau d'activité.",
  "Si plusieurs produits ménagers ont déjà été appliqués contre les insectes, indiquez lesquels avant l'intervention. Cette information aide à éviter des associations inadaptées. Un diagnostic de blattes, fourmis ou puces repose sur des indices concrets, pas sur un simple signalement visuel isolé.",
  "Pour un logement de vacances ou une chambre louée, il est important de préciser les dates d'occupation et les pièces où des insectes ont été vus. Cela permet de préparer la visite, de déterminer les consignes de sécurité et d'organiser un éventuel contrôle avant la remise en service.",
  "Le traitement contre les insectes dépend aussi du support : joints, plinthes, textiles, meubles ou espaces techniques. Le professionnel identifie les surfaces utiles après avoir reconnu l'espèce, puis conseille les occupants sur les conditions de réutilisation des pièces et sur la surveillance."
]
const bedbugGuides = [
  "Les punaises de lit sont recherchées dans les coutures de matelas, les structures de lits et les interstices proches. Des piqûres ne permettent pas à elles seules de confirmer leur présence : conservez si possible un insecte pour identification ou signalez les traces repérées.",
  "Avant une intervention contre les punaises, évitez de déplacer sans précaution la literie ou les meubles d'une pièce à l'autre. Selon le diagnostic, des consignes précises peuvent être données pour le linge, l'accès aux plinthes et le rangement des objets entourant les couchages.",
  "Dans une chambre occupée régulièrement, le diagnostic peut porter sur le sommier, le matelas et les meubles adjacents. La méthode retenue tient compte de l'étendue des signes, des contraintes des occupants et des contrôles nécessaires pour confirmer l'efficacité.",
  "Une suspicion dans une location saisonnière nécessite de vérifier les indices avant d'organiser un traitement et une remise en service. Une intervention peut demander une préparation des textiles et des recommandations de suivi ; aucun protocole universel ne s'applique à toutes les chambres.",
  "Les traces sombres, mues et insectes visibles à proximité des couchages peuvent orienter l'inspection. Il faut toutefois distinguer une punaise de lit d'autres espèces et éviter l'usage répété de produits non adaptés, qui compliquerait la prise en charge.",
  "Lorsque plusieurs chambres ou pièces sont concernées, il est important de préciser les observations dans chacune d'elles. Le traitement peut être ciblé, élargi ou associé à des vérifications complémentaires selon les résultats de l'inspection.",
  "Le nombre de passages éventuels dépend de la méthode et de l'infestation, pas seulement de la surface du logement. Le professionnel doit expliquer les étapes de préparation, les précautions d'usage et les modalités de surveillance après intervention.",
  "Un traitement anti-punaises de lit commence par un diagnostic et un plan de préparation du logement. L'élimination de l'ensemble des insectes ne se déduit pas d'une absence de piqûres pendant quelques jours : une vérification peut être nécessaire.",
  "Dans un logement collectif, des indices dans la literie doivent être examinés sans conclure immédiatement à l'origine de l'infestation. Les mesures sont choisies selon les pièces et objets réellement affectés, en évitant de disperser le problème par des déplacements non maîtrisés.",
  "La prévention des punaises de lit dans un hébergement repose notamment sur la vigilance lors des changements d'occupants et sur le signalement rapide des indices. Si une infestation est confirmée, la préparation et le contrôle sont personnalisés plutôt que standardisés."
]
const hornetGuides = [
  "Un nid de frelons dans un arbre ou sous une toiture doit être localisé depuis un point sûr. La hauteur, l'espèce et la proximité d'une entrée influencent les techniques disponibles. N'essayez jamais de le faire tomber ou de le brûler.",
  "Si un va-et-vient de guêpes apparaît autour d'un volet ou d'une génoise, évitez de boucher l'ouverture. Le nid peut être dissimulé : la reconnaissance des trajectoires et l'examen des accès permettent de préparer une intervention adaptée.",
  "Frelon asiatique, frelon européen et guêpe ne nécessitent pas systématiquement la même approche. Le professionnel identifie les insectes et les contraintes du site avant de définir le périmètre de sécurité et les outils nécessaires.",
  "Pour un nid repéré à proximité d'une terrasse ou d'une zone de passage, éloignez les occupants et les animaux. La neutralisation éventuelle dépend de la localisation, de l'espèce et des possibilités d'accès en sécurité.",
  "Un nid au niveau d'un auvent, d'un arbre ou d'un conduit présente des difficultés différentes. La hauteur, les matériaux environnants et la présence de voisins doivent être évalués avant toute intervention.",
  "La présence de plusieurs insectes volants près d'une façade ne prouve pas toujours qu'un nid se trouve à cet endroit. Une observation à distance des trajectoires est utile ; ne tentez pas une pulvérisation aveugle dans les ouvertures.",
  "Lorsqu'un nid est situé en hauteur, l'utilisation d'équipements adaptés et la sécurisation du sol sont essentielles. Le retrait physique du nid ne peut être envisagé que si son accessibilité et sa neutralisation le permettent.",
  "Dans un jardin fréquenté par des enfants ou des animaux, un nid suspect doit conduire à limiter provisoirement l'accès à la zone. Les premières informations à transmettre sont sa localisation approximative et la hauteur estimée, sans vous en approcher.",
  "Un nid dissimulé dans un élément de toiture ne doit pas être bouché ou arrosé. Le traitement nécessite la localisation du foyer, l'identification des insectes et la définition d'un accès qui ne mette pas les occupants en danger.",
  "La destruction d'un nid n'est pas un geste de bricolage : une mauvaise tentative peut entraîner des piqûres multiples. Décrivez la situation au professionnel et respectez les consignes de sécurité avant son éventuel déplacement."
]
const followUpGuides = [
  "Après une première visite, notez les nouvelles traces et leur emplacement. Un suivi pertinent permet d'ajuster les dispositifs plutôt que de répéter automatiquement un traitement identique.",
  "Dans les espaces de stockage, conservez les denrées dans des contenants fermés et surveillez les accès identifiés lors du diagnostic.",
  "En présence d'insectes, la réduction des sources de nourriture ou d'humidité peut être utile lorsque cela correspond à l'espèce constatée.",
  "Si le bâtiment possède des annexes peu fréquentées, programmez une vérification de leurs ouvertures et des signes d'activité.",
  "Après une intervention, respectez les consignes d'usage et de réoccupation données pour les pièces ou espaces concernés.",
  "Les mesures d'obturation doivent être adaptées aux points d'entrée réellement identifiés afin de ne pas créer d'autres problèmes dans le bâtiment.",
  "Pour les logements saisonniers, une inspection avant l'arrivée de nouveaux occupants peut aider à repérer plus tôt une activité résiduelle.",
  "Il est utile de centraliser les observations des occupants pour distinguer les signes récurrents des signalements isolés.",
  "Dans un commerce, le nettoyage des réserves et le suivi des denrées sont complémentaires du protocole de lutte mis en place.",
  "Les moyens de prévention sont choisis après diagnostic : une mesure pertinente contre les rats peut être inutile contre les punaises de lit."
]

export function serviceGuides(zone: InterventionZone) {
  const i=Number(zone.code)
  return {
    rats: ratGuides[(i*7+1)%ratGuides.length],
    insects: insectGuides[(i*3+2)%insectGuides.length],
    bedbugs: bedbugGuides[(i*11+5)%bedbugGuides.length],
    nests: hornetGuides[(i*13+7)%hornetGuides.length],
    followUp: followUpGuides[(i*17+3)%followUpGuides.length],
  }
}
