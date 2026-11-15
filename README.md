# Space Graveyard: The Forgotten Machines of Space Exploration

**Tagline:** *The Forgotten Machines of Space Exploration*  
**Challenge:** *Abandoned but not Forgotten* — NASA International Space Apps Challenge 2026  
**Website Demo:** Open `index.html` in any modern web browser or run via VS Code Live Server.

---

## 1. Project Overview & Submission Summary

### NASA Space Apps Challenge Submission Pitch
> Across the stark desolation of the Moon and the rusted plains of Mars rest dozens of humanity's greatest robotic pioneers. From Luna 2's historic impact in 1959 to Opportunity's final dust-shrouded transmission from Perseverance Valley in 2018, these machines extended our reach across the cosmos before falling permanently silent. **Space Graveyard** is an interactive digital museum that brings these forgotten sentinels back to life. Rather than viewing them as planetary debris, Space Graveyard honors them as scientific milestones and cultural heritage sites. Visitors can explore detailed 3D-inspired cards, inspect interactive geological destination maps, navigate an archival timeline, and delve into verified NASA telemetry, images, and science outcomes. Space Graveyard ensures that humanity's first footprints beyond Earth are never forgotten.

---

## 2. Problem Statement

Since the dawn of the Space Age, humans have dispatched orbiters, landers, and rovers across our solar system. When communications cease, power depletes, or mission lifetimes conclude, these machines remain at their resting sites on alien worlds. 

