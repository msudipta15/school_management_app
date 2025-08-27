export function generatepassword(length: number) {
  const chars =
    "QWERTYUIOPLKJHGFDSAZXCVBNM1234567890!@#$%^&*()mnbvcxzasdfghjklpoiuytrewq";
  let password = "";
  for (let i = 0; i < length; i++) {
    password =
      password + chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
