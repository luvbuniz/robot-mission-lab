const LESSON_SLIDES = [
  {
    "explore": [
      [
        "Input: information in",
        "The color reading is the input. It tells the program which color the sensor sees."
      ],
      [
        "Rule: what to do",
        "A rule links a color to a message: white shows READY, red shows DELIVERY, and anything else shows CHECK."
      ],
      [
        "Output: what comes out",
        "The screen message is the output. The wheels stay still."
      ]
    ],
    "prediction": {
      "q": "The sensor reads red. What should happen?",
      "options": [
        "The robot drives forward.",
        "DELIVERY appears. The wheels stay still.",
        "The sensor measures how far away a wall is."
      ],
      "correct": 1,
      "feedback": [
        "This lesson has no steps that move the wheels.",
        "Yes. Red changes the message to DELIVERY.",
        "This sensor reads colors. It does not measure wall distance."
      ]
    },
    "practice": {
      "type": "order",
      "q": "Put these steps in order. Use the arrows to move them.",
      "items": [
        "Show DELIVERY on the screen",
        "Show red paper to the sensor",
        "Use the rule for red"
      ],
      "correct": [
        1,
        2,
        0
      ],
      "why": "First show the paper. The program uses its rule, then shows the message."
    },
    "exit": {
      "q": "How can the robot choose a message without a person choosing it each time?",
      "options": [
        "Paint the robot.",
        "Ask someone to press a different button for each color.",
        "Use the color reading and a rule in the program."
      ],
      "correct": 2,
      "feedback": [
        "Paint changes its look, not its instructions.",
        "Then the person is choosing the message.",
        "Yes. The program uses the color reading to choose."
      ]
    }
  },
  {
    "explore": [
      [
        "Speed setting",
        "20 percent is a low speed setting. It does not mean the robot moves 20 centimeters each second. Measure the distance with a ruler."
      ],
      [
        "Bounded: a set limit",
        "A bounded run stops after a set time or number of steps. Start with a drive lasting 0.8 seconds, then stop."
      ],
      [
        "Why distances change",
        "The floor, battery charge, parcel weight and wheel position can change how far the robot moves."
      ]
    ],
    "prediction": {
      "q": "You run the same code tomorrow. Must the robot travel exactly the same distance?",
      "options": [
        "Yes, the same code always gives the same distance.",
        "No. The floor or battery charge may be different.",
        "Only if the screen message stays the same."
      ],
      "correct": 1,
      "feedback": [
        "The same instructions can give different distances on a real floor.",
        "Yes. Test and measure each run.",
        "The message does not control how well the wheels grip the floor."
      ]
    },
    "practice": {
      "type": "number",
      "q": "Three test runs travel 18 cm, 20 cm and 22 cm. What is the mean distance? Mean means average: add the distances, then divide by the number of runs.",
      "value": 20,
      "unit": "cm",
      "hint": "18 + 20 + 22 = 60. Divide 60 by 3.",
      "why": "The average is 20 cm. The next run may travel a different distance."
    },
    "exit": {
      "q": "You want to test a new speed. What should stay the same?",
      "options": [
        "Drive time, floor, parcel and starting direction",
        "Nothing. Change everything.",
        "Only the team name"
      ],
      "correct": 0,
      "feedback": [
        "Yes. Change only speed so you can see what it changes.",
        "You would not know which change caused the result.",
        "Keep the things that affect the drive the same."
      ]
    }
  },
  {
    "explore": [
      [
        "A parcel holder",
        "Cargo means something a robot carries. A cargo cradle is a holder for it. Use light paper or cardboard to hold your paper parcel."
      ],
      [
        "Leave room",
        "Keep the holder away from the wheels. Do not cover the sensor or the controls used to stop the robot."
      ],
      [
        "A fair test",
        "Change one part of the holder. Keep the same parcel, start line and driving code. This helps you see what your change did."
      ]
    ],
    "prediction": {
      "q": "Your parcel falls out. What should you try next?",
      "options": [
        "Change the parcel, speed and holder at once.",
        "Drive faster.",
        "Change one part of the holder and repeat the same drive."
      ],
      "correct": 2,
      "feedback": [
        "Then you cannot tell which change helped.",
        "Speeding up may make the parcel fall sooner.",
        "Yes. Compare the two holders using the same test."
      ]
    },
    "practice": {
      "type": "select",
      "q": "Choose TWO safe ideas for holding the parcel.",
      "items": [
        "A low, light holder that leaves room for wheels and sensor",
        "Tape the parcel over the sensor",
        "A holder you can remove, with Stop controls easy to reach",
        "Put a heavy metal weight high above the wheels"
      ],
      "correct": [
        0,
        2
      ],
      "why": "Keep the holder light and low. Leave the wheels, sensor and Stop controls clear. Ask the teacher to check it."
    },
    "exit": {
      "q": "Why use the same parcel to test two holders?",
      "options": [
        "So the holder is the only thing you change",
        "Because you can never change a project goal",
        "Because parcel weight never affects movement"
      ],
      "correct": 0,
      "feedback": [
        "Yes. A different parcel might change the result too.",
        "Goals can change. This test compares two holders.",
        "The parcel can change the robot’s balance and movement."
      ]
    }
  },
  {
    "explore": [
      [
        "Reading a color",
        "Light bounces off the paper and reaches the sensor. The sensor uses that light to name a color."
      ],
      [
        "Keep things the same",
        "Keep the paper flat. Use the same light and sensor height while you compare readings."
      ],
      [
        "When a reading is wrong",
        "Keep the wheels still. Write down the wrong or unknown reading. Change one thing and try again."
      ]
    ],
    "prediction": {
      "q": "The sensor reads red correctly two times out of three. What next?",
      "options": [
        "Drive faster.",
        "Keep the wheels still, check the setup and test again.",
        "Leave the wrong reading out of your notes."
      ],
      "correct": 1,
      "feedback": [
        "Driving faster will not fix a wrong color reading.",
        "Yes. Try changing one thing, such as the sensor height.",
        "Keep all the readings. Mistakes can help you find a problem."
      ]
    },
    "practice": {
      "type": "number",
      "q": "You test a color nine times. Six readings are correct. How many are wrong or unknown?",
      "value": 3,
      "unit": "readings",
      "hint": "Take 6 away from 9.",
      "why": "9 − 6 = 3. Keep those three readings in your notes too."
    },
    "exit": {
      "q": "How can you test whether the light changes the reading?",
      "options": [
        "Change the light, paper and sensor height.",
        "Change nothing.",
        "Change the light. Keep the paper and sensor height the same."
      ],
      "correct": 2,
      "feedback": [
        "You would not know which change affected the reading.",
        "This checks the same setup again, but does not compare light.",
        "Yes. Change just the light."
      ]
    }
  },
  {
    "explore": [
      [
        "Sequence: steps in order",
        "The order matters. A turn changes the direction of the next forward move."
      ],
      [
        "The screen robot",
        "The screen robot moves one square at a time. Each turn is a quarter-turn. A real robot may turn too much or too little."
      ],
      [
        "Calibrate: test and adjust",
        "Test a short drive or turn on the floor. Change one time setting and try again. This is called calibrating."
      ]
    ],
    "prediction": {
      "q": "The screen robot faces north (up). It turns right, then moves forward. Which way does it go?",
      "options": [
        "East (right)",
        "West (left)",
        "North (up)"
      ],
      "correct": 0,
      "feedback": [
        "Yes. Turning right from north points east.",
        "A left turn from north would point west.",
        "The turn changes the direction before the move."
      ]
    },
    "practice": {
      "type": "order",
      "q": "Start facing north (up). Go two squares north, then three east (right), and stop. Put the steps in order.",
      "items": [
        "Stop",
        "Go forward three squares",
        "Turn right",
        "Go forward two squares"
      ],
      "correct": [
        3,
        2,
        1,
        0
      ],
      "why": "Go north, turn right, go east, then stop. Test the real robot’s drive times separately."
    },
    "exit": {
      "q": "Your real robot makes the right turn once. What do you know?",
      "options": [
        "It will make the exact same turn every time.",
        "It made the right turn in that one test.",
        "The screen robot has checked the real wheels."
      ],
      "correct": 1,
      "feedback": [
        "One test is not enough to know that.",
        "Yes. Try again and write down all the results.",
        "You must test real wheels on the real floor."
      ]
    }
  },
  {
    "explore": [
      [
        "White: move a little",
        "When the sensor reads white, move slowly for 0.1 seconds, then stop and check the color again."
      ],
      [
        "Red or unknown: end the test",
        "Red means delivery. Any other reading means stop and check. Neither should let the robot keep moving."
      ],
      [
        "Stay stopped",
        "After red or an unknown reading, stay stopped. A person must start a new test. Stop after no more than 20 checks even if every reading is white."
      ]
    ],
    "prediction": {
      "q": "The sensor reads red as the robot drives toward the finish. What next?",
      "options": [
        "Drive faster.",
        "Keep going until it hits something.",
        "Stop and end this test."
      ],
      "correct": 2,
      "feedback": [
        "Red means stop.",
        "The floor color tells it to stop. It should not hit anything.",
        "Yes. Keep it stopped until you start a new test."
      ]
    },
    "practice": {
      "type": "color",
      "q": "Choose white, red and unknown, one at a time. Guess what should happen, then test each reading.",
      "why": "Only white allows a short move. Red or unknown ends the test."
    },
    "exit": {
      "q": "The robot has stopped on red. It then sees white. What should happen in this same test?",
      "options": [
        "It stays stopped.",
        "It starts again on its own.",
        "The Stop control stops working."
      ],
      "correct": 0,
      "feedback": [
        "Yes. A person must start a new test.",
        "Keep it stopped after red, even if the color changes.",
        "The Stop control must always be available."
      ]
    }
  },
  {
    "explore": [
      [
        "Three rules for success",
        "The parcel stays on. The robot stops inside the delivery space. It hits nothing. All three must happen for the run to pass."
      ],
      [
        "Put the parts together",
        "Try the holder, drive and color rule on their own first. Then test them together."
      ],
      [
        "Keep test notes",
        "Use the same starting setup for each group of tests. Write down what happens, including runs that do not pass. These notes are your evidence."
      ]
    ],
    "prediction": {
      "q": "The robot stops in the space and hits nothing, but drops its parcel. Does the run pass?",
      "options": [
        "Yes. It reached the space.",
        "No. All three rules must be met.",
        "Only if the robot looks good."
      ],
      "correct": 1,
      "feedback": [
        "The parcel must stay on too.",
        "Yes. All three things must happen.",
        "Judge what happened using the three rules."
      ]
    },
    "practice": {
      "type": "number",
      "q": "How many test runs below meet all three rules?",
      "value": 1,
      "unit": "passing run(s)",
      "hint": "Look for a row with Yes in all three boxes.",
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
      "why": "Only run 1 has three Yes answers. The goal is at least two passing runs out of three."
    },
    "exit": {
      "q": "Your first holder passed 1 of 3 runs. Your new holder passed 2 of 3. What can you say?",
      "options": [
        "It will always work now.",
        "It can never fail again.",
        "It worked better in these tests."
      ],
      "correct": 2,
      "feedback": [
        "There was still one run that did not pass.",
        "More tests may show more problems.",
        "Yes. Say how many tests you did and what happened."
      ]
    }
  },
  {
    "explore": [
      [
        "Choose one attachment",
        "An attachment is a part you add to the same robot base. Choose one of five jobs. Follow its build steps and use its own test rules."
      ],
      [
        "Test your new job",
        "Write down three runs. Change one thing and compare. Save the code and directions another team can follow."
      ],
      [
        "Everyone explains",
        "Each person shares one choice they made and a test result that helped them decide."
      ]
    ],
    "prediction": {
      "q": "Your robot does not finish during your presentation. What should you do?",
      "options": [
        "Stop, explain what happened and name one next test.",
        "Say every test passed.",
        "Blame the audience without checking."
      ],
      "correct": 0,
      "feedback": [
        "Yes. A clear explanation helps people understand your work.",
        "Tell what really happened.",
        "Use what you saw to choose something you can test."
      ]
    },
    "practice": {
      "type": "order",
      "q": "Put these parts of a two-minute presentation in order.",
      "items": [
        "Say what needs more work and what you would test next",
        "Explain the robot’s job and the three rules for success",
        "Show test results before and after your change",
        "Explain the steps in your robot’s program"
      ],
      "correct": [
        1,
        3,
        2,
        0
      ],
      "why": "Start with the job. Explain how it works. Show your results. Finish with what you would try next."
    },
    "exit": {
      "q": "You have only tried the screen robot. Which statement is true?",
      "options": [
        "My real robot is ready for every classroom.",
        "I still need to build and test the real robot.",
        "The screen test proves the real robot can stop safely."
      ],
      "correct": 1,
      "feedback": [
        "A screen test cannot show that.",
        "Yes. Test the real build with your teacher.",
        "Real wheels and sensors need their own tests."
      ]
    }
  }
];
if(typeof module!=="undefined")module.exports=LESSON_SLIDES;
