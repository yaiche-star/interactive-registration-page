const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    const phonePattern = /^\+380\d{9}$/;

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        course === ""
    ){
        alert("Будь ласка, заповніть усі поля.");
        return;
    }

    if(!phonePattern.test(phone)){
        alert("Введіть номер телефону у форматі +380XXXXXXXXX");
        return;
    }

    document.getElementById("message").innerHTML =
        `Дякуємо, ${name}! Вашу заявку успішно прийнято.`;

    form.reset();
});