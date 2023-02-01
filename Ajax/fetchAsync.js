console.log("API Fetch with Async await");
const $fetchAsync = document.getElementById("fetch-async");
const $fragment = document.createDocumentFragment();


async function getData(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let json = await res.json();
        console.log(res,json);

        if (!res.ok) throw {status: res.status, statusText: res.statusText};

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetchAsync.appendChild($fragment);
    } catch (err) {
        let msg = err.statusText || "An error has ocurred";
        $fetchAsync.innerHTML = `Error ${err.status}: ${msg}`;
    } finally{
        console.log("Esto se ejecutara si o si");
    }
}

getData();