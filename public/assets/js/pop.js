window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".pp1").style.display = "block";
        },
        1000
    )
  });
  
  
  document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".pp1").style.display = "none";
  });