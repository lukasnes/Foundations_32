const {By} = require('selenium-webdriver')

const addMovie = async (driver, title)=>{
    await driver.findElement(By.xpath(`//input`)).sendKeys(title)
    await driver.findElement(By.xpath(`//button`)).click()
    const movieText = await driver.findElement(By.xpath(`//li/span`)).getText()
    
    expect(movieText).toBe(title)
}

module.exports = {
    addMovie
}