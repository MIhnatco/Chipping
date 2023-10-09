document.addEventListener("DOMContentLoaded", function () {
    const bocnyPanel = document.getElementById("bocnaNavigacia")
    const otvorBtn = document.getElementById("kruh")
    const zatvorBtn = document.querySelector('.fa-close')
  
    //funkcia pre otvorenie bocnu-navigaciu
    function otvorNavigaciu() {
        if (bocnyPanel.style.right === "-250px") {
            bocnyPanel.style.right = "0px" // ukaz bocnu navigaciu
            otvorBtn.style.display = "none"
        }
    }

    //funkcia pre zavretie bocnu-navigaciu
    function zavriNavigaciu() {
        if (bocnyPanel.style.right === "0px") {
            bocnyPanel.style.right = "-250px" // zavri bocnu navigaciu
            otvorBtn.style.display = "flex"
        }
    }


    //otvor event 
    otvorBtn.addEventListener("click", otvorNavigaciu)

    //zavri event
    zatvorBtn.addEventListener("click", zavriNavigaciu)

})



