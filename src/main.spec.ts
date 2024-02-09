import { describe, expect, it } from "vitest"
import { isValid } from "./main.js"

describe("Password kata", () => {
  it("should validate when the length is atleast 8 characters", () => {
    const result = isValid("12345678")

    expect(result).toBe(true)
  })
  it("should be false when the password is empty", () => {
    const result = isValid("")

    expect(result).toBe(false)
  })

  it("should be false when the length is not atleast 8 characters", () => {
    const result = isValid("1234567")

    expect(result).toBe(false)
  })
})
