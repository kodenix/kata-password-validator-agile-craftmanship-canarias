export function isValid(password: string) {
  if (password !== password.toUpperCase()) return false
  if (password.length < 8) return false
  return true
}
