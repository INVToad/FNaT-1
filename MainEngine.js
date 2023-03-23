var Button1 = document.getElementById("Button1"), 
Button2 = document.getElementById("Button2"), 
Button3 = document.getElementById("Button3"),
Button4 = document.getElementById("Button4")
var Switch1 = document.getElementById("Switch1"), 
Switch2 = document.getElementById("Switch2"), 
Switch3 = document.getElementById("Switch3")
var PowerBar = document.getElementById("PowerBar")
var Lever = document.getElementById("Lever")
var CameraSystem = document.getElementById("CameraSystem")
var PowerPercent = document.getElementById("PowerPercentage")
var Kermit = document.getElementById("Kermit")
var SlothJumpScare = document.getElementById("SlothJump")
var CAM1 = document.getElementById("CAM1"),
CAM2 = document.getElementById("CAM2"),
CAM3 = document.getElementById("CAM3"),
CAM4 = document.getElementById("CAM4"),
CAM5 = document.getElementById("CAM5"),
CAM6 = document.getElementById("CAM6"),
CAM7 = document.getElementById("CAM7"),
CAM8 = document.getElementById("CAM8"),
CAM9 = document.getElementById("CAM9"),
CAM10 = document.getElementById("CAM10"),
HiddenAudio = document.getElementById("HiddenAudioPlay"),
CurrentNightDisplay = document.getElementById("Night")
var Alert = document.getElementById("Alert")
var Time = document.getElementById("Time")

var ToadDiccultyNumber = document.getElementById("ToadDifficulty"),
ArmyDiccultyNumber = document.getElementById("ArmyDifficulty"),
SlothDiccultyNumber = document.getElementById("SlothDifficulty"),
PhantomDiccultyNumber = document.getElementById("PhantomDifficulty"),
SharkDiccultyNumber = document.getElementById("SharkDifficulty")

var NewGameButton = document.getElementById("NewGame"),
ContinueGameButton = document.getElementById("ContinueGame"),
Night6Button = document.getElementById("Night6"),
CustomNightButton = document.getElementById("CustomNight")

var MuteButton = document.getElementById("SoundMuteButton")

var BackButton = document.getElementById("BackButton"), 
StartButton = document.getElementById("StartButton")

var CustomScreen = document.getElementById("CustomScreen")

var Office = document.getElementById("TheOffice"),
Desk = document.getElementById("DeskImage")

var FlipOutScreen = document.getElementById("FlipOutScreen"),
FlipOutTrigger = document.getElementById("FlipOutTrigger"),
CameraScreen = document.getElementById("Camera")

var DarkMode = document.getElementById("DarkMode")
var FrontDoorDarkness = document.getElementById("FrontDoorDarkness"),
LeftDoorDarkness = document.getElementById("LeftDoorDarkness"),
RightDoorDarkness = document.getElementById("RightDoorDarkness")

var Static = document.getElementById("Static")
var MusicTimer = document.getElementById("MusicTimer")
var ButtonMovementValue = -5

var ButtonPlatform = document.getElementById("ButtonPlatform")

var CAM1mini = document.getElementById("CAM1mini"),
CAM2mini = document.getElementById("CAM2mini"),
CAM3mini = document.getElementById("CAM3mini"),
CAM4mini = document.getElementById("CAM4mini"),
CAM5mini = document.getElementById("CAM5mini"),
CAM6mini = document.getElementById("CAM6mini"),
CAM7mini = document.getElementById("CAM7mini"),
CAM8mini = document.getElementById("CAM8mini"),
CAM9mini = document.getElementById("CAM9mini"),
CAM10mini = document.getElementById("CAM10mini"),
ShockPlatform = document.getElementById("ShockPlatform"),
ShockImage = document.getElementById("ShockImage")

var ToadIncrease = document.getElementById("ToadIncrease"),
ArmyIncrease = document.getElementById("ArmyIncrease"),
SlothIncrease = document.getElementById("SlothIncrease"),
PhantomIncrease = document.getElementById("PhantomIncrease"),
SharkIncrease = document.getElementById("SharkIncrease")

var ToadDecrease = document.getElementById("ToadDecrease"),
ArmyDecrease = document.getElementById("ArmyDecrease"),
SlothDecrease = document.getElementById("SlothDecrease"),
PhantomDecrease = document.getElementById("PhantomDecrease"),
SharkDecrease = document.getElementById("SharkDecrease")


//Animatronics
var CAM3Toad = document.getElementById("CAM3Toad"),
HallToad = document.getElementById("HallToad"),
LeftToad = document.getElementById("LeftToad"),
RightToad = document.getElementById("RightToad")
var Phantom = document.getElementById("Phantom")
var Army = document.getElementById("ArmyAntronic")
var ArmyHall = document.getElementById("ArmyAntronicHall"),
ArmyJumpscare = document.getElementById("ArmyJumpscare")
var SlothCam = document.getElementById("Sloth")

var PowerUsage = 1
var PowerLevels = 1000
var PowerPercentage = PowerLevels / 100
var PassivePowerLoss = true
var ScreenMovementValue = -50
var ButtonsActive = true

let NextHour;
let NextMusic;
let MusicRewinding;

var leverSwitchable = true
var GameEnd = true

var AudioOn = false

let GameTimeStart;
let MoreIntervales;

//Animatronic "Phantom"
const PhantomValues = {
    Camlocation: 5,
    Diffuclty: 0,
    Enabled: false
}

//Animatronic "Toad"
const ToadValues = {
    CurrentRoom: 3,
    Diffuclty: 0,
    Active: false
}

//Animatronic "Sloth"
const SlothValues = {
    CurrentRoom: 5,
    Diffuclty: 0,
    Active: false
}

//Automatronic "Army"
const ArmyValues = {
    CurrentRoom: 2,
    Diffuclty: 0,
    Active: false
}

//Animatronic "Shark"
const SharkValues = {
    Unleashed: false,
    MusicTime: 0,
    StartTime: 0,
    Active: false,
    Tempered: false,
    PhantomForm: false,
    Diffuclty: 0,
    CurrentTimeLevel: 6
}

//NightSettings
var CurrentNight = 1

if (CurrentNight < 6) {
    CurrentNightDisplay.textContent = "Night " + CurrentNight
} else if (CurrentNight == 6) {
    Night6Button.hidden = false
    CurrentNightDisplay.textContent = "Night " + 5
} else if (CurrentNight == 7) {
    Night6Button.hidden = false
    CustomNightButton.hidden = false
    CurrentNightDisplay.textContent = "Night " + 5
}

