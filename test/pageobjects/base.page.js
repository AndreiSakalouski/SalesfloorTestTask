/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a page
    * @param path url to the page
    */
    open (path) {
        return browser.url(path)
    }
}
