# DESIGN DIRECTION: NIDAL ELNAEEM — “IN FOCUS” (`في دائرة الضوء`)

## 1. Visual Reference & Core Concept: “In Focus”
Inspired by layered spotlight studio architecture, **“In Focus” (`في دائرة الضوء`)** places the visitor inside an art-directed midnight broadcast newsroom.

Rather than flattening a single banner image or turning the interface into a hidden-object game, the **“In Focus”** opening scene separates the environment into four independent optical planes:
1. **Plane 0 — Deep Midnight Studio Architecture (Base Ambient Layer):** Darkened architectural glass panes, subtle broadcast grid coordinates, and shadowed newsroom depth (`#060E16` to `#0B1926`).
2. **Plane 1 — Studio Spotlight Reveal Layer (`--spot-x`, `--spot-y`):** A hardware-accelerated, mouse-following studio key-light (`radial-gradient` optical mask) that illuminates the sculpted broadcast globe (`studio-globe-detail.webp`), glass reflections (`studio-glass-architecture.webp`), warm champagne studio rim lines, and fine crimson optical coordinates in the background as the visitor moves across the scene.
3. **Plane 2 — Always-Lit Foreground Portrait & Editorial Identity:** Nidal Elnaeem’s real owner-supplied portrait (`portrait-04-broadcast-yellow-blazer.webp`), her Arabic and English display name, her vector calligraphic signature (`Nidal Elnaeem`), the exact `الحدث` context mark, her verified title (`Senior Social Media Writer · Reporter · Presenter`), top navigation, and the primary CTA button remain **100% illuminated, legible, and accessible at all times without hovering**.
4. **Plane 3 — Discreet Studio Lighting Control & Static Fallback:**
   - Includes a discreet, keyboard-accessible toggle in the scene corner: **Studio Spotlight: ON / OFF (`إضاءة الاستوديو: مفعّلة / ثابتة`)**.
   - On touch devices (`(hover: none)`) and when `prefers-reduced-motion: reduce` is enabled, the opening scene automatically renders a balanced, beautifully lit static studio composition with zero pointer tracking overhead.
   - All spotlight layers use `pointer-events: none` and `will-change: mask-image, opacity` via `requestAnimationFrame` so scrolling and button interactions remain effortless at 60fps.

---

## 2. Explicit Role Assignment for Every Local Asset (Established Before Coding)

| Local Workspace Asset | Extracted Clean Derivative(s) | Assigned Role in “In Focus” Architecture | Guardrails & Rules |
|---|---|---|---|
| `04_The_Broadcast_Edit.svg` (Embedded `960x960` JPEG) | `/media/derivatives/portrait-04-broadcast-yellow-blazer.{webp,avif}` | **Primary “In Focus” Opening Scene Foreground Portrait** + Behind the Work Plate IV | Always clearly lit; exact facial features preserved; never regenerated or lip-animated. |
| `cover LI.png` (`7680x1920` composite) | `/media/derivatives/studio-globe-detail.{webp,avif}` & `/media/derivatives/studio-glass-architecture.webp` | **Opening Scene Background Layers Only** (Sculpted broadcast globe & glass studio walls revealed in depth by the studio spotlight) | Never flattened or stretched as a full-page image; never served as an 8K PNG; **globe is used only in the Home opening scene**, never repeated on inner pages. |
| `02_Midnight_Broadcast.svg` (Vector Paths) | `<NidalSignature />` & `<AlHadathMark />` in `BrandVectors.tsx` | **Foreground Signature Reveal & Professional Context Mark** | Al Hadath mark used sparingly with clear personal-portfolio context; calligraphic signature gently revealed. |
| `01_Editorial_Portrait.svg` (Embedded `1152x2048` JPEG) | `/media/derivatives/portrait-01-studio-pinstripe.{webp,avif}` | **Journey Chapter III (The Pan-Arab Newsroom)**, **On Screen** Lead Explainer Companion & **Behind the Work** Plate I | Full three-quarter studio portrait with lavalier mic; responsive focal crop `50% 24%`. |
| `03_Gallery_Profile.svg` (Embedded `1152x2048` JPEG) | `/media/derivatives/portrait-03-newsroom-archive.{webp,avif}` | **Journey Chapter II (Television & Concurrent Horizons)**, **Words & Stories** Personal Reflection Lead & **Behind the Work** Plate III | Uncropped portrait before archival photo wall; responsive focal crop `52% 28%`. |
| `02_Midnight_Broadcast.svg` (Embedded `1440x1920` JPEG) | `/media/derivatives/portrait-02-saudi-media-forum.{webp,avif}` | **Journey Chapter IV (Public Forums & Presence)** & **Behind the Work** Plate II | Always displays explicit photographer credit **`@momen_alfadl`**; framed as industry attendance in Riyadh, not panel speaking/hosting. |
| Shared Facebook photo of May Al Muhandis | **NONE (Excluded)** | **Strictly Excluded** | Depicts colleague May Al Muhandis (`مي المهندس`); never used anywhere in the project. |

