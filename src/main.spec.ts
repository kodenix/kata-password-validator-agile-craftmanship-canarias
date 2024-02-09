import { describe, expect, it } from "vitest"
import { isValid } from "./main.js"

describe("Password kata", () => {
  it("should validate when the length is atleast 8 characters", () => {
    const result = isValid("12345678")

    expect(result).toBe(true)
  })
  it("should be false when the length is lesser than 8 characteres", () => {
    const result = isValid("")

    expect(result).toBe(false)
  })
})
