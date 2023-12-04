let members = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

function printMember(){
    for(let i = 0; i < members.length; i++){
        let member = members[i];
        document.getElementById('teamList').innerHTML += `<li class="mt-5">Membro team numero: ${i + 1}</li>`;
        for (let key in member) {
            console.log(`${member[key]}`);

            if(key == "image"){
                document.getElementById('teamList').innerHTML += `<img src="./img/${member[key]}"></img>`;
            }else{
                document.getElementById('teamList').innerHTML += `<li>${member[key]}</li>`;
            }
            
        }
    }
}

printMember();