General audiences often view these inactive assets either as "space junk" or lose sight of their historical importance after active operations end. There is a lack of accessible, engaging, and scientifically rigorous platforms that document:
- What each machine was engineered to achieve.
- Where and when they were deployed on the lunar regolith and Martian soil.
- The fundamental scientific breakthroughs they uncovered (such as hematite "blueberries" or subsurface water ice).
- The exact engineering challenges or environmental events that brought their missions to a close.
- Their enduring relevance as technical blueprints and archaeological sites for future exploration (such as NASA's Artemis and Mars Sample Return missions).

---

## 3. Proposed Solution

**Space Graveyard** is an interactive, dark-sky astronomical web museum built to commemorate these inactive exploratory craft. 

Designed with an aesthetic inspired by NASA mission dashboards and high-contrast observatory interfaces, the platform offers an educational journey:
1. **Curated Mission Dossiers:** Deep dives into iconic abandoned artifacts on the Moon (Apollo Lunar Roving Vehicles, Apollo Lunar Module Descent Stages, Luna 2) and Mars (Sojourner, Spirit, Opportunity, Phoenix).
2. **Interactive Filtering & Destinational Exploration:** Dual-mode lunar and Martian habitat views with regional landing coordinates and environmental overviews.
3. **Chronological Mission Timeline:** A unified historical narrative charting robotic space exploration from the earliest 1959 impact to modern deep-space robotic veterans.
4. **Interactive Detailed Telemetry Modals:** Comprehensive readouts highlighting mission objectives, scientific yields, terminal conditions, and contemporary relevance with direct links to official NASA records.
5. **Scientific Legacy Analysis:** An analytical exploration of the engineering lessons, technological spin-offs, and heritage-site policies stemming from these abandoned machines.

---

## 4. Key Features

- **Atmospheric Celestial Interface:** Dynamic HTML5/CSS starfield animation, glassmorphic HUD styling, and deep space color palette (`#05050f`, `#00d4ff`, `#ff6b35`).
- **Interactive Mission Explorer & Filter Engine:** Seamless filtering between Moon and Mars missions with responsive layout and smooth CSS transforms.
- **Detailed Mission Modal System:** Modular modal view featuring high-resolution archival imagery, mission specs, last-known coordinates, scientific discoveries, and failure-mode postmortems.
- **Interactive Destination Hub:** Tabbed panels dedicated to the Moon ("Museum in Regolith") and Mars ("The Red Graveyard"), detailing the machines resting in those environments.
- **Chronological Exploration Milestones:** Interactive visual vertical timeline detailing key dates and accomplishments.
- **Animated Performance & Statistics:** Dynamic scroll-triggered counters showcasing key milestones (e.g., kilometers traversed, operational longevity).
- **Responsive Architecture:** Fully mobile-friendly layout optimized across mobile (320px+), tablet, and ultrawide screens.
- **Zero-Dependency Vanilla Implementation:** Engineered purely with HTML5, CSS3, and modern vanilla JavaScript—runs instantly in any browser without npm, build steps, or backend services.

---

## 5. Technology Stack

- **HTML5:** Semantic markup, accessibility tags (`aria-*`, `role`), structured metadata.
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, Glassmorphism backdrop filters, hardware-accelerated animations (`transform`, `opacity`).
- **Vanilla JavaScript (ES6+):** Intersection Observer API for scroll reveals and counter animations, modal controllers, DOM rendering pipelines, event delegation, and accessible keyboard navigation (ESC, Enter, Space).
- **Typography:** Google Fonts (`Orbitron` for futuristic aerospace headers, `Inter` for clean technical prose).
- **Archival Assets:** NASA Image and Video Library, JPL Planetary Photojournal.

---

## 6. How to Run the Project

The application is completely self-contained and requires no backend, database, or package managers.

### Method 1: Direct File Launch
1. Clone or download this repository to your local computer.
2. Navigate to the `space-graveyard` directory.
3. Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local Development Server (VS Code)
1. Open the `space-graveyard` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500/`.

---

## 7. NASA Data & Image Sources

All mission information, coordinates, dates, and photographic assets were collected and cross-referenced against official NASA mission archives and planetary data centers:

| Mission | Celestial Body | Official NASA Archive Source |
| :--- | :--- | :--- |
| **Apollo Lunar Roving Vehicles (LRV)** | Moon | [NASA Science: Apollo Missions](https://science.nasa.gov/mission/apollo/) |
| **Apollo Lunar Module Descent Stages** | Moon | [NASA Apollo Program Archives](https://science.nasa.gov/mission/apollo/) |
| **Luna 2** | Moon | [NASA NSSDC Master Catalog: Luna 2](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1959-014A) |
| **Sojourner (Mars Pathfinder)** | Mars | [NASA Mars Pathfinder Mission](https://www.nasa.gov/mission/mars-pathfinder/) |
| **Spirit (MER-A)** | Mars | [NASA JPL Mars Exploration Rover Spirit](https://www.nasa.gov/mission/mars-exploration-rover-spirit/) |
| **Opportunity (MER-B)** | Mars | [NASA JPL Mars Exploration Rover Opportunity](https://www.nasa.gov/mission/mars-exploration-rover-opportunity/) |
| **Phoenix Mars Lander** | Mars | [NASA Phoenix Mars Mission](https://www.nasa.gov/mission/phoenix/) |

### Archival Media & Image Credits
- **NASA Image and Video Library:** [images.nasa.gov](https://images.nasa.gov/)
- **NASA / JPL-Caltech Planetary Photojournal:** [photojournal.jpl.nasa.gov](https://photojournal.jpl.nasa.gov/)
- **NASA Mars Exploration Resources:** [mars.nasa.gov/resources](https://mars.nasa.gov/resources/)
- Public domain imagery credited to NASA / JPL-Caltech / University of Arizona / Apollo Crew.

---

## 8. Project Structure

```
space-graveyard/
├── index.html       # Primary semantic structure, modal markup, and UI sections
├── style.css        # Responsive styles, glassmorphism, starfield, theme variables
├── script.js        # Mission data store, modal engine, timeline, and scroll logic
└── README.md        # Submission documentation, architecture, and source citations
```

---

## 9. Team Contributions

- **Team Member 1:** Catherine Maria Benny
  - *Contributions:* Concept architecture, UI/UX design, visual identity, frontend styling & responsive CSS layout, animation design, and presentation pitch.
- **Team Member 2:** Abhiram H
  - *Contributions:* NASA data curation & archival research, telemetry verification, JavaScript dynamic interaction systems (modals, filters, timeline, dynamic counters), and testing.

---

## 10. Acknowledgements
Developed with pride for the **NASA International Space Apps Challenge 2026**. Special thanks to the scientists, engineers, flight controllers, and technicians at NASA, JPL, and international partner agencies who conceived, built, and operated these historic emissaries across the stars.
