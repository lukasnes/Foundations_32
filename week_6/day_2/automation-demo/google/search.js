const { By } = require('selenium-webdriver')

const search = async (driver, searchTerm) => {

    await driver.findElement(By.name('q')).clear()

    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    
    let resultsText = await driver.findElement(By.id('res')).getText()

    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())
}

module.exports = {
    search
}