function Nightshift(e) {
    if (e == "Continue" && CurrentNight >= 6) {
        CurrentNight = 5
    }
    clearTimeout(NextHour)
    clearTimeout(NextMusic)
    clearInterval(GameTimeStart)
    clearInterval(MoreIntervales)
    PlayAudio("ShiftStart")
    if (CurrentNight < 6) {
        CurrentNightDisplay.textContent = "Night " + CurrentNight
    }
    
    if (CurrentNight == 6) {
        Night6Button.hidden = false
    }
    if (CurrentNight == 7) {
        CustomNightButton.hidden = false
    }
    ButtonMovementValue = -10
    SharkValues.CurrentTimeLevel = 6
    MusicTimer.src = "Assets/MusicTimer6.png"
    Army.src = "Assets/ArmyDeactive.png"
    DarkMode.style.opacity = '1'
    Time.style.fontSize = "100px"
    Time.style.left = "560px"
    Time.style.bottom = "370px"
    Time.textContent = "Night " + CurrentNight
    DarkMode.hidden = false
    Alert.hidden = true
    Hour = 0
    ButtonsActive = true
    nexthourset = false
    GameTimeSet = Date.now()
    PassivePowerLoss = false
    setTimeout(() => {
        GameEnd = false
        if (SharkValues.Active) {
            MusicBox()
        }
        DarkMode.style.opacity = '0.8'
        DarkMode.hidden = true
        Alert.hidden = false
        GameTimeStart = setInterval(() => {
            GameTime()
        }, 10)
        MoreIntervales = setInterval (() => {
            PowerBarUsage()
            RewindButton()
        }, 10)
        GameTimeSet = Date.now()
        Switch1.src = "Assets/DoorSwitchDown.png"
        Switch2.src = "Assets/DoorSwitchDown.png"
        Switch3.src = "Assets/DoorSwitchDown.png"
        FrontDoorDarkness.src = "Assets/FrontDoorDarkness.png"
        LeftDoorDarkness.src = "Assets/LeftDarkness.png"
        RightDoorDarkness.src = "Assets/RightDarkness.png"
        CameraSystem.src = "Assets/BuildingLayout.png"
        CameraScreen.hidden = true
        CAM3Toad.hidden = true
        SlothCam.hidden = true
        CAM3Toad = document.getElementById("CAM3Toad")
        Army.hidden = true
        Army = document.getElementById("ArmyAntronic")
        Phantom.hidden = true
        Static.hidden = true
        PowerUsage = 1
        if (Alert.src.includes('On')) {
            AlertActive()
        }
        Alert.hidden = false
        ArmyValues.CurrentRoom = 2
        ToadValues.CurrentRoom = 3
        PowerLevels = 1000
        Time.style.fontSize = "30px"
        Time.style.left = "1100px"
        Time.style.bottom = "350px"
        Time.textContent = "12:00"
        PassivePowerLoss = true 
        GameEnd = false
        CameraScreen.hidden = true
    }, 5000);
    if (CurrentNight == 1) {
        ToadValues.Active = true
        ToadValues.Diffuclty = 2
    }
    if (CurrentNight == 2) {
        ToadValues.Active = true
        ToadValues.Diffuclty = 4
        ArmyValues.Active = true
        ArmyValues.Diffuclty = 4
        SlothValues.Active = true
        SlothValues.Diffuclty = 3
    }
    if (CurrentNight == 3) {
        ToadValues.Active = true
        ToadValues.Diffuclty = 7
        ArmyValues.Active = true
        ArmyValues.Diffuclty = 6
        SharkValues.Active = true
        SharkValues.MusicTime = 120
        SlothValues.Active = true
        SlothValues.Diffuclty = 5
    }
    if (CurrentNight == 4) {
        ToadValues.Active = true
        ToadValues.Diffuclty = 8
        ArmyValues.Active = true
        ArmyValues.Diffuclty = 8
        PhantomValues.Enabled = true
        PhantomValues.Diffuclty = 5
        SharkValues.Active = true
        SharkValues.MusicTime = 60
        SlothValues.Active = true
        SlothValues.Diffuclty = 7
    }
    if (CurrentNight == 5) {
        ToadValues.Active = true
        ToadValues.Diffuclty = 9
        ArmyValues.Active = true
        ArmyValues.Diffuclty = 9
        PhantomValues.Enabled = true
        PhantomValues.Diffuclty = 6
        SharkValues.Active = true
        SharkValues.MusicTime = 40
        SlothValues.Active = true
        SlothValues.Diffuclty = 8
    }
    if (CurrentNight == 6) {
        ToadValues.Active = true
        ToadValues.Diffuclty = 11
        ArmyValues.Active = true
        ArmyValues.Diffuclty = 10
        PhantomValues.Enabled = true
        PhantomValues.Diffuclty = 13
        SharkValues.Active = true
        SharkValues.MusicTime = 40
        SlothValues.Active = true
        SlothValues.Diffuclty = 10
    }
    if (CurrentNight == 7 && e == 'Custom') {
        ToadValues.Active = true
        ArmyValues.Active = true
        PhantomValues.Enabled = true
        SharkValues.Active = true
        SharkValues.MusicTime = 40
        SlothValues.Active = true
    } else if (CurrentNight == 7 && e != "Custom" && e != 'Continue') {
        ToadValues.Active = true
        ToadValues.Diffuclty = 17
        ArmyValues.Active = true
        ArmyValues.Diffuclty = 18
        PhantomValues.Enabled = true
        PhantomValues.Diffuclty = 17
        SharkValues.Active = true
        SharkValues.MusicTime = 40
        SlothValues.Active = true
        SlothValues.Diffuclty = 15
    }
    SharkValues.StartTime = SharkValues.CurrentTimeLevel
}


