document
        .getElementById("login-btn")
        .addEventListener("click", function () {
          //get the mobile number
          const numberInput = document.getElementById("bumber-btn");
          const numbetVlue = numberInput.value;

          const pinInput = document.getElementById("pin-input");
          const pinVlue =pinInput.value;
          if(numbetVlue=="01404504694" && pinVlue=="1234"){
            alert("login");
            window.location.assign("./home.html")
           
          }else{
            alert("login faild");
            return;

          }




          //get the pin
          //log in sussesed
        });