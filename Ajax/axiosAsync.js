const $axiosAsync = document.getElementById("axios-async");
const $fragmentAxiosAsync = document.createDocumentFragment();



async function getDataAsync(){
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        let json = await res.data;
        console.log(res,json);

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragmentAxiosAsync.appendChild($li);
        });

        $axiosAsync.appendChild($fragmentAxiosAsync);

    } catch (err) {
        let message = err.response.statusText || "An error has ocurred";
        $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        console.log(err.response);
    } finally{
        console.log("this will run no matter what");
    }
}

getDataAsync();