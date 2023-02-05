async function getAll(){
    try {
        let res = await fetch("http://localhost:5000/players");
        let json = await res.json();
        
        if(!res.ok) throw{status: res.status, statusText: res.statusText};
        console.log(json);

        json.forEach(el => {
            $template.querySelector(".name").textContent = el.name;
            $template.querySelector(".team").textContent = el.team;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.name;
            $template.querySelector(".edit").dataset.team = el.team;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);

    } catch (err) {
        let message = err.statusText || "An erros has occurred";
        $table.insertAdjacentHTML("afterend", `<p><b> Error ${err.status}: ${message} </b></p>`);
    }
}

d.addEventListener("DOMContentLoaded",getAll);

d.addEventListener("submit", async e => {
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //create - post
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        name: e.target.name.value,
                        team: e.target.team.value,
                    })
                };
                let res = await fetch("http://localhost:5000/players", options);
                let json = await res.json();

                if(!res.ok) throw{status: res.status, statusText: res.statusText};
                location.reload();
            } catch (err) {
                let message = err.statusText || "An error has occurred";
                $form.insertAdjacentHTML("afterend", `<p><b> Error ${err.status}: ${message} </b></p>`);
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body:JSON.stringify({
                        name: e.target.name.value,
                        team: e.target.team.value,
                    })
                };
                let res = await fetch(`http://localhost:5000/players/${e.target.id.value}`, options);
                let json = await res.json();

                if(!res.ok) throw{status: res.status, statusText: res.statusText};

                location.reload();
            } catch (err) {
                let message = err.statusText || "An error has occurred";
                $form.insertAdjacentHTML("afterend", `<p><b> Error ${err.status}: ${message} </b></p>`);
            }
        }
    }
});

d.addEventListener("click",async e =>  {
    if(e.target.matches(".edit")){
        $title.textContent = "Edit Player";
        $form.name.value = e.target.dataset.name;
        $form.team.value = e.target.dataset.team;
        $form.id.value = e.target.dataset.id
    }

    if(e.target.matches(".delete")){
        let isDeleted = confirm(`Sure you wanna delete ${e.target.dataset.id}?`);

        if(isDeleted){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }
                };
                let res = await fetch(`http://localhost:5000/players/${e.target.dataset.id}`, options);
                let json = await res.json();
    
                if(!res.ok) throw{status: res.status, statusText: res.statusText};
    
                location.reload();
            } catch (err) {
                let message = err.statusText || "An error has occurred";
                alert( `${err.status}: ${message}`);
            }
        }
    }
});