import * as Axios from "axios";

const ENDPOINT = "";

Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
Axios.defaults.headers.common["Content-Type"] = "application/json";

// const csrfToken = async () => {
//   try {
//     const csrf = await Get("/check_csrf/honeybadger");
//     return csrf;
//   } catch (e) {
//     return e;
//   }
// };

export const Get = async (url) => {
  try {
    const send = await Axios(ENDPOINT + url);
    return send.data;
  } catch (e) {
    return e;
  }
};

export const Post = async (url, data) => {
  try {
    const send = await Axios({
      url: ENDPOINT + url,
      method: "POST",

      data,
    });
    return send.data;
  } catch (e) {
    return e;
  }
};