function ButtonHold(e) {
    if (e.buttons == 1) {
        e.target.src = "Assets/ButtonDown.png"
        if (e.target.id == 'Button1' && !LeftDoorDarkness.src.includes("ClosedDoor") && ButtonsActive) {
            LeftDoorDarkness.hidden = true
            PlayAudio("HoldLightSound")
            flickercon = setInterval(() => {
                let ran = Math.floor(Math.random() * 10) + 1
                if (LeftDoorDarkness.hidden && ran <= 3) {
                    LeftDoorDarkness.hidden = false
                    PlayAudio("StopLightSound")
                    flickertime = setTimeout(() => {
                        LeftDoorDarkness.hidden = true
                        PlayAudio("HoldLightSound")
                    }, 20)
                }
            }, 500);
            if (ToadValues.CurrentRoom == 'LeftOffice') {
                PlayAudio('AtDoor')
                LeftToad.hidden = false
            }
            PowerUsage += 1
        }
        if (e.target.id == 'Button2' && !FrontDoorDarkness.src.includes("ClosedDoor") && ButtonsActive) {
            FrontDoorDarkness.hidden = true
            PlayAudio("HoldLightSound")
            flickercon = setInterval(() => {
                let ran = Math.floor(Math.random() * 10) + 1
                if (FrontDoorDarkness.hidden && ran <= 3) {
                    FrontDoorDarkness.hidden = false
                    PlayAudio("StopLightSound")
                    flickertime = setTimeout(() => {
                        FrontDoorDarkness.hidden = true
                        PlayAudio("HoldLightSound")
                    }, 20)
                }
            }, 500);
            if (ToadValues.CurrentRoom == 'Hall') {
                PlayAudio('AtDoor')
                HallToad.hidden = false
            }
            if (ArmyValues.CurrentRoom == 'Hall') {
                PlayAudio('AtDoor')
                ArmyHall.hidden = false
            }
            PowerUsage += 1
        }
        if (e.target.id == 'Button3' && !RightDoorDarkness.src.includes("ClosedDoor") && ButtonsActive) {
            RightDoorDarkness.hidden = true
            PlayAudio("HoldLightSound")
            flickercon = setInterval(() => {
                let ran = Math.floor(Math.random() * 10) + 1
                if (RightDoorDarkness.hidden && ran <= 3) {
                    RightDoorDarkness.hidden = false
                    PlayAudio("StopLightSound")
                    flickertime = setTimeout(() => {
                        RightDoorDarkness.hidden = true
                        PlayAudio("HoldLightSound")
                    }, 20)
                }
            }, 500);
            if (ToadValues.CurrentRoom == 'RightOffice') {
                PlayAudio('AtDoor')
                RightToad.hidden = false
            }
            PowerUsage += 1
        }
        if (e.target.id == 'Button4' && CameraScreen.src.includes("CAM8")) {
            MusicRewinding = setTimeout(() => {
                if (SharkValues.CurrentTimeLevel < 6 && SharkValues.CurrentTimeLevel > 0) {
                    SharkValues.CurrentTimeLevel += 1
                    MusicTimer.src = "Assets/MusicTimer" + SharkValues.CurrentTimeLevel + ".png"
                    PlayAudio('WindUpMusic')
                    if (Alert.src.includes("On")) {
                        AlertActive()
                    }
                    MusicRewind()
                }
            }, 1000)
        }
    }
}
function SwitchFlick(e) {
    if (e.target.src.includes("DoorSwitchDown.png")) {
        e.target.src = "Assets/DoorSwitchUp.png"
        PlayAudio("DoorSound")
        if (e.target.id == 'Switch1') {
            LeftDoorDarkness.src = "Assets/LeftClosedDoor.png"
            PowerUsage += 1
        }
        if (e.target.id == 'Switch2') {
            FrontDoorDarkness.src = "Assets/FrontClosedDoor.png"
            PowerUsage += 1
        }
        if (e.target.id == 'Switch3') {
            RightDoorDarkness.src = "Assets/RightClosedDoor.png"
            PowerUsage += 1
        }
    } else if (e.target.src.includes("DoorSwitchUp.png")) {
        e.target.src = "DoorSwitchDown.png"
        PlayAudio("DoorSound")
        if (e.target.id == 'Switch1') {
            LeftDoorDarkness.src = "Assets/LeftDarkness.png"
            PowerUsage -= 1
        }
        if (e.target.id == 'Switch2') {
            FrontDoorDarkness.src = "Assets/FrontDoorDarkness.png"
            PowerUsage -= 1
        }
        if (e.target.id == 'Switch3') {
            RightDoorDarkness.src = "Assets/RightDarkness.png"
            PowerUsage -= 1
        }
    }
}

function LeverSwitch(e) {
    if (leverSwitchable) {
        if (e.target.src.includes("LeverUp.png")) {
            e.target.src = "Assets/LeverDown.png"
            PowerOutage()
        }
        setTimeout(() => {
            if (ButtonMovementValue > 0) {
                ButtonMovementValue *= -1
            }
            ButtonsActive = true
            PowerOutage()
            PlayAudio('gen')
        }, 15000)
        leverSwitchable = false
        setTimeout(() => {
            e.target.src = "Assets/LeverUp.png"
            leverSwitchable = true
        }, 30000)
    }
}

function ButtonRelease(e) {
    PlayAudio("StopLightSound")
    clearTimeout(flickercon)
    if (e.target.id == 'Button1') {
        LeftDoorDarkness.hidden = false
        if (e.target.src.includes('Down')  && !LeftDoorDarkness.src.includes("ClosedDoor")) {
            LeftToad.hidden = true
            PowerUsage -= 1
        }
    }
    if (e.target.id == 'Button2') {
        FrontDoorDarkness.hidden = false
        if (e.target.src.includes('Down')  && !FrontDoorDarkness.src.includes("ClosedDoor")) {
            HallToad.hidden = true
            ArmyHall.hidden = true
            PowerUsage -= 1
        }
    }
    if (e.target.id == 'Button3') {
        RightDoorDarkness.hidden = false
        if (e.target.src.includes('Down')  && !RightDoorDarkness.src.includes("ClosedDoor")) {
            RightToad.hidden = true
            PowerUsage -= 1
        }
    }
    if (e.target.id == 'Button4' && CameraScreen.src.includes('CAM8')) {
        if (e.target.src.includes('Down')) {
            clearTimeout(MusicRewinding)
        }
    }
    e.target.src = "Assets/ButtonUp.png"
}

function AlertActive() {
    if (Alert.src.includes("Off")) {
        Alert.src = "AlertOn.png"
    } else if (Alert.src.includes("On")) {
        Alert.src = "AlertOff.png"
    }
}

var Darkenabled = true

function GameStart(e) {
    PlayAudio("MenuStop")
    PlayAudio("gen")
    NewGameButton.hidden = true
    ContinueGameButton.hidden = true
    Office.hidden = false
    FrontDoorDarkness.hidden = false
    LeftDoorDarkness.hidden = false
    RightDoorDarkness.hidden = false
    Desk.hidden = false
    PowerBar.hidden = false
    PowerPercent.hidden = false
    Lever.hidden = false
    ShockPlatform.hidden = false
    ShockImage.hidden = false
    CAM1mini.hidden = false
    CAM2mini.hidden = false
    CAM3mini.hidden = false
    CAM4mini.hidden = false
    CAM5mini.hidden = false
    CAM6mini.hidden = false
    CAM7mini.hidden = false
    CAM8mini.hidden = false
    CAM9mini.hidden = false
    CAM10mini.hidden = false
    Button1.hidden = false
    Button2.hidden = false
    Button3.hidden = false
    Button4.hidden = false
    Switch1.hidden = false
    Switch2.hidden = false
    Switch3.hidden = false
    CameraScreen.hidden = false
    FlipOutScreen.hidden = false
    FlipOutTrigger.hidden = false
    Alert.hidden = false
    Time.hidden = false
    ButtonPlatform.hidden = false
    CameraScreen.hidden = true
    if (e == "Continue") {
        Nightshift("Continue")
    } else if (e == 'Custom') {
        Nightshift('Custom')
    } else {
        Nightshift()
    }
}

