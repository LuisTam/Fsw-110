const form = document.getElementById('myForm')

form.addEventListener("submit", (event)=>{
window.alert('First Name is:' + ' ' + form.firstName.value + '\n'+  'Last Name is:' + ' '+ form.lastName.value + '\n'+ 'Email is:' + ' ' + form.email.value)
document.getElementById("myForm").reset()
})