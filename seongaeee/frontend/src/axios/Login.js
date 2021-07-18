import axios from "axios";

const axiosLogin = async (e) => {

  e.preventDefault();
  await axios.post('/auth/login',
    {
      account: 'devbadak',
      password: '1234'
    },
    {
      headers: {
        'Content-type': 'application/json',
      }
    }
  ).then(r => {
    console.log(r)
  });
};

export default axiosLogin;