function PowerOutage() {
    if (Darkenabled) {
        if (DarkMode.hidden) {
            PlayAudio("PowerDown")
            Generator.pause()
            LeftDoorDarkness.src = "Assets/LeftDarkness.png"
            FrontDoorDarkness.src = "Assets/FrontDoorDarkness.png"
            RightDoorDarkness.src = "Assets/RightDarkness.png"
            Switch1.src = "Assets/DoorSwitchDown.png"
            Switch2.src = "Assets/DoorSwitchDown.png"
            Switch3.src = "Assets/DoorSwitchDown.png"
            ResetCamposition()
            CameraSystem.hidden = true
            HiddenAudio.hidden = true
            Phantom.hidden = true
            CAM3Toad.hidden = true
            SlothCam.hidden = true
            ScreenMovementValue = -50
            ShockImage.hidden = true
            CAM1.hidden = true
            CAM2.hidden = true
            CAM3.hidden = true
            CAM4.hidden = true
            CAM5.hidden = true
            CAM6.hidden = true
            CAM7.hidden = true
            CAM8.hidden = true
            CAM9.hidden = true
            CAM10.hidden = true
            Time.hidden = true
            Army.hidden = true
            PowerUsage = 0
            PowerBar.hidden = true
            Alert.hidden = true
            DarkMode.hidden = false
            Darkenabled = false
            PowerPercent.hidden = true
        } else if (!DarkMode.hidden) {
            PowerUsage = 1
            Time.hidden = false
            Alert.hidden = false
            Army.hidden = true
            if (Shockable) {
                ShockImage.hidden = false
            }
            PowerPercent.hidden = false
            PowerBar.hidden = false
            DarkMode.hidden = true
            Darkenabled = false
        }
        Darkenabled = true
    }
}
var GameTimeSet = Date.now()
var nexthourset = false
var Hour = 0
function GameTime() {
    if (Date.now() - GameTimeSet >= 360000 && !GameEnd) {
        DarkMode.style.opacity = '1'
        DarkMode.hidden = false
        Alert.hidden = true
        Time.style.fontSize = "100px"
        Time.style.left = "560px"
        Time.style.bottom = "370px"
        PassivePowerLoss = false
        FrontDoorDarkness.src = "Assets/FrontClosedDoor.png"
        LeftDoorDarkness.src = "Assets/LeftClosedDoor.png"
        RightDoorDarkness.src = "Assets/RightClosedDoor.png"
        PlayAudio("KidsCheering")
        setTimeout(() => {
            if (CurrentNight <= 6) {
                CurrentNight += 1
                if (CurrentNight < 6) {
                    CurrentNightDisplay.textContent = "Night " + CurrentNight
                }
                
                if (CurrentNight == 6) {
                    Night6Button.hidden = false
                }
                if (CurrentNight == 7) {
                    CustomNightButton.hidden = false
                }
                PowerOutage()
                GameEnded()
            }
        }, 11000);
        GameEnd = true
    } else if (!nexthourset && !GameEnd) {
        NextHour = setTimeout(() => {
            Hour += 1
            Time.textContent = "0" + Hour + ":00"
            nexthourset = false
            if (Hour == 3 || Hour == 5 ) {
                ToadValues.Diffuclty += 1
                SlothValues.Diffuclty += 1
                Army.Diffuclty += 1
            }
        }, 60000);
        nexthourset = true
    }
}


function MusicBox() {
    if (SharkValues.CurrentTimeLevel > 0) {
        let Timer = (SharkValues.MusicTime / 6) * 1000
        NextMusic = setTimeout(() => {
            SharkValues.CurrentTimeLevel -= 1
            if ((SharkValues.CurrentTimeLevel / SharkValues.StartTime) <= 0.5) {
                PlayAudio("MusicBox")
                MusicBoxCAM8Sound.volume = (0.5 - (SharkValues.CurrentTimeLevel / SharkValues.StartTime)) / 2
            }
            if (SharkValues.CurrentTimeLevel > 0) {
                MusicTimer.src = "Assets/MusicTimer" + SharkValues.CurrentTimeLevel + ".png"
            }
            MusicBox()
        }, Timer)
    }
    if (SharkValues.CurrentTimeLevel == 1) {
        AlertActive()
    }
    if (SharkValues.CurrentTimeLevel == 0 && DarkMode.hidden) {
        SharkValues.Unleashed = true
        if (Math.floor((Math.random() * 10) + 1) == 5) {
            SharkValues.PhantomForm = true
        }
        SharkUnleashed()
    }
}

//Animatronic "Shark"
function SharkUnleashed() {
    if (SharkValues.Unleashed)  {
        if (SharkValues.PhantomForm) {
            ButtonsActive = false
            SharkValues.CurrentTimeLevel = 6
            SharkValues.Unleashed = false
            MusicTimer.src = "Assets/MusicTimer6.png"
            SharkValues.PhantomForm = false
            AlertActive()
            MusicBox()
        } else if (!SharkValues.PhantomForm) {
            PowerOutage()
            setTimeout(() => {
                GameEnded()
            }, 2000)
        }
    }
}

function MusicRewind() {
    MusicRewinding = setTimeout(() => {
        if (SharkValues.CurrentTimeLevel < 6 && SharkValues.CurrentTimeLevel > 0) {
            SharkValues.CurrentTimeLevel += 1
            MusicTimer.src = "Assets/MusicTimer" + SharkValues.CurrentTimeLevel + ".png"
            PlayAudio("WindUpMusic")
            MusicRewind()
        }
    }, 1000)
}

