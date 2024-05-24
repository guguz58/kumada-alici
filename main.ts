radio.setGroup(3)
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendValue("name", 1)
    }
    if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendValue("name", 2)
    }
    if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendValue("name", 3)
    }
    if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendValue("name", 4)
    }
})
