// Robot Mission Lab - Amy Sullivan
// micro:bit V2 + Kitronik :MOVE Motor 5683.
// Add Kitronik's kitronik-move-motor extension in MakeCode first.
// Reference code: teacher must pretest on actual hardware before class.
// A starts; B requests stop. Physical switch is the immediate fallback.
// Values are starting points, NOT calibrated distances or guaranteed angles.
Kitronik_Move_Motor.stop()
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.stop()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    basic.showIcon(IconNames.No)
})
