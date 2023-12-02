import axios from "axios";
import { useEffect } from "react";

let config = {
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN,
  },
};
async function postMessage(url: string, messageObj: any) {
  //   let body = {
  //     data: {
  //       ...messageObj,
  //       meta: {},
  //     },
  //   };
  //   let response;
  //   console.log(body);
  //   try {
  //     response = await axios.post(url, JSON.stringify(body), config);
  //   } catch (error: any) {
  //     response = error;
  //     return;
  //   }
  //   return response;
  fetch(
    `${import.meta.env.VITE_DOMAIN}/api/message-sent-from-users
`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,

        "Content-Type": "application/json",
        // Add any additional headers if required
      },
      body: JSON.stringify({
        data: {
          ...messageObj,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default postMessage;
