// Scenario 1

// async function getWeather(city) {
//   try {
//     let apiKey = `026e4309cd5422437cbbc9725fce396b`;
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     let raw = await fetch(url);
//     if (!raw.ok) {
//       throw new Error("City not found try something else...");
//     }
//     let data = await raw.json();
//     console.log(data);
//     if (data.main.temp >= 30) {
//       console.warn(`Its too hot with ${data.main.temp}°C in ${city}`);
//     } else if (data.main.temp <= 10) {
//       console.warn(`Its too cold with ${data.main.temp}°C in ${city}`);
//     } else {
//         console.log(`Its enjoyable temp with ${data.main.temp}°C in ${city}`);
//     }
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// Scenario 2
const users = [
  "user1@example.com",
  "user2@example.com",
  "user3@example.com",
  "user4@example.com",
  "user5@example.com",
];

function sendMail(mail) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 6);

    setTimeout(() => {
      let possibility = Math.floor(Math.random() * 11);
      if (possibility <= 5) resolve("Email sent successfully...");
      else reject("Operation failed...");
    }, time * 1000);
  });
}

async function sendMails(userMails) {
  let emailLog = userMails.map(function (email) {
    return sendMail(email)
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  });

  let allEmails = await Promise.all(emailLog);
  allEmails.forEach((mail, idx) => {
    console.log(`Operation ${idx+1}: ${mail}`);
  })
}

sendMails(users);