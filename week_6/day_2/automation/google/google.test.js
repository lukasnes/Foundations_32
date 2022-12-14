// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('https://www.google.com/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below
test('I can search Google', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let searchBar = await driver.findElement(By.name(/*Search Bar Name*/))
    
    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await searchBar.sendKeys('/*The thing you want to search on Google*/\n')

    // This line will pause our automation so you can see your search!
    await driver.sleep(2000)

    // We now want our automation to get the search bar again since we're on a new page
    searchBar = await driver.findElement(By.name(/*Search Bar Name*/))

    // We'll use this line to clear out our old input.
    await /*Search Bar Selector*/.clear() 

    // Let's do another search!
    await /*Search Bar Selector*/.sendKeys('/*The string you want to search*/\n')

    await driver.sleep(2000) 
})