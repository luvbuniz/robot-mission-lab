# Robot Mission Lab

**Build it. Code it. Make it yours.**

An independent middle-school robotics course by **Amy Sullivan**. Students build a wheeled robot, learn to control it, test their ideas and choose a new job for the same base.

**[Open the interactive course](https://robotics-mission-lab-amy.luvbuniz.chatgpt.site)** · [Print student packets](https://robotics-mission-lab-amy.luvbuniz.chatgpt.site/workbooks/) · [Teacher guide](https://robotics-mission-lab-amy.luvbuniz.chatgpt.site/teacher-guide.pdf) · [Student reference workbook](dist/student-workbook.pdf) · [Classroom pack](dist/classroom-materials.pdf)

![A yellow and blue brick robot on a classroom worktable](dist/rover.png)

**Grades 6–8 · Eight modules · Sixteen 45-minute classes · Teams of four**

The planned kit is **LEGO Education Computer Science & AI 6–8, #45522**. The course combines a custom interactive website with physical building, written coding steps and printable materials. It runs in a browser without a student account, Articulate subscription or app installation.

## What to explore

- **56 interactive slides:** seven per module, with predictions, practice, feedback, building checklists and reflection.
- **Three playable simulator challenges:** move a brick robot through the grid, earn delivery stars, hear optional sound effects and learn from gentle collision feedback.
- **Eight module workbooks:** materials, measured attachment plans, numbered steps, written program instructions and test tables.
- **Five final builds on one base:** parcel delivery, drawing robot, paper sweeper, ball pusher or a sled carrying a paper rescue figure.
- **Plain-English support:** new words explained in lessons and a glossary in the student and teacher PDFs.
- **Audio and transcripts:** nine short recordings using Amy’s own locally synthesized voice.
- **Teacher materials:** a contents page, learning goals, lesson guidance, slide answer keys, an optional scoring guide and dated kit cost sheets at the back of both main PDFs.
- **Classroom materials pack:** role cards, arrow cards, color cards, measured paper templates, a first-class script and all eight coding guides.
- **Visual room plan:** hover, focus or tap in the Teacher Desk; the same plan is included in the printable guide.

## A four-minute portfolio walkthrough

1. **Course:** choose Mission 6 and explore how white, red and unknown color readings lead to different actions.
2. **Build:** open its worksheet and connect the learning goal to the actual steps and test table.
3. **Mission simulator:** run a route, use the feedback to change it and download the test notes.
4. **Mission 8:** compare the five final build choices and explain how students choose, test and improve.
5. **Teacher desk:** show the teaching support, word help, scoring guide and cost sheet.

## The eight modules

| Module | What students do | Build worksheet |
| --- | --- | --- |
| 1. Wake up your rover | Connect a color reading to a screen message | [Color-test station](dist/workbooks/module-1.pdf) |
| 2. Make a short drive | Measure movement and make the robot stop | [Measured driving lane](dist/workbooks/module-2.pdf) |
| 3. Build a parcel holder | Compare two holders using the same parcel | [Two parcel holders](dist/workbooks/module-3.pdf) |
| 4. Help your robot read colors | Compare readings and change one test condition | [Color-sensor board](dist/workbooks/module-4.pdf) |
| 5. Plan the delivery route | Put short drives and a turn in order | [Arrow-card route](dist/workbooks/module-5.pdf) |
| 6. Stop at the red line | Use a color reading to choose move or stop | [Red-line station](dist/workbooks/module-6.pdf) |
| 7. Make the delivery | Test the complete robot against three rules | [Delivery course](dist/workbooks/module-7.pdf) |
| 8. Choose a build and show it | Choose one new job, improve it and explain the results | [Five build choices](dist/workbooks/module-8.pdf) |

Each module has one current student workbook with build instructions and test notes. Use the prepared class packets below for printing. Older worksheet URLs now open the current workbooks.

## Print one class at a time

Use the [student print center](https://robotics-mission-lab-amy.luvbuniz.chatgpt.site/workbooks/) or download `dist/student-workbooks.zip`.

- Modules 1–7: class 1 is four pages (two sheets); class 2 is two pages (one sheet).
- Module 8: choose one build. Each prepared class packet is four pages (two sheets), including shared planning or reflection pages.
- Print US Letter, Actual size (100%), two-sided, flip on long edge.
- Each class begins with Name, Date and Period. Main text is 13.5-point Arial, with labeled diagrams and space for handwritten results.
- The combined reference PDF retains the glossary and dated cost sheet at the back.

## Teaching readiness

This is a portfolio teaching draft. The worksheet attachments and coding recipes still need real-kit and classroom trials. Before teaching, use LEGO’s official build resources to prepare the shared base, check the sensor mount and attachment points, and make and test the programs in Coding Canvas. The written recipes are guides for making block programs, not importable LEGO project files.

The simulator checks the next square for a wall. The physical course uses a floor-color sensor. The screen activity does not emulate the kit or prove that a real robot will work. Student notes stay in the open page and clear on refresh unless downloaded; there is no student account or server storage.

### Quality review — September 10, 2026

The latest teaching review corrected the following issues:

- **Time to test colors:** modules 1 and 4 now use 60 stationary checks with a 0.5-second pause, allowing about 30 seconds. Students can restart for more time. Workbooks, coding guides and classroom materials use the same instructions; driving limits remain in place.
- **Teacher guide:** 27 sequentially numbered pages, a contents page and bookmarks, one simulator explanation, current printing directions and separate source credits. Interview-coaching notes are outside the teaching materials.
- **Learning and feedback:** course goals linked to activities and evidence, before/after discussion prompts, all eight slide answer keys, learner supports and reflection sentence frames. The rubric is optional; teachers follow their school's grading policy. Simulator stars are not grades.
- **Consistent materials:** one current workbook system, less repeated coding boilerplate, consistent naming, a favicon, accessible slide-tab labels and a revised narrow-screen tab layout. The original Rise course is linked separately near the introduction.

**Verification completed:** all three automated checks passed, covering simulator behavior, game rewards and slide activities. Sixteen revised PDF pages were visually inspected; all 27 teacher page numbers, slide quiz answers, 34 duplex packet files and downloadable archives were checked. The corrected public PDFs were verified against the local files. The narrow-screen change was checked in source; this review did not include a fresh interactive browser test.

See the [detailed teaching review](source/teaching-review.md) for scope and limitations.

### Remaining evaluation and planned additions

- Test the builds and programs on the actual kit, then pilot the course with students and a teacher.
- Create a standards connection map using current official standards, distinguishing full coverage from partial practice. Standards alignment is not yet claimed.
- Add teacher onboarding and a design case study with a storyboard and evaluation plan.
- Develop and trial a fuller pre/post assessment beyond the current discussion prompts and lesson checks.

## Run locally

Serve the `dist` folder with any static web server. For example, from the repository root:

```text
python -m http.server 8899 --directory dist
```

Then open `http://localhost:8899/`. Run `npm test` with a current Node.js installation to check the existing simulator and activity tests.

## Files

| Location | Contents |
| --- | --- |
| `dist/` | Complete browser course and public media |
| `dist/course.js` | Curriculum, narration scripts and cost data |
| `dist/slides-data.js` | Eight interactive lesson decks |
| `dist/code/` | Eight written coding guides |
| `dist/workbooks/` | Current module workbooks and prepared class packets |
| `dist/worksheets/` | Compatibility copies of the current workbooks |
| `dist/audio/` | Finished narration and matching transcripts |
| `source/` | Image prompts, original worksheet plans and earlier Blender prototypes |
| `tests/` | Simulator and activity checks |

## Credits and sources

Course design and writing: **Amy Sullivan**. Narration uses Amy’s “My Voice but chipper” voice profile; raw voice samples and clone-profile files are not included. Artwork was generated for this course; the prompts are retained in `source/`. Images show project ideas, not exact kit inventories or verified brick-by-brick instructions. The realistic classroom cover is also an illustration, not a photograph of a verified kit build. The older Blender models are earlier prototypes.

LEGO and related marks belong to the LEGO Group. **Robot Mission Lab is an independent project, not an official LEGO course and not endorsed by the LEGO Group.**

Official kit, building, coding and price references are linked in the Teacher Desk. Cost sheets contain dated US planning figures and should be checked before ordering. The [original Rise course](https://luvbuniz.github.io/robotics/) remains separate; this version demonstrates a custom web learning experience.
