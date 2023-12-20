const submit = document.getElementById("submit2");
const email = document.getElementById("email2");
const password = document.getElementById("password2");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const data = await axios.post("/auth", { email: email.value, password: password.value });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
