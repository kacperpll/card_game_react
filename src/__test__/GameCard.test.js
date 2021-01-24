import React from "react"
import GameCard from "../views/GameBoardView/components/GameCard/GameCard"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom"

afterEach(cleanup)

it("Render Avatar correctly", () => {
    const {getByTestId} = render (<GameCard starships={[{"name":"test"}]} id={0}/>)
    expect(getByTestId("avatar")).toHaveTextContent("T")
})

it("Render Price correctly", () => {
    const {getByTestId} = render (<GameCard starships={[{"name": "star","cost_in_credits":"123"}]} id={0}/>)
    expect(getByTestId("price")).toHaveTextContent("123")
})