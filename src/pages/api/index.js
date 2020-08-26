module.exports = (req, res) => {
  res.send(JSON.stringify(process.env, null, 2))
}
