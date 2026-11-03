# APPROVALS & RIGHTS CLEARANCE NEEDED BEFORE PUBLIC RELEASE

> **CURRENT STATUS: LOCAL PREVIEW ONLY (`noindex, nofollow`).**
> Nothing has been pushed to GitHub, deployed to Vercel, or exposed via a public tunnel. All items below must be reviewed and approved by **Nidal Elnaeem** (and relevant rights holders where noted) prior to public launch.

---

## 1. Photographic & Visual Asset Clearances

| Asset ID | Description | Current Local Preview Status | Action / Clearance Needed Before Public Launch |
|---|---|---|---|
| `portrait-02-saudi-media-forum` | Burgundy blazer portrait at the Saudi Media Forum, Riyadh (`1440x1920`) | Displayed with explicit visible credit to **`@momen_alfadl`** as documented in the original Facebook caption. | **Photographer Reuse Permission:** Confirm written/explicit permission from photographer `@momen_alfadl` and Nidal Elnaeem for permanent portfolio publication. |
| `portrait-01-studio-pinstripe` & `portrait-03-newsroom-archive` | Studio pinstripe portrait (`1152x2048`) and Newsroom photo-wall portrait (`1152x2048`) sourced from Nidal's public Facebook profile | Included as candidate portfolio portraits with provenance metadata. | **Owner & Studio Clearance:** Public visibility on Facebook does not automatically grant third-party web republication rights; confirm Nidal owns/clears these portraits for her personal website. |
| `portrait-04-broadcast-yellow-blazer` | Owner-supplied navy blazer / yellow top broadcast studio portrait (`960x960`) | Approved key source asset for the Opening Scene hero. | **Final Studio Backdrop Check:** Confirm no broadcaster studio restriction applies to personal portfolio use. |
| **Al Hadath (`الحدث`) Vector Mark** | Used sparingly in the Opening Scene and Journey context with an explicit disclaimer that this is an independent personal portfolio. | Included as contextual professional association mark. | **Brand Usage Confirmation:** Confirm whether Nidal prefers the `الحدث` vector mark or plain text (`Al Hadath / الحدث`) on the public production site. |

---

## 2. Biographical & Career Reconciliation Sign-Offs

1. **Exact Career Dates & Overlapping Roles (2015–2018):**
   - Verify exact start/end months for **Hala 96 FM** (`2015–2018` on Facebook vs. `2014` mention in early press), **Ashorooq TV** (`2017–2018`), and **Sudani** (`2017–2018`).
2. **Clarification of the `Sudani (2017–2018)` Entry:**
   - Confirm whether `Sudani: Magazine presenter` refers to a televised magazine program, a digital series for Sudani Telecom, or *Al-Sudani* media platform.
3. **Training & Fellowship Entries (2016 & 2018):**
   - Confirm the exact program titles she wishes to display for **Arab Youth Center (`مركز الشباب العربي`, 2018)** and **Thomson Foundation (`مؤسسة طومسون`, 2016)**. Both are strictly framed as professional training entries, never academic degrees.
4. **Al Malika / "Kouni Kandaka" Framing (2016):**
   - Currently framed conservatively as a **participation and social-responsibility media initiative**, per project guardrails. Confirm whether Nidal wishes to mention the *Sudania 24 TV*-documented runner-up / Jury Appreciation recognition or keep it strictly as participation.
5. **LinkedIn Profile Export (Optional):**
   - `https://www.linkedin.com/in/nidalelnaeem77/` is behind LinkedIn's sign-up wall and unindexed by public search engines. If there are additional written posts or role descriptions on LinkedIn she wishes to include, an owner-supplied profile export can be integrated.

---

## 3. Curated Broadcasts, Reels & Embeds Sign-Off

1. **Additional Al Hadath / Al Arabiya On-Air Clips:**
   - Provide direct official `alhadath.net` / `alarabiya.net` or official YouTube URLs for specific recent Al Hadath newsroom segments she wishes to feature in the **On Screen** screening room.
2. **Direct Contact / Enquiry Destination:**
   - The **Connect** page currently routes visitors exclusively to her verified **Facebook** and **LinkedIn** profiles (no fake contact form, no invented email address or phone number). Before public launch, confirm whether she wants a verified professional email address or booking representation link added.

---

## 4. Built-In Content Gate Control
In `src/data/portfolio-data.ts`, every curated work item, career chapter milestone, and photo essay plate includes an `approvalStatus: "approved" | "pending_owner_verification"` property, and the UI provides an interactive **"Verified & Approved Only / Full Documentary Preview"** filter toggle in local preview mode so the owner can inspect the site both ways instantaneously.
