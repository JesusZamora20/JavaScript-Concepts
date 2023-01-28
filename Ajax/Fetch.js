const $fetch = document.getElementById("fetch");
const $fragment = document.createDocumentFragment();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log(res)
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json => {
        // console.log(json);
        // const data = JSON.stringify(json);
        // $fetch.innerHTML= data;

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);

    })
    .catch(err => {
        console.error(err);
        let msg = err.statusText || "An error has ocurred";
        $fetch.innerHTML = `Error ${msg}`;
    })
    .finally(()=>console.log("Esto se ejecutara si o si"))
