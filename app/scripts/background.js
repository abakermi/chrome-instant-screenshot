browser.runtime.onInstalled.addListener((details) => {

})

chrome.commands.onCommand.addListener(function(command) {

  chrome.tabs.query({active:true},function(tabs) {
    currentTabTitle=tabs[0].title
    handleCapture(currentTabTitle)
  })

});
