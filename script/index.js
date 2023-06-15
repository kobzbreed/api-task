main();

function main() {
    const ul = document.querySelector('ul');
    const [img, name, gender, height, button] =document.querySelectorAll('.details>*');
    const [sec1, sec2] = document.querySelectorAll ('.home, .details')

    button.addEventListener('click', ()=>{
        sec1.classList.remove('hide');
        sec2.classList.add('hide');
    })

    fetchApi();

    async function fetchApi() {
        let myRequest = new Request('https://swapi.dev/api/people/');
        let myReponse = await fetch(myRequest);
        let myData = await myReponse.json();

        while (myData.next !== null) {
            populate(myData);

            myRequest = new Request(myData.next);
            myReponse = await fetch (myRequest);
            myData = await myReponse.json();
        }
    }

    // fetchApi
    function populate(myData) {
        myData.results.forEach(character => {
            const li = document.createElement('li');
            li.innerHTML = character.name;
            ul.append(li);

            li.addEventListener('click', () =>{
               displayInfo(character);
            });
        })
    }

    function displayInfo(character) {
        // console.log(character.name);
        name.innerHTML = character.name;
        gender.innerHTML = character.gender;
        height.innerHTML = character.height;
        sec1.classList.add ('hide');
        sec2.classList.remove('hide');
    }
}
   

// module.exports = { main }


// module.exports = { main }
