// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// const alert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     alert('Nice, you triggered this alert message!', 'success')
//   })
// }
// change the card title to red

let ctitle=document.getElementById("firstcardtitle")
// let ctitle=document.getElementsByClassName("card-title")[0]
ctitle.style.color="blue"
let ctitles=document.querySelectorAll(".card-title")  //  . css seletcor
ctitles[0].style.color="blue"
ctitles[1].style.color="green"
ctitles[2].style.color="yellow"
document.querySelector(".this").style.color="cyan"
document.querySelector(".this").style.background="green"
console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))  //remember s
console.log(document.getElementsByName(".search"))


console.log(ctitles)                                   //  #id selector   