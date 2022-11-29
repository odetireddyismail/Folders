function ismail(){
    //var name1=document.getElementsById("ull");

    var name =document.getElementById("n1").value;
     var email =document.getElementById("n2").value;
       console.log(name,email);
      if(!name||!email){
          alert("Please fill form");
          return
      }
   

      localStorage.setItem("Name",name);
      localStorage.setItem("Email",email);

     var d=document.getElementById("tab")
     var newRow=d.insertRow();

     var cell1=newRow.insertCell(0);
     var cell2=newRow.insertCell(1);

    cell1.innerHTML=name;
    cell2.innerHTML=email;
}; 