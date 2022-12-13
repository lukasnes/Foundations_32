
const {Builder, Capabilities} = require('selenium-webdriver')


const {search} = require('./search')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('https://www.google.com/')
})

afterAll(async () => {
    await (await driver).quit()
})


test('Google Search Test', async () => {
    await search(driver, 'Tenet')
})

test('search google', async ()=>{
    await  search(driver, 'puppies')
})

