# Lesson 6: Stop at the red line

These are written coding steps for LEGO Education set #45522. Coding Canvas is LEGO’s coding app. A coding block is a piece on the screen that gives an instruction. These pages are not files the app can run by itself.

Before class, the teacher must use these steps to make a program with the current blocks, save it and test it on the real kit. Block names may differ from the words used here.

## Words to know

- If-then rule: If this happens, do that.
- Loop: Steps that repeat.
- Bounded: Set to stop after a certain time or number of steps.

## Coding and testing steps

1. Start with all movement stopped. Set a variable named keepGoing to Yes. A variable stores a value the program can change. Here it remembers whether this test may continue.

2. Repeat the next color-check steps no more than 20 times. Only do them if keepGoing is Yes. If it is No, skip them and do not move.

3. Read the color. If it is white, move forward slowly for 0.1 seconds, then stop.

4. For red or any other reading, stop and set keepGoing to No. Red means delivery. Any other reading means stop and check the setup.

5. After the repeats, stop all movement and end the program. Do not turn keepGoing back to Yes during this test. A person must start a new test.

## Teacher check before running

Connect the correct team’s robot. Check the screen Stop control and show how to turn the power off. Raise the wheels for the first check. Keep someone ready to stop the robot. Keep the lane clear and leave extra space beyond the finish.
Start slowly. Use a short time limit and check that the program stops by itself. Stop at once if it moves the wrong way.
Red and unknown readings must end the test. After either reading, the robot must stay stopped even if the sensor later sees white. If the connection is lost, stop using the power-off method you have tested.

A screen test cannot check the real wheels or sensor. These steps still need testing on the actual kit.

## LEGO help

Build instructions: https://www.lego.com/service/buildinginstructions/45522

Coding app: https://code.legoeducation.com/

Teacher help: https://teach.legoeducation.com/
