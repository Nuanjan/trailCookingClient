import axios from "axios";

const API_URL = "http://localhost:8080/api/user/";

class userApi {
  login(user) {
    return axios.post(API_URL + "login", user);
  }

  register(user) {
    return axios.post(API_URL + "register", user);
  }

  getLoggedInUser() {
    let token = localStorage.getItem("auth");
    console.log(" token from storage: ", token);
    return axios({
      url: API_URL + "me",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new userApi();
