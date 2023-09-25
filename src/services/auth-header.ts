export default function authHeader() {
  const userStr = localStorage.getItem("user-data");

  const _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1hbmlzaHlAeW9wbWFpbC5jb20iLCJpYXQiOjE2OTAyMDMyODIsImV4cCI6MTY5Mjc5NTI4Mn0.JrPA4L1TdEwO9td2f8v-YNPong24Sdr2_wKm3gc5w_8"


  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.token) {
    //return { Authorization: 'Bearer ' + user.token };    // for Spring Boot / PHP-Laravel  back-end
    return { 'x-access-token': user.accessToken };   // for Node.js Express back-end

  } else {
    //return { Authorization: '' };    // for Spring Boot / PHP-Laravel back-end
    return { 'x-access-token': _token }; // for Node Express back-end

  }
}