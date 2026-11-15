/**
 * SPACE GRAVEYARD — script.js
 * NASA Space Apps Challenge 2026
 * "Abandoned but not Forgotten"
 *
 * Sections:
 *  1. Mission Data
 *  2. Stars Background
 *  3. Navigation (smooth scroll, hamburger, active links)
 *  4. Mission Cards (render, filter)
 *  5. Modal System (open, close, populate)
 *  6. Destination Tabs (Moon / Mars explore panel)
 *  7. Timeline (render from mission data)
 *  8. Scroll Animations (IntersectionObserver reveal)
 *  9. Stat Counter Animation
 * 10. Scroll Indicator
 */

'use strict';

// ============================================================
// 1. MISSION DATA
//    All facts sourced from NASA official pages (see index.html sources)
// ============================================================

const MISSIONS = [
  // ---- MOON MISSIONS ---- //
  {
    id: 'apollo-lrv',
    name: 'Apollo Lunar Roving Vehicles',
    destination: 'Moon',
    year: 1971,
    endYear: 1972,
    status: 'Inactive',
    location: 'Hadley–Apennine (Apollo 15), Descartes Highlands (Apollo 16), Taurus–Littrow (Apollo 17)',
    image: 'https://images-assets.nasa.gov/image/as17-134-20473/as17-134-20473~large.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Apollo_15_LRV.jpg/1200px-Apollo_15_LRV.jpg',
    imageCredit: 'NASA/Apollo 17 Crew',
    shortDescription: 'Three battery-powered electric cars that allowed Apollo astronauts to travel up to 7.6 km from the lunar module, vastly expanding the range and scientific value of each moonwalk.',
    overview: 'The Lunar Roving Vehicle (LRV) was a battery-powered four-wheeled rover used on the last three Apollo missions: Apollo 15 (1971), Apollo 16 (1972), and Apollo 17 (1972). Designed and built by Boeing for NASA, each LRV weighed about 210 kg on Earth and could carry 490 kg of payload. The vehicle had a top speed of about 13 km/h and allowed astronauts to travel much further from the lunar module than was possible on foot.',
    scientificPurpose: 'The LRV was designed to extend the range of human exploration on the lunar surface, allowing astronauts to collect geological samples from diverse locations, deploy scientific instruments, and perform detailed surveys of the lunar terrain. Without the LRV, the scientifically rich sampling sites visited on Apollo 15–17 would have been entirely out of reach.',
    achievements: [
      'Apollo 15 LRV covered 27.9 km across three EVAs, visiting the Hadley Rille and sampling ancient lunar highlands material.',
      'Apollo 16 LRV covered 26.7 km, collecting samples at Descartes Highlands that revised understanding of highland volcanism.',
      'Apollo 17 LRV covered 35.9 km — the longest total rover traverse of any Apollo mission — including the discovery of orange volcanic glass by geologist Harrison Schmitt.',
      'Three LRVs collectively allowed astronauts to collect over 170 kg of samples from diverse geological sites.',
      'Each mission ended with astronauts parking the rover at a distance to photograph the lunar module ascent — providing unique documentary footage.'
    ],
    whatHappened: 'All three LRVs were intentionally left on the lunar surface at the end of their respective missions — there was no mechanism to return them to the command module. They remain where they were parked on the Moon today, preserved in the extreme vacuum and low-temperature environment. NASA\'s Lunar Reconnaissance Orbiter has photographed the Apollo 15, 16, and 17 landing sites, and the LRVs are visible in these images.',
    whyItMatters: 'The Apollo LRVs fundamentally changed what was possible during a crewed lunar mission. The geological samples they enabled collecting remain the primary source of detailed information about the Moon\'s composition and history. As humanity returns to the Moon with the Artemis programme, the LRV heritage directly informs the design of modern lunar terrain vehicles.',
    nasaSource: 'https://science.nasa.gov/mission/apollo/'
  },
  {
    id: 'apollo-lm',
    name: 'Apollo Lunar Module Descent Stages',
    destination: 'Moon',
    year: 1969,
    endYear: 1972,
    status: 'Inactive',
    location: 'Multiple sites: Sea of Tranquility, Ocean of Storms, Fra Mauro, Hadley–Apennine, Descartes Highlands, Taurus–Littrow, Sea of Serenity',
    image: 'https://images-assets.nasa.gov/image/as11-40-5931/as11-40-5931~large.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg/1200px-Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg',
    imageCredit: 'NASA/Apollo 11 Crew',
    shortDescription: 'Six descent stage platforms — the lower halves of Apollo lunar modules — remain on the Moon at their respective landing sites. They served as launch pads for the ascent stages that returned astronauts to lunar orbit.',
    overview: 'Six Apollo lunar module descent stages (from Apollo 11, 12, 14, 15, 16, and 17) rest permanently on the Moon at their respective landing sites. The descent stage served as the landing platform and contained the descent engine, fuel, and much of the life support and scientific equipment. When the mission was complete, the ascent stage separated from the descent stage and fired its own engine to reach lunar orbit. The descent stage remained behind, used as a launch pad.',
    scientificPurpose: 'Beyond their primary role as landing and launch platforms, the descent stages also served as anchoring points for the Apollo Lunar Surface Experiments Packages (ALSEPs) — suites of scientific instruments including seismometers, heat flow experiments, and magnetometers — that transmitted data to Earth for years after the astronauts left.',
    achievements: [
      'Apollo 11\'s descent stage — Eagle — was the first human-made structure to land on the Moon with people aboard (July 20, 1969).',
      'The ALSEP instruments left at multiple sites collectively operated for years, providing the first long-term seismic monitoring of the Moon.',
      'Apollo 12\'s landing site was selected to retrieve parts from the earlier Surveyor 3 lander — demonstrating precision landing capability.',
      'The descent stages serve as permanent landmark references for future missions seeking to locate the historic Apollo sites.',
      'Apollo 17\'s ALSEP operated until September 1977, when NASA ended the programme for budgetary reasons.'
    ],
    whatHappened: 'All six descent stages remain exactly where they landed. With no atmosphere, weather, or geological activity on the Moon, they are essentially unchanged from the day the astronauts left. NASA\'s Lunar Reconnaissance Orbiter Camera (LROC) has imaged all six sites, and the descent stages are clearly visible in the high-resolution photographs.',
    whyItMatters: 'The Apollo landing sites are considered among the most important archaeological sites of the 20th century. They mark the first time humanity left its home planet and walked on another world. As the Artemis programme returns humans to the Moon, protecting these sites from disturbance has become an active area of international space law and policy.',
    nasaSource: 'https://science.nasa.gov/mission/apollo/'
  },
  {
    id: 'luna-2',
    name: 'Luna 2',
    destination: 'Moon',
    year: 1959,
    endYear: 1959,
    status: 'Inactive',
    location: 'Near Mare Imbrium, close to the craters Aristides, Archimedes, and Autolycus',
    image: 'https://nssdc.gsfc.nasa.gov/image/spacecraft/luna2.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Luna_2_insignia.png/800px-Luna_2_insignia.png',
    imageCredit: 'USSR / NASA NSSDC',
    shortDescription: 'The first human-made object to reach the surface of another world. Luna 2 impacted the Moon on September 14, 1959, 36 hours after launch, carrying Soviet pennants and scientific instruments.',
    overview: 'Luna 2 was a Soviet spacecraft launched on September 12, 1959 as part of the Soviet Luna programme. It was the second spacecraft to be launched toward the Moon and the first spacecraft to reach the surface of another celestial body. The spacecraft was a sphere fitted with antennas and scientific instruments, with no propulsion system of its own after the initial rocket burn.',
    scientificPurpose: 'Luna 2 carried instruments to measure radiation in the Van Allen belts and near-lunar space, interplanetary magnetic fields, and cosmic rays. It also carried metal pennants bearing the Soviet national emblem and the date — these were intended to survive the impact and mark the site.',
    achievements: [
      'First human-made object to reach the Moon and the surface of another celestial body (September 14, 1959).',
      'Confirmed the absence of a significant lunar magnetic field.',
      'Provided measurements of radiation and cosmic ray intensities in cislunar space.',
      'Demonstrated that the Moon had no significant radiation belts of its own.',
      'Successfully transmitted data until impact, providing the first direct measurements from the near-lunar environment.'
    ],
    whatHappened: 'Luna 2 impacted the Moon near the Aristides, Archimedes, and Autolycus craters in Mare Imbrium at a speed of approximately 3.3 km/s on September 14, 1959. At this velocity, the spacecraft was vaporised on impact — no intact structure survives. However, the Soviet pennants may have survived as fragments, marking one of the most historically significant impact sites in human history.',
    whyItMatters: 'Luna 2 was a watershed moment in the Space Race and in human history — the first time any object created by human hands had touched the surface of another world. It proved that the Moon was reachable, demonstrated that Soviet rocket technology had achieved a remarkable capability, and set off a chain of events that ultimately led to humans walking on the Moon a decade later.',
    nasaSource: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-014A'
  },

  // ---- MARS MISSIONS ---- //
  {
    id: 'sojourner',
    name: 'Sojourner',
    destination: 'Mars',
    year: 1997,
    endYear: 1997,
    status: 'Silent',
    location: 'Ares Vallis, Chryse Planitia — near the Carl Sagan Memorial Station (Mars Pathfinder lander)',
    image: 'https://images-assets.nasa.gov/image/PIA00563/PIA00563~large.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sojourner_on_Mars_PIA01122.jpg/1200px-Sojourner_on_Mars_PIA01122.jpg',
    imageCredit: 'NASA/JPL',
    shortDescription: 'The first Mars rover. Sojourner operated on the Martian surface for 83 Martian days — far exceeding its design life of 7 days — before losing contact with the Mars Pathfinder lander.',
    overview: 'Sojourner was part of the Mars Pathfinder mission, landing on Mars on July 4, 1997 in a bouncing airbag system. The rover was a small vehicle, weighing just 10.6 kg and measuring 65 cm long. It was controlled by operators on Earth with a time delay, and used its Alpha Proton X-ray Spectrometer (APXS) to analyse the composition of Martian rocks and soil.',
    scientificPurpose: 'Sojourner\'s primary scientific goals were to demonstrate the feasibility of wheeled mobility on Mars, characterise the weather and geology of Ares Vallis, and analyse the elemental composition of Martian rocks and soils using the APXS instrument. Ares Vallis was chosen because it appeared to be a flood plain where a wide variety of rock types could be found close together.',
    achievements: [
      'First wheeled vehicle to operate on the surface of Mars.',
      'Analysed the composition of 15 rocks and several soil samples with the APXS instrument.',
      'Operated for 83 Martian days (sols) — nearly 12 times its 7-sol design life.',
      'Demonstrated that airbag landing technology could work on Mars — a technique later used by the Mars Exploration Rovers.',
      'Returned over 550 images and significant atmospheric data showing dust devils and weather patterns.',
      'Rocks like "Barnacle Bill" and "Yogi" showed compositions similar to some Earth rocks, suggesting Mars\'s geological history was more complex than expected.'
    ],
    whatHappened: 'The Mars Pathfinder lander lost contact with Earth on September 27, 1997, likely due to a battery failure. Sojourner, designed to maintain radio contact only through the lander (not directly with Earth), continued to operate on the surface — circling the silent lander waiting for a signal. NASA attempted contact until March 1998 without success. Sojourner likely exhausted its own battery within days or weeks of the lander failure. The rover remains parked near the lander at Ares Vallis.',
    whyItMatters: 'Sojourner proved the concept of rover-based Mars exploration and opened a new era of planetary science. Its success directly led to the larger, more capable Mars Exploration Rovers Spirit and Opportunity. The airbag landing system Sojourner pioneered was reused on both MER missions. Every Mars rover since owes something to this tiny, groundbreaking machine.',
    nasaSource: 'https://www.nasa.gov/mission/mars-pathfinder/'
  },
  {
    id: 'spirit',
    name: 'Spirit (MER-A)',
    destination: 'Mars',
    year: 2004,
    endYear: 2010,
    status: 'Silent',
    location: 'Troy — a soft patch of iron sulphate-rich soil in Gusev Crater, near Home Plate',
    image: 'https://images-assets.nasa.gov/image/PIA05117/PIA05117~large.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Spirit_self-portrait.jpg/1024px-Spirit_self-portrait.jpg',
    imageCredit: 'NASA/JPL-Caltech',
    shortDescription: 'One half of the twin Mars Exploration Rover mission. Spirit landed in Gusev Crater on January 4, 2004, and operated for over six years before becoming stuck in soft soil and falling permanently silent in 2010.',
    overview: 'Spirit was one of two Mars Exploration Rovers (MER) launched by NASA in 2003. It landed in Gusev Crater on January 4, 2004, using a combination of parachutes, retrorockets, and airbags. Spirit was 1.6 metres tall, 2.3 metres wide, and weighed 185 kg. It was designed for a 90-sol mission, but continued operating far beyond that, roving across the Columbia Hills, climbing ridges, and performing detailed geological surveys.',
    scientificPurpose: 'Spirit was designed to study the rocks and soils of Gusev Crater — a crater theorised to have once held a lake — to look for evidence of past water activity. It carried a camera suite (Pancam, Navcam, Hazcam), a Microscopic Imager, a Miniature Thermal Emission Spectrometer, an APXS, a Mössbauer Spectrometer, and a Rock Abrasion Tool.',
    achievements: [
      'Operated for 2,208 sols — nearly 25 times its 90-sol design life.',
      'Travelled 7.73 km across the Martian surface.',
      'Discovered silica-rich soil at Home Plate, suggesting past hydrothermal activity — one of the strongest indications of past watery conditions found in Gusev Crater.',
      'Climbed Husband Hill (the highest point in the Columbia Hills), providing panoramic views of Gusev Crater.',
      'Discovered that rocks in the Columbia Hills had been altered by water, providing direct evidence for water\'s past role in the region.',
      'Captured the first view of a dust devil on Mars (May 2005).'
    ],
    whatHappened: 'In April 2009, Spirit became trapped in a patch of soft, iron sulphate-rich soil called "Troy." Despite months of attempts to extricate the rover, NASA announced in January 2010 that Spirit would remain stationary as a science platform. Because of its angle relative to the Sun, Spirit\'s solar panels could not generate sufficient power to survive the Martian winter. The last communication from Spirit was received on March 22, 2010. NASA attempted contact until May 25, 2011, then ended active attempts.',
    whyItMatters: 'Spirit\'s entrapment in soft Martian soil taught NASA engineers critical lessons about rover mobility and soil mechanics on Mars. The silica discovery it made — arguably its most important — pointed toward past hydrothermal environments where microbial life could theoretically have existed. The rover\'s longevity demonstrated how over-engineering for survival pays scientific dividends many times over.',
    nasaSource: 'https://www.nasa.gov/mission/mars-exploration-rover-spirit/'
  },
  {
    id: 'opportunity',
    name: 'Opportunity (MER-B)',
    destination: 'Mars',
    year: 2004,
    endYear: 2018,
    status: 'Silent',
    location: 'Perseverance Valley, western rim of Endeavour Crater, Meridiani Planum',
    image: 'https://images-assets.nasa.gov/image/PIA06739/PIA06739~large.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Opportunity_self-portrait_-_PIA19154.jpg/1024px-Opportunity_self-portrait_-_PIA19154.jpg',
    imageCredit: 'NASA/JPL-Caltech',
    shortDescription: 'The longest-operating Mars surface mission. Opportunity explored Mars for nearly 15 years — 60 times its planned mission length — until a global dust storm in June 2018 ended its power supply and silenced it forever.',
    overview: 'Opportunity (MER-B) landed in Meridiani Planum on January 25, 2004, landing in a small crater — a fortuitous natural sampling site. It was the twin of Spirit, with identical instruments and capabilities. Opportunity went on to become the longest-operating Mars surface mission in history, far exceeding its 90-sol design life and operating for 5,111 Martian days (sols) over nearly 15 Earth years.',
    scientificPurpose: 'Opportunity was sent to Meridiani Planum because Mars Global Surveyor had detected hematite deposits there — a mineral that typically forms in the presence of water. Its scientific mission was to characterise the evidence for past aqueous environments and assess the habitability of ancient Mars.',
    achievements: [
      'Operated for 5,111 sols — over 55 times its 90-sol design life — the longest Mars surface mission in history.',
      'Travelled 45.16 km — the longest distance driven on another world at the time it fell silent.',
      'Discovered haematite "blueberries" — spherical iron oxide concretions proving that liquid water once stood at Meridiani Planum.',
      'Found evidence that liquid water was once present on Mars in multiple locations and that it had an acidic pH.',
      'Investigated Victoria Crater and Endeavour Crater, the latter providing access to rocks billions of years old.',
      'Found phyllosilicate clay minerals at Endeavour Crater indicating more neutral-pH water existed in early Martian history.',
      'Last communication received June 10, 2018 — final message: power levels critically low as dust storm darkened the sky.'
    ],
    whatHappened: 'In June 2018, a massive global dust storm engulfed Mars — one of the most severe in recorded history. The storm reduced sunlight reaching the surface to near zero, cutting off Opportunity\'s solar power. The last communication was received on June 10, 2018. NASA attempted to contact the rover over 1,000 times in the following months. On February 13, 2019, NASA officially declared the Opportunity mission complete. The rover rests in Perseverance Valley, its solar panels coated with dust, its batteries unable to charge.',
    whyItMatters: 'Opportunity\'s discovery that liquid water once existed on Mars — with chemistry potentially compatible with life — is one of the most important findings in the history of planetary science. The rover\'s extraordinary longevity inspired engineers and scientists worldwide. Its final image, partially obscured by storm dust, became one of the most emotionally resonant photographs in space exploration history.',
    nasaSource: 'https://www.nasa.gov/mission/mars-exploration-rover-opportunity/'
  },
  {
    id: 'phoenix',
    name: 'Phoenix Mars Lander',
    destination: 'Mars',
    year: 2008,
    endYear: 2008,
    status: 'Silent',
    location: 'Green Valley, Vastitas Borealis — near the Martian north polar region, 68.2°N, 234.3°E',
    image: 'https://images-assets.nasa.gov/image/PIA10759/PIA10759~large.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Phoenix_lander_PIA10759.jpg/1200px-Phoenix_lander_PIA10759.jpg',
    imageCredit: 'NASA/JPL-Caltech/University of Arizona',
    shortDescription: 'The first lander to touch down in the Martian polar region. Phoenix confirmed the presence of water ice just beneath the Martian surface and operated for 157 days before polar winter and CO₂ frost ended its mission.',
    overview: 'Phoenix was a stationary lander launched in August 2007 and landing in the Martian arctic on May 25, 2008 — the first spacecraft to soft-land in the Martian polar region. Unlike the MER rovers, Phoenix was designed to stay in place and conduct deep sampling with a robotic arm that could dig trenches in the Martian soil. It was designed for a 90-sol mission and operated for 157 sols.',
    scientificPurpose: 'Phoenix was sent to the Martian arctic to study whether the polar environment could have been or could be suitable for microbial life. It targeted the polar region because Mars Odyssey had detected hydrogen — a proxy for water ice — just beneath the surface. Its Wet Chemistry Laboratory could identify organic compounds, while its TEGA (Thermal and Evolved Gas Analyser) could bake soil samples and study what gases were released.',
    achievements: [
      'Confirmed the presence of water ice just beneath the Martian surface — the first time water had been directly confirmed on Mars beyond the ice caps.',
      'Observed snowfall from Martian clouds — the first direct observation of precipitation on Mars.',
      'Detected calcium carbonate in the soil, suggesting liquid water had once reacted with Martian minerals.',
      'Measured perchlorate salts in the soil, which are significant for understanding Martian habitability and water chemistry.',
      'Successfully operated for 157 sols — 67 beyond its 90-sol design life.',
      'Provided the first long-term meteorological dataset from the Martian arctic.'
    ],
    whatHappened: 'As the Martian arctic autumn arrived, polar night descended and solar power diminished. Simultaneously, carbon dioxide frost from the Martian atmosphere began coating Phoenix\'s solar panels and eventually the entire lander. The last communication was received on November 2, 2008. Subsequent observations by the Mars Reconnaissance Orbiter showed ice accumulated on the lander. The lander\'s structure was likely damaged by the CO₂ ice loads — it is not expected to function even if sunlight returned. NASA\'s Mars Reconnaissance Orbiter photographed the site in 2010 and 2017, confirming the lander remains in place.',
    whyItMatters: 'Phoenix directly confirmed water ice on Mars — a finding of profound importance for both habitability studies and future human exploration (water ice is a potential in-situ resource). Its discovery of perchlorates changed our understanding of Martian soil chemistry and has implications for the search for organic compounds. Phoenix proved that sophisticated chemistry laboratories could operate successfully in the challenging Martian polar environment.',
    nasaSource: 'https://www.nasa.gov/mission/phoenix/'
  }
];

