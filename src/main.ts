export function isValid(password: string) {
  if (password.length < 8) return false
  if (password === "") return false
  return true
}
