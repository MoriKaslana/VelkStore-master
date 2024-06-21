window.addEventListener("load", function () {
  this.setTimeout(function open(event) {
    document.querySelector(".container").style.display = "block";
  }, 500);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});


const form = document.querySelector('form');

form.addEventListener('sbmit', (e => {
  e.preventDefault();

  const captchaResponse = grecaptcha.getRResponse();

  if (!captchaResponse.length > 0 ){
    throw new Error ("Captcha not complete");
  }

  const fd = new FormData(e.target);
  const params = new URLSearchParams(fd);

  fetch('http://127.0.0.1:5501/public/admin/adminHome.html', {
      method: "POST",
      body:params,
  })
  .then(res => res.json())
  .then(res => console.log(data))
  .then(res => console.error(err))
}))