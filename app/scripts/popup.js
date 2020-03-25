

let element
let currentTabTitle



init()

function init() {
    chrome.tabs.query({active:true},function(tabs) {
        currentTabTitle=tabs[0].title
       element=document.getElementById("_element")
       addListener()
         });
  }


function addListener(){
    element.addEventListener('click',function(evt){
        handleCapture(currentTabTitle)
    })
}
