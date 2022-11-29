function ismail(){
    //var name1=document.getElementsById("ull");

    var name =document.getElementById("n1").value;
     var email =document.getElementById("n2").value;

       //console.log(name,email);

      if(!name||!email){
          alert("Please Login");
          return;
      }
   
      localStorage.setItem("Email",name);
      localStorage.setItem("Password",email);

     var d=document.getElementById("tab")
     var newRow=d.insertRow();

     var cell1=newRow.insertCell(0);
     var cell2=newRow.insertCell(1);
     var cell3=newRow.insertCell(2);
     
       cell1.style.color="#66a3ff";
       cell3.style.color="#66a3ff";

       cell1.style.fontWeight="600";
       cell3.style.fontWeight="600";

    cell1.innerHTML=name;
    //cell2.innerHTML=",";
    //cell3.innerHTML=email;

    document.getElementById("n1").value="";
    document.getElementById("n2").value="";

}; 