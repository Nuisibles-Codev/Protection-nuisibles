import Image from 'next/image'

type Topic = 'punaises' | 'blattes' | 'frelons' | 'deratisation' | 'depigeonnage'

const sources = {
  punaises: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Adult_bed_bug%2C_Cimex_lectularius.jpg',
    alt: 'Punaise de lit adulte Cimex lectularius photographiée en gros plan',
    caption: 'Punaise de lit adulte (Cimex lectularius)',
    credit: 'Photo : CDC / Piotr Naskrecki',
    url: 'https://commons.wikimedia.org/wiki/File:Adult_bed_bug,_Cimex_lectularius.jpg',
    license: 'Domaine public',
  },
  blattes: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Blatella_germanica_cdc.jpg',
    alt: 'Blatte germanique femelle, insecte rampant associé aux infestations intérieures',
    caption: 'Blatte germanique (Blattella germanica)',
    credit: 'Photo : CDC / PHIL',
    url: 'https://commons.wikimedia.org/wiki/File:Blatella_germanica_cdc.jpg',
    license: 'Domaine public',
  },
  frelons: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Vespa_velutina_nest.JPG',
    alt: 'Frelon asiatique à l’entrée de son nid primaire',
    caption: 'Frelon asiatique et nid primaire',
    credit: 'Photo : Francis ITHURBURU',
    url: 'https://commons.wikimedia.org/wiki/File:Vespa_velutina_nest.JPG',
    license: 'CC BY-SA 3.0',
  },
  depigeonnage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Bird_control_spikes.JPG',
    alt: 'Pigeons sur une corniche de bâtiment équipée de dispositifs anti-oiseaux',
    caption: 'Pigeons sur une corniche : évaluer les points de perchage et les dispositifs adaptés',
    credit: 'Photo : Rselzer1',
    url: 'https://commons.wikimedia.org/wiki/File:Bird_control_spikes.JPG',
    license: 'CC BY-SA 4.0',
  },
  deratisation: {
    src: '/deratisation-inspection-pro.avif',
    alt: 'Illustration d’un technicien inspectant le bas d’un meuble de cuisine pour repérer les passages de rats ou souris',
    caption: 'Inspection des points d’entrée des rongeurs — illustration générée par IA',
    credit: '',
    url: '',
    license: '',
  },
} as const

/** Photos liées à chaque espèce, sans attribuer à tort une photo à un chantier de l'entreprise. */
export default function ServiceVisual({ topic, priority = false, className = '' }: {
  topic: Topic
  priority?: boolean
  className?: string
}) {
  const item = sources[topic]
  return (
    <figure className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}>
      <div className="relative min-h-[230px] w-full bg-slate-100 sm:min-h-[290px]">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          unoptimized
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 460px"
          className="object-cover"
        />
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-3 text-xs leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-800">{item.caption}</span>
        {item.url && (
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-blue">
            {item.credit} · {item.license}
          </a>
        )}
      </figcaption>
    </figure>
  )
}
