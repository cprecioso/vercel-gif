import { createCanvas } from "canvas"

const SIZE = 500

export default (req, res) => {
  const canv = createCanvas(SIZE, SIZE)
  const ctx = canv.getContext("2d")

  ctx.fillStyle = "yellow"
  ctx.fillRect(0, 0, SIZE, SIZE)
  ctx.fillStyle = "red"
  ctx.fillRect(0, 0, SIZE * (3 / 4), SIZE * (3 / 4))
  ctx.fillStyle = "blue"
  ctx.fillRect(SIZE * (1 / 4), SIZE * (1 / 4), SIZE, SIZE)

  res.setHeader("Content-Type", "image/png")
  canv.createPNGStream().pipe(res)
}
