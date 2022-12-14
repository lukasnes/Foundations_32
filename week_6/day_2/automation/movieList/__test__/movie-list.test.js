const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/week_6/day_2/automation/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
})
let movieName = "Interstellar"

describe('Movie list tests', () => {
    test('Adding a movie to our movie list', async() => {
        await driver.findElement(By.xpath('//input')).sendKeys(`${movieName}\n`)
        await driver.sleep(2000)

        await driver.findElement(By.xpath('//input')).sendKeys(`Mulan\n`)
        await driver.sleep(2000)

        let movie = await driver.findElement(By.xpath('//li/span')).getText()
        expect(movie).toBe(movieName)
        await driver.sleep(2000)
    })

    test('Making sure a movie gets deleted', async() => {

        await driver.findElement(By.id(movieName)).click()
        let movieList = await driver.findElement(By.xpath('//ul')).getAttribute('innerHTML')
        await driver.sleep(2000)

        expect(movieList.includes(movieName)).toBe(false)
    })
})