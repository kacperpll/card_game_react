import { battleResult } from "../functions/functions"
import "@testing-library/jest-dom"

test("Setting score", () => {
    expect(battleResult({"firstCard": 2, "secondCard": 2}, [{"cost_in_credits": "100"}, {"cost_in_credits": "0"}]))
        .toStrictEqual({newScore: {"firstCard": 3, "secondCard": 2}, battleResult: "Left"})
})