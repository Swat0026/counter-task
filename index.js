var count;

        document.querySelector(".btn-plus").addEventListener("click",function(){
            count=document.getElementById("main").value
            count++;
            document.getElementById("main").value=count;

            
}
        
        )
        document.querySelector(".btn-minus").addEventListener("click",function(){
            count=document.getElementById("main").value
            count--;
            document.getElementById("main").value=count;

            
}
        )