
  function phoneValidation(){

     var phone=document.getElementById("mob").value;
     var pho=/^[7-9][0-9]{9}$/;
      if(pho.test(phone))
    {
      document.getElementById("mob1").innerHTML="valid";
      document.getElementById("mob1").style.visibility="visible";
      document.getElementById("mob1").style.color="green";
    }  
    else
    {
      document.getElementById("mob1").innerHTML="Invalid";
      document.getElementById("mob1").style.visibility="visible";
      document.getElementById("mob1").style.color="red";
    }


  }


  function mailValidation(){

    var mai=/^([a-z 0-9\.-]+)@([a-z 0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    var mail=document.getElementById("email").value;
     if(mai.test(mail))
    {
      document.getElementById("email1").innerHTML="valid";
      document.getElementById("email1").style.visibility="visible";
      document.getElementById("email1").style.color="green";
    }  
    else
    {
      document.getElementById("email1").innerHTML="Invalid";
      document.getElementById("email1").style.visibility="visible";
      document.getElementById("email1").style.color="red";
    }

  } 


  function aadharValidation(){
      var aadharNo = document.getElementById("aadhar").value ;
      var valid = /^\d{4}\s\d{4}\s\d{4}$/ ;
      if( valid.test(aadharNo) )
      {
        document.getElementById("aadhar1").innerHTML="valid";
        document.getElementById("aadhar1").style.visibility="visible";
        document.getElementById("aadhar1").style.color="green";
      }
      else
      {
        document.getElementById("aadhar1").innerHTML="Invalid";
        document.getElementById("aadhar1").style.visibility="visible";
        document.getElementById("aadhar1").style.color="red";
      }
  }