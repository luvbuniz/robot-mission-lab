const LESSON_SLIDES = [
  {
    "explore": [
      [
        "Input",
        "The sensor reports a color."
      ],
      [
        "Rule",
        "The program maps white to READY, red to DELIVERY and other readings to CHECK."
      ],
      [
        "Output",
        "A screen message changes while wheels remain stationary."
      ]
    ],
    "prediction": {
      "q": "The sensor reports red in mission 1. What should happen?",
      "options": [
        "The rover drives forward.",
        "DELIVERY appears; wheels stay still.",
        "The sensor measures wall distance."
      ],
      "correct": 1,
      "feedback": [
        "There are no movement blocks in this mission.",
        "Correct. The rule changes a message only.",
        "This sensor classifies color; it is not a distance sensor."
      ]
    },
    "practice": {
      "type": "order",
      "q": "Order the stationary response.",
      "items": [
        "Show DELIVERY",
        "Present the red sample",
        "Apply the color-to-message rule"
      ],
      "correct": [
        1,
        2,
        0
      ],
      "why": "The sample provides input; the rule selects the output."
    },
    "exit": {
      "q": "What would make this rover choose an action autonomously?",
      "options": [
        "Painting the chassis",
        "A person choosing every turn",
        "A sensor reading connected to a programmed decision"
      ],
      "correct": 2,
      "feedback": [
        "Appearance does not create an autonomous decision.",
        "That is operator control. It can still be a robot.",
        "Correct. Environmental input and a decision rule enable autonomous responses."
      ]
    }
  },
  {
    "explore": [
      [
        "Motor command",
        "20 percent is a command, not 20 centimetres per second."
      ],
      [
        "Duration",
        "800 milliseconds is 0.8 seconds. A bounded drive stops after the programmed time."
      ],
      [
        "Variation",
        "Floor friction, load, batteries and wheel alignment can change the measured travel."
      ]
    ],
    "prediction": {
      "q": "You repeat the same drive tomorrow. Must it travel exactly the same distance?",
      "options": [
        "Yes, identical code guarantees identical travel.",
        "No, physical conditions can change.",
        "Only if the display is unchanged."
      ],
      "correct": 1,
      "feedback": [
        "Identical code does not eliminate differences in the physical system.",
        "Correct. Measure repeated trials rather than assuming exact travel.",
        "The display does not establish motor speed or traction."
      ]
    },
    "practice": {
      "type": "number",
      "q": "Three unchanged trials travel 18 cm, 20 cm and 22 cm. What is the mean distance?",
      "value": 20,
      "unit": "cm",
      "hint": "Add the three distances, then divide by 3.",
      "why": "(18 + 20 + 22) ÷ 3 = 20 cm. This describes these trials, not a guaranteed future distance."
    },
    "exit": {
      "q": "To investigate the effect of speed, what should you keep fixed?",
      "options": [
        "Duration, surface, load and start direction",
        "Nothing; vary everything",
        "Only the team name"
      ],
      "correct": 0,
      "feedback": [
        "Correct. Holding other factors steady makes the comparison more useful.",
        "Changing everything hides which factor caused a difference.",
        "Team names do not control the physical test conditions."
      ]
    }
  },
  {
    "explore": [
      [
        "Cargo cradle",
        "Use light paper or cardboard and a removable attachment approved by the teacher."
      ],
      [
        "Clearance",
        "Leave moving parts, sensor view and stop controls unobstructed."
      ],
      [
        "Fair comparison",
        "Keep the parcel and drive program unchanged while revising one cradle feature."
      ]
    ],
    "prediction": {
      "q": "Your parcel falls out. What is the best next test?",
      "options": [
        "Change the parcel, speed and cradle at once.",
        "Increase speed to finish before it falls.",
        "Change one cradle feature and repeat the same drive."
      ],
      "correct": 2,
      "feedback": [
        "You would not know which change affected the result.",
        "Higher speed can worsen instability and does not test the cradle fairly.",
        "Correct. Isolate one design change and compare repeated trials."
      ]
    },
    "practice": {
      "type": "select",
      "q": "Select the TWO proposals that respect the course constraints.",
      "items": [
        "A low cargo cradle with wheel and sensor clearance",
        "Cover the sensor face to secure the parcel",
        "A removable attachment with controls accessible",
        "Add a tall metal weight above the chassis"
      ],
      "correct": [
        0,
        2
      ],
      "why": "A light removable cradle and accessible controls fit the constraints. The teacher must still inspect the real attachment."
    },
    "exit": {
      "q": "Why keep the same parcel when comparing two cradles?",
      "options": [
        "To isolate the cradle design’s effect",
        "Because engineers never change requirements",
        "Because the parcel does not affect movement"
      ],
      "correct": 0,
      "feedback": [
        "Correct. A different load could explain a different result.",
        "Requirements can change, but this comparison needs controlled conditions.",
        "Payload can change balance and movement."
      ]
    }
  },
  {
    "explore": [
      [
        "Classification",
        "A sensor reports a color from reflected light."
      ],
      [
        "Controlled conditions",
        "Keep lighting, sample angle and sensor height steady."
      ],
      [
        "Uncertainty",
        "Unknown or changing readings need investigation before movement."
      ]
    ],
    "prediction": {
      "q": "Your red marker is read correctly twice out of three times. What next?",
      "options": [
        "Drive faster.",
        "Investigate while stationary, then retest.",
        "Ignore the failed reading."
      ],
      "correct": 1,
      "feedback": [
        "Speed cannot repair unreliable stationary recognition.",
        "Correct. Change one condition and retain every result.",
        "That would hide evidence you need."
      ]
    },
    "practice": {
      "type": "number",
      "q": "Nine sample presentations produce six correct color readings. How many were misclassified or unknown?",
      "value": 3,
      "unit": "readings",
      "hint": "Subtract correct readings from total readings.",
      "why": "9 − 6 = 3. Keep these cases in the record and investigate them."
    },
    "exit": {
      "q": "Which comparison isolates lighting?",
      "options": [
        "Change light, height and sample.",
        "Keep everything fixed.",
        "Keep height and sample fixed; change lighting."
      ],
      "correct": 2,
      "feedback": [
        "You could not separate the effects.",
        "That checks repetition but does not compare lighting.",
        "Correct. Change one factor."
      ]
    }
  },
  {
    "explore": [
      [
        "Sequence",
        "Commands run in order. A turn changes which direction the next forward command uses."
      ],
      [
        "Grid model",
        "A simulator turn is exactly 90 degrees. A real timed spin is not a guaranteed angle."
      ],
      [
        "Open-loop motion",
        "Timed motor code does not measure the final position, so repeated calibration trials matter."
      ]
    ],
    "prediction": {
      "q": "A rover faces north. It turns right, then moves forward. Which direction does it travel in the grid?",
      "options": [
        "East",
        "West",
        "North"
      ],
      "correct": 0,
      "feedback": [
        "Correct. A right quarter-turn changes north to east.",
        "West would follow a left turn from north.",
        "The turn changes the heading before the forward move."
      ]
    },
    "practice": {
      "type": "order",
      "q": "Plan this route: travel two cells north, then three east, and stop. The rover starts facing north.",
      "items": [
        "Stop",
        "Forward three cells",
        "Turn right",
        "Forward two cells"
      ],
      "correct": [
        3,
        2,
        1,
        0
      ],
      "why": "Move north first, turn to face east, move three cells, then stop. Calibrate each corresponding physical segment separately."
    },
    "exit": {
      "q": "A 400 ms spin worked once. What can you conclude?",
      "options": [
        "It will always turn exactly 90 degrees.",
        "It produced that observed turn in that trial.",
        "The grid has calibrated the physical robot."
      ],
      "correct": 1,
      "feedback": [
        "One trial does not establish exact or repeatable turning.",
        "Correct. Repeat on the same floor and record the angle or route error.",
        "The grid models logic and does not calibrate motors."
      ]
    }
  },
  {
    "explore": [
      [
        "Delivery cue",
        "White permits one brief movement; red ends the trial."
      ],
      [
        "Unrecognized reading",
        "Unknown, other colors or lost connection select stop and check."
      ],
      [
        "Latched stop",
        "Once stopped, stay stopped until the operator begins a new trial."
      ]
    ],
    "prediction": {
      "q": "The sensor reports red during the approach. What action follows?",
      "options": [
        "Drive faster",
        "Continue until contact",
        "Stop and end the trial"
      ],
      "correct": 2,
      "feedback": [
        "Red marks the delivery stop.",
        "Contact is not the trigger.",
        "Correct. Finish the trial and remain stopped."
      ]
    },
    "practice": {
      "type": "color",
      "q": "Try white, red and unknown readings. Predict the action before testing.",
      "why": "Only a recognized white approach surface permits a brief movement. Red or uncertain readings end the trial."
    },
    "exit": {
      "q": "After stopping on red, the sensor sees white. What should the same trial do?",
      "options": [
        "Remain stopped",
        "Restart automatically",
        "Ignore operator stop"
      ],
      "correct": 0,
      "feedback": [
        "Correct. A new operator start is required.",
        "That breaks the latched stop.",
        "The stop control must remain effective."
      ]
    }
  },
  {
    "explore": [
      [
        "Acceptance criteria",
        "A pass requires the parcel to stay on, the rover to finish in the bay, and no contact."
      ],
      [
        "Integration",
        "Test movement, cargo and sensing separately before blaming the combined mission."
      ],
      [
        "Evidence",
        "Keep the same starting conditions within a trial set and record failed runs too."
      ]
    ],
    "prediction": {
      "q": "The rover reaches the bay without contact, but drops its parcel. Does that trial pass?",
      "options": [
        "Yes, reaching the bay is enough.",
        "No, all three criteria must pass.",
        "Only if it looked impressive."
      ],
      "correct": 1,
      "feedback": [
        "Cargo delivery is also part of the requirement.",
        "Correct. A full pass requires every stated criterion.",
        "Appearance does not replace acceptance criteria."
      ]
    },
    "practice": {
      "type": "number",
      "q": "Count the full passes in the example trial log.",
      "value": 1,
      "unit": "full pass(es)",
      "hint": "A trial passes only when all three columns say Yes.",
      "rows": [
        [
          "1",
          "Yes",
          "Yes",
          "Yes"
        ],
        [
          "2",
          "No",
          "Yes",
          "Yes"
        ],
        [
          "3",
          "Yes",
          "No",
          "Yes"
        ]
      ],
      "why": "Only trial 1 meets all three criteria. One full pass out of three does not meet the target of at least two."
    },
    "exit": {
      "q": "A revision improves from 1 of 3 passes to 2 of 3. Which claim is supported?",
      "options": [
        "The robot always works now.",
        "The revision cannot ever fail.",
        "It performed better in these small trial sets."
      ],
      "correct": 2,
      "feedback": [
        "Three revised trials do not establish that it always works.",
        "The revised set already contains one failed trial.",
        "Correct. Report the improvement and the limited amount of evidence."
      ]
    }
  },
  {
    "explore": [
      [
        "Reproducibility",
        "Record the program version, floor layout, parcel, start, stop and reset steps."
      ],
      [
        "Honest demonstration",
        "If a showcase run fails, stop and describe the result. Do not rewrite the trial log."
      ],
      [
        "Individual understanding",
        "Each learner should explain a design choice and the evidence behind it, even when the build is shared."
      ]
    ],
    "prediction": {
      "q": "The showcase run fails after earlier successful trials. What is the strongest response?",
      "options": [
        "Stop, describe the failure, and propose a specific next test.",
        "Hide the run and say every test passed.",
        "Blame the audience without evidence."
      ],
      "correct": 0,
      "feedback": [
        "Correct. Honest evidence and a testable next step are part of an engineering handover.",
        "That misrepresents the evidence.",
        "An explanation needs observations and a way to test it."
      ]
    },
    "practice": {
      "type": "order",
      "q": "Arrange a clear two-minute showcase.",
      "items": [
        "Report a limitation and next test",
        "Explain the need and success criteria",
        "Compare before-and-after trial evidence",
        "Explain the input, decision and output"
      ],
      "correct": [
        1,
        3,
        2,
        0
      ],
      "why": "Give the audience the purpose first, then explain the mechanism, show evidence, and finish with a limitation and next test."
    },
    "exit": {
      "q": "Which statement is appropriate before classroom and hardware testing?",
      "options": [
        "This course is proven in every classroom.",
        "This is a teaching draft with physical testing still required.",
        "The simulator proves the real robot is safe."
      ],
      "correct": 1,
      "feedback": [
        "Classroom effectiveness has not yet been established.",
        "Correct. State the validation boundary clearly.",
        "A logic simulator does not establish physical safety."
      ]
    }
  }
];
if(typeof module!=="undefined")module.exports=LESSON_SLIDES;
