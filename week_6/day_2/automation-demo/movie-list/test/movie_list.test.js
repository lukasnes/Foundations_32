const {Builder, Capabilities} = require('selenium-webdriver')
const {addMovie} = require('./addMovie')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async ()=>{
    await driver.get('http://127.0.0.1:5500/week_6/day_2/automation-demo/movie-list/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})


test('types word into input', async()=>{
    addMovie(driver, 'titanic')
})