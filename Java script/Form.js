

//var studentArray=[];
var studentArray=[];  
const Form = () =>{
    
    var name= document.getElementById('name').value;
    var age = Number(document.getElementById('age').value);
    var select =document.getElementById('source').value;
    var select1 =document.getElementById('destination').value;
    var numberOfTickets =Number(document.getElementById('numberOfTickets').value);
    var a=450;
    document.getElementById('no').innerHTML=a-numberOfTickets;

    var stuObj = {name:name,age:age,From:select,To:select1,numberOfTickets:numberOfTickets};
    studentArray.push(stuObj);
 
    console.log(studentArray);
    
    if(name =='')
    {
        alert('Please enter the name')
        return false
    }
   else if(age=='' || age<18)
    {
        alert('Please enter the age above 18')
        return false
    }

    else if(select=='' || select =="select")
    {
        alert('Please enter Where to start')
        return false
    }
    else if(select1=='' || select1 =="select1" || select1==select)
    {
        alert('Check From and To')
        return false
    }

    else if(numberOfTickets>5 || numberOfTickets=="")
    {
      alert(' Tickets less than 5');
        return false;
    }
    else{
        return false;
    }
  
    document.getElementById('name').value="";
     document.getElementById('age').value="";
     document.getElementById('source').value="";
    document.getElementById('destination').value="";
    document.getElementById('numberOfTickets').value="";
}

    
    



   


