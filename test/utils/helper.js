
class Helper {
    async waitForPageToLoad(timeout = 10000) {
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: timeout,
                timeoutMsg: 'Something went wrong'
            });
    }
}

module.exports = new Helper();
