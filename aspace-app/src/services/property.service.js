import axios from "axios";
const API_URL = "http://localhost:8080/api/properties";

class PropertyService {
    //post new property
    post(title,
        type,
        price,
        image,
        city,
        address,
        postalCode,
        description,
        amenities) {
        let token;
        if (localStorage.getItem("user")) {
          token = JSON.parse(localStorage.getItem("user")).token;
        } else {
          token = "";
        }
    
        return axios.post(
          API_URL,
          { title,
            type,
            price,
            image,
            city,
            address,
            postalCode,
            description,
            amenities },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      }

      //get properties from specific host
      get(_id) {
        let token;
        if (localStorage.getItem("user")) {
          token = JSON.parse(localStorage.getItem("user")).token;
        } else {
          token = "";
        }
        return axios.get(API_URL + "/host/" + _id, {
          headers: {
            Authorization: token,
          },
        });
      }



}

export default new PropertyService();
