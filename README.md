# Robot Mission Lab

An independent middle-school robotics teaching draft by **Amy Sullivan**. Build a delivery rover, investigate its behavior and defend design choices with evidence.

**Current kit:** LEGO Education Computer Science & AI 6–8, #45522 (2026). Eight missions, sixteen 45-minute sessions, four rotating team roles.

## Explore

- 56 interactive slides with prediction, practice, feedback and reflection.
- Three route puzzles with step-through traces and downloadable trial records.
- LEGO-style mission artwork, narration and transcripts.
- Eight Coding Canvas block recipes, student workbook and teacher guide.
- Dated pilot and classroom cost sheets at the back of both PDFs.

Open `dist/index.html` locally or serve `dist` with a static web host. No Articulate or Vercel account is needed. Local server: `python -m http.server 8899 --directory dist`.

## Interview walkthrough

1. Explain the learner and performance goal: a tested, documented delivery.
2. Open Mission 6; test white, red and unknown color decisions.
3. Show the build recipe and matching engineering log.
4. Revise a failed simulator route and export the trial record.
5. Show assessment, accessibility choices and the kit-cost appendix.

## Teaching and validation

This is a portfolio teaching draft. Recipes are human-readable block instructions, **not importable LEGO projects**. Before class, a teacher must map them to the current Coding Canvas blocks, save projects, prepare a checked wheeled base using LEGO’s build resources and run actual-kit trials. No physical-robot or classroom testing is claimed.

The separate grid puzzle has a virtual adjacent-cell obstacle check. It does not emulate LEGO hardware. The physical course uses a color marker, not a distance sensor. Knowledge checks do not certify a physical build. Notes and trials stay in the open page and clear on refresh unless downloaded. No student account or server storage is used.

Automated checks cover simulator solutions, collisions, boundaries, latched stops, state preservation, activity grading and color decisions. PDFs are rendered and inspected. Browser interaction and physical-kit testing remain separate steps.

## Credits

Course: Amy Sullivan. Audio uses Amy’s own locally synthesized voice; raw clone samples and profile files are not included. Artwork uses built-in image generation; prompts are in `source/visual-prompts.md`. These imaginative rover/arena scenes are not exact #45522 inventory or assembly instructions. Historical `source/blender/` models are earlier prototypes, not the LEGO build.

LEGO and related marks belong to the LEGO Group. This independent course is not endorsed by LEGO. Official kit, build, software and pricing sources are linked in the Teacher Desk. The original Rise course remains at https://luvbuniz.github.io/robotics/ . This custom site alone does not establish current Rise or Storyline authoring proficiency.

## Files

- `dist/course.js`: curriculum, narration scripts and budgets.
- `dist/slides-data.js`: eight interactive decks.
- `dist/code/`: eight Markdown block recipes.
- `dist/student-workbook.pdf`, `dist/teacher-guide.pdf`: printable materials.
- `tests/`: run `npm test` with Node.js 24 or newer.

Prices are dated planning figures; recheck before ordering. No purchase has been made.
