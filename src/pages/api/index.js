// @ts-check

import { Canvas, FontLibrary } from "skia-canvas"

const SIZE = 500

export default /** @type {import("next").NextApiHandler} */ (async (
  req,
  res
) => {
  FontLibrary.use("Asap", [
    "/Users/carlos/Development.localized/vercel-gif/AsapCondensed-Medium.ttf",
  ])

  const canvas = new Canvas(SIZE, SIZE)
  const ctx = canvas.getContext("2d")

  ctx.fillStyle = "yellow"
  ctx.fillRect(0, 0, SIZE, SIZE)
  ctx.fillStyle = "red"
  ctx.fillRect(0, 0, SIZE * (3 / 4), SIZE * (3 / 4))
  ctx.fillStyle = "blue"
  ctx.fillRect(SIZE * (1 / 4), SIZE * (1 / 4), SIZE, SIZE)

  ctx.fillStyle = "white"
  ctx.font = "50px Asap"
  ctx.fillText("Hola", SIZE / 4, SIZE / 4)

  res.setHeader("Content-Type", "image/png")
  res.send(canvas.toBuffer("image/png"))
})
