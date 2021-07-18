import axios from "axios";

const API_URL = "/auth/";

class AuthService{

  login = async(account, password) => {

    //response의 userinfo이 없어서 대신 임시 객체 생성.
    const userinfo = {
      "account:": account,
    }

    return await axios
      .post(
        API_URL+'login',
        {account: account, password: password},
        {
          headers: {
            'Content-type': 'application/json',
          }
        })
      .then((response)=>{
        if(response.data.accessToken){
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("userinfo", JSON.stringify(userinfo));
          localStorage.setItem("isLoggedIn", "true");
        }
        return userinfo;
      })
      .catch(()=>{
        console.log("실패");
      });
  }
}

export default new AuthService();