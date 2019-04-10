let data = {
  sources: [
    {
      text: `
        [_Outside the door I am aware of the darkness and the wind as a deliverance._](1 "")

        [_I breathe as deep as I can, and feel the breeze in my face, warm and soft as never before._](1 "")

        [_Thoughts of girls, of flowery meadows, of white clouds suddenly come into my head._](1 "")

        [_My feet begin to move forward in my boots, I go quicker, I run._](1 "")

        [_Soldiers pass by me, I hear their voices without understanding._](1 "")

        [_The earth is streaming with forces which pour into me through the soles of my feet._](1 "")

        [_The night crackles electrically, the front thunders like a concert of drums._](1 "")

        [_My limbs move supplely, I feel my joints strong, I breathe the air deeply._](1 "")

        [_The night lives, I live._](1 "")

        [_I feel a hunger, greater than comes from the belly alone._](1 "")
      `,
      background: "images/helmet.jpg"
    },
    {
      text: `
        [_Outside_ the door I am aware of _the darkness_](1 "Outside | the darkness:")
        and [_the wind_ as a _deliverance._](1 "the wind, | deliverance.")

        [_I breathe_](1 "I breathe.") as deep as
        [_I_ can, and _feel the breeze_](1 "I | feel: the breeze,")
        in my face, warm and soft as never before.

        Thoughts of girls, of [_flowery meadows,_](1 "flowery meadows,")
        of [_white clouds_](1 "white clouds.") suddenly come into my head.

        My feet begin to move forward in my boots, I go quicker, I run.

        Soldiers pass by me, [_I hear_](1 "I hear:")
        their [_voices_](1 "voices,") without understanding.

        [_The earth_](1 "the earth,")
        is streaming with forces which pour into me through the soles of my feet.

        The night crackles electrically, the front thunders like
        [_a concert of drums._](1 "a concert of drums.")

        My limbs move supplely,
        [_I feel_ my joints _strong,_](1 "I feel | strong.")
        [_I breathe_](1 "I breathe;") the air deeply.

        The night lives, [_I live_](1 "I live;").

        [_I feel_](1 "I feel.")
        a hunger, greater than comes from the belly alone.
      `,
      background: "images/beauty.jpg"
    },
    {
      text: `
        [_Outside the door_](1 "Outside the door.")
        I am aware of [_the darkness_](1 "The darkness —")
        and the wind as a deliverance.

        I breathe as [_deep_ as I can, and feel the breeze in my _face,_
          warm and soft as _never before._](1 "Deep | face, | never before.")

        Thoughts of girls, of flowery meadows, of white clouds suddenly come into my head.

        My feet begin to move forward in my [_boots,_](1 "Boots.")
        [_I go quicker, I run._](1 "I go quicker, I run.")

        [_Soldiers_ pass by me, I hear their voices _without understanding._](1 "Soldiers | without understanding.")

        The earth is streaming with forces which pour into me through the soles of my feet.

        The night [_crackles_](1 "Crackle;") electrically,
        [_the front thunders_](1 "the front thunders.") like a concert of drums.

        My limbs move supplely, I feel my joints strong, I breathe the air deeply.

        [_The night_](1 "The night.") lives, I live.

        I feel a [_hunger_,](1 "Hunger.") greater than comes from the belly alone.
      `,
      background: "images/horror.jpg"
    },
  ],
}

export default data;