// ============================================================
// 2. STARS BACKGROUND
//    Dynamically generates star elements in the hero section
// ============================================================

function generateStars() {
  const container = document.getElementById('stars');
  if (!container) return;

  const count = 200;

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size: mostly tiny
    const size = Math.random() < 0.8
      ? Math.random() * 1.5 + 0.5   // 0.5–2px (small)
      : Math.random() * 2.5 + 1.5;  // 1.5–4px (larger)

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;
    const minOp = Math.random() * 0.2 + 0.05;
    const maxOp = Math.random() * 0.6 + 0.4;

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --d: ${duration}s;
      --delay: ${delay}s;
      --min-op: ${minOp};
      --max-op: ${maxOp};
    `;

    container.appendChild(star);
  }
}

// ============================================================
// 3. NAVIGATION
//    Smooth scroll handled by CSS scroll-behavior.
//    Hamburger menu toggle for mobile.
//    Active link highlighting based on scroll position.
// ============================================================

function initNavigation() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const navLinks   = document.getElementById('navLinks');
  const links      = navLinks.querySelectorAll('.nav-link');

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile nav when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Navbar background on scroll + active link tracking
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    // Add scrolled class when past hero
    navbar.classList.toggle('scrolled', window.scrollY > 80);

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run immediately on page load
}

// ============================================================
// 4. MISSION CARDS
//    Renders mission cards into the grid, supports filtering.
// ============================================================

function renderMissionCards(filter = 'all') {
  const grid = document.getElementById('missionGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? MISSIONS
    : MISSIONS.filter(m => m.destination === filter);

  grid.innerHTML = '';

  filtered.forEach((mission, index) => {
    const card = document.createElement('div');
    card.classList.add('mission-card');
    card.style.animationDelay = `${index * 0.08}s`;
    card.setAttribute('data-id', mission.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Learn more about ${mission.name}`);

    const isMoon   = mission.destination === 'Moon';
    const badgeDest = isMoon ? 'badge-moon' : 'badge-mars';
    const destIcon  = isMoon ? '🌕' : '🔴';
    const statusClass = mission.status === 'Silent' ? 'status-silent' : 'status-inactive';

    card.innerHTML = `
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${mission.image}"
          alt="${mission.name} — ${mission.destination}"
          loading="lazy"
          onerror="this.src='${mission.imageFallback}'"
        />
        <span class="card-status-badge ${statusClass}">${mission.status}</span>
        <span class="card-destination-badge ${badgeDest}">${destIcon} ${mission.destination}</span>
      </div>
      <div class="card-body">
        <p class="card-year">${mission.year}${mission.endYear && mission.endYear !== mission.year ? '–' + mission.endYear : ''}</p>
        <h3 class="card-title">${mission.name}</h3>
        <p class="card-desc">${mission.shortDescription}</p>
        <button class="card-btn" data-id="${mission.id}">Explore Mission →</button>
      </div>
    `;

    // Open modal on card click or keyboard Enter/Space
    card.addEventListener('click', () => openModal(mission.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(mission.id);
      }
    });

    grid.appendChild(card);
  });
}

function initMissionFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMissionCards(btn.dataset.filter);
    });
  });
}

// ============================================================
// 5. MODAL SYSTEM
//    Opens and populates the mission detail modal.
//    Closes on overlay click, close button, or ESC key.
// ============================================================

function openModal(missionId) {
  const mission = MISSIONS.find(m => m.id === missionId);
  if (!mission) return;

  const overlay = document.getElementById('modalOverlay');
  const isMoon  = mission.destination === 'Moon';

  // Populate image
  const img = document.getElementById('modalImage');
  img.src = mission.image;
  img.alt = mission.name;
  img.onerror = () => { img.src = mission.imageFallback; };
  document.getElementById('modalImageCredit').textContent = `📷 ${mission.imageCredit}`;

  // Destination and status badges
  const badgeDest  = isMoon ? 'badge-moon' : 'badge-mars';
  const destIcon   = isMoon ? '🌕' : '🔴';
  const statusClass = mission.status === 'Silent' ? 'status-silent' : 'status-inactive';
  document.getElementById('modalBadges').innerHTML = `
    <span class="card-destination-badge ${badgeDest}">${destIcon} ${mission.destination}</span>
    <span class="card-status-badge ${statusClass}">${mission.status}</span>
  `;

  // Header
  document.getElementById('modalTitle').textContent = mission.name;
  document.getElementById('modalSubtitle').textContent =
    `${mission.destination} · ${mission.year}${mission.endYear && mission.endYear !== mission.year ? '–' + mission.endYear : ''} · ${mission.status}`;

  // Body sections
  document.getElementById('modalOverview').textContent         = mission.overview;
  document.getElementById('modalScientificPurpose').textContent = mission.scientificPurpose;
  document.getElementById('modalWhatHappened').textContent      = mission.whatHappened;
  document.getElementById('modalWhyItMatters').textContent      = mission.whyItMatters;
  document.getElementById('modalLocation').textContent          = mission.location;

  // Achievements list
  const achievementsList = document.getElementById('modalAchievements');
  achievementsList.innerHTML = mission.achievements
    .map(a => `<li>${a}</li>`)
    .join('');

  // Source link
  const sourceLink = document.getElementById('modalSource');
  sourceLink.href = mission.nasaSource;

  // Show modal
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
  document.getElementById('modalClose').focus();
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay   = document.getElementById('modalOverlay');
  const closeBtn  = document.getElementById('modalClose');

  closeBtn.addEventListener('click', closeModal);

  // Close on overlay background click (not on modal itself)
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  // Close on ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });
}

