//animatronic "Phantom"

function movelocationPhantom() {
    var RanNumb = Math.floor(Math.random() * 20) + 1
    if (PhantomValues.Enabled && RanNumb <= PhantomValues.Diffuclty) {
        PhantomValues.Camlocation = Math.floor((Math.random() * 10) + 1)
    }
}

//Animatronic "Toad"
function movelocationToad() {
    var RanNumb = Math.floor(Math.random() * 20) + 1
    if (ToadValues.Active && RanNumb <= ToadValues.Diffuclty) {
        movelocationAnimatronic('Toad')
        if (CAM3Toad.id.includes("CAM3")) {
            CAM3Toad.hidden = true
        }
        CAM3Toad = document.getElementById("GenricToad")
        CAM3Toad.hidden = true
        if (CameraSystem.src.includes("CAM" + ToadValues.CurrentRoom)) {
            UpdateCamera("Toad")
        }
        if (ToadValues.CurrentRoom == 'Office' && DarkMode.hidden) {
            if (DarkMode.style.opacity != '1') {
                Kermit.hidden = false
            }
            PowerOutage()
            setTimeout(() => {
                GameEnded()
            }, 5000)
            setTimeout(() => {
                Kermit.hidden = true
                DarkMode.style.opacity = '1'
            }, 1000);
            PlayAudio("Kermit")
        }
    }
}


//Animatronic "Army"
function movelocationArmy() {
    var RanNumb = Math.floor(Math.random() * 20) + 1
    if (ArmyValues.Active && RanNumb <= ArmyValues.Diffuclty) {
        movelocationAnimatronic('Army')
        Army.src = "ArmyActive.png"
        if (CameraSystem.src.includes("CAM" + ArmyValues.CurrentRoom)) {
            UpdateCamera("Army")
        }
        if (ArmyValues.CurrentRoom == 'Office' && DarkMode.hidden) {
            PowerOutage()
            setTimeout(() => {
                GameEnded()
            }, 5000)
            PlayAudio("Kermit")
            ArmyJumpscare.hidden = false
        }
    }
}

//Animatronic Sloth
function movelocationSloth() {
    var RanNumb = Math.floor(Math.random() * 20) + 1
    if (SlothValues.Active && RanNumb <= SlothValues.Diffuclty) {
        movelocationAnimatronic('Sloth')
        if (CameraSystem.src.includes("CAM" + SlothValues.CurrentRoom)) {
            UpdateCamera("Sloth")
        }
        if (SlothValues.CurrentRoomToad == 'Office' && DarkMode.hidden) {
            if (DarkMode.style.opacity != '1') {
                SlothJumpScare.hidden = false
            }
            PowerOutage()
            setTimeout(() => {
                GameEnded()
            }, 5000)
            setTimeout(() => {
                DarkMode.style.opacity = '1'
                SlothJumpScare.hidden = true
            }, 1000);
            PlayAudio("Kermit")
        }
    }
}