---

## 3. Palette & Bilingual Typography
- **Palette:**
  - Deep Studio Ink: `#060E16` / `#0A1622`
  - Architectural Glass Slate: `#102232`
  - Warm Monograph Ivory (for quiet reading sections): `#F4F0E8`
  - Primary Editorial Ivory Ink: `#F4EEE3`
  - Secondary Sand Prose Ink: `#D1C7B8`
  - Al Hadath Broadcast Crimson: `#ED2530`
  - Restrained Champagne Rim Accent: `#C8B692`
- **Typography:**
  - **Arabic Display (`Amiri`):** Literary editorial serif for Arabic headlines, chapter titles, and `نضال النعيم`.
  - **Arabic Body & UI (`IBM Plex Sans Arabic`):** Crisp, high-legibility Arabic sans-serif for broadcast summaries, captions, and navigation.
  - **English Display (`Cormorant Garamond`):** High-contrast editorial serif echoing the poster concepts.
  - **English Body (`Plus Jakarta Sans`) & Timecodes (`JetBrains Mono`):** Clean humanist body copy and tabular broadcast timecodes (`02:10`, `12:41`).

---

## 4. Multi-Page Story Architecture (`/ar` Primary & `/en` Complete Edition)
1. **Home — The “In Focus” Opening (`/[locale]`):**
   - Full-viewport interactive newsroom opening scene (real portrait, mouse-following studio spotlight with ON/OFF toggle, short truthful copy, vector signature, and immediate invitation to explore her work).
   - Featured Moving-Image Story (March 6, 2026 Sudan education school-grant explainer reel, `02:10`, click-to-load).
   - Chapter I Preview (*The Journey*) + Three Curated Editorial Pathways (*On Screen*, *Words & Stories*, *Behind the Work*).
2. **The Journey (`/[locale]/journey`):**
   - **Chapter I — Radio & The Social Microphone (2015–2018):** Concentric acoustic composition for **Hala 96 FM** (*Hala Wa Hun* / هلا وهن), **Thomson Foundation** journalism training (2016), and **Al Malika / Kouni Kandaka** participation (2016).
   - **Chapter II — Television & Concurrent Horizons (2017–2018):** Split-screen composition for **Ashorooq TV** (*Rawah* / رواح), **Sudani** (magazine presenter), **TEDxWadMedani** stage talk (2018), **Hikayat Nidal** digital storytelling series (2018), and **Arab Youth Center** training (2018).
   - **Chapter III — The Pan-Arab Newsroom (2019–Present):** High-contrast editorial layout (including a warm ivory reading block) profiling her **Al Arabiya** written reporting (May 2019) and her role as **Senior Social Media Writer · Reporter · Presenter** associated with **Al Hadath**.
   - **Chapter IV — Public-Service & Regional Forums (Today):** Documentary framing of her March 2026 Sudan school-grant explainer and her presence at the **Saudi Media Forum** in Riyadh (`@momen_alfadl`).
3. **On Screen (`/[locale]/on-screen`):**
   - Curated screening room with user-controlled category filters, verified role labels (`Presented & Written by`, `Featured Guest / Interviewee`), duration badges, click-to-play privacy embeds, and direct broadcaster source links.
4. **Words & Stories (`/[locale]/words`):**
   - Verified authored journalism on `alarabiya.net` (*Decoding the Chants of the Sudanese Street Movement*), the *Hikayat Nidal* digital storytelling series, newsroom commentary on social media verification, and her personal reflection essay on perseverance.
5. **Behind the Work (`/[locale]/behind-the-work`):**
   - 4-plate documentary photo essay + interactive provenance & crop inspector + 4-up source contact sheet.
6. **Connect (`/[locale]/connect`):**
   - Warm editorial closing with verified links to Facebook (`facebook.com/Nidal.elnaeem77`), LinkedIn (`linkedin.com/in/nidalelnaeem77`), and broadcaster context—no fake contact forms or invented emails.
7. **Individual Work Detail Dossiers (`/[locale]/work/[slug]`):**
   - Dedicated screening & source-verification page for every single curated piece.
