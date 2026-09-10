// Robot Mission Lab - Amy Sullivan
// micro:bit V2 + Kitronik :MOVE Motor 5683.
// Add Kitronik's kitronik-move-motor extension in MakeCode first.
// Reference code: teacher must pretest on actual hardware before class.
// A starts; B requests stop. Physical switch is the immediate fallback.
// Values are starting points, NOT calibrated distances or guaranteed angles.
Kitronik_Move_Motor.stop()
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
let running = false
let busy = false
let started = 0
const MAX_RUN_MS = 10000
const SPEED = 25
function finish() {
    running = false
    Kitronik_Move_Motor.stop()
}
input.onButtonPressed(Button.B, function () {
    finish()
    basic.showIcon(IconNames.No)
})
function active(): boolean {
    if (!running || input.runningTime() - started >= MAX_RUN_MS) {
        finish()
        return false
    }
    return true
}
// Short cooperative waits let the button event cancel the current sequence.
function waitActive(milliseconds: number): boolean {
    let until = input.runningTime() + milliseconds
    while (input.runningTime() < until) {
        if (!active()) return false
        basic.pause(20)
    }
    return active()
}
function forward(milliseconds: number) {
    if (!active()) return
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, SPEED)
    waitActive(milliseconds)
    Kitronik_Move_Motor.stop()
}
function right(milliseconds: number) {
    if (!active()) return
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, SPEED)
    waitActive(milliseconds)
    Kitronik_Move_Motor.stop()
}
input.onButtonPressed(Button.A, function () {
    if (busy) return
    busy = true
    running = true
    started = input.runningTime()
    forward(800) // Tune this duration after recording baseline trials.
    finish()
    busy = false
})