function RewindButton() {
    if(Button4.style.right.replace('px', '') - '' < 50 && ButtonMovementValue > 0) {
        let TempButton = (Button4.style.right.replace('px', '') - '') + ButtonMovementValue
        let TempPlatform = (ButtonPlatform.style.right.replace('px', '') - '') + ButtonMovementValue
        Button4.style.right = TempButton + "px"
        ButtonPlatform.style.right = TempPlatform + "px"
    }
    if(Button4.style.right.replace('px', '') - '' > -100 && ButtonMovementValue < 0) {
        let TempButton = (Button4.style.right.replace('px', '') - '') + ButtonMovementValue
        let TempPlatform = (ButtonPlatform.style.right.replace('px', '') - '') + ButtonMovementValue
        Button4.style.right = TempButton + "px"
        ButtonPlatform.style.right = TempPlatform + "px"
    }
    if(FlipOutScreen.style.top.replace('px', '') - '' < 0 && ScreenMovementValue > 0) {
        let TempButton = (FlipOutScreen.style.top.replace('px', '') - '') + ScreenMovementValue
        FlipOutScreen.style.top = TempButton + "px"
        PlayAudio("MonitorUp")
    }
    if(FlipOutScreen.style.top.replace('px', '') - '' >= 0 && ScreenMovementValue > 0) {
        PlayAudio("StaticSound")
        CameraSystem.hidden = false
        HiddenAudio.hidden = false
        Time.hidden = true
        Static.hidden = false
        CameraScreen.hidden= false
        Alert.hidden = true
        CAM1.hidden = false
        CAM2.hidden = false
        CAM3.hidden = false
        CAM4.hidden = false
        CAM5.hidden = false
        CAM6.hidden = false
        CAM7.hidden = false
        CAM8.hidden = false
        CAM9.hidden = false
        CAM10.hidden = false
        if (CameraScreen.src.includes("CAM" + ToadValues.CurrentRoom) && !CameraScreen.src.includes("CAM5")) {
            if (ToadValues.CurrentRoom == 1 && !CameraScreen.src.includes("CAM10")) {
                CAM3Toad.hidden = false
            } else if(ToadValues.CurrentRoom != 1) {
                CAM3Toad.hidden = false
            }
        }
        if (CameraScreen.src.includes("CAM" + SlothValues.CurrentRoom) && !CameraScreen.src.includes("CAM5")) {
            if (SlothValues.CurrentRoom == 1 && !CameraScreen.src.includes("CAM10")) {
                SlothCam.hidden = false
            }  else if(SlothValues.CurrentRoom != 1) {
                SlothCam.hidden = false
            }
        }
        if (CameraScreen.src.includes("CAM8")) {
            MusicTimer.hidden = false
            MusicBoxCAM8Sound.volume = 1
            PlayAudio("MusicBox")
        }
        if (CameraScreen.src.includes("CAM5") && SlothValues.CurrentRoom == 5) {
            PlayAudio("KitchenNoises")
        }
        if (CameraScreen.src.includes("CAM" + ArmyValues.CurrentRoom)) {
            if (ArmyValues.CurrentRoom == 1 && !CameraScreen.src.includes("CAM10")) {
                Army.hidden = false
            }  else if(ArmyValues.CurrentRoom != 1) {
                Army.hidden = false
            }
        }
    }
    if(FlipOutScreen.style.top.replace('px', '') - '' > -1000 && ScreenMovementValue < 0) {
        let TempButton = (FlipOutScreen.style.top.replace('px', '') - '') + ScreenMovementValue
        FlipOutScreen.style.top = TempButton + "px"
        PlayAudio("StaticSoundStop")
        PlayAudio("MonitorDown")
        PlayAudio("MusicBoxStop")
        PlayAudio("NoKitchenNoises")
        if (DarkMode.hidden) {
            Time.hidden = false
            Alert.hidden = false
        }
        MusicTimer.hidden = true
        Static.hidden = true
        CameraScreen.hidden= true
        HiddenAudio.hidden = true
        CameraSystem.hidden = true
    }
}

function FlipOutFunction(e) {
    if (e.screenY > 0) {
        if (ScreenMovementValue > 0) {
            ScreenMovementValue = -50
            LowVoices.pause()
            Generator.volume = 0.5
            PowerUsage -= 1
            CAM1.hidden = true
            CAM2.hidden = true
            CAM3.hidden = true
            CAM4.hidden = true
            CAM5.hidden = true
            CAM6.hidden = true
            CAM7.hidden = true
            CAM8.hidden = true
            CAM9.hidden = true
            CAM10.hidden = true
            CAM3Toad.hidden = true
            SlothCam.hidden = true
            Phantom.hidden = true
            Army.hidden = true
            if (ButtonMovementValue > 0) {
                ButtonMovementValue *= -1
            }
        } else if (ScreenMovementValue < 0) {
            ScreenMovementValue = 50
            PowerUsage += 1
            Generator.volume = 0.2
            if (CameraScreen.src.includes("CAM8")) {
                PlayAudio('LowVoice')
                ButtonMovementValue *= -1
            }
        }
    }
}

let StaticSound = new Audio ("Assets/Sounds/CAMERA STATIC - AUDIO FROM JAYUZUMI.COM.mp3")
let Doorshut = new Audio('Assets/Sounds/DoorSlamming.mp3')
let CameraDown = new Audio('Assets/Sounds/MonitorDown.ogg')
let CameraUp = new Audio("Assets/Sounds/MonitorUp.ogg")
let CameraChange = new Audio("Assets/Sounds/CameraSwitch.ogg")
let MusicBoxCAM8Sound = new Audio("Assets/Sounds/fnaf-2-music-box-theme.mp3")
let LightOnSound = new Audio("Assets/Sounds/fnaf-light-sound.mp3")
let LightHoldSound = new Audio("Assets/Sounds/FnafHoldLightSound.mp3")
let KermitJumpscare = new Audio("Assets/Sounds/fnaf-jumpscare-sound.mp3")
let Kids = new Audio("Assets/Sounds/6amSound.mp3")
let ShiftSound = new Audio("Assets/Sounds/ShiftStart.mp3")
let HiddenAudioSound = new Audio("Assets/Sounds/LivingTombstone.mp3")
let MenuSound = new Audio("Assets/Sounds/Main Menu.mp3")
let ShockWork = new Audio("Assets/Sounds/SuccessfulShock.ogg")
let FailedShock = new Audio("Assets/Sounds/FalledShock.ogg")
let WindUp = new Audio("Assets/Sounds/WindUp.ogg")
let AnimatronicAtDoor = new Audio("Assets/Sounds/tomp3.cc - animatronic at your door sound effect copyright free.mp3")
let AnimatronicHittingDoor = new Audio("Assets/Sounds/Foxy Hitting Door [Sound Effect].mp3")
let PowerDown = new Audio("Assets/Sounds/FNAF Power Outage Sound Effect.mp3")
let KitechNoises = new Audio("Assets/Sounds/KitchenNoises.mp3")
let CrowdTalk = new Audio("Assets/Sounds/crowd-of-people-talking-29054.mp3")
let Generator = new Audio("Assets/Sounds/constant-mechanical-noise-63164.mp3")
let Storm = new Audio("Assets/Sounds/storm-noise-7102.mp3")
let Recharge = new Audio("Assets/Sounds/mysterion-low-ship-humming-25686.mp3")
let LowVoices = new Audio("Assets/Sounds/crowd-of-people-talking-29054_01.mp3")


