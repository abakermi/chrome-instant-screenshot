 
//  document.getElementById("title").innerText="hello"

let obj

document.addEventListener('DOMContentLoaded', (event) => {
    
    

    if(localStorage.getItem("__item")){
        obj=JSON.parse(localStorage.getItem("__item"))
        document.getElementById("__img").setAttribute("src",obj.item)
       
        document.getElementById("__download").addEventListener("click",function(e){
            e.preventDefault()
 downloadBase64File(obj.item,obj.name)

        })
    }
});



// console.log(JSON.parse(obj).item);
//  navigator.clipboard.readText()
//   .then(text => {
//     document.getElementById("__img").setAttribute("src",text)
//   })
//   .catch(err => {
//     console.error('Failed to read clipboard contents: ', err);
//   });

  function downloadBase64File(contentBase64, fileName) {
    // const linkSource = `data:application/pdf;base64,${contentBase64}`;
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    downloadLink.href = contentBase64;
    downloadLink.target = '_self';
    downloadLink.download = fileName;
    downloadLink.click(); 
}