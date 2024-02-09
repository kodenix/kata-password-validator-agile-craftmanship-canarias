import { describe, expect, it } from "vitest"
import { isValid } from "./main.js"

describe("Password kata", () => {
  it("should validate when the length is atleast 8 characters", () => {
    const result = isValid("12345678")

    expect(result).toBe(true)
  })

  it.each(["", "1234567"])("should be false when the length is not atleast 8 characters", (password) => {
    const result = isValid(password)

    expect(result).toBe(false)
  })

  it("should be false when there is not uppercase character included", () => {
    const result = isValid("a2345678")

    expect(result).toBe(false)
  })
})