//Animatronic all
function movelocationAnimatronic(e) {
    let Currentroom = 0
    if (e == 'Toad') {
        Currentroom = ToadValues.CurrentRoom
    } else if (e == 'Army') {
        Currentroom = ArmyValues.CurrentRoom
    } else if (e == 'Sloth') {
        Currentroom = SlothValues.CurrentRoom
    }
    let newRoom = 0
    if (Currentroom == 1) {
        var Roulette = Math.floor((Math.random() * 7) + 1)
        if (e == 'Army') {
            newRoom = 'Hall'
        }
        if (Roulette == 1) {
            newRoom = 'Hall'
        }
        if (Roulette == 2  && e != 'Army'  && e != "Toad") {
            newRoom = 3
        }
        if (Roulette == 3  && e != 'Army') {
            newRoom = 7
        }
        if (Roulette == 4  && e != 'Army' && e != "Toad") {
            newRoom = 6
        }
        if (Roulette == 5  && e != 'Army') {
            newRoom = 4
        }
        if (Roulette == 6  && e != 'Army') {
            newRoom = 8
        }
        if (Roulette == 7) {
            newRoom = 2
        }
        if (newRoom == 0) {
            Roulette = Math.floor((Math.random() * 3) + 1)
            if (Roulette == 1) {
                newRoom = 'Hall'
            }
            if (Roulette == 2) {
                newRoom = 2
            }
            if (Roulette == 3) {
                newRoom = 4
            }
        }
    }  else if (Currentroom == 2) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (e == 'Army') {
            newRoom = 1
        }
        if (Roulette == 1 && e != 'Army') {
            newRoom = 9
        }
        if (Roulette == 2) {
            newRoom = 1
        }
        if (e == "Toad") {
            newRoom = 9
        }
    } else if (Currentroom == 3) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (Roulette == 1) {
            newRoom = 1
        }
        if (Roulette == 2) {
            newRoom = 5
        }
        if (e == 'Toad') {
            newRoom = 1
        }
    } else if (Currentroom == 4) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (Roulette == 1) {
            newRoom = 10
        }
        if (Roulette == 2) {
            newRoom = 1
        }
        if (e == 'Toad') {
            newRoom = 10
        }
    } else if (Currentroom == 5) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (Roulette == 1) {
            newRoom = 3
        }
        if (Roulette == 2) {
            newRoom = 6
        }
    } else if (Currentroom == 6) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (Roulette == 1) {
            newRoom = 1
        }
        if (Roulette == 2) {
            newRoom = 5
        }
    } else if (Currentroom == 7) {
        var Roulette = Math.floor((Math.random() * 3) + 1)
        if (Roulette == 1  && e != "Toad") {
            newRoom = 1
        }
        if (Roulette == 2) {
            newRoom = "Hall"
        }
        if (Roulette == 3) {
            newRoom = 8
        }
        if (newRoom == 0) {
            Roulette = Math.floor((Math.random() * 2) + 1)
            if (Roulette == 1) {
                newRoom = "Hall"
            }
            if (Roulette == 2) {
                newRoom = 8
            }
        }
    } else if (Currentroom == 8) {
        var Roulette = Math.floor((Math.random() * 3) + 1)
        if (Roulette == 1  && e != "Toad") {
            newRoom = 1
        }
        if (Roulette == 2) {
            newRoom = "Hall"
        }
        if (Roulette == 3) {
            newRoom = 7
        }
        if (newRoom == 0) {
            Roulette = Math.floor((Math.random() * 2) + 1)
            if (Roulette == 1) {
                newRoom = "Hall"
            }
            if (Roulette == 2) {
                newRoom = 7
            }
        }
    } else if (Currentroom == 9) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (e == 'Toad') {
            newRoom = 'LeftOffice'
        } else if (Roulette == 1) {
            newRoom = 'LeftOffice'
        } else if (Roulette == 2) {
            newRoom = 2
        }
    } else if (Currentroom == 10) {
        var Roulette = Math.floor((Math.random() * 2) + 1)
        if (e == 'Toad') {
            newRoom = 'RightOffice'
        } else if (Roulette == 1) {
            newRoom = 'RightOffice'
        } else if (Roulette == 2) {
            newRoom = 4
        }
    } else if (Currentroom == 'Hall') {
        if (!FrontDoorDarkness.src.includes("ClosedDoor")) {
            newRoom = "Office"
        } else if (e == "Sloth") {
            newRoom = "Office"
        } else if (FrontDoorDarkness.src.includes("ClosedDoor")) {
            var Roulette = Math.floor((Math.random() * 2) + 1)
            PlayAudio("hittingDoor")
            if (e == 'Army') {
                newRoom = 1
            }
            if (Roulette == 1) {
                newRoom = 1
            }
            if (Roulette == 2  && e != 'Army') {
                newRoom = 3
            }
        }
    } else if (Currentroom == "LeftOffice") {
        if (!LeftDoorDarkness.src.includes('ClosedDoor')) {
            newRoom = "Office"
        }  else if (e == "Sloth") {
            newRoom = "Office"
        } else {
            newRoom = 1
            PlayAudio("hittingDoor")
        }
    }  else if (Currentroom == "RightOffice") {
        if (!RightDoorDarkness.src.includes('ClosedDoor')) {
            newRoom = "Office"
        }  else if (e == "Sloth") {
            newRoom = "Office"
        } else {
            newRoom = 1
            PlayAudio("hittingDoor")
        }
    } else if (Currentroom == "Office") {
        newRoom = 'Office'
    }
    if (e == "Toad") {
        ToadValues.CurrentRoom = newRoom
    } else if (e == 'Army') {
        ArmyValues.CurrentRoom = newRoom
    } else if (e == "Sloth") {
        SlothValues.CurrentRoom = newRoom
    }
}

function UpdateCamera(e) {
    if (!CameraScreen.src.includes("CAM5")) {
        Static.style.opacity = '0.5'
        if (e == 'Toad') {
            if (!CAM3Toad.hidden) {
                CAM3Toad.hidden = true
            } else if (CAM3Toad.hidden) {
                CAM3Toad.hidden = false
            }
        }
        if (e == 'Army') {
            if (!Army.hidden) {
                Army.hidden = true
            } else if (Army.hidden) {
                Army.hidden = false
            }
        }
        if (e == 'Sloth') {
            if (!SlothCam.hidden) {
                SlothCam.hidden = true
            } else if (SlothCam.hidden) {
                SlothCam.hidden = false
            }
        }
        setTimeout(() => {
            Static.hidden = true
        }, 100);
    }
}

setInterval(() => {
    movelocationPhantom()
}, 8090);

setInterval(() => {
    movelocationToad()
}, 6700);

setInterval(() => {
    movelocationArmy()
}, 14000);

setInterval(() => {
    movelocationSloth()
}, 10000);