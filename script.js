function playMusic(){

let music = document.getElementById("music")

music.play()

}

let target = new Date("Dec 20, 2026 19:00:00").getTime()

setInterval(()=>{

let now = new Date().getTime()

let diff = target - now

let days = Math.floor(diff/(1000*60*60*24))

let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60))

let minutes = Math.floor((diff%(1000*60*60))/(1000*60))

let seconds = Math.floor((diff%(1000*60))/1000)

document.getElementById("timer").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s"

},1000)