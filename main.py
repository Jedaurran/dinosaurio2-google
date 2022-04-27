def on_button_pressed_a():
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
input.on_button_pressed(Button.A, on_button_pressed_a)

def Cactus():
    global cactus
    cactus = game.create_sprite(4, 4)
    for index in range(4):
        basic.pause(1000)
        cactus.change(LedSpriteProperty.X, -1)
        if cactus.is_touching(pies_dinosaurio):
            basic.show_icon(IconNames.SAD)
            music.start_melody(music.built_in_melody(Melodies.POWER_DOWN),
                MelodyOptions.ONCE)
            Cactus()
cactus: game.LedSprite = None
cabeza5_dinosaurio: game.LedSprite = None
cabeza4_dinosaurio: game.LedSprite = None
cabeza3_dinosaurio: game.LedSprite = None
cabeza2_dinosaurio: game.LedSprite = None
cabeza1_dinosaurio: game.LedSprite = None
cuello_dinosaurio: game.LedSprite = None
brazos_dinosaurio: game.LedSprite = None
torso_dinosaurio: game.LedSprite = None
cola_dinosaurio: game.LedSprite = None
pies_dinosaurio: game.LedSprite = None
pies_dinosaurio = game.create_sprite(1, 4)
cola_dinosaurio = game.create_sprite(0, 3)
torso_dinosaurio = game.create_sprite(1, 3)
brazos_dinosaurio = game.create_sprite(2, 3)
cuello_dinosaurio = game.create_sprite(1, 2)
cabeza1_dinosaurio = game.create_sprite(2, 2)
cabeza2_dinosaurio = game.create_sprite(3, 2)
cabeza3_dinosaurio = game.create_sprite(1, 1)
cabeza4_dinosaurio = game.create_sprite(2, 1)
cabeza5_dinosaurio = game.create_sprite(3, 1)
Cactus()

def on_forever():
    if cactus.is_touching_edge():
        basic.pause(1000)
        cactus.delete()
        Cactus()
basic.forever(on_forever)
