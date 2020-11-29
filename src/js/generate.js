export default function generateRandom() {
  const min = 1
  const max = Math.floor(16)
  const result = Math.floor(Math.random() * (max - min + 1)) + min
  return result.toString()
}
