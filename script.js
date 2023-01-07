document.getElementById("bold").addEventListener("click",boldCommand);
document.getElementById("italics").addEventListener("click",italicsCommand);
document.getElementById("underline").addEventListener("click",underlineCommand);
document.getElementById("leftAlign").addEventListener("click",lalignCommand);
document.getElementById("centerAlign").addEventListener("click",calignCommand);
document.getElementById("rightAlign").addEventListener("click",ralignCommand);
document.getElementById("justifyAlign").addEventListener("click",jalignCommand);

function save() {
    var text = document.getElementById("textarea1").innerHTML;
    var filename = document.getElementById("filename").value;
   $.post("save.php",{"file_name": filename,"content":text},function(data){
    console.log(data);
   }) 
}


function boldCommand(){
      
    if(document.getElementById("textarea1").style.fontWeight=="bold")
    {
        document.getElementById("textarea1").style.fontWeight="normal";
        document.getElementById('bold').classList.remove('active');

    }
    else
    {
        document.getElementById("textarea1").style.fontWeight="bold";
        document.getElementById('bold').classList.add('active');
    }
}

function italicsCommand(){
    
    if(document.getElementById("textarea1").style.fontStyle=="italic")
    {
        document.getElementById("textarea1").style.fontStyle="normal";
        document.getElementById('italics').classList.remove('active');
    }
    else
    {
        document.getElementById("textarea1").style.fontStyle="italic";
        document.getElementById('italics').classList.add('active');
        
    }
}

function underlineCommand(){
    
    if(document.getElementById("textarea1").style.textDecoration=="underline")
    {
        document.getElementById("textarea1").style.textDecoration="none";
        document.getElementById('underline').classList.remove('active');
    }
    else
    {
        document.getElementById("textarea1").style.textDecoration="underline";
        document.getElementById('underline').classList.add('active');
        
    }
}

function lalignCommand(){
    document.getElementById('leftAlign').classList.add('active');
    document.getElementById("textarea1").style.textAlign="left";
    document.getElementById('rightAlign').classList.remove('active');
    document.getElementById('centerAlign').classList.remove('active');
    document.getElementById('justifyAlign').classList.remove('active');

}

function ralignCommand(){
    document.getElementById('rightAlign').classList.add('active');
    document.getElementById("textarea1").style.textAlign="right";
    document.getElementById('leftAlign').classList.remove('active');
    document.getElementById('centerAlign').classList.remove('active');
    document.getElementById('justifyAlign').classList.remove('active');
    // if(document.getElementById("textarea1").style.textAlign=="right")
    // {
    //     document.getElementById("textarea1").style.fontWeight="normal";
    //     document.getElementById('bold').classList.remove('active');

    // }
    // else
    // {
    //     document.getElementById("textarea1").style.fontWeight="bold";
    // }
}

function calignCommand(){
    document.getElementById('centerAlign').classList.add('active');
    document.getElementById("textarea1").style.textAlign="centre";
    document.getElementById('rightAlign').classList.remove('active');
    document.getElementById('leftAlign').classList.remove('active');
    document.getElementById('justifyAlign').classList.remove('active');
}

function jalignCommand(){
    document.getElementById('justifyAlign').classList.add('active');
    document.getElementById("textarea1").style.textAlign="justify";
    document.getElementById('rightAlign').classList.remove('active');
    document.getElementById('leftAlign').classList.remove('active');
    document.getElementById('centerAlign').classList.remove('active');
}


document.getElementById("downloadtxt").addEventListener("click", function() {
    var text = document.getElementById("textarea1").value;
    var filename = document.getElementById("filename").value;
    if(filename== "")
    {
        filename="Untitiled"; 
    }
    download(filename, text);
  }, false);

  function download(file, text) {

    console.log("test is ")
    console.log(text)
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
    element.setAttribute('download', file);
    document.body.appendChild(element);
    //onClick property
    element.click();
    document.body.removeChild(element);
  }