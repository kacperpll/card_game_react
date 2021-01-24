import puppeteer from "puppeteer"
import "@testing-library/jest-dom"

test("New score after battle", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ["--window-size=1920,1080"]
    })

    const page = await browser.newPage()
    await page.goto("http://localhost:3000/")

    const fightButton = await page.$('[data-testid="fightButton"]')
    const battleScore = await page.$('[data-testid="battleScore"]')
    const initialBattleScore = await page.evaluate(battleScore => battleScore.textContent, battleScore)

    await fightButton.click()

    const newBattleScore = await page.evaluate(battleScore => battleScore.textContent, battleScore)

    expect(initialBattleScore).toBe("Left: 0 - Right: 0")
    expect(newBattleScore).not.toBe("Left: 0 - Right: 0")
    expect(["Left: 1 - Right: 0", "Left: 0 - Right: 1", "Left: 1 - Right: 1"]).toContain(newBattleScore)
}, 10000)