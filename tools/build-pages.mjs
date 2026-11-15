// Génère les pages services /travaux/*.html de Ciobanu Rénov.
// Lancer :  node tools/build-pages.mjs   (depuis le dossier du site)
// Contenu factuel uniquement : pas d'années d'expérience, d'assurance ni de prix inventés.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.ciobanu-renov.fr';
const TEL = '+33647991777', TEL_TXT = '06 47 99 17 77', WA = 'https://wa.me/33647991777', MAIL = 'ncbatipro@yahoo.com';
const TOWNS = ['Mézières-sur-Seine', 'Épône', 'Mantes-la-Jolie', 'Mantes-la-Ville', 'Aubergenville', 'Guerville', 'Rosny-sur-Seine', 'Les Mureaux', 'Flins-sur-Seine', 'Limay', 'Buchelay', 'Magnanville', 'Meulan-en-Yvelines', 'Gargenville', 'Issou', 'Septeuil', 'Houdan', 'Thoiry', 'Maule', 'Plaisir'];

const PAGES = [
  {
    slug: 'terrassement-fondations', nav: 'Terrassement & fondations',
    title: 'Terrassement et fondations à Mézières-sur-Seine (78) – Ciobanu Rénov',
    desc: 'Terrassement, fouilles et fondations pour maison, extension, garage ou terrasse à Mézières-sur-Seine, Mantes et dans les Yvelines. Devis gratuit : 06 47 99 17 77.',
    h1: 'Terrassement et fondations', h1b: 'dans les Yvelines',
    lead: 'Préparer le terrain et poser des fondations solides : c’est la base de tout projet durable. Nous réalisons les fouilles, les fondations et l’évacuation des terres pour votre maison, votre extension ou votre terrasse.',
    hero: 'realisations/fondations',
    does: ['Décapage et nivellement du terrain', 'Fouilles en rigole et en tranchée', 'Semelles filantes et fondations en béton armé', 'Plots et longrines', 'Préparation pour dalle, garage ou abri de jardin', 'Évacuation des terres et des gravats'],
    intro: 'Avant de construire une extension, un garage, une terrasse ou un mur de clôture, le terrain doit être préparé et les fondations dimensionnées pour le projet. Nous intervenons avec le matériel adapté et nous vous expliquons chaque étape avant de commencer.',
    photos: [['fondations', 'Chantier de fondations avec pompe à béton'], ['dalle-beton', 'Coulage d’une dalle en béton armé']],
    faq: [
      ['Faut-il une étude de sol avant les fondations ?', 'Pour une construction neuve sur un terrain classé en zone d’argile, une étude de sol peut être obligatoire. Pour une petite extension ou une terrasse, nous regardons le terrain lors de la visite et vous conseillons sur la solution adaptée.'],
      ['Évacuez-vous les terres ?', 'Oui. L’évacuation des terres et des gravats est prévue et chiffrée dans le devis.'],
      ['Pouvez-vous faire la dalle après les fondations ?', 'Oui, nous réalisons la suite des travaux : dalle en béton armé, murs et maçonnerie, avec un seul interlocuteur du début à la fin.'],
    ],
  },
  {
    slug: 'maconnerie-dalle-beton', nav: 'Maçonnerie & dalle béton',
    title: 'Maçon à Mézières-sur-Seine (78) – dalle béton, murs, maçonnerie | Ciobanu Rénov',
    desc: 'Maçonnerie générale à Mézières-sur-Seine, Mantes-la-Jolie, Épône et dans les Yvelines : dalles en béton armé, murs, murets, ouvertures et reprises. Devis gratuit.',
    h1: 'Maçonnerie et dalle béton', h1b: 'à Mézières-sur-Seine et alentours',
    lead: 'Dalle en béton armé, mur, muret, ouverture ou reprise de maçonnerie : nous réalisons vos travaux de maçonnerie avec soin, dans les délais annoncés sur le devis.',
    hero: 'realisations/dalle-beton',
    does: ['Dalles en béton armé (terrasse, garage, abri, extension)', 'Murs et murets en parpaings ou en briques', 'Murs de clôture', 'Création et élargissement d’ouvertures', 'Reprises de maçonnerie et réparations', 'Chapes et seuils'],
    intro: 'Une maçonnerie bien faite ne se voit pas : elle tient. Nous préparons le support, posons le ferraillage et coulons le béton dans les règles, puis nous laissons le chantier propre.',
    photos: [['dalle-beton', 'Coulage d’une dalle en béton armé'], ['fondations', 'Fondations avant la dalle']],
    faq: [
      ['Quelle épaisseur pour une dalle de terrasse ou de garage ?', 'Elle dépend de l’usage (piétons, voiture) et du terrain. Nous la définissons lors de la visite et elle est précisée sur le devis.'],
      ['Faut-il une autorisation pour un mur de clôture ?', 'Cela dépend de votre commune et de la hauteur du mur. Renseignez-vous en mairie (déclaration préalable ou non) ; nous vous indiquons les éléments à fournir.'],
      ['Intervenez-vous pour de petits travaux ?', 'Oui, nous intervenons aussi pour des réparations et des petits chantiers de maçonnerie. Contactez-nous pour en parler.'],
    ],
  },
  {
    slug: 'toiture-charpente', nav: 'Toiture & charpente',
    title: 'Toiture et charpente dans les Yvelines (78) – Ciobanu Rénov',
    desc: 'Travaux de toiture et charpente à Mézières-sur-Seine, Mantes, Épône et alentours : remplacement de tuiles, chevrons, liteaux, dépose et repose de couverture. Devis gratuit.',
    h1: 'Toiture et charpente', h1b: 'dans les Yvelines',
    lead: 'Tuiles cassées, liteaux fatigués ou chevrons à remplacer : nous intervenons sur votre toiture et votre charpente pour remettre votre maison hors d’eau.',
    hero: 'site/toiture',
    does: ['Remplacement de tuiles cassées ou déplacées', 'Dépose et repose de couverture', 'Remplacement de liteaux et de chevrons', 'Pose d’écran sous-toiture', 'Charpente pour extension, abri ou carport', 'Faîtage et rives'],
    intro: 'Une toiture en bon état protège toute la maison. Après la visite, nous vous expliquons ce qui doit être fait en priorité et nous chiffrons chaque poste séparément sur le devis.',
    photos: [],
    faq: [
      ['Faut-il refaire toute la toiture si quelques tuiles sont cassées ?', 'Non, pas forcément. Nous vérifions l’état des tuiles, des liteaux et de la charpente et nous vous proposons la solution adaptée.'],
      ['Faut-il une déclaration préalable ?', 'Si l’aspect extérieur change (matériau, couleur, forme), une déclaration préalable en mairie est en général nécessaire. Une réparation à l’identique n’en demande souvent pas ; renseignez-vous auprès de votre commune.'],
      ['Intervenez-vous en urgence après une tempête ?', 'Appelez-nous au ' + TEL_TXT + ' : nous faisons le maximum pour intervenir rapidement selon nos disponibilités.'],
    ],
  },
  {
    slug: 'isolation-facade', nav: 'Isolation & façade',
    title: 'Isolation et façade à Mézières-sur-Seine et dans les Yvelines – Ciobanu Rénov',
    desc: 'Isolation des combles, des murs et ravalement de façade à Mézières-sur-Seine, Mantes-la-Jolie, Aubergenville et alentours. Devis détaillé et gratuit.',
    h1: 'Isolation et façade', h1b: 'pour une maison plus confortable',
    lead: 'Une maison bien isolée est plus confortable été comme hiver. Nous isolons vos combles et vos murs, et nous redonnons un coup de neuf à votre façade.',
    hero: 'site/facade',
    does: ['Isolation des combles perdus et aménagés', 'Isolation des murs par l’intérieur (doublage)', 'Isolation de façade', 'Ravalement et enduit de façade', 'Réparation des fissures et reprises d’enduit', 'Finitions intérieures après isolation'],
    intro: 'Nous vous conseillons sur l’isolant et la technique adaptés à votre maison, puis nous réalisons les travaux proprement, jusqu’aux finitions.',
    photos: [],
    faq: [
      ['Par où commencer pour mieux isoler ?', 'Souvent par les combles, car une grande partie de la chaleur s’échappe par le toit. Nous regardons votre maison lors de la visite et vous conseillons sur les priorités.'],
      ['Faut-il une autorisation pour refaire une façade ?', 'Un ravalement qui change l’aspect de la façade demande en général une déclaration préalable en mairie. Certaines communes l’exigent même pour un ravalement à l’identique : renseignez-vous auprès de votre mairie.'],
      ['Les travaux d’isolation font-ils beaucoup de poussière ?', 'Nous protégeons les pièces et les sols, et nous nettoyons le chantier à la fin des travaux.'],
    ],
  },
  {
    slug: 'pavage-terrasse', nav: 'Pavage & terrasses',
    title: 'Pavage, allées et terrasses dans les Yvelines (78) – Ciobanu Rénov',
    desc: 'Allées pavées, cours, terrasses en bois et aménagements extérieurs à Mézières-sur-Seine, Épône, Mantes et alentours. Devis gratuit : 06 47 99 17 77.',
    h1: 'Pavage et terrasses', h1b: 'pour vos extérieurs',
    lead: 'Allée de garage, cour pavée ou terrasse en bois : nous aménageons vos extérieurs avec une préparation du sol sérieuse, pour un résultat qui dure.',
    hero: 'realisations/pavage',
    does: ['Allées et cours pavées', 'Préparation du sol et fond de forme', 'Bordures et caniveaux', 'Terrasses en bois sur lambourdes', 'Dalles et terrasses béton', 'Aménagements extérieurs'],
    intro: 'Un pavage tient dans le temps grâce à ce qu’on ne voit pas : le terrassement, le fond de forme et le compactage. Nous soignons chaque couche avant de poser les pavés ou le bois.',
    photos: [['pavage', 'Allée en pavés'], ['terrasse-bois', 'Terrasse en bois exotique avec bordure']],
    faq: [
      ['Quels pavés choisir pour une allée de garage ?', 'Il faut des pavés et une épaisseur adaptés au passage des voitures. Nous vous conseillons lors de la visite selon l’usage et votre budget.'],
      ['Une terrasse en bois demande-t-elle de l’entretien ?', 'Oui, un nettoyage régulier et, selon l’essence de bois, un traitement ou un saturateur. Nous vous expliquons l’entretien à la fin du chantier.'],
      ['Évacuez-vous la terre et l’ancien revêtement ?', 'Oui, l’évacuation est prévue et chiffrée dans le devis.'],
    ],
  },
  {
    slug: 'salle-de-bain', nav: 'Salle de bain',
    title: 'Rénovation de salle de bain à Mézières-sur-Seine (78) – Ciobanu Rénov',
    desc: 'Rénovation complète de salle de bain et salle d’eau dans les Yvelines : douche à l’italienne, carrelage, faïence, meuble vasque. Devis gratuit.',
    h1: 'Rénovation de salle de bain', h1b: 'clé en main',
    lead: 'Douche à l’italienne, faïence, carrelage, meuble vasque : nous rénovons votre salle de bain ou votre salle d’eau de A à Z, avec un seul interlocuteur.',
    hero: 'realisations/salle-de-bain-bleue',
    does: ['Dépose de l’ancienne salle de bain', 'Douche à l’italienne et receveur extra-plat', 'Faïence murale et carrelage de sol', 'Pose de meuble vasque, miroir et robinetterie', 'Étanchéité sous carrelage', 'Peinture et finitions'],
    intro: 'Une salle de bain se rénove en une seule fois et doit être étanche pour longtemps. Nous préparons les supports, posons l’étanchéité, puis la faïence et les équipements que vous avez choisis.',
    photos: [['salle-de-bain-bleue', 'Salle de bain rénovée : faïence bleue et double vasque'], ['douche-travertin', 'Douche à l’italienne en travertin'], ['salle-de-bain-verte', 'Salle de bain avec faïence verte'], ['salle-de-bain-beige', 'Salle d’eau rénovée avec douche']],
    faq: [
      ['Combien de temps dure la rénovation d’une salle de bain ?', 'Cela dépend de la taille et des travaux. La date de début et la durée estimée sont indiquées sur le devis avant la signature.'],
      ['Peut-on remplacer une baignoire par une douche à l’italienne ?', 'Oui, dans la plupart des cas. Nous vérifions l’évacuation et le sol lors de la visite.'],
      ['Fournissez-vous le carrelage et les équipements ?', 'Les deux sont possibles : nous pouvons fournir les matériaux ou poser ceux que vous avez choisis. C’est précisé sur le devis.'],
    ],
  },
  {
    slug: 'renovation-interieure', nav: 'Rénovation intérieure',
    title: 'Rénovation intérieure dans les Yvelines – parquet, peinture, placards | Ciobanu Rénov',
    desc: 'Rénovation intérieure à Mézières-sur-Seine, Mantes et alentours : pose de parquet (dont point de Hongrie), sols, peinture, placards sur mesure. Devis gratuit.',
    h1: 'Rénovation intérieure', h1b: 'sols, peinture et placards',
    lead: 'Parquet, sols, peinture, placards sur mesure : nous rénovons vos pièces pour les rendre plus belles et plus pratiques, en laissant le chantier propre chaque jour.',
    hero: 'realisations/cuisine-parquet',
    does: ['Pose de parquet, dont parquet point de Hongrie', 'Sols stratifiés et carrelage', 'Peinture des murs et plafonds', 'Placards et rangements sur mesure', 'Plaques de plâtre et cloisons', 'Rénovation complète d’appartement ou de maison'],
    intro: 'Nous coordonnons tous les travaux de la pièce — sols, murs, rangements — pour que vous n’ayez qu’un seul interlocuteur et un seul planning.',
    photos: [['parquet-point-de-hongrie', 'Parquet en point de Hongrie dans un séjour'], ['cuisine-parquet', 'Cuisine ouverte avec parquet point de Hongrie'], ['placards-sur-mesure', 'Placards sur mesure et parquet chêne'], ['renovation-interieure', 'Appartement rénové : sol et placards'], ['renovation-peinture-sol', 'Peinture et sol stratifié']],
    faq: [
      ['Peut-on habiter le logement pendant les travaux ?', 'Souvent oui, pièce par pièce. Nous en parlons lors de la visite pour organiser le chantier selon vos besoins.'],
      ['Posez-vous du parquet en point de Hongrie ?', 'Oui, nous posons le parquet point de Hongrie, comme sur les photos de nos réalisations.'],
      ['Faites-vous aussi la peinture ?', 'Oui, peinture des murs et plafonds, avec la préparation des supports.'],
    ],
  },
];

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ic = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  wa: '<path d="M3 21l1.6-4.6A9 9 0 1 1 8 19.6z"/><path d="M9 10c0 3 2 5 5 5l1.5-1.5-2-1-1 1c-1 0-2-1-2-2l1-1-1-2z"/>',
  doc: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
};
const svg = (k, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ic[k]}</svg>`;

function header(cur) {
  return `<header>
  <nav class="wrap nav">
    <a href="/" class="brand"><img src="/images/site/logo-icon.webp" alt="Logo Ciobanu Rénov" width="50" height="50"><b>Ciobanu Rénov</b></a>
    <ul class="menu" id="menu">
      <li><a href="/">Accueil</a></li>
      <li><a href="/#services" class="on">Services</a></li>
      <li><a href="/#realisations">Réalisations</a></li>
      <li><a href="/#zone">Zone</a></li>
      <li><a href="/#faq">FAQ</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>
    <div class="nav-r">
      <a class="ico-l" href="tel:${TEL}" aria-label="Appeler">${svg('phone')}</a>
      <a href="/#contact" class="btn btn-y">${svg('doc', '')}Devis gratuit</a>
      <button class="burger" aria-label="Menu" onclick="document.getElementById('menu').classList.toggle('open')">${svg('menu')}</button>
    </div>
  </nav>
