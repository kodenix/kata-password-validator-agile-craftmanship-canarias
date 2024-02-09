import { describe, expect, it } from "vitest"
import { isValid } from "./main.js"

describe("Password kata", () => {
  it("should validate when the length is atleast 8 characters", () => {
    const result = isValid("12345678")

    expect(result).toBe(true)
  })
})
