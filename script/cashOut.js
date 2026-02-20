document.getElementById("Withdraw-btn").addEventListener("click", function () {
  const agentNumberInput = document.getElementById("cashout-number");
  const agentNumber = agentNumberInput.value;
  console.log(agentNumber);
  const casoutamountInput = document.getElementById("cashout-amonut");
  const casoutamount = casoutamountInput.value;
  console.log(casoutamount);
  const totalBlance = document.getElementById("blance");
  const blance = totalBlance.innerText;
  console.log(blance);
  const newBalanc = Number(blance)-Number(casoutamount)
  if(newBalanc < 0){
    alert("invalid");
    return;
  }
  const casuotPin=document.getElementById("pin-input")
  const pin =casuotPin.value;
  if(pin ==="1234"){
    alert("succees");
    totalBlance.innerHTML=newBalanc;
  }else{
    alert("invalid pin");
    return;
  }
  

  
});
