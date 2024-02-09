import { describe, expect, it } from "vitest"
import { isValid } from "./main.js"

describe("Password kata", () => {
  it.each(["", "1234567"])("should be false when the length is not atleast 8 characters", (password) => {
    const result = isValid(password)

    expect(result).toBe(false)
  })

  it("should be false when there is not uppercase character included", () => {
    const result = isValid("A2345678")

    expect(result).toBe(true)
  })
})
