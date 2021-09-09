const BasePage = require('../base.page');
const sidebarUrl = require('../../configs/globalconfigs/globalProperties').sidebarUrl;
const WidgetsWindow = require('./widgets.window');

class SidebarPage extends BasePage {

    widgetsWindow = WidgetsWindow;

    get montrealLink() {return $('=Montreal')}
    get widgetsFrame() {return $('#sf-widget-companion')}
    get personalShopperWidget() {return $('#rep-pictures')}

    async clickOnWidgetAndOpenNewWindow() {
        await (await this.montrealLink).click();
        await (await this.widgetsFrame).waitForExist({timeout: 6000});
        await browser.switchToFrame(await  this.widgetsFrame);
        await (await this.personalShopperWidget).waitForClickable({timeout: 6000});
        await (await  this.personalShopperWidget).click();
        await this.switchToNewWindow();
    }

    async switchToNewWindow() {
        let handledWindows = await browser.getWindowHandles();
        await browser.switchToWindow(handledWindows[handledWindows.length-1]);
    }

    open() {
        return super.open(sidebarUrl);
    }
}

module.exports = new SidebarPage();
