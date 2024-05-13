// json placeholder che ritorna 10 utenti
const api_url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  try {
    // risposta della chiamata
    const response = await fetch(api_url);
    // verifico se esiste
    if (!response) {
      throw new Error("Errore"); // se non esiste lancio un errore
    }
    const data = response.json(); // converto la response in json
    console.log(data);
    return data; // ritorno i dati
  } catch (error) {
    console.log("Errore", error);
  }
};
