const api_call = "https://api.unsplash.com/photos?";
const access_key = "client_id=hfE6FwXH7MATE-juhuQ2wsFRdC_XkguomOEjBeQfEBE";

export const fetchGallery = async (body) => {
  const URL = api_call + access_key;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body ? body : {}),
  };

  if (!body) delete options.body;

  try {
    const response = await fetch(URL, options);
    if (!response.ok) {
      throw new Error("Errore");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
