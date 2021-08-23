export function waitForLanguageSwitcher(languageParameter: string) {
    const languageParameterSelector = getLanguageSwitcher(languageParameter);
    languageParameterSelector.waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Language parameter wasn't displayed after 10 seconds",
    });
}

export function getLanguageSwitcher(languageParameter: string) {
    return $(`div[class*='menu_langs'] > a[href*='/${languageParameter}/']`);
}

export function waitForPopupVisible() {
    $('#alert_ok').waitForDisplayed({
        timeout: 10000,
        timeoutMsg: "Warning popup wasn't displayed after 10 seconds",
    })
}
