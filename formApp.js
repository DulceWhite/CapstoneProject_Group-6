// Take Action Form

// Form Inputs




const form = document.querySelector(`form`);

form.addEventListener(`submit`, f => {
    f.preventDefault();
    const name1 = document.querySelector(`#first`);
    const firstName = name1.value;
    console.log(firstName);


});