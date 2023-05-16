const url = 'http://localhost:3001';

const requestBody = JSON.stringify(
  {
    title: "Pizza",
    // ingredients: ["150g of beans", "150g of butter", "150g of toast"],
    // instructions: "Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.\n  \n    Season to taste.",
    // image: "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
  }
);

const response = fetch(
  `${url}/api/recipes/`, 
  { method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: requestBody,
   });

const data = await response.json();

console.log('This is the data received from the server', data)
console.log('Response is ok?', response.ok)
console.log('Response sataus code', response.status)