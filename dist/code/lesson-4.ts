// Robot Mission Lab - Amy Sullivan
// micro:bit V2 + Kitronik :MOVE Motor 5683.
// Add Kitronik's kitronik-move-motor extension in MakeCode first.
// Reference code: teacher must pretest on actual hardware before class.
// A starts; B requests stop. Physical switch is the immediate fallback.
// Values are starting points, NOT calibrated distances or guaranteed angles.
Kitronik_Move_Motor.stop()
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
let showing = false
input.onButtonPressed(Button.A, function () { showing = true })
input.onButtonPressed(Button.B, function () {
    showing = false
    Kitronik_Move_Motor.stop()
    basic.clearScreen()
})
basic.forever(function () {
    Kitronik_Move_Motor.stop()
    if (showing) {
        let distance = Kitronik_Move_Motor.measure()
        basic.showNumber(distance)
        basic.pause(200)
    } else { basic.pause(50) }
})
