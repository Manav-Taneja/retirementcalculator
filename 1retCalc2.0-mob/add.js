function sendFile(){
    const inputFile=document.getElementById("file")
    const file=new FormData();
    file.append("file",inputFile.files[0]);
    const url="http://832dffb2579a.ngrok.io/postrequest"
    const promise=fetch(url,{
        method: "post",
        body:file,
        headers:{'Access-Control-Allow-Origin':'*'}
    });
    return promise.then(response=>response.blob())
    .then(blob=>{
       var url = window.URL.createObjectURL(blob);
       console.log(url) 
       return url;
    //    var b64Response = btoa(response);
    //    var outputImg = document.createElement('img');
    //    var elem=document.getElementById("sticker")
    //  document.querySelector('main #sticker').insertAdjacentHTML(
    //      'afterend', 
    //      '<section id="output-section"><div id="written-portion"><h3>It seems like you are ahead of your game.</h3><p>It is recommended at your age to began saving <span>17%</span> of your annual income in order to maintain the standard of living after retirement.</p><p id="note">(Note: If the result is over 75%, you may need to consider increasing the source of income or seek professional advice.)</p></div><div id="camera-portion"><h3>How much should I save each year for retirement?</h3><div id="image-output"> <img src='+url+' alt=""></div> <p>At age 60, you are recommended to save <span>6x</span> of your salary for retirement.</p></div></section><div id="check-friends"><p>Check in with your friends</p><i class="fas fa-camera"></i></div>');
     })
}