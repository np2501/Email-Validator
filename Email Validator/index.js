let results={
    
    "tag": "",
    "free": true,
    "role": false,
    "user": "nadeempasha2001akshay",
    "email": "nadeempasha2001akshay@gamil.com",
    "score": 0,
    "state": "undeliverable",
    "domain": "gamil.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "nadeempasha2001akshay@gmail.com",
    "format_valid": true
  }


  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultsCont.innerHTML = `<img width="133" src = "loading.svg" alt="">`
    let key = "ema_live_7ti8zTnbv6knKJxyGE82Df0VsgU603rLxaBjBdDo"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let results = await res.json()
    let str = ``
    for (key of Object.keys(results)) {
        if(results[key] !== "" && results[key]!== " "){ 
            str = str + `<div>${key}: ${results[key]}</div>`
        }
    }

    console.log(str)
    resultsCont.innerHTML = str
})


