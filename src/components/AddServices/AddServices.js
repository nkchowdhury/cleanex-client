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

    fetch('https://murmuring-mesa-47382.herokuapp.com/addService', {
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
      <label for="formGroupExampleInput" class="form-label mt-2">Service tittle</label>
        <input
           class="form-control col-md-6"
          type="text"
          tittle="tittle"
          placeholder="Service tittle"
          {...register("tittle")}
        />

    
        <label for="formGroupExampleInput" class="form-label mt-2">Service tittle</label>
        <input
         class="form-control col-md-6"
          type="text"
          tittle="price"
          placeholder="Service price"
          {...register("price")}
        />


      
        <label for="formGroupExampleInput" class="form-label mt-2">Service tittle</label>
        <input
           class="form-control col-md-6"
          type="text"
          tittle="description"
          placeholder="description"
          {...register("description")}
        />
       
        <input type="File" class="form-control col-md-4 mt-3" name="file"  tittle="file" onChange={handleiconUrlUpload}  />
      
        <button style={{marginTop:"10px"}} type="submit" class="btn btn-info">Add Service</button>
        
      </form>
    </div>
  );
};

export default AddServices;