function PlayAudio(e) {
    if (AudioOn) {
        if (e == 'gen') {
            Generator.playbackRate = 0.5
            Generator.volume = 0.5
            Generator.loop = true
            Generator.play()
        }
        if (e == 'LowVoice') {
            LowVoices.loop = true
            LowVoices.playbackRate = 3
            LowVoices.play()
        }
        if (e == "KitchenNoises") {
            KitechNoises.loop = true
            KitechNoises.volume = 0.3
            KitechNoises.playbackRate = 0.75
            KitechNoises.play()
        }
        if (e == "NoKitchenNoises") {
            KitechNoises.pause()
        }
        if (e == 'PowerDown') {
            PowerDown.play()
        }
        if (e == "hittingDoor") {
            AnimatronicHittingDoor.play()
        }
        if (e == "AtDoor") {
            AnimatronicAtDoor.currentTime = 1
            AnimatronicAtDoor.play()
        }
        if (e == 'WindUpMusic') {
            WindUp.play()
        }
        if (e == "Shocked") {
            ShockWork.play()
        }
        if (e == "FailedShock") {
            FailedShock.play()
        }
        if (e == "Menu") {
            MenuSound.loop = true
            MenuSound.play()
        }
        if (e == "MenuStop") {
            MenuSound.pause()
            MenuSound.currentTime = 0
        }
        if (e == "SecretAudio") {
            HiddenAudioSound.play()
        }
        if (e == "ShiftStart") {
            ShiftSound.play()
        }
        if (e == "KidsCheering") {
            Kids.play()
        }
        if (e == "HoldLightSound") {
            LightHoldSound.loop = true
            LightHoldSound.play()
        }
        if (e == "Kermit") {
            KermitJumpscare.currentTime = 0
            KermitJumpscare.play()
        }
        if (e == "StopLightSound") {
            LightHoldSound.pause()
            LightHoldSound.currentTime = 0
        }
        if (e == "MusicBox") {
            MusicBoxCAM8Sound.loop = true
            MusicBoxCAM8Sound.play()
        }
        if (e == "MusicBoxStop") {
           MusicBoxCAM8Sound.pause()
        }
        if (e == 'MonitorDown') {
            CameraDown.play()
        }
        if (e == 'MonitorUp') {
            CameraUp.play()
        }
        if (e == "StaticSound") {
            StaticSound.volume = 0.2
            StaticSound.loop = true
            StaticSound.play()
        }
        if (e == "StaticSoundStop") {
            StaticSound.pause()
        }
        if (e == "DoorSound") {
            Doorshut.currentTime = 0
            Doorshut.play()
        }
        if (e == "CameraChange") {
            CameraChange.play()
        }
    }
}

