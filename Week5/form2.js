const form = document.form2

form.addEventListener("submit", (event) => {
    window.alert('First Name:' + ' ' + form.firstName.value + '\n' + 'Last Name:' + ' ' + form.lastName.value + '\n' + "Age:" + " " + form.age.value + "\n" + "Do you own a car?" + ' ' + form.decision.value + '\n' + 'I like the cars' + form.car.value)
})