</header>`;
}

function footer(cur) {
  const links = PAGES.map(p => `<li><a href="/travaux/${p.slug}.html"${p.slug === cur ? ' aria-current="page"' : ''}>${esc(p.nav)}</a></li>`).join('');
  return `<footer>
  <div class="wrap foot">
    <div>
      <div class="fbrand"><img src="/images/site/logo-icon.webp" alt=""><b>Ciobanu Rénov</b></div>
      <p>Votre artisan pour la construction, la rénovation et l’isolation à Mézières-sur-Seine et dans les Yvelines.</p>
    </div>
    <div><h2 class="fh">Nos travaux</h2><ul>${links}</ul></div>
    <div><h2 class="fh">Contact</h2>
      <ul class="fc">
        <li>${svg('phone')}<a href="tel:${TEL}">${TEL_TXT}</a></li>
        <li>${svg('wa')}<a href="${WA}" target="_blank" rel="noopener">Écrire sur WhatsApp</a></li>
        <li>${svg('pin')}<span>30 rue de la Vallée, Porte 15<br>78970 Mézières-sur-Seine</span></li>
      </ul>
    </div>
  </div>
  <div class="fbot"><div class="wrap">
    <span>© ${new Date().getFullYear()} Ciobanu Rénov</span>
    <span class="flinks"><a href="/mentions-legales.html">Mentions légales</a><a href="/mentions-legales.html#confidentialite">Confidentialité</a></span>
  </div></div>