function CameraSwitch(e) {
    Static.hidden = false
    ResetCamposition()
    PlayAudio("CameraChange")
    if ((SharkValues.CurrentTimeLevel / SharkValues.StartTime) <= 0.5) {
        MusicBoxCAM8Sound.volume = (0.5 - (SharkValues.CurrentTimeLevel / SharkValues.StartTime)) / 2
    }
    if (e.target.src.includes('CAM1') && !e.target.src.includes("CAM10")) {
        CameraScreen.src = "Assets/CAM1View.png"
        if (ToadValues.CurrentRoom == 1) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
        if (ArmyValues.CurrentRoom == 1) {
            Army.hidden = false
        }
    }
    if (e.target.src.includes('CAM2')) {
        CameraScreen.src = "Assets/CAM2View.png"
        if (ToadValues.CurrentRoom == 2) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
        if (ArmyValues.CurrentRoom == 2) {
            Army.hidden = false
        }
    }
    if (e.target.src.includes('CAM3')) {
        CameraScreen.src = "Assets/CAM3NewView.png"
        if (ToadValues.CurrentRoom == 3) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
    }
    if (e.target.src.includes('CAM4')) {
        CameraScreen.src = "Assets/CAM4View.png"
        if (ToadValues.CurrentRoom == 4) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
    }
    if (e.target.src.includes('CAM5')) {
        CameraScreen.src = "Assets/CAM5View.png"
        if (SlothValues.CurrentRoom == 5) {
            PlayAudio("KitchenNoises")
        }
    }
    if (e.target.src.includes('CAM6')) {
        CameraScreen.src = "Assets/CAM6View.png"
        if (ToadValues.CurrentRoom == 6) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
    }
    if (e.target.src.includes('CAM7')) {
        CameraScreen.src = "Assets/CAM7View.png"
        if (ToadValues.CurrentRoom == 7) {
            PlayAudio('LowVoice')
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
    }
    if (e.target.src.includes('CAM8')) {
        CameraScreen.src = "Assets/CAM8View.png"
        MusicBoxCAM8Sound.volume = 1
        PlayAudio("MusicBox")
        PlayAudio('LowVoice')
        ButtonMovementValue *= -1
        if (SharkValues.CurrentTimeLevel == 1) {
            CameraScreen.src = "Assets/CAM8ViewNear.png"
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
        MusicTimer.hidden = false
        if (ToadValues.CurrentRoom == 8) {
            CAM3Toad.hidden = false
        }
    }
    if (e.target.src.includes('CAM9')) {
        CameraScreen.src = "Assets/CAM9View.png"
        if (ToadValues.CurrentRoom == 9) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 1) {
            SlothCam.hidden = false
        }
    }
    if (e.target.src.includes('CAM10')) {
        CameraScreen.src = "Assets/CAM10View.png"
        if (ToadValues.CurrentRoom == 10) {
            CAM3Toad.hidden = false
        }
        if (SlothValues.CurrentRoom == 10) {
            SlothCam.hidden = false
        }
        Army.hidden = true
    }
    setTimeout(() => {
            Static.style.opacity = '0.5'
        }, 100);
    if (e.target.src.includes("CAM" + PhantomValues.Camlocation) && !e.target.src.includes('CAM5') && PhantomValues.Enabled) {
        Phantom.hidden = false
        PhantomValues.Camlocation = Math.round(Math.random() * (10 - 1) + 1)
        setTimeout(() => {
            if (FlipOutScreen.style.top.replace('px', '') - '' >= 0) {
                Phantom.hidden = true
                PowerLevels -= 100
            }
        }, 2000)
    }
}

function ResetCamposition() {
    if (!CameraScreen.src.includes("Building")) {
        Static.style.opacity = "1"
        if (ButtonMovementValue > 0) {
            ButtonMovementValue *= -1
        }
        if ((SharkValues.CurrentTimeLevel / SharkValues.StartTime) > 0.5) {
            PlayAudio("MusicBoxStop")
        }
        PlayAudio("NoKitchenNoises")
        LowVoices.pause()
        CAM3Toad.hidden = true
        SlothCam.hidden = true
        Army.hidden = true
        MusicTimer.hidden = true
        setTimeout(() => {
            Static.style.opacity = 0.5
        }, 100);
    }
}

var KermitRevealed = false

function PowerBarUsage() {
    TemporaryPower = PowerUsage - 1
    if (TemporaryPower > -1 && DarkMode.hidden) {
        PowerBar.src = "Assets/PowerBar-" + TemporaryPower + ".png"
    }
    if (PowerLevels <= 0) {
        if (DarkMode.style.opacity != '1' && !KermitRevealed) {
            KermitRevealed = true
            setTimeout(() => {
                Kermit.hidden = false
            }, 5000)
        }
        if (DarkMode.hidden) {
            PowerOutage()
            setTimeout (() => {
                PlayAudio("Kermit")
            }, 5000)
            setTimeout(() => {
                GameEnded()
            }, 10000)
            setTimeout(() => {
                Kermit.hidden = true
                KermitRevealed = false
                DarkMode.style.opacity = '1'
            }, 6000);
        }
    }
    if (PassivePowerLoss) {
        setTimeout(() => {
            if (PowerLevels > 0) {
                PowerLevels -= PowerUsage
                PassivePowerLoss = true
                PowerPercentage = PowerLevels / 10
                PowerPercent.textContent = Math.round(PowerPercentage) + '%'
            }
        }, 1000);
        PassivePowerLoss = false
    }
}

let Shockable = true

function ShockSloth(e) {
    if (e.target.id.includes("CAM" + SlothValues.CurrentRoom) && !e.target.id.includes("CAM5") && Shockable) {
        SlothValues.CurrentRoom = 5
        Static.style.opacity = '1'
        SlothCam.hidden = true
        PlayAudio("Shocked")
        setTimeout(() => {
            Static.style.opacity = "0.5"
        }, 3000)
    } else if (Shockable) {
        PlayAudio("FailedShock")
    }
    Shockable = false
    ShockImage.hidden = true
    setTimeout(() => {
        Shockable = true
        ShockImage.hidden = false
    }, 10000)
}

function GameEnded() {
    PlayAudio("Menu")
    SlothValues.Active = false
    PhantomValues.Active = false
    SharkValues.Active = false
    ToadValues.Active = false
    ArmyValues.Active = false
    ToCheck = false
    ArmCheck = false
    NewGameButton.hidden = false
    ContinueGameButton.hidden = false
    Office.hidden = true
    FrontDoorDarkness.hidden = true
    LeftDoorDarkness.hidden = true
    RightDoorDarkness.hidden = true
    Desk.hidden = true
    PowerBar.hidden = true
    PowerPercent.hidden = true
    CameraScreen.hidden = true
    Lever.hidden = true
    ShockImage.hidden = true
    Button1.hidden = true
    Button2.hidden = true
    Button3.hidden = true
    Button4.hidden = true
    Switch1.hidden = true
    Switch2.hidden = true
    Switch3.hidden = true
    ShockPlatform.hidden = true
    CAM1mini.hidden = true
    CAM2mini.hidden = true
    CAM3mini.hidden = true
    CAM4mini.hidden = true
    CAM5mini.hidden = true
    CAM6mini.hidden = true
    CAM7mini.hidden = true
    CAM8mini.hidden = true
    CAM9mini.hidden = true
    CAM10mini.hidden = true
    Kermit.hidden = true
    SlothJumpScare.hidden = true
    ArmyJumpscare.hidden = true
    CameraScreen.hidden = true
    FlipOutScreen.hidden = true
    FlipOutTrigger.hidden = true
    Alert.hidden = true
    DarkMode.hidden = true
    Time.hidden = true
    ButtonPlatform.hidden = true
    GameEnd = true
    clearTimeout(NextHour)
    clearTimeout(NextMusic)
    clearInterval(GameTimeStart)
    clearInterval(MoreIntervales)
    KermitJumpscare.pause()
}

function NewGameStart() {
    CurrentNight = 1
    Night6Button.hidden = true
    GameStart()
}

function HiddenAudioCue() {
    PlayAudio('SecretAudio')
}

function HoverButton(e) {
    if (e.target.id.includes("New")) {
        NewGameButton.src = "Assets/NewGameHover.png"
    }
    if (e.target.id.includes("Continue")) {
        ContinueGameButton.src = "Assets/HoverContinueButton.png"
    }
    if (e.target.id.includes("Night6")) {
        Night6Button.src = "Assets/Night6ButtonHover.png"
    }
    if (e.target.id.includes("Custom")) {
        CustomNightButton.src = "Assets/CustomNightHover.png"
    }
}

function resetHover(e) {
    if (e.target.id.includes("New")) {
        NewGameButton.src = "Assets/NewGameButton.png"
    }
    if (e.target.id.includes("Continue")) {
        ContinueGameButton.src = "Assets/CONTINUEBUTTOn.png"
    }
    if (e.target.id.includes("Night6")) {
        Night6Button.src = "Assets/Night6Button.png"
    }
    if (e.target.id.includes("Custom")) {
        CustomNightButton.src = "Assets/CustomNightButton.png"
    }
}

function CustomNightSetUp() {
    CustomScreen.hidden = false
    BackButton.hidden = false
    StartButton.hidden = false
    ToadIncrease.hidden = false
    ArmyIncrease.hidden = false
    SlothIncrease.hidden = false
    PhantomIncrease.hidden = false
    SharkIncrease.hidden = false
    ToadDecrease.hidden = false
    ArmyDecrease.hidden = false
    SlothDecrease.hidden = false
    PhantomDecrease.hidden = false
    SharkDecrease.hidden = false
    ToadDiccultyNumber.style.display = 'block'
    ArmyDiccultyNumber.style.display = 'block'
    SlothDiccultyNumber.style.display = 'block'
    PhantomDiccultyNumber.style.display = 'block'
    SharkDiccultyNumber.style.display = 'block'
}

function BackToMenu() {
    CustomScreen.hidden = true
    BackButton.hidden = true
    StartButton.hidden = true
    ToadIncrease.hidden = true
    ArmyIncrease.hidden = true
    SlothIncrease.hidden = true
    PhantomIncrease.hidden = true
    SharkIncrease.hidden = true
    ToadDecrease.hidden = true
    ArmyDecrease.hidden = true
    SlothDecrease.hidden = true
    PhantomDecrease.hidden = true
    SharkDecrease.hidden = true
    ToadDiccultyNumber.style.display = 'none'
    ArmyDiccultyNumber.style.display = 'none'
    SlothDiccultyNumber.style.display = 'none'
    PhantomDiccultyNumber.style.display = 'none'
    SharkDiccultyNumber.style.display = 'none'
}

function IncreaseDiffuclty(e) {
    if (e.target.id.includes("Toad")) {
        if (ToadValues.Diffuclty < 20) {
            ToadValues.Diffuclty += 1
            ToadDiccultyNumber.textContent = ToadValues.Diffuclty
        }
    }
    if (e.target.id.includes("Army")) {
        if (ArmyValues.Diffuclty < 20) {
            ArmyValues.Diffuclty += 1
            ArmyDiccultyNumber.textContent = ArmyValues.Diffuclty          
        }
    }
    if (e.target.id.includes("Sloth")) {
        if (SlothValues.Diffuclty < 20) {
            SlothValues.Diffuclty += 1
            SlothDiccultyNumber.textContent = SlothValues.Diffuclty
        }
    }
    if (e.target.id.includes("Phantom")) {
        if (PhantomValues.Diffuclty < 20) {
            PhantomValues.Diffuclty += 1
            PhantomDiccultyNumber.textContent = PhantomValues.Diffuclty
        }
    }
    if (e.target.id.includes("Shark")) {
        if (SharkValues.Diffuclty < 20) {
            SharkValues.Diffuclty += 1
            SharkDiccultyNumber.textContent = SharkValues.Diffuclty
        }
    }
}

function DecreaseDiffuclty(e) {
    if (e.target.id.includes("Toad")) {
        if (ToadValues.Diffuclty > 0) {
            ToadValues.Diffuclty -= 1
            ToadDiccultyNumber.textContent = ToadValues.Diffuclty
        }
    }
    if (e.target.id.includes("Army")) {
        if (ArmyValues.Diffuclty > 0) {
            ArmyValues.Diffuclty -= 1
            ArmyDiccultyNumber.textContent = ArmyValues.Diffuclty          
        }
    }
    if (e.target.id.includes("Sloth")) {
        if (SlothValues.Diffuclty > 0) {
            SlothValues.Diffuclty -= 1
            SlothDiccultyNumber.textContent = SlothValues.Diffuclty
        }
    }
    if (e.target.id.includes("Phantom")) {
        if (PhantomValues.Diffuclty > 0) {
            PhantomValues.Diffuclty -= 1
            PhantomDiccultyNumber.textContent = PhantomValues.Diffuclty
        }
    }
    if (e.target.id.includes("Shark")) {
        if (SharkValues.Diffuclty > 0) {
            SharkValues.Diffuclty -= 1
            SharkDiccultyNumber.textContent = SharkValues.Diffuclty
        }
    }
}

function AudioChange() {
    if (AudioOn) {
        AudioOn = false
        MuteButton.src = "Assets/Muted.png"
        StaticSound
        LowVoices.pause()
        Generator.pause()
        Storm.pause()
        CrowdTalk.pause()
        Recharge.pause()
        Doorshut.pause()
        CameraDown.pause()
        CameraUp.pause()
        CameraChange.pause()
        MusicBoxCAM8Sound.pause()
        LightOnSound.pause()
        LightHoldSound.pause()
        KermitJumpscare.pause()
        Kids.pause()
        ShiftSound.pause()
        HiddenAudioSound.pause()
        MenuSound.pause()
        StaticSound.pause()
        Doorshut.currentTime = 0
        CameraDown.currentTime = 0
        CameraUp.currentTime = 0
        CameraChange.currentTime = 0
        MusicBoxCAM8Sound.currentTime = 0
        LightOnSound.currentTime = 0
        LightHoldSound.currentTime = 0
        KermitJumpscare.currentTime = 0
        Kids.currentTime = 0
        ShiftSound.currentTime = 0
        HiddenAudioSound.currentTime = 0
        MenuSound.currentTime = 0
    } else {
        AudioOn = true
        MuteButton.src = "Assets/UnMuted.png"
        if (Office.hidden) {
            MenuSound.play()
        }
    }
}

function ConintueGame() {
    GameStart("Continue")
}

function StartCustomGame() {
    BackToMenu()
    GameStart('Custom')
}

NewGameButton.onclick = NewGameStart
NewGameButton.onmouseover = HoverButton
NewGameButton.onmouseleave = resetHover
ContinueGameButton.onclick = ConintueGame
ContinueGameButton.onmouseover = HoverButton
ContinueGameButton.onmouseleave = resetHover
Night6Button.onclick = GameStart
Night6Button.onmouseover = HoverButton
Night6Button.onmouseleave = resetHover
CustomNightButton.onclick = CustomNightSetUp
CustomNightButton.onmouseover = HoverButton
CustomNightButton.onmouseleave = resetHover

HiddenAudio.onclick = HiddenAudioCue

BackButton.onclick = BackToMenu
StartButton.onclick = StartCustomGame

MuteButton.onclick = AudioChange

Button1.onmousedown = ButtonHold
Button1.onmouseout = ButtonRelease
Button1.onmouseover = ButtonHold
Button1.onmouseup = ButtonRelease
Button2.onmousedown = ButtonHold
Button2.onmouseout = ButtonRelease
Button2.onmouseover = ButtonHold
Button2.onmouseup = ButtonRelease
Button3.onmousedown = ButtonHold
Button3.onmouseout = ButtonRelease
Button3.onmouseover = ButtonHold
Button3.onmouseup = ButtonRelease
Button4.onmousedown = ButtonHold
Button4.onmouseout = ButtonRelease
Button4.onmouseup = ButtonRelease
Button4.onmouseover = ButtonHold

ToadIncrease.onclick = IncreaseDiffuclty
ArmyIncrease.onclick = IncreaseDiffuclty
SlothIncrease.onclick = IncreaseDiffuclty
PhantomIncrease.onclick = IncreaseDiffuclty
SharkIncrease.onclick = IncreaseDiffuclty

ToadDecrease.onclick = DecreaseDiffuclty
ArmyDecrease.onclick = DecreaseDiffuclty
SlothDecrease.onclick = DecreaseDiffuclty
PhantomDecrease.onclick = DecreaseDiffuclty
SharkDecrease.onclick = DecreaseDiffuclty

Switch1.onmousedown = SwitchFlick
Switch2.onmousedown = SwitchFlick
Switch3.onmousedown = SwitchFlick

FlipOutTrigger.onmouseover = FlipOutFunction

CAM1.onclick = CameraSwitch
CAM2.onclick = CameraSwitch
CAM3.onclick = CameraSwitch
CAM4.onclick = CameraSwitch
CAM5.onclick = CameraSwitch
CAM6.onclick = CameraSwitch
CAM7.onclick = CameraSwitch
CAM8.onclick = CameraSwitch
CAM9.onclick = CameraSwitch
CAM10.onclick = CameraSwitch

CAM1mini.onclick = ShockSloth
CAM2mini.onclick = ShockSloth
CAM3mini.onclick = ShockSloth
CAM4mini.onclick = ShockSloth
CAM5mini.onclick = ShockSloth
CAM6mini.onclick = ShockSloth
CAM7mini.onclick = ShockSloth
CAM8mini.onclick = ShockSloth
CAM9mini.onclick = ShockSloth
CAM10mini.onclick = ShockSloth


Lever.onclick = LeverSwitch