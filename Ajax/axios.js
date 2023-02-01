const $axios = document.getElementById("axios");
const $fragmentAxios = document.createDocumentFragment();

axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        console.log(res);

        let json = res.data;
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragmentAxios.appendChild($li);
        });

        $axios.appendChild($fragmentAxios);
    })
    .catch((err) => {
        let message = err.response.statusText || "An error has ocurred";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        console.log(err.response);
    })
    .finally(()=>{
        console.log("This will run no matter what");
});