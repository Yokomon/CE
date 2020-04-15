
// const submit = async e => {
//   e.preventDefault();
//   const message = document.querySelector("#textarea").value;
//   const userinput = document.querySelector("#userinput").value;
//   const chat_id = 1033393090
//   try {
//     await fetch("https://api.telegram.org/bot1203072006:AAHqxy8SP_RZlRjM3c2CooSjYo172lIonqY/sendMessage", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/x-www-form-urlencoded "
//       },
//       body:({ chat_id: chat_id , text: message })
//     });
//     // console.log(textarea);

//    document.querySelector("#textarea").value = '';
//    document.querySelector("#userinput").value = '';
//    alert("added successfully");
//   } catch (e) {
//       console.log(e);
//     alert("error occured");
//   }
// };
const message = document.querySelector("#textarea").value;
const userinput = document.querySelector("#userinput").value;
// const chat_id = 1033393090
axios
    .post(
      'https://api.telegram.org/bot1203072006:AAHqxy8SP_RZlRjM3c2CooSjYo172lIonqY/sendMessage',
      {
        chat_id: message.chat.id,
        text: message.text
      }
    )
    .then(response => {
      // We get here if the message was successfully posted
      console.log('Message posted')
      res.end('ok')
    })
    .catch(err => {
      // ...and here if it was not
      console.log('Error :', err)
      res.end('Error :' + err)
    });
 document.querySelector("form").addEventListener("submit", submit);
alert("Hiii there")