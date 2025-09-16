// async function abc() {
//     try {
//         const response = await fetch(`https://randomuser.me/api/`)
//         // console.log(response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Promise is settled (either resolved or rejected)")
//     }
// }

// abc()

fetch(`https://randomuser.me/api/`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
