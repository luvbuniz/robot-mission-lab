const COURSE = {
  "title": "Robot Mission Lab",
  "subtitle": "Build. Code. Deliver.",
  "grade": "Grades 6–8",
  "schedule": "8 lessons | 16 classes of 45 minutes",
  "intro": "Build a rover: a small robot that moves on wheels. Help it carry a paper parcel and stop at a red line. Try it, write down what happens, and make it better.",
  "kit": "LEGO Education Computer Science & AI Kit 6–8 (#45522, 2026)",
  "setup": [
    "Use one LEGO set #45522 and one computer or tablet for each team of four. Give each student a job: build, code, start and stop the robot, or write test notes. Swap jobs after each test.",
    "Gather a ruler, tape, flat red and white paper, light cardboard, scissors and tape that is easy to remove. Make a wide lane on a flat floor. Leave lots of empty space beyond the red finish line. Keep the lane away from stairs and table edges.",
    "Before class, build a wheeled base using LEGO’s instructions for set #45522. Fit the color sensor so it looks down at the floor, in front of the wheels. A sensor is a part that detects something. Check the real build and take a photo for students to follow. The pictures in this course show ideas; they are not step-by-step LEGO build guides.",
    "Open code.legoeducation.com. This is Coding Canvas, LEGO’s coding app. Follow LEGO’s setup steps to connect the right team’s robot parts. Use the lesson’s coding steps to make a program: a list of instructions for the robot. Save it and test it before class. The downloaded steps are a reading guide, not a file the app can run on its own.",
    "Charge the robot parts as LEGO directs. Lift the wheels off the floor for the first check. Test which way they turn, how to stop the program, and how to turn off the robot. Keep the computer or tablet connected while the robot runs.",
    "Ask the teacher before each run. Start slowly. Keep one person ready at the Stop control. If the robot moves the wrong way, stop at once. If the screen control does not work, use the power-off method the teacher showed you. Test both ways to stop before students drive.",
    "Keep fingers, hair and loose clothes away from the wheels. Turn the robot off before changing its parts. Stop if the sensor cannot name the color or the connection is lost. A red floor line tells this robot where to stop. It cannot use that color sensor to spot people, walls or table edges."
  ],
  "routine": [
    "First class: share the goal and make a prediction (5 minutes); show the first steps (10); build and code (20); try one test (5); save and tidy (5). A prediction is what you think will happen and why.",
    "Second class: review (5 minutes); test and improve (25); explain your results to another team (10); answer one short question, save and tidy (5)."
  ],
  "lessons": [
    {
      "id": 1,
      "title": "Wake up your rover",
      "mission": "Make the screen respond to a color",
      "objective": "Show a color to the sensor and explain the message that appears.",
      "concept": "A sensor is a part that detects something. Your color sensor sends a color name to your program. A program is a list of steps the robot follows. Today the program changes a message on the screen. The wheels stay still.",
      "parts": "The checked LEGO robot, its connected computer or tablet, and red, white and another color of paper.",
      "words": [
        [
          "Sensor",
          "A part that detects something, such as a color."
        ],
        [
          "Program",
          "The steps the robot follows."
        ],
        [
          "Input / output",
          "The color reading goes in. A screen message comes out."
        ]
      ],
      "build": [
        "Ask your teacher to check the robot. Point to the sensor, wheels and computer. Keep the wheels off the floor.",
        "Open the coding steps for lesson 1. Add no steps that move the wheels.",
        "Make a rule: white shows READY; red shows DELIVERY; any other reading shows CHECK.",
        "Try white, red and another color. Before each try, say which message you expect. Write down what appears.",
        "Change one message to your team’s own words. Try the colors again. Keep the wheels still."
      ],
      "success": "Each of the three colors gives the right message. The wheels do not move.",
      "variables": "Change the paper color. Keep the light and the sensor’s position the same.",
      "columns": [
        "Paper color",
        "Message I expect",
        "Message I see",
        "Wheels still?"
      ],
      "question": "What is the input in this test? What is the output?",
      "answer": "The input is the color reading. The output is the screen message.",
      "misconception": "The robot does not know what DELIVERY means. It follows the rule you wrote.",
      "fix": "Check that you connected the right robot. Make sure the sensor can see the paper. If a wheel moves, stop and ask the teacher to check the code.",
      "extend": "Make messages that use words or symbols, so students do not have to tell screen colors apart.",
      "narration": "Show your robot a color. What message will appear? Make a prediction, then try it. Keep the wheels still. Explain how your rule picked the message.",
      "worksheet": "worksheets/module-1.pdf"
    },
    {
      "id": 2,
      "title": "Make a short drive",
      "mission": "Drive a little, then stop",
      "objective": "Make the robot stop after a short time. Measure how far it travels.",
      "concept": "A motor uses electricity to turn a wheel. We will set the robot to move for a short time, then stop. This is called a bounded run. Bounded means the run has a set limit. A speed setting is not a distance measurement.",
      "parts": "The checked robot, its connected device, a ruler and a clear floor lane.",
      "words": [
        [
          "Motor",
          "A part that makes something move."
        ],
        [
          "Bounded",
          "Set to stop after a certain time or number of steps."
        ],
        [
          "Trial",
          "One test run."
        ]
      ],
      "build": [
        "With the power off, check that both wheels can turn freely. Ask the teacher to show the Stop control and power-off method.",
        "Use lesson 2’s coding steps. Start with a low speed, such as 20 percent. Set the robot to move for 0.8 seconds, then stop.",
        "Test with the wheels raised first. Then put the robot at the start line on the floor. Run it and measure the distance it travels.",
        "Do three trials. A trial means one test run. Keep the same code and start line. Write down all three distances.",
        "Ask the teacher to help you test the Stop control during a short drive. If the robot curves, check the wheels, floor and charge before changing one thing."
      ],
      "success": "The robot stops after each of three short drives. You also show that the Stop control works.",
      "variables": "Change only one thing, such as speed. Keep the time, floor, load and start line the same.",
      "columns": [
        "Test number",
        "Speed setting",
        "Distance (cm)",
        "Did it stop?"
      ],
      "question": "Why might the same code move the robot a different distance tomorrow?",
      "answer": "The floor, battery charge, wheels or load may be different. Measure the distance each time instead of guessing.",
      "misconception": "A speed setting of 20 does not mean 20 centimetres per second.",
      "fix": "Stop. Check the charge, connection and wheel space. Test the wheel direction with the wheels raised before trying again.",
      "extend": "Try a second low speed. Do three runs at each speed. Compare the distances.",
      "narration": "Make a short drive, then stop. Measure how far your robot moves. Try three runs with the same settings. Do the distances match? Write down what you notice.",
      "worksheet": "worksheets/module-2.pdf"
    },
    {
      "id": 3,
      "title": "Build a parcel holder",
      "mission": "Keep a paper parcel on the robot",
      "objective": "Build two versions of a holder and use your tests to choose one.",
      "concept": "Cargo is something a robot carries. Your cargo is a light paper parcel. A cradle is a holder that keeps it in place. Keep the holder low. Leave the wheels, sensor and controls clear.",
      "parts": "The checked robot, a small paper parcel, light cardboard, easy-to-remove tape and teacher-approved spare LEGO pieces.",
      "words": [
        [
          "Cargo",
          "The thing your robot carries."
        ],
        [
          "Cradle",
          "A holder that keeps the parcel in place."
        ],
        [
          "Fair test",
          "Change one thing and keep the rest the same."
        ]
      ],
      "build": [
        "Make one small paper parcel. Use the same parcel for every test. Draw a low holder that leaves the wheels, sensor and controls clear.",
        "Build the holder. Ask the teacher to check it while the robot is turned off.",
        "Use the same short drive from lesson 2. Try three runs. Write down whether the parcel stays on.",
        "Change one part of the holder, such as the height of its sides. Keep the parcel and drive code the same. Try three more runs.",
        "Choose a version using your test notes. Draw how it attaches, so another team can build it."
      ],
      "success": "Your holder keeps the parcel on in at least two of three runs. It does not rub a wheel or cover the sensor.",
      "variables": "Change one part of the holder. Keep the parcel, speed, time, floor and start line the same.",
      "columns": [
        "Run / holder version",
        "Parcel stayed on?",
        "Anything rubbed?",
        "What I noticed"
      ],
      "question": "Why should you keep the same parcel when you compare two holders?",
      "answer": "A different parcel might change the result. Keeping it the same helps you test the holder itself.",
      "misconception": "A taller holder is not always better. It can make the robot tip or block a part.",
      "fix": "Turn the power off. Check for rubbing, loose tape or a top-heavy load. Change one part, then test again.",
      "extend": "Give your drawing to another team. Can they make the same holder without extra help?",
      "narration": "Build a holder for your paper parcel. Leave room for the wheels and sensor. Try it three times. Change one part of the holder, then test again.",
      "worksheet": "worksheets/module-3.pdf"
    },
    {
      "id": 4,
      "title": "Help your robot read colors",
      "mission": "Find a finish line the sensor can read",
      "objective": "Test paper colors and choose a setup that gives clear readings.",
      "concept": "The color sensor looks at light that bounces off the paper. The light in the room, the paper and the sensor’s height can change its reading. Unknown means the sensor cannot name the color. Stop and check when that happens.",
      "parts": "The robot with its sensor looking down, red and white paper, another paper color, a ruler and your notes.",
      "words": [
        [
          "Reading",
          "The information a sensor gives you."
        ],
        [
          "Unknown reading",
          "The sensor cannot name the color."
        ],
        [
          "Fair test",
          "Change one thing at a time."
        ]
      ],
      "build": [
        "Keep the wheels still. Check that the sensor looks down at the paper. Measure how high it is above the paper.",
        "Open lesson 4’s coding steps to show the color reading on the screen. Guess the reading before each try.",
        "Try red three times, white three times and another color three times. Write every reading, including UNKNOWN.",
        "Change only the sensor height or the room lighting. Try the same papers again. What changed?",
        "Choose red and white paper the sensor can tell apart in your tests. Check them on the actual floor lane before driving."
      ],
      "success": "You record nine readings, try one change and explain which paper setup you will use.",
      "variables": "Change the light OR sensor height. Keep the other things the same.",
      "columns": [
        "Paper / setup",
        "Reading 1",
        "Reading 2",
        "Reading 3"
      ],
      "question": "The sensor names red correctly only twice in three tries. What should you do before driving?",
      "answer": "Keep the wheels still. Check the light, paper and sensor height. Change one thing and test again.",
      "misconception": "A color sensor reads colors. It does not tell you how far away a wall is.",
      "fix": "Hold the paper flat. Keep the sensor steady. Reduce glare, or try another sheet of paper. Change one thing at a time.",
      "extend": "Count how many readings were right. Would you trust the setup after only three tries? Explain why.",
      "narration": "Can your robot tell red from white? Test the colors with the wheels still. Write every reading. Change one thing, such as the sensor height, and try again.",
      "worksheet": "worksheets/module-4.pdf"
    },
    {
      "id": 5,
      "title": "Plan the delivery route",
      "mission": "Drive, turn and reach the delivery space",
      "objective": "Put steps in order, then test and adjust a short route.",
      "concept": "A sequence is steps in order. First drive, then turn, then drive again. On the screen, a turn is exact. A real robot may turn too far or not far enough. Calibrate means test and adjust the settings until the movement is right for your route.",
      "parts": "The robot with an empty parcel holder, its connected device, floor tape and a ruler.",
      "words": [
        [
          "Sequence",
          "Steps in order."
        ],
        [
          "Calibrate",
          "Test and adjust the settings."
        ],
        [
          "Variable",
          "One thing you can change, such as drive time."
        ]
      ],
      "build": [
        "Try a route in the screen practice area. Say where you think the robot will finish before pressing Run.",
        "On the floor, mark a start, a turn point and a wide delivery space. Draw your route with arrows.",
        "Use lesson 5’s coding steps. Start with short, slow drives and a short turn. Test each part before joining them together.",
        "Try the full route three times. Measure how far the robot stops from the middle of the delivery space.",
        "Change just one drive time or turn time. Try three more runs. Use your notes to explain whether the change helped."
      ],
      "success": "The robot stops inside your marked space in at least two of three runs.",
      "variables": "Change one time setting. Keep the speed, floor, load and starting direction the same.",
      "columns": [
        "Run / time setting",
        "Distance from target",
        "Turn too far / short?",
        "Inside space?"
      ],
      "question": "Why does one good run not prove the route will work every time?",
      "answer": "Small changes in the floor, charge or start position can change the result. More runs help you spot a pattern.",
      "misconception": "A perfect turn on a screen does not set the correct turn time for your real robot.",
      "fix": "Test the straight parts and turn on their own. Check the starting direction before changing the code.",
      "extend": "Compare two routes to the same space. Which takes fewer steps? Which works more often?",
      "narration": "Plan your route with arrows. Drive, turn, then drive again. Test each part on the floor. Change one time setting and try again. Did your robot get closer?",
      "worksheet": "worksheets/module-5.pdf"
    },
    {
      "id": 6,
      "title": "Stop at the red line",
      "mission": "Use a color reading to choose when to stop",
      "objective": "Make the robot move on white and stop on red or an unknown reading.",
      "concept": "An if-then rule links a reading to an action: if the sensor sees white, move a little. If it sees red, stop. If it cannot name the color, stop and check. Once this test stops, it must stay stopped until you start a new test.",
      "parts": "The checked robot, a white paper lane, a wide red finish strip, a ruler and a clear space past the strip.",
      "words": [
        [
          "If-then rule",
          "If this happens, do that."
        ],
        [
          "Loop",
          "Steps that repeat."
        ],
        [
          "Bounded",
          "Set to stop after a certain time or number of steps."
        ]
      ],
      "build": [
        "Use the paper and sensor setup you checked in lesson 4. Put a wide red strip across the white lane. Leave empty floor beyond it.",
        "Use lesson 6’s coding steps. Repeat no more than 20 times. Each time, read the color. On white, move slowly for 0.1 seconds, then stop. On red or any other reading, end the test.",
        "Check the rule with the wheels raised. White should allow one short movement. Red and unknown must keep the wheels still.",
        "Try the floor lane with the teacher at the controls. Measure where the sensor stops compared with the start of the red strip. If it misses the strip, record that too.",
        "Do three runs. If the robot misses red, lower the speed OR make the strip wider. Try again. Do not let it restart by itself after a stop."
      ],
      "success": "Three runs stop when the sensor reads red. Unknown readings also stop the robot. It never restarts on its own.",
      "variables": "Change speed OR strip width. Keep the light, sensor height, start and white paper the same.",
      "columns": [
        "Test number",
        "Did it see red?",
        "Distance past red line (cm)",
        "What happened?"
      ],
      "question": "Why might the robot miss a narrow red strip even though it reads red while still?",
      "answer": "It moves between readings. It may pass the strip before the next reading. A wider strip or lower speed gives it more time to see red.",
      "misconception": "This rule looks for a floor color. It cannot spot a person or wall in the way.",
      "fix": "Stop driving. Check the colors while still, then check the strip width and code order. Ask the teacher before another floor run.",
      "extend": "Show a message explaining the stop: RED LINE, CHECK COLOR or TIME UP.",
      "narration": "White means move a little. Red means stop. If the color is unknown, stop and check. Try your rule slowly. Keep the robot stopped until you start a new test.",
      "worksheet": "worksheets/module-6.pdf"
    },
    {
      "id": 7,
      "title": "Make the delivery",
      "mission": "Carry the parcel and stop in the right place",
      "objective": "Join your tested parts and check the whole delivery three times.",
      "concept": "Success criteria are the things that must happen for a test to count as a success. For this delivery, the parcel must stay on, the robot must stop in the marked space, and it must not hit anything. All three must happen in the same run.",
      "parts": "Your robot, tested parcel holder, paper parcel, white lane, red finish strip, ruler and test notes.",
      "words": [
        [
          "Success criteria",
          "The things that must happen for a test to count as a success."
        ],
        [
          "Version",
          "One saved design or program before you change it."
        ],
        [
          "Reliable",
          "Works as expected again and again."
        ]
      ],
      "build": [
        "Write the three success rules before you drive: parcel stays on; robot stops in the delivery space; robot hits nothing.",
        "Mark the start and delivery space. Place the red strip using your stopping tests from lesson 6. Ask the teacher to check the setup.",
        "Use your tested color-stop code and attach the parcel. Add a turn only after you have tested it on its own.",
        "Run the same setup three times. Mark Yes or No for every rule. A run passes only when all three answers are Yes.",
        "Choose one change from your notes. Give the new version a name. Try three more runs and compare the results."
      ],
      "success": "At least two of three runs meet all three rules. Keep a record of every run, including the ones that fail.",
      "variables": "Change one thing between versions. Keep everything the same during each set of three runs.",
      "columns": [
        "Run / version",
        "Parcel stayed on?",
        "In space / no hit?",
        "All three rules met?"
      ],
      "question": "Your first version passed once in three runs. Your new version passed twice. What can you say?",
      "answer": "The new version did better in these tests. You need more tests before saying it works every time.",
      "misconception": "Reaching the finish does not count as a full delivery if the parcel falls off.",
      "fix": "Check the holder, movement and color reading one at a time. Then try them together again.",
      "extend": "Add a new delivery rule. Explain what you would need to change and how you would test it.",
      "narration": "Time for a delivery! Keep the parcel on, stop in the right place, and hit nothing. Try three runs. Write what happened each time, then choose one improvement.",
      "worksheet": "worksheets/module-7.pdf"
    },
    {
      "id": 8,
      "title": "Choose a build and show it",
      "mission": "Give your robot a new job",
      "objective": "Choose one of five builds, test it and explain how you improved it.",
      "concept": "An attachment is a part you add to a robot. Choose a parcel tray, marker holder, sweeper, ball guide or rescue sled. Use your test notes as evidence: information that shows what happened. Then explain your build to another team.",
      "parts": "The same checked robot base, plus the materials listed for your chosen build.",
      "words": [
        [
          "Attachment",
          "A part you add to the robot for a new job."
        ],
        [
          "Evidence",
          "Measurements and notes that show what happened."
        ],
        [
          "Handover",
          "Directions that help someone else use your robot."
        ]
      ],
      "build": [
        "Open this module’s build worksheet. Choose ONE of the five builds and read its two instruction pages.",
        "Gather your choice’s materials. Turn the power off, build the attachment and ask the teacher to check it. Use the program for that choice.",
        "Try three runs with the same setup. Write down every result. Change one thing and test again. Save the final code with a clear name.",
        "Ask another team to follow your setup, start and stop directions with the teacher nearby. Fix unclear instructions. Keep your recorded results unchanged.",
        "Give a two-minute presentation. Explain the job and program, compare your results, and say what you would test next. Each student explains their own part."
      ],
      "success": "The chosen build meets its own rules in at least two of three runs. Another team can follow your directions. Explain one improvement and one remaining problem.",
      "variables": "Keep the same chosen attachment, test objects, code and start marks within each group of three runs.",
      "columns": [
        "Final run",
        "Chosen build",
        "All its rules met?",
        "What to try next"
      ],
      "question": "What should you do if your robot fails during the class demonstration?",
      "answer": "Stop it. Explain what happened. Show your earlier results and name one thing you would test next. Do not hide the failed run.",
      "misconception": "A good project does not need a perfect last run. Clear, honest test notes matter too.",
      "fix": "Use your saved code and setup drawing to check what changed. If needed, show one part that works and explain what still needs fixing.",
      "extend": "Plan a different build choice for a later lesson. Explain which parts and tests would need to change.",
      "narration": "Show your robot and tell its story. What did you change? What did your tests show? Explain one thing that works well and one thing you still want to improve.",
      "worksheet": "worksheets/module-8.pdf"
    }
  ],
  "rubric": [
    [
      "Goal and safe setup",
      "Names the chosen build’s rules and shows how to start and stop safely."
    ],
    [
      "Explain the code",
      "Explains what goes in, what rule runs and what the robot does."
    ],
    [
      "Test and improve",
      "Records three runs, changes one thing and uses results to explain the change."
    ],
    [
      "Share the work",
      "Gives clear directions and lets every student explain a part."
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
    ],
    [
      "Official starting model C103: pages 24-31",
      "https://www.lego.com/cdn/product-assets/product.bi.core.pdf/6640383.pdf#page=24"
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
        "LEGO’s listed price"
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
        "Supplies for a small tryout",
        "$35.00",
        "Money set aside for: paper, tape, ruler and cargo materials"
      ],
      [
        "Supplies for six teams",
        "$120.00",
        "Money set aside for six teams"
      ],
      [
        "Small tryout total before tax / shipping",
        "$564.95",
        "1 kit + $35 supplies; using a device you already have"
      ],
      [
        "Class total before tax / shipping",
        "$3,619.00",
        "1 bundle + $120 supplies; using 6 devices you already have"
      ]
    ],
    "note": "Prices were checked on LEGO’s US website. Check them again before buying. The totals do not include tax, shipping, computers, school computer support or teacher training. The course and screen practice area do not need a paid subscription. No kit has been bought."
  },
  "glossary": [
    [
      "Rover",
      "A small robot that moves on wheels."
    ],
    [
      "Program",
      "A list of steps a computer or robot follows."
    ],
    [
      "Coding block",
      "A piece on the screen that gives the robot an instruction."
    ],
    [
      "Sensor",
      "A part that detects something, such as a color."
    ],
    [
      "Motor",
      "A part that uses electricity to make something move."
    ],
    [
      "Input / output",
      "Input is information going in. Output is the action or message that comes out."
    ],
    [
      "Bounded",
      "Set to stop after a certain time or number of steps."
    ],
    [
      "Trial",
      "One test run."
    ],
    [
      "Fair test",
      "Change one thing. Keep the other things the same."
    ],
    [
      "Cargo / cradle",
      "Cargo is what the robot carries. A cradle is a holder that keeps it in place."
    ],
    [
      "Calibrate",
      "Test and adjust settings so the robot does what you need."
    ],
    [
      "Sequence / loop",
      "A sequence is steps in order. A loop repeats steps."
    ],
    [
      "Variable",
      "One thing that can change, such as speed or time."
    ],
    [
      "Mean",
      "An average: add the numbers, then divide by how many numbers you added."
    ],
    [
      "Success criteria",
      "The things that must happen for a test to count as a success."
    ],
    [
      "Evidence",
      "Measurements or notes that show what happened."
    ],
    [
      "Attachment",
      "A part you add to the robot for a new job."
    ]
  ],
  "buildChoices": [
    {
      "title": "Parcel delivery robot",
      "make": "Carry a paper parcel to a red-line delivery space.",
      "materials": [
        "The shared checked base",
        "Thin card about 12 by 8 cm",
        "One paper parcel about 4 by 3 by 2 cm",
        "Ruler, scissors and removable tape"
      ],
      "steps": [
        "Measure the clear mounting space on the base. Cut the card to fit it. Keep at least 1 cm of room between the attachment and any wheel. Make it smaller if needed.",
        "Draw a fold line 1 cm inside each edge. Cut out the four corner squares. Fold all four walls up and tape the corners to make a shallow tray.",
        "Fold a light paper parcel. Place it in the center of the tray. Add a small folded-paper stop at each end if it slides. Do not add heavy contents.",
        "Turn the robot off. Use the teacher-approved mounting points and removable connectors to hold the tray flat. Keep buttons and the sensor clear.",
        "Raise the wheels and check for rubbing. Then place the robot on the white lane from lesson 6. Keep the broad red strip and empty space beyond it.",
        "Run the code below three times. If the parcel falls, change one tray feature and repeat. Unload the parcel by hand only after the robot has stopped."
      ],
      "code": [
        "Use lesson 6’s tested color-stop program without removing its limits.",
        "Start stopped; set keepGoing to Yes. Repeat at most 20 times. Only while keepGoing is Yes, read the color: white means a slow 0.1-second move then Stop; any other reading means Stop and set keepGoing to No.",
        "Stop and end after the repeats. Red means delivery; unknown means check the setup."
      ],
      "checks": [
        "The parcel stays in the tray.",
        "The whole robot stops inside the delivery space.",
        "The robot hits no object or person."
      ],
      "columns": [
        "Run",
        "Parcel stayed on?",
        "Inside space?",
        "Hit nothing?"
      ],
      "question": "Which tray feature helped the parcel stay on?"
    },
    {
      "title": "Drawing robot",
      "make": "Draw a short line on a protected paper surface.",
      "materials": [
        "The shared checked base",
        "One washable felt-tip marker",
        "A card strip about 12 by 3 cm and removable tape",
        "A large sheet of paper over a protective mat"
      ],
      "steps": [
        "Cover a large floor area with a protective mat and paper. Tape the paper edges flat. Ask the teacher to approve the marker and surface.",
        "Wrap the card strip loosely around the marker to make a sleeve. Tape the card to itself. The marker must slide up and down inside it.",
        "Turn the robot off. Fix the sleeve upright at a teacher-approved point behind the wheels. Keep it away from the sensor and moving parts.",
        "Slide the uncapped marker down until its tip just touches the paper. Secure the marker in the sleeve with a small removable tape tab. It must not lift the wheels off the paper.",
        "Raise the wheels and check the short program. Put the robot back on the protected paper with enough space for the whole run.",
        "Draw three short lines. Stop and turn off the robot before lifting or adjusting the marker. If a line has gaps, lower the tip a little; if the robot struggles, raise it."
      ],
      "code": [
        "Start with movement stopped. Use a checked low speed, such as 20 percent.",
        "Drive forward for 0.8 seconds, then stop and end. Shorten the time if the paper is too small.",
        "No automatic repeat. Lift the marker and return the robot by hand between runs with the power off."
      ],
      "checks": [
        "A visible line is drawn on the paper.",
        "The marker stays in its holder and all marks stay on protected paper.",
        "The robot stops by itself at the programmed time."
      ],
      "columns": [
        "Run",
        "Visible line?",
        "Stayed on paper?",
        "Stopped by itself?"
      ],
      "question": "How did marker height change the line or the robot’s movement?"
    },
    {
      "title": "Paper sweeper",
      "make": "Push three light paper pieces into a collection area.",
      "materials": [
        "The shared checked base",
        "A thin card strip about 12 by 5 cm",
        "Three tissue-paper squares, each about 2 cm wide",
        "Removable tape, ruler and scissors"
      ],
      "steps": [
        "Cut a card strip as wide as the robot, but no wider than the clear test lane. Fold its top 2 cm backward to make a mounting edge.",
        "Cut short vertical slits about 1 cm apart into the lower 2 cm. These make flexible paper bristles. Round sharp card corners with scissors.",
        "Turn the robot off. Attach the folded top edge to approved fixed front mounting points. The flexible ends should just brush the floor without lifting any wheel.",
        "Use a clear floor lane. Mark a collection box farther along it. Place three tissue squares in a row across the starting sweep area. Keep them away from wheel paths.",
        "Try the short program below. Check that the paper bristles can bend. Stop at once if a piece catches in a wheel; turn the power off before removing it.",
        "Count the pieces that reach the box. Repeat three times with the same starting positions. Adjust the bristle height once and compare."
      ],
      "code": [
        "Start stopped and set the checked low speed.",
        "Drive forward for 0.8 seconds, then stop and end. Set the collection box using the distance measured in lesson 2.",
        "Do not add continuous driving. Return the paper pieces and robot to their marks between tests."
      ],
      "checks": [
        "At least two of the three tissue squares reach the box.",
        "No paper gets caught in the wheels.",
        "The robot stops by itself and touches no object except the tissue squares."
      ],
      "columns": [
        "Run",
        "Pieces in box (0-3)",
        "Wheels clear?",
        "Stopped by itself?"
      ],
      "question": "Did shorter or longer bristles move the paper better?"
    },
    {
      "title": "Ball-pushing robot",
      "make": "Guide one light paper ball toward a goal.",
      "materials": [
        "The shared checked base",
        "Thin card about 14 by 5 cm",
        "One crumpled paper ball about 3 cm wide",
        "Removable tape and ruler"
      ],
      "steps": [
        "Fold the card lengthwise so it has a 3 cm upright wall and a 2 cm mounting flap. Fold it gently across the middle to make a shallow V.",
        "Make one light paper ball about 3 cm wide. Put it in the V opening. Leave enough room for it to roll freely; do not make a tight clamp.",
        "Turn the robot off. Attach the two mounting flaps to teacher-approved fixed front points. Keep the V open at the front. Leave the wheels clear and keep the card just above the floor.",
        "Keep the sensor clear even though this task uses a timed drive. Mark a wide goal across a short straight lane. Place the ball at the same start mark each time.",
        "Use the short program below. The robot pushes the ball; it does not grip it. Stop if the ball rolls toward people or outside the clear test area.",
        "Repeat three times. If the ball escapes sideways, adjust the V angle a little. Keep the same ball and code while comparing."
      ],
      "code": [
        "Start stopped and use the checked low speed.",
        "Drive forward for 0.8 seconds, then stop and end. Put the goal within the tested travel distance.",
        "No automatic repeat. Return the robot and ball to their marks with the power off."
      ],
      "checks": [
        "The ball crosses the marked goal line.",
        "The guide stays attached and the wheels turn freely.",
        "The robot stops by itself and touches only the paper ball."
      ],
      "columns": [
        "Run",
        "Ball crossed goal?",
        "Guide stayed on?",
        "Stopped by itself?"
      ],
      "question": "Which V angle kept the ball in front of the robot?"
    },
    {
      "title": "Rescue carrier",
      "make": "Tow a light paper figure on a small rescue sled.",
      "materials": [
        "The shared checked base",
        "Thin card: one 12 by 6 cm piece and one 12 by 2 cm strip",
        "A flat paper person, two paper strips for bands, removable tape and scissors",
        "Ruler and a clear straight lane"
      ],
      "steps": [
        "Use the 12 by 6 cm card as a sled. Fold each long edge up by 1 cm. Curl the front edge slightly upward so it does not catch on the floor.",
        "Draw and cut out a small paper person. Lay it flat on the sled. Add two loose paper bands across the sled and tape their ends to the sides to hold the figure in place.",
        "Use the 12 by 2 cm card strip as a wide tow bar. Tape one end flat to the sled’s front. Make a small folded tab at the other end.",
        "Before attaching it to the robot, pull the sled gently by hand using its wide tow bar. It should slide without catching. Keep it light and use only a straight route for this task.",
        "Turn the robot off. Ask the teacher to connect the tow-bar tab to a fixed rear mounting point. Keep the whole strip centered behind the robot and away from the wheels. Do not use loose string.",
        "Run the short program below three times. If the sled catches or a wheel struggles, stop. Smooth the sled edge or shorten the route, then test again."
      ],
      "code": [
        "Start stopped and use the checked low speed.",
        "Drive straight for 0.8 seconds, then stop and end. Do not add turns or reversing for this first sled build.",
        "Return the robot and sled to the start with the power off. Do not move a real person, animal or heavy object."
      ],
      "checks": [
        "The paper person stays on the sled.",
        "The tow bar stays attached and away from the wheels.",
        "The robot moves the sled and stops by itself."
      ],
      "columns": [
        "Run",
        "Person stayed on?",
        "Tow bar clear?",
        "Moved and stopped?"
      ],
      "question": "What helped the sled slide without catching?"
    }
  ]
};
if(typeof module!=="undefined")module.exports=COURSE;
