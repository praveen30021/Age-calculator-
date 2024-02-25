document.getElementById('btn').addEventListener('click', function () {
  const birthday = new Date(document.getElementById('birthday').value);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const month = today.getMonth() - birthday.getMonth();
  const day = today.getDate() - birthday.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
      age--;
      const newBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
      month = today.getMonth() - newBirthday.getMonth();
      day = today.getDate() - newBirthday.getDate();
  }

  document.getElementById('result').textContent = `Your age is ${age} years, ${month} months, and ${day} days`;
});
