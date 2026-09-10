# Robot Mission Lab

A middle-school robotics teaching draft by Amy Sullivan. Eight modules, sixteen 45-minute sessions, using micro:bit V2 and Kitronik :MOVE Motor 5683.

The `dist` folder is a portable browser course. Open its `index.html`, or host that folder on a static web host. No Articulate or Vercel account is required to run it. Font downloads are optional; local fallback fonts work offline. External MakeCode and manufacturer links require internet. Simulator trial records remain in memory until exported; closing the page clears them.

Included: 56 interactive slides across eight illustrated lessons, three simulator missions, eight starter programs, student workbook, teacher guide and rubric, narration with transcripts, and a four-second conceptual Blender rover tour.

Validation: JavaScript syntax; slide data completeness and grading for numbers, ordering, multiple selections and sensor boundaries; all three simulator solution paths; wall and boundary collision handling; stopped-state behavior; pure-state preservation; bounded command execution; TypeScript parsing and 40 mocked starter-program scenarios covering operator stop, invalid/close sensor readings, cancellation during measurement, and time limits. PDFs were rendered and visually inspected. Audio was checked for non-silent output, duration, and clipping. Browser interaction testing has not been performed. Optional WebMCP read-only tool uses feature detection; its browser contract has not been exercised.

Before classroom use: compile each program in MakeCode with the Kitronik extension, test it on the actual hardware, calibrate movement and stopping on the classroom floor, and review narration for pronunciation and pace. No physical-robot or classroom validation is claimed. Source programs are `.ts`, not precompiled `.hex` files.

Illustrations are conceptual teaching models, not exact Kitronik CAD or wiring diagrams. Follow the manufacturer's kit assembly instructions. Narration was synthesized locally with Amy's saved Voicebox voice profile; no raw voice sample is included.

The original Rise-export course is at https://luvbuniz.github.io/robotics/ and remains unchanged. This companion demonstrates custom web learning design. It does not by itself demonstrate current Storyline or Rise editing proficiency.


## Interactive lessons

Each lesson has seven slides: Mission, Explore, Predict, Try it, Build, Check, and Reflect. Students receive answer-specific feedback, can revisit any slide, use focus view, and download their lesson notes. Build checkboxes are self-reported; knowledge activities do not certify physical robot performance. Slide position and responses stay in the open page when switching lessons and clear on refresh.

## Repository layout

- `dist/`: complete portable web app and learner downloads.
- `dist/slides-data.js`: editable interactive activity content for all eight lessons.
- `dist/course.js`: lesson plans, objectives, build steps, answers and narration scripts.
- `dist/code/`: eight MakeCode TypeScript starter programs.
- `source/blender/`: editable rover and animation models.
- `tests/`: simulator and activity logic checks. Run `npm test` with Node.js 24 or later.

## Run locally

Download or clone the repository and open `dist/index.html` in a browser. To use a local server instead, run `python -m http.server 8899 --directory dist` from the repository folder and open the printed local address. This repository does not automatically publish a website.
