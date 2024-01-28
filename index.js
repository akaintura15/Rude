import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{getDatabase,ref,push,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL:"https://playground-f7c32-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const data = ref(database,"rude")


const inputa = document.getElementById("input-field")
const adda=document.getElementById("add-button")
const booksEl = document.getElementById("books")


onValue(data, (snapshot) => {
    const dataVal = snapshot.val();
    console.log("Data from the database:", dataVal);
    let booksArray = Object.values(snapshot.val())
    
    // Challenge: Write a for loop where you console log each book.
    for (let i = 0; i < booksArray.length; i++) {
        let currentBook = booksArray[i]
        
        
        appendBookToBooksListEl(currentBook)
    }
    inputa.value = "";// Clear the input field after sending the message
    scrollToBottom();
})


adda.addEventListener("click", function(){
    
    let inputvalue= inputa.value
    push(data,inputvalue)

    console.log(`${inputa.value} added to database`)
    
  
  
})  

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
    
}

function scrollToBottom() {
    booksEl.scrollTop = booksEl.scrollHeight;
}