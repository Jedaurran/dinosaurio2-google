input.onButtonPressed(Button.A, function on_button_pressed_a() {
    pies_dinosaurio.change(LedSpriteProperty.Y, -1)
    cola_dinosaurio.change(LedSpriteProperty.Y, -1)
    torso_dinosaurio.change(LedSpriteProperty.Y, -1)
    brazos_dinosaurio.change(LedSpriteProperty.Y, -1)
    cuello_dinosaurio.change(LedSpriteProperty.Y, -1)
    cabeza1_dinosaurio.change(LedSpriteProperty.Y, -1)
    cabeza2_dinosaurio.change(LedSpriteProperty.Y, -1)
    cabeza3_dinosaurio.change(LedSpriteProperty.Y, -1)
    cabeza4_dinosaurio.change(LedSpriteProperty.Y, -1)
    cabeza5_dinosaurio.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    pies_dinosaurio.change(LedSpriteProperty.Y, 1)
    cola_dinosaurio.change(LedSpriteProperty.Y, 1)
    torso_dinosaurio.change(LedSpriteProperty.Y, 1)
    brazos_dinosaurio.change(LedSpriteProperty.Y, 1)
    cuello_dinosaurio.change(LedSpriteProperty.Y, 1)
    cabeza1_dinosaurio.change(LedSpriteProperty.Y, 1)
    cabeza2_dinosaurio.change(LedSpriteProperty.Y, 1)
    cabeza3_dinosaurio.change(LedSpriteProperty.Y, 1)
    cabeza4_dinosaurio.change(LedSpriteProperty.Y, 1)
    cabeza5_dinosaurio.change(LedSpriteProperty.Y, 1)
})
function Cactus() {
    
    cactus = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        cactus.change(LedSpriteProperty.X, -1)
        if (cactus.isTouching(pies_dinosaurio)) {
            basic.showIcon(IconNames.Sad)
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
            Cactus()
        }
        
    }
}

let cactus : game.LedSprite = null
let cabeza5_dinosaurio : game.LedSprite = null
let cabeza4_dinosaurio : game.LedSprite = null
let cabeza3_dinosaurio : game.LedSprite = null
let cabeza2_dinosaurio : game.LedSprite = null
let cabeza1_dinosaurio : game.LedSprite = null
let cuello_dinosaurio : game.LedSprite = null
let brazos_dinosaurio : game.LedSprite = null
let torso_dinosaurio : game.LedSprite = null
let cola_dinosaurio : game.LedSprite = null
let pies_dinosaurio : game.LedSprite = null
pies_dinosaurio = game.createSprite(1, 4)
cola_dinosaurio = game.createSprite(0, 3)
torso_dinosaurio = game.createSprite(1, 3)
brazos_dinosaurio = game.createSprite(2, 3)
cuello_dinosaurio = game.createSprite(1, 2)
cabeza1_dinosaurio = game.createSprite(2, 2)
cabeza2_dinosaurio = game.createSprite(3, 2)
cabeza3_dinosaurio = game.createSprite(1, 1)
cabeza4_dinosaurio = game.createSprite(2, 1)
cabeza5_dinosaurio = game.createSprite(3, 1)
Cactus()
basic.forever(function on_forever() {
    if (cactus.isTouchingEdge()) {
        basic.pause(1000)
        cactus.delete()
        Cactus()
    }
    
})
