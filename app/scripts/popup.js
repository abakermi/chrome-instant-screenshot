
console.log("popup script started..");
let element=document.getElementById("_element")
element.addEventListener('click',function(evt){

    chrome.tabs.captureVisibleTab(null, {format:"jpeg"}, function(result){
    //TODO save image to clipboard
    
    //send notification about image
    chrome.notifications.create("id", {type:"basic" ,iconUrl:"../images/notification.png",
    title:"Notification",message:"copied ;) !"}, function (e){
   chrome.tabs.create({url:"../pages/capture.html"},function(e){

   })
    })
    

    })
})
