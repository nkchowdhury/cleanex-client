import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddServices = () => {
  //add services

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [iconUrl, setIconUrl] = useState(null);

  const onSubmit = (data) => {
    const servicesData = {
      tittle: data.tittle,
      description: data.description,
      iconUrl: iconUrl,
      price:data.price,
    };

    // const url = `http://localhost:4044/addService`
    console.log(servicesData);

    fetch('http://localhost:4044/addService', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(servicesData),
    })
    
    .then(res => res.json())
    .then(data => {
        if (data) {
            alert('Product added successfully');
        }
    })
  };




//   const onSubmit = data => {
//     const ProductData = {
//         Price: data.Price,
//         Product: data.Product,
//         photoURL: photoURL
//     }
//     const url = `https://ancient-journey-25736.herokuapp.com/addProduct`
//     // console.log(ProductData);
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(ProductData)
//     })
//         .then(res => res.json())
//         .then(data => {
//             if (data) {
//                 alert('Product added successfully');
//             }
//         })
// }






  // iconUrl upload

  const handleiconUrlUpload = (event) => {
    console.log(event.target.files[0]);

    const iconUrlData = new FormData();
    iconUrlData.set("key", "c3913b84aaff982ae826997c54227f96");
    iconUrlData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", iconUrlData)
      .then(function (response) {
        setIconUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h3>Add Services</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="tittle">Service tittle</label>
        <input
          type="text"
          tittle="tittle"
          placeholder="Service tittle"
          {...register("tittle")}
        />

        <br />
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          tittle="price"
          placeholder="Service price"
          {...register("price")}
        />

        <br />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          tittle="description"
          placeholder="description"
          {...register("description")}
        />
        <br />
        <br />
        <input type="File" tittle="file" onChange={handleiconUrlUpload} />
        <br />
        <br />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddServices;
