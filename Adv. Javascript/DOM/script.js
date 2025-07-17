// Element Selection
const heading = document.getElementById('heading')
const price = document.getElementsByClassName('price') 
const para1 = document.querySelector('#para1')
const para2 = document.querySelector('.para2') 


// Content Updation
heading.innerText = "Hello World !!!"
para1.textContent = "Some Paragraph"
para2.innerHTML = '<h1>Hello</h1>'

console.log(para1.textContent);  