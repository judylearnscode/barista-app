const finish = document.getElementsByClassName("fa-thumbs-up");
const trash = document.getElementsByClassName("fa-trash-o");

Array.from(finish).forEach(function(element) {
  element.addEventListener('click', function(){
    const orderId = this.parentNode.parentNode.id
      console.log(orderId)

    fetch('order-finish', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderId' : orderId
        // 'thisUser' : user.local.firstName
      })
      
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){

    const orderId = this.parentNode.parentNode.id

    fetch('order-delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      "_id" : orderId
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});

const synth = window.speechSynthesis;
document.querySelector('#speak').addEventListener('click', run)

function run() {
  const customerName = document.querySelector('#customerName').innerText
  const yellText =  `${customerName}`
  // const fMidName = document.querySelector('#firstMiddle').value
  // const lMidName = document.querySelector('#lastMiddle').value
  // const lName = document.querySelector('#lastName').value

  // document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}

