


//let data=name1,age,select,select1,numberOfTickets;
const Form3=()=>{
   let data1=Form();
   //let da=refresh();
}
const array=()=>{
    
    let formdata={};
        formdata["name"]=document.getElementById('name').value;
        formdata["age"]=document.getElementById("age").value;
        formdata["source"]=document.getElementById('source').value;
        formdata["destination"]=document.getElementById('destination').value;
        formdata["numberOfTickets"]=document.getElementById('numberOfTickets').value;
        return formdata;
}

const Form = ()=>{
    var studentArray=[];
    let name= document.getElementById('name').value;
    let age= document.getElementById('age').value;
    let select =document.getElementById('source').value;
    let select1 =document.getElementById('destination').value;
    let numberOfTickets=document.getElementById('numberOfTickets').value;
   let a=450;
    document.getElementById('no').innerHTML=a-numberOfTickets;
    
     stuObj = {name:name,age:age,From:select,To:select1,numberOfTickets:numberOfTickets};
    studentArray.push(stuObj);
  
    console.log(studentArray);

    if(name==''){
        alert('Please enter the name');
        use.focus();
        return false;
    }
   else if(age=='')
    {
        alert('Please enter the name age');
        return false;
    }

    else if(select=='' || select =="select")
    {
        alert('Please enter the From');
        return false;
    }
    else if(select1=='' || select1 =="select1")
    {
        alert('Please enter the To');
        return false;
    }

    else if(numberOfTickets<5 || numberOfTickets=="")
    {
      alert('enter the number of tickets');
        return false;
    }
    else{
       
        return false
    }
    

}

const refresh=()=>{

    document.getElementById('name')="";
   document.getElementById('age')="";
    document.getElementById('source')="";
    document.getElementById('destination')="";
   document.getElementById('numberOfTickets')="";
}

 


    
    



   


