// how our react pages are connecting with our servers
   // here we use get products fucntion to fetch our products api
  const getProducts = () =>
    // This is for working locally:
    // fetch('http://localhost:5000/api/products')
    //This is for working on Heroku:
    fetch('https://penpowers.herokuapp.com/api/products')



// here we fetch for our prices api we created which will include prices under 10 from database
const getPrices = () =>
// This is for working locally:
// fetch('http://localhost:5000/api/prices')
    //This is for working on Heroku:
fetch('https://penpowers.herokuapp.com/api/prices')

const getProductfilter = (category) =>
    // This is for working locally:
    // fetch(`http://localhost:5000/api/productfilter/${category}`)
    //This is for working on Heroku:
    fetch('https://penpowers.herokuapp.com/api/productfilter/${category}')
   export {getProducts, getProductfilter,getPrices}







