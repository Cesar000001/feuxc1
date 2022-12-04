function FeuVert () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
function countdown () {
    let t = 0
    if (t == 0) {
        FeuVert()
    }
}
function FeuRouge () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
function FeuOrange () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.show()
basic.forever(function () {
	
})