// ============================================================
// 6. DESTINATION TABS (Moon / Mars explore panel)
// ============================================================

function renderDestinationMachines() {
  const moonList = document.getElementById('moonMachines');
  const marsList = document.getElementById('marsMachines');
  if (!moonList || !marsList) return;

  const moonMissions = MISSIONS.filter(m => m.destination === 'Moon');
  const marsMissions = MISSIONS.filter(m => m.destination === 'Mars');

  function buildItem(mission) {
    const item = document.createElement('div');
    item.classList.add('dest-machine-item');
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Open details for ${mission.name}`);
    item.innerHTML = `
      <img
        class="dest-machine-thumb"
        src="${mission.image}"
        alt="${mission.name}"
        loading="lazy"
        onerror="this.src='${mission.imageFallback}'"
      />
      <div class="dest-machine-info">
        <p class="dest-machine-name">${mission.name}</p>
        <p class="dest-machine-year">${mission.year}${mission.endYear && mission.endYear !== mission.year ? '–' + mission.endYear : ''} · ${mission.status}</p>
      </div>
    `;
    item.addEventListener('click', () => openModal(mission.id));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(mission.id); }
    });
    return item;
  }

  moonMissions.forEach(m => moonList.appendChild(buildItem(m)));
  marsMissions.forEach(m => marsList.appendChild(buildItem(m)));
}

function initDestinationTabs() {
  const tabs      = document.querySelectorAll('.dest-tab');
  const moonPanel = document.getElementById('moonPanel');
  const marsPanel = document.getElementById('marsPanel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.dataset.dest === 'moon') {
        moonPanel.classList.add('active');
        marsPanel.classList.remove('active');
      } else {
        marsPanel.classList.add('active');
        moonPanel.classList.remove('active');
      }
    });
  });
}

// ============================================================
// 7. TIMELINE
//    Renders mission milestones in chronological order.
// ============================================================

// Extra timeline events (not main mission cards but important milestones)
const TIMELINE_EXTRAS = [
  {
    id: 'apollo-11-landing',
    name: 'Apollo 11 — Moon Landing',
    destination: 'Moon',
    year: 1969,
    shortDescription: 'Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon. The Eagle descent stage remains at Tranquility Base.'
  },
  {
    id: 'mars-pathfinder-land',
    name: 'Mars Pathfinder Landing',
    destination: 'Mars',
    year: 1997,
    shortDescription: 'Mars Pathfinder lands in Ares Vallis on July 4th, 1997, deploying Sojourner — the first Mars rover.'
  }
];

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  // Combine main missions with extra events, deduplicate by year/name, sort chronologically
  const allEvents = [
    ...MISSIONS.map(m => ({
      id: m.id,
      name: m.name,
      destination: m.destination,
      year: m.year,
      shortDescription: m.shortDescription
    })),
    ...TIMELINE_EXTRAS
  ];

  // Sort by year, then alphabetically for same year
  allEvents.sort((a, b) => a.year - b.year || a.name.localeCompare(b.name));

  // Remove duplicates (same id as a main mission that's already in MISSIONS)
  const seen = new Set();
  const unique = allEvents.filter(e => {
    if (seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });

  unique.forEach((event, index) => {
    const item = document.createElement('div');
    item.classList.add('timeline-item', 'reveal');
    item.style.animationDelay = `${index * 0.07}s`;

    const isMission = MISSIONS.some(m => m.id === event.id);
    const destIcon  = event.destination === 'Moon' ? '🌕' : '🔴';

    item.innerHTML = `
      <p class="timeline-year">${event.year}</p>
      <h3 class="timeline-title">${event.name}</h3>
      <p class="timeline-dest">${destIcon} ${event.destination}</p>
      <p class="timeline-desc">${event.shortDescription}</p>
      ${isMission ? `<button class="card-btn" style="margin-top:0.75rem" data-open="${event.id}">Learn More →</button>` : ''}
    `;

    // If it's a mission, hook the button
    if (isMission) {
      const btn = item.querySelector('.card-btn');
      if (btn) btn.addEventListener('click', () => openModal(event.id));
    }

    container.appendChild(item);
  });
}

// ============================================================
// 8. SCROLL REVEAL ANIMATION
//    Uses IntersectionObserver to add .visible to .reveal elements.
// ============================================================

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Once revealed, stop watching
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// ============================================================
// 9. STAT COUNTER ANIMATION
//    Counts up numbers inside .stat-number elements.
// ============================================================

function animateCounter(el, target, duration = 1200) {
  let start    = 0;
  const step   = 16; // ~60fps
  const steps  = Math.ceil(duration / step);
  const inc    = target / steps;
  let current  = 0;

  const timer = setInterval(() => {
    current += inc;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.target, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
}

// ============================================================
// 10. SCROLL INDICATOR
//     Hides the scroll indicator once the user scrolls.
// ============================================================

function initScrollIndicator() {
  const indicator = document.getElementById('scrollIndicator');
  if (!indicator) return;

  function checkScroll() {
    indicator.classList.toggle('hidden', window.scrollY > 80);
  }

  window.addEventListener('scroll', checkScroll, { passive: true });
}

// ============================================================
// INIT — Run everything when the DOM is ready
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  initNavigation();
  renderMissionCards();
  initMissionFilters();
  initModal();
  renderDestinationMachines();
  initDestinationTabs();
  renderTimeline();
  initScrollReveal();
  initStatCounters();
  initScrollIndicator();
});
