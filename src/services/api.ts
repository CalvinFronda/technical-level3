import axios from "axios";

// const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
  const API_URL = "https://api.escuelajs.co/api/v1/products";

//   const response = await fetch(API_URL);

    // if (!response.ok){
    //     console.log("data not fetching")
    // }

    // const result = response.json();
    // console.log(result);
    // return result


  try {
    const response = await fetch(API_URL);

    if (!response.ok){
        console.log("data not fetching")
    }

    const result = response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.log("404");
  }
};
