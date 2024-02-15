const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

/* Password show and hide */
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    console.log(pwFields);
    pwFields.forEach(password => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    });
  });
});

/* Toggle b/w signIn and signUp */
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});
