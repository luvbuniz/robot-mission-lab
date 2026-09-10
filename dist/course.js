const COURSE = {
  "title": "Robot Mission Lab",
  "subtitle": "Build. Code. Deliver.",
  "grade": "Grades 6–8",
  "schedule": "8 modules · 16 × 45-minute sessions",
  "intro": "Design a brick-built delivery rover. Carry a paper parcel, recognize a colored delivery marker, and explain the evidence behind each improvement.",
  "kit": "LEGO Education Computer Science & AI Kit 6–8 (#45522, 2026)",
  "setup": [
    "For each team of four: one #45522 kit and one compatible device with LEGO Education Coding Canvas. Rotate builder, programmer, test operator and evidence recorder so each learner practices every role.",
    "Shared supplies: ruler, masking tape, matte white and red paper, light cardboard, scissors and removable adhesive. Mark a flat floor lane with a wide red finish strip and a generous empty run-out area. No stairs, table edges or people as targets.",
    "Before class, use LEGO’s #45522 building instructions and Teacher Portal to assemble and check a double-motor wheeled base. Secure a downward-facing color sensor ahead of the drive wheels. Photograph the actual classroom build and record its sensor height; concept artwork is not a parts-by-parts assembly guide. If the school has no checked base, schedule a separate teacher build/preflight session.",
    "Open code.legoeducation.com. Follow LEGO’s getting-started flow to connect the team’s double motor and color sensor using its connection card. Verify that only the intended team hardware responds. Keep the program running on the connected device during trials. Use the downloadable lesson recipe to assemble word blocks; recipes describe logic rather than claiming to be importable LEGO project files.",
    "Charge hardware using LEGO’s supplied charging instructions before class. Check the program stop control and the manufacturer’s hardware power-off procedure with wheels raised. Use the teacher-approved base, save the project locally, and test forward direction at low speed before floor runs.",
    "Every powered trial needs teacher approval, a clear floor lane, low speed and an operator beside the stop control. Stop the program immediately on unexpected motion; use the hardware power-off procedure if software or the connection fails. The supplied recipes require a short maximum trial duration. Verify these controls on the real kit before teaching.",
    "Keep hair and fingers clear of moving parts. Power down before changing the build. Stop on unrecognized color, disconnection or loss of control. A color marker is a delivery cue, not an obstacle detector or safety system. Follow school and manufacturer procedures."
  ],
  "routine": [
    "Session A: launch and predict (5 min), explain/model (10), build and program (20), first test (5), save and tidy (5).",
    "Session B: retrieval (5 min), fair tests and revisions (25), explanation or peer review (10), exit ticket and tidy (5)."
  ],
  "lessons": [
    {
      "id": 1,
      "title": "Wake up your rover",
      "mission": "Build a stationary input-to-output response",
      "concept": "An input provides evidence. A program applies a rule. An output changes a light, display or motor. Today the sensor reports a color while all motors remain stopped.",
      "objective": "Identify input, rule and output, and demonstrate three predictable color-to-screen responses without wheel motion.",
      "parts": "Kit #45522, charged double motor, color sensor, connection card, device, red and white sample cards. Wheels raised for setup.",
      "build": [
        "Use the teacher-checked wheeled base. Label the double motor, color sensor and connected device; draw the flow of information.",
        "Connect the team hardware in Coding Canvas and keep all movement blocks out of this first program.",
        "Build the lesson 1 recipe: read color and show READY for white, DELIVERY for red, and CHECK for any other reading.",
        "Present red, white and an unrecognized sample while stationary. Record the expected and observed messages. All wheels must stay still.",
        "Change one displayed message to suit your team. Explain why changing a message does not change the sensor."
      ],
      "success": "Three correctly explained input-to-screen tests with motors stationary.",
      "variables": "Change only the sample color; keep lighting and sensor position fixed.",
      "columns": [
        "Sample / trial",
        "Predicted message",
        "Observed message",
        "Wheels stopped?"
      ],
      "question": "A remotely operated exploration robot is still a robot. What extra capability would make this rover autonomous?",
      "answer": "It would read an environmental sensor and use a programmed rule to choose an action without a person choosing every movement.",
      "misconception": "The sensor detects reflected light; it does not understand the meaning of a delivery.",
      "fix": "Check the paired team hardware and sensor view. If wheels move, stop, remove movement blocks and ask the teacher to inspect.",
      "extend": "Design a message that also uses words or symbols so a learner need not distinguish screen colors.",
      "narration": "Your first mission is to wake up the rover without moving its wheels. Show the sensor a color, predict the message, and test your rule. Your robot only knows what the program tells it to do."
    },
    {
      "id": 2,
      "title": "Motor checkout",
      "mission": "Make a controlled, repeatable drive",
      "concept": "Each drive wheel has a motor. Two similar wheel speeds move the rover approximately straight; unequal speeds create a turn. A speed setting is a motor command, not a measurement in centimetres per second.",
      "objective": "Run a bounded forward drive, demonstrate stop, and identify two sources of variation.",
      "parts": "Teacher-checked LEGO wheeled base, paired device, ruler and taped floor lane with clear run-out space.",
      "build": [
        "With power off, check wheel clearance and identify the teacher-demonstrated stop and power controls.",
        "Using the lesson 2 recipe, set a low movement command, such as 20 percent, for 0.8 seconds, followed by stop. Pretest with wheels raised.",
        "Mark a start line, place the rover on the floor and start from the device. Measure travel after the automatic stop. Repeat three times with the same settings.",
        "With teacher supervision, test the on-screen stop during a short drive. Verify the hardware power-off fallback before student trials.",
        "Check surface, wheel alignment and charge if the path curves. Change one setting and retest."
      ],
      "success": "Three bounded drives with automatic stops, plus an operator-stop test and distance records.",
      "variables": "Change only one factor, such as commanded speed. Keep time, start direction, floor and load fixed.",
      "columns": [
        "Trial / speed setting",
        "Time (ms)",
        "Distance (cm)",
        "Drift / stop notes"
      ],
      "question": "Why can the same motor command produce a different distance tomorrow?",
      "answer": "Surface, charge, alignment and payload affect movement. The motor setting is not a measured travel speed.",
      "misconception": "Equal speed commands do not guarantee perfectly equal wheel motion.",
      "fix": "Check charge, connection card, selected motor and wheel clearance. Recheck forward direction with wheels raised.",
      "extend": "Compare two low motor commands using three trials each and mean distance.",
      "narration": "Your first drive should be short and controlled. Start with a low speed, keep a clear lane, and check that the stop works. Measure the distance instead of assuming that the speed number tells you how far the rover will go."
    },
    {
      "id": 3,
      "title": "Design a cargo cradle",
      "mission": "Carry a paper parcel without blocking the robot",
      "concept": "A chassis supports components. An attachment changes how weight is distributed and may obstruct sensors or wheels. Engineers compare designs against constraints, rather than assuming that a stronger-looking structure performs better.",
      "objective": "Build and compare two removable cargo cradles using consistent trials and a stated design constraint.",
      "parts": "Teacher-checked LEGO rover, paper parcel, light cardboard, removable adhesive and spare kit bricks approved for the attachment.",
      "build": [
        "Make the same lightweight paper parcel for both designs. Sketch a low cradle that leaves the color sensor, wheels and stop controls clear.",
        "Build a removable cradle on the available upper mounting area, following manufacturer restrictions. Do not tape across circuitry, wiring or sensor faces. Teacher checks the fit with power off.",
        "Use lesson 3’s short drive. Test the same distance/time setting three times. Record whether the parcel stays in place and whether the attachment rubs or tips.",
        "Revise one feature, such as the height of a paper retaining wall or cradle position. Repeat on the same floor with the same parcel and code.",
        "Choose a design using your results. Draw its attachment points so another team can reproduce it."
      ],
      "success": "Parcel stays in place for three short trials; the sensor view, wheels, controls and switch remain unobstructed.",
      "variables": "Change one cradle feature. Keep parcel, surface, start position and program fixed.",
      "columns": [
        "Design / trial",
        "Parcel retained?",
        "Any rubbing or tipping?",
        "Evidence / revision"
      ],
      "question": "Why should you keep the parcel and code unchanged when comparing the cradles?",
      "answer": "It helps isolate the effect of the cradle design; changing several factors would make the cause of a difference unclear.",
      "misconception": "The supplied chassis is already built. Bracing a cardboard attachment is different from redesigning the robot’s electronics.",
      "fix": "If the attachment shifts or interferes, stop and remove it. Reduce size or reposition it; do not compensate by increasing speed.",
      "extend": "Have another team reproduce your attachment from the drawing, then compare results.",
      "narration": "Today your rover becomes a delivery vehicle. Build a light cargo cradle and leave its wheels, sensors, and power switch clear. Test the same paper parcel before and after one design change. Let your evidence choose the better design."
    },
    {
      "id": 4,
      "title": "Crack the color code",
      "mission": "Build and test a dependable marker reader",
      "concept": "A color sensor classifies reflected light. The reported color can change with lighting, height, surface and angle. Test the actual marker materials before using readings to control movement.",
      "objective": "Compare repeated color classifications and select a marker setup using recorded evidence.",
      "parts": "Stationary LEGO rover with downward-facing color sensor, matte red and white samples, one unfamiliar sample, ruler and log.",
      "build": [
        "Keep motors stopped. Use the teacher-approved sensor mount and measure its height above the sample.",
        "Open the lesson 4 recipe to display the reported color repeatedly. Make a prediction for each sample.",
        "Present red, white and an unfamiliar surface three times each at the same height. Record every reported color, including no-color or unknown.",
        "Change only height OR lighting, then repeat the same samples. Identify misclassifications; do not discard them.",
        "Choose a red finish strip and white approach surface that the sensor distinguishes reliably in these tests. Repeat on the actual lane before powered use."
      ],
      "success": "Nine initial readings, a controlled comparison, and a justified marker choice with a limitation.",
      "variables": "Change sensor height OR lighting; hold the sample, angle and other conditions fixed.",
      "columns": [
        "Sample / condition",
        "Reading 1",
        "Reading 2",
        "Reading 3"
      ],
      "question": "The same red card is reported correctly only twice in three trials. What should you do before driving?",
      "answer": "Investigate height, light and material with motors stopped, change one factor and retest. Two correct readings do not establish dependable recognition.",
      "misconception": "A color sensor does not measure the distance to a wall. Unknown is not evidence that the path is clear.",
      "fix": "Secure the sensor mount, remove glare, keep the sample flat and verify pairing. Compare another matte sample before changing several variables.",
      "extend": "Compute the proportion of correctly classified samples and discuss why three trials are limited evidence.",
      "narration": "Can your rover recognize its delivery marker? Test red, white, and an unfamiliar surface with the wheels stopped. Keep the sensor height steady. Record every reading, then change one condition and investigate what happens."
    },
    {
      "id": 5,
      "title": "Code a delivery route",
      "mission": "Drive to a marked delivery bay",
      "concept": "A sequence runs commands in order. Timed movement is open-loop: the program does not check where the rover actually ended up. A turn duration is not a guaranteed angle. Calibrate movement on the same floor used for the mission.",
      "objective": "Program a two-leg route and use three trials to tune one timing variable.",
      "parts": "LEGO rover with empty cargo cradle, device, floor tape and ruler. Mark a wide delivery bay and a clear run-out area.",
      "build": [
        "In the online Mission Lab, predict a route before running it. Try forward, turn and stop commands. The grid is a logic model, not a physical calibration tool.",
        "On the floor, mark a start, a turn point and a delivery bay. Sketch the intended route with arrow directions.",
        "Use the lesson 5 block recipe. Start with short forward times and a low-speed timed spin; test the turn alone before combining the route. A 0.4 second spin is only an initial tuning value.",
        "Run the two-leg route three times. Measure how far the stopping point is from the bay centre. Change only turn time or one drive time, then retest.",
        "Place a repeat block around a short segment only if your chosen route repeats. Explain why blindly repeating an inaccurate segment compounds error."
      ],
      "success": "A documented two-leg route ends within the team’s stated bay tolerance in at least two of three trials, and stops every time.",
      "variables": "Change one timing value. Keep speeds, floor, start alignment and load fixed.",
      "columns": [
        "Trial / timing change",
        "End error (cm)",
        "Turn observation",
        "Inside bay?"
      ],
      "question": "Why can a route succeed once but miss the bay on the next run?",
      "answer": "Open-loop timing cannot correct for differences in traction, batteries, start direction or load; repeated trials reveal reliability.",
      "misconception": "A “turn right” instruction in a grid represents a precise quarter-turn; a real motor needs calibration or feedback.",
      "fix": "Shorten the sequence and test its legs separately. Check the start direction before changing the code.",
      "extend": "Compare a long route with a shorter route. Keep a record of program length and successful trials.",
      "narration": "A route is a sequence of choices. Plan the turns before you drive. In the simulator, a turn is exact. On the floor, your rover needs calibration. Measure where it stops, change one timing value, and test again."
    },
    {
      "id": 6,
      "title": "Nail the delivery stop",
      "mission": "Stop on a colored finish marker",
      "concept": "A conditional chooses an action from a reading. While white is detected, take one brief, low-speed movement step; red or any unrecognized reading ends the trial. Keep the stop latched: only a new operator start can begin again.",
      "objective": "Use a repeated color decision to stop on a red marker in three supervised trials and measure stopping position.",
      "parts": "LEGO rover with checked downward-facing color sensor, matte white lane, broad red finish strip, ruler and empty run-out area.",
      "build": [
        "Use the stationary tests from mission 4 to approve the white lane and red strip. Place the strip well before the end of the clear lane.",
        "Build the lesson 6 recipe: stop first; repeat at most 20 times; read color; if white, move slowly for 0.1 seconds then stop; otherwise end the trial. End with stop.",
        "Test the rule while stationary for white, red and unknown samples before enabling motion. Red and unknown must never command movement.",
        "Run on the floor with the teacher beside the controls. Measure where the sensor stops relative to the leading edge of the red strip. Record overshoot or a missed marker as a failed trial.",
        "Repeat three times. If detection is late, lower speed or widen the marker, changing one factor per comparison. Keep the stop latched and the bounded repeat."
      ],
      "success": "Three marker-triggered stops with measured positions, no automatic restart and no motion on an unrecognized reading.",
      "variables": "Change speed OR marker width; keep sensor height, light, start and surface fixed.",
      "columns": [
        "Trial / setting",
        "Marker recognized?",
        "Overshoot (cm)",
        "Stopped / failure"
      ],
      "question": "Why can a narrow red strip be missed even when the stationary test worked?",
      "answer": "The robot moves between readings. It may cross a narrow strip before the next reading, or lighting and height may change. Lower speed and a wider marker create more opportunity to detect it; real testing is still required.",
      "misconception": "Recognizing a floor marker does not detect obstacles, people or table edges.",
      "fix": "Return to stationary color tests. Check the mount, marker width and program order. A stopped trial must not restart simply because white becomes visible again.",
      "extend": "Add distinct messages for delivery marker, unknown reading and time limit, without restarting movement.",
      "narration": "Now turn your color readings into a delivery decision. White allows one short movement. Red means stop, and an unknown reading means stop and check. Test slowly, measure where the rover stops, and keep the stop in place until a new trial begins."
    },
    {
      "id": 7,
      "title": "Plan the delivery mission",
      "mission": "Deliver a paper parcel using a tested approach",
      "concept": "A mission combines requirements, constraints and evidence. Reliable behaviour is more valuable than speed. A state is a named stage such as ready, approaching or stopped; only one stage should control the motors at a time.",
      "objective": "Combine a cargo attachment, a bounded route and a sensor stop into a mission with measurable acceptance criteria.",
      "parts": "LEGO rover, tested cargo cradle and paper parcel, white approach lane, red marker in a delivery bay, ruler and worksheet.",
      "build": [
        "Write three criteria before testing: parcel retained, stopped inside the bay, and no contact. Use your measured stopping positions to locate the red strip.",
        "Rotate four roles. Sketch the lane, mark the start and identify the immediate stop controls. Teacher approves the setup.",
        "Use the bounded color-stop recipe from lesson 6 as the final approach. Add a short calibrated route segment only after testing it separately.",
        "Run three identical trials. A trial passes only when all three criteria hold. Record failed attempts too.",
        "Change one factor based on evidence and retest three times. Keep separate records for each version."
      ],
      "success": "At least two of three full mission trials meet all three criteria; every trial remains bounded and supervised.",
      "variables": "Choose one deliberate change between trial sets, then keep it fixed within each set.",
      "columns": [
        "Trial / version",
        "Parcel retained?",
        "In bay / no contact?",
        "Pass? Evidence"
      ],
      "question": "Your first version passed 1 of 3 trials and your revision passed 2 of 3. What can you claim?",
      "answer": "The revision performed better in these small trial sets. More trials are needed before claiming broad reliability; do not claim it always works.",
      "misconception": "A visually impressive run is not enough; the criteria must be set before testing.",
      "fix": "Test cargo, movement and color recognition separately. Recheck the actual lane lighting before combining them.",
      "extend": "Design a sorting mission using two colored bays. Explain what added logic and testing would be needed.",
      "narration": "Put your tested parts together. Define what a successful delivery means before the run. Keep the same starting conditions, record every attempt, and improve one thing at a time. A reliable delivery matters more than a fast one."
    },
    {
      "id": 8,
      "title": "Showcase with evidence",
      "mission": "Prove, explain and hand over your robot",
      "concept": "An engineering handover lets another person understand, operate and evaluate a design. Clear documentation includes the actual limits and remaining problems. A demonstration shows one run; a test log shows what happened across runs.",
      "objective": "Present a reproducible demonstration and defend a design choice using measurements and a limitation.",
      "parts": "Final LEGO rover, unchanged marked lane, saved Coding Canvas project, log and handover sheet.",
      "build": [
        "Freeze a named program version and draw the final layout. Write setup, start, stop and reset instructions for another team.",
        "Run three final acceptance trials with the same parcel and target. Record all results before selecting a demonstration clip or photo.",
        "Have another team follow your instructions under teacher supervision. Observe unclear steps and revise the handover without changing the test data.",
        "Give a two-minute presentation: need and criteria; sense–decide–act explanation; one design change with before/after evidence; one limitation and next test.",
        "Complete a peer review and individual reflection. Save the Coding Canvas project and export the worksheet or log. Teacher assesses each student’s explanation as well as team performance."
      ],
      "success": "A reproducible handover, three recorded trials, a two-minute evidence-based explanation and an individual reflection.",
      "variables": "Keep the final design fixed during acceptance tests. Label any later change as a new version.",
      "columns": [
        "Final trial",
        "All criteria passed?",
        "Observed failure / gap",
        "Next test"
      ],
      "question": "What should you say if the showcase demonstration fails?",
      "answer": "Describe what happened, stop safely, compare it with the prior trial record and identify a specific next test. Never hide or replace the recorded result.",
      "misconception": "Engineering success includes finding and explaining limits, not only achieving a perfect demonstration.",
      "fix": "Use the saved program and setup drawing to reproduce conditions. If time is short, demonstrate a verified subsystem and report the full mission’s limits honestly.",
      "extend": "Propose one additional user requirement, explain its tradeoff and design a test without claiming the feature is already implemented.",
      "narration": "Your final job is to explain the evidence. Show what your robot can do, how you tested it, and what still needs work. Give another team clear operating instructions. Engineers earn trust by making their results understandable and reproducible."
    }
  ],
  "rubric": [
    [
      "Mission and constraints",
      "Defines measurable criteria, a clear floor setup and safe start/stop procedures."
    ],
    [
      "Program and explanation",
      "Explains inputs, decisions and outputs; identifies a sequence and a conditional accurately."
    ],
    [
      "Testing and iteration",
      "Records repeated trials, changes one factor, compares evidence and reports limitations."
    ],
    [
      "Communication and collaboration",
      "Provides a reproducible handover and an individual explanation; shares roles fairly."
    ]
  ],
  "sources": [
    [
      "Selected kit and current US pricing",
      "https://education.lego.com/en-us/products/lego-education-computer-science-and-ai/45522/"
    ],
    [
      "Official #45522 build instructions",
      "https://www.lego.com/service/buildinginstructions/45522"
    ],
    [
      "Coding Canvas",
      "https://code.legoeducation.com/"
    ],
    [
      "Teacher Portal and LEGO lessons",
      "https://teach.legoeducation.com/"
    ],
    [
      "LEGO Education Python reference (optional advanced route)",
      "https://github.com/LEGO/LEGOEducation"
    ],
    [
      "SPIKE retirement and support",
      "https://education.lego.com/en-us/spike-update-2026/"
    ],
    [
      "Original Rise course",
      "https://luvbuniz.github.io/robotics/"
    ]
  ],
  "cost": {
    "date": "September 10, 2026",
    "currency": "USD",
    "single": 529.95,
    "bundle": 3499,
    "rows": [
      [
        "One kit · up to 4 learners",
        "$529.95",
        "Manufacturer asking price"
      ],
      [
        "Six individual kits · 24 learners",
        "$3,179.70",
        "6 × $529.95; fewer charging extras than bundle"
      ],
      [
        "Classroom bundle · 24 learners",
        "$3,499.00",
        "6 kits plus charging and replacement extras"
      ],
      [
        "Pilot supplies allowance",
        "$35.00",
        "Planning estimate: paper, tape, ruler and cargo materials"
      ],
      [
        "Class supplies allowance",
        "$120.00",
        "Planning estimate for six teams"
      ],
      [
        "Pilot total before tax / shipping",
        "$564.95",
        "1 kit + $35 supplies; existing device assumed"
      ],
      [
        "Class total before tax / shipping",
        "$3,619.00",
        "1 bundle + $120 supplies; 6 existing devices assumed"
      ]
    ],
    "note": "Prices were checked on the manufacturer’s US page. Recheck before ordering. Tax, delivery, devices, school IT support and teacher training are excluded. The supplied course and browser simulator require no paid course subscription. No purchase has been made."
  }
};
if(typeof module!=="undefined")module.exports=COURSE;