</footer>
<a class="call-fab" href="tel:${TEL}" aria-label="Appeler">${svg('phone')}</a>`;
}

function page(p) {
  const url = `${SITE}/travaux/${p.slug}.html`;
  const heroImg = `/images/${p.hero}.webp`;
  const ogImg = `${SITE}/images/${p.hero.startsWith('site/') ? 'seo/og-image' : p.hero}.jpg`;
  const others = PAGES.filter(o => o.slug !== p.slug);
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Service', name: p.h1, serviceType: p.nav, description: p.desc, url,
      provider: { '@id': `${SITE}/#entreprise` },
      areaServed: TOWNS.map(t => ({ '@type': 'City', name: t })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Nos travaux', item: `${SITE}/#services` },
      { '@type': 'ListItem', position: 3, name: p.nav, item: url }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const gallery = p.photos.length ? `
<section class="sec">
  <div class="wrap">
    <span class="tag">Nos réalisations</span><h2 class="h2">Exemples de chantiers</h2>
    <div class="pg">${p.photos.map(([f, alt]) => `<a href="/images/realisations/${f}.webp"><img src="/images/realisations/${f}-thumb.webp" alt="${esc(alt)} – Ciobanu Rénov" loading="lazy"><span>${esc(alt)}</span></a>`).join('')}</div>
    <p class="more"><a href="/#realisations">Voir toutes nos réalisations ${svg('arrow')}</a></p>
  </div>
</section>` : '';
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="${url}">
<meta name="theme-color" content="#14171c">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="Ciobanu Rénov">
<meta property="og:title" content="${esc(p.h1)} – Ciobanu Rénov">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="32x32" href="/images/seo/favicon-32.png">
<link rel="apple-touch-icon" href="/images/seo/apple-touch-icon.png">
<link rel="preload" href="/fonts/montserrat-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/pages.css">
<script src="/config.js"></script>
<script>(function(){if(!SITE.umami)return;var s=document.createElement('script');s.defer=1;s.src='https://cloud.umami.is/script.js';s.dataset.websiteId=SITE.umami;document.head.appendChild(s)})();</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
${header(p.slug)}

<section class="phero" style="--bg:url('${heroImg}')">
  <div class="wrap">
    <nav class="crumbs" aria-label="Fil d’Ariane"><a href="/">Accueil</a><span>›</span><a href="/#services">Nos travaux</a><span>›</span><span aria-current="page">${esc(p.nav)}</span></nav>
    <h1>${esc(p.h1)}<br><span>${esc(p.h1b)}</span></h1>
    <p class="lead">${esc(p.lead)}</p>
    <div class="cta">
      <a href="/#contact" class="btn btn-y">Demander un devis gratuit ${svg('arrow', '')}</a>
      <a href="tel:${TEL}" class="btn btn-o">${svg('phone', '')}${TEL_TXT}</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap two">
    <div>
      <span class="tag">Nos prestations</span>
      <h2 class="h2">Ce que nous réalisons</h2>
      <p>${esc(p.intro)}</p>
    </div>
    <ul class="does">${p.does.map(d => `<li>${svg('check')}${esc(d)}</li>`).join('')}</ul>
  </div>
</section>
${gallery}
<section class="sec alt">
  <div class="wrap">
    <span class="tag">Méthode</span><h2 class="h2">Comment se déroule votre projet</h2>
    <ol class="steps4">
      <li><b>1</b><strong>Contact &amp; visite</strong><span>Vous nous appelez ou remplissez le formulaire. Nous venons voir le chantier.</span></li>
      <li><b>2</b><strong>Devis détaillé</strong><span>Chaque poste est chiffré, avec la date de début et la durée estimée.</span></li>
      <li><b>3</b><strong>Réalisation</strong><span>Les travaux sont faits avec soin, en vous tenant informé.</span></li>
      <li><b>4</b><strong>Réception &amp; nettoyage</strong><span>Nous vérifions le travail avec vous et laissons le chantier propre.</span></li>
    </ol>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <span class="tag">Questions fréquentes</span><h2 class="h2">Vos questions</h2>
    ${p.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n    ')}
  </div>
</section>

<section class="sec alt">
  <div class="wrap">
    <span class="tag">Zone d’intervention</span><h2 class="h2">${esc(p.nav)} à Mézières-sur-Seine et dans les Yvelines</h2>
    <p>Basés à Mézières-sur-Seine (78970), nous intervenons dans le secteur de Mantes, Épône, Aubergenville et Les Mureaux :</p>
    <div class="towns">${TOWNS.map(t => `<span>${t}</span>`).join('')}</div>
  </div>
</section>

<section class="ctaband">
  <div class="wrap">
    <div><h2>Un projet de ${esc(p.nav.toLowerCase())} ?</h2><p>Devis gratuit et sans engagement, après une visite sur place.</p></div>
    <div class="cta">
      <a href="/#contact" class="btn btn-y">${svg('doc', '')}Demander un devis</a>
      <a href="tel:${TEL}" class="btn btn-o">${svg('phone', '')}Appeler</a>
      <a href="${WA}" class="btn btn-o" target="_blank" rel="noopener">${svg('wa', '')}WhatsApp</a>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <h2 class="h2 sm">Nos autres travaux</h2>
    <div class="others">${others.map(o => `<a href="/travaux/${o.slug}.html">${esc(o.nav)} ${svg('arrow')}</a>`).join('')}</div>
  </div>
</section>

${footer(p.slug)}
<script>document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){try{window.umami&&umami.track('Appel téléphone',{page:'${p.slug}'})}catch(e){}})});</script>
</body>
</html>
`;
}

fs.mkdirSync(path.join(ROOT, 'travaux'), { recursive: true });
for (const p of PAGES) fs.writeFileSync(path.join(ROOT, 'travaux', p.slug + '.html'), page(p));

// sitemap
const today = new Date().toISOString().slice(0, 10);
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8').replace(/\s*<url>\s*<loc>https:\/\/www\.ciobanu-renov\.fr\/travaux\/[\s\S]*?<\/url>/g, '');
const add = PAGES.map(p => `  <url>\n    <loc>${SITE}/travaux/${p.slug}.html</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n  </url>`).join('\n');
sm = sm.replace('</urlset>', add + '\n</urlset>');
fs.writeFileSync(smPath, sm);
console.log('OK', PAGES.length, 'pages');
export { PAGES };
