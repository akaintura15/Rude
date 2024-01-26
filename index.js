import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL:"https://playground-f7c32-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const data = ref(database,"rude")
const inputa = document.getElementById("input-field")
const adda=document.getElementById("add-button")

adda.addEventListener("click", function(){
    
    let inputvalue= inputa.value
    push(data,inputvalue)

    console.log(`${inputa.value} added to database`)
})  