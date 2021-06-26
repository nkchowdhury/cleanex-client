import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from '../../App';
import './AddReview.css'

const AddReview = () => {


    const[signInUser, setSignInUser] = useState(UserContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const [imgUrl, setimgUrl] = useState(null);
     

      const onSubmit = (data) => {
        const servicesData = {
          name: data.name,
          description: data.description,
          imgUrl: imgUrl,
        };
    
        // const url = `http://localhost:4044/reviews`
        console.log(servicesData);
    
        fetch('https://murmuring-mesa-47382.herokuapp.com/reviews' , {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(servicesData),
        })
        
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('Review added successfully');
            }
        })
      };



     // imgUrl upload

  const handleImgUrlUpload = (event) => {
    console.log(event.target.files[0]);

    const iconUrlData = new FormData();
    iconUrlData.set("key", "c3913b84aaff982ae826997c54227f96");
    iconUrlData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", iconUrlData)
      .then(function (response) {
        setimgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };






    return (
        <div>


<h3>Review</h3>

<form onSubmit={handleSubmit(onSubmit)}>

  <label for="formGroupExampleInput" class="form-label mt-2">Name</label>
  <input
    class="form-control col-md-4"
    type="text"
    name="name"
    defaultValue={signInUser.userName}
    placeholder="Your Name"
    {...register("name")}
  />

  

  
  <label for="formGroupExampleInput" class="form-label mt-2">Your Company</label>
  <input
    class="form-control col-md-4"
    type="text"
    name="company"
    placeholder="Your Company"
    {...register("company")}
  />

 



 
  
  <label for="formGroupExampleInput" class="form-label mt-2">Description</label>
  <input
   class="form-control col-md-4"
    type="text"
    name="description"
    placeholder="description"
    {...register("description")}
  />
  
  <input type="File" class="form-control col-md-4 mt-3" name="file" onChange={handleImgUrlUpload} />

  {/* <label class="input-group-text" for="inputGroupFile01">Upload</label>
  <input  onChange={handleImgUrlUpload}  type="file" class="form-control" id="inputGroupFile01">Upload</input> */}
 
  <button style={{marginTop:"10px"}} type="submit" class="btn btn-info">Add Review</button>
  
</form>
            
        </div>
    );
};

export default AddReview;