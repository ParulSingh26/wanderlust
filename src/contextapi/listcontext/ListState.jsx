import { useState } from "react";
import listContext from "./listContext";
import { baseUrls } from "../../baseUrls";
import { errorEmitter, successEmitter } from "../../ToastEmitter";

function ListState({ children }) {
  const [allList, setAllList] = useState([]);


  // const addListFun = async (listing, setListing) => {
  //   try {
  //     const response = await fetch(`${baseUrls}/api/v3.2/post/addlist`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         auth_token: localStorage.getItem("token"),
  //       },
  //       body: JSON.stringify(listing),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.success) {
  //       successEmitter(data.message);
  //       setListing({
  //         title: "",
  //         description: "",
  //         price: "",
  //         location: "",
  //         country: "",
  //       });
  //     } else {
  //       errorEmitter(data.message);
  //     }
  //   } catch (error) {
  //     errorEmitter("internal server error");
  //   }
  // };

  const addListFun = async(list, image, setListing)=>{
    
    let formdata = new FormData();

    formdata.append("title", list.title);
    formdata.append("description", list.description);
    formdata.append("price", list.price);
    formdata.append("location", list.location);
    formdata.append("country", list.country);
    formdata.append("image", image);



   try {
    const response = await fetch(`${baseUrls}/api/v3.2/post/addlist`,{
      method: 'POST',
      headers:{
        auth_token: localStorage.getItem('token'),
      },
      body:formdata,
    });
    const data = await response.json();
      console.log(data);
      if (data.success) {
        successEmitter(data.message);
        setListing({
          title: "",
          description: "",
          price: "",
          location: "",
          country: "",
        });
      } else {
        errorEmitter(data.message);
      }
    
   } catch (error) {
    errorEmitter('Internal server error')
   }
  }


  const getAllList = async () => {
    const response = await fetch(`${baseUrls}/api/v3.2/post/alllist`);
    const data = await response.json();
    console.log(data);
    if (data.success) {
      setAllList(data.total_list);
    }
  };

  const yourListFun = async () => {
    try {
      const response = await fetch(`${baseUrls}/api/v3.2/post/yourlist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setAllList(data.total_list);
      }
    } catch (error) {
      errorEmitter("internal server error");
    }
  };

  const deletePostFun = async (listid) => {
    const response = await fetch(
      `${baseUrls}/api/v3.2/post/deletelist/${listid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.success) {
      successEmitter(data.message);
      yourListFun();
    } else {
      errorEmitter(data.message);
    }
  };

  const updatePostFun = async (update, id, handleClose) => {
    const myObj = {
      title: update.utitle,
      description: update.udescription,
      price: update.uprice,
      location: update.ulocation,
      country: update.ucountry,
    };
    try {
      const response = await fetch(
        `${baseUrls}/api/v3.2/post/updatelist/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("token"),
          },
          body: JSON.stringify(myObj),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        successEmitter(data.message);
        yourListFun();
        handleClose();
      } else {
        errorEmitter(data.message);
      }
    } catch (error) {
      errorEmitter("Internal server error!");
    }
  };

  const likePostFun = async (listid) => {
    console.log(listid);
    try {
      const response = await fetch(`${baseUrls}/api/v3.2/post/like/${listid}`, {
        method: "PUT",
        headers: {
          auth_token: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data.success) {
        getAllList();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const commentPostFun = async (listid, commentText) => {
    try {
      const response = await fetch(`${baseUrls}/api/v3.2/post/add/${listid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("token"),
        },
        body:JSON.stringify({comment: commentText}),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        successEmitter(data.message);
        getAllList();
      }else{
        errorEmitter(data.message);
      }
    } catch (error) {
      console.log(error);
      errorEmitter("Internal server error");
    }
  }

  return (
    <listContext.Provider
      value={{
        allList,
        getAllList,
        addListFun,
        yourListFun,
        deletePostFun,
        updatePostFun,
        likePostFun,
        commentPostFun
      }}
    >
      {children}
    </listContext.Provider>
  );
}
export default ListState;
