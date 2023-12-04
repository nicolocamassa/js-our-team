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

function printMember() {
    

    for (let i = 0; i < members.length; i++) {

        let member = members[i];
        let imagePath = `./img/${member.image}`
        let name = `${member.name}`
        for (let key in member) {
            if(key == 'image'){
                document.getElementById('card' + (i + 1)).innerHTML += `<img class="card-img-top" src="${imagePath}" alt="Card image cap">`;
            }

            document.getElementById('nameCard' + (i + 1)).innerHTML = `${member.name} ${member.surname} ` ;
            document.getElementById('role' + (i + 1)).innerHTML = `${member.role}` ;
           
            
            /* console.log(`${member[key]}`);

            if (key == "image") {
                document.getElementById('card' + (i + 1)).innerHTML += `<img class="card-img-top" src="./img/${member[key]}" alt="Card image cap"></img>`;

            } else {

            } */
            }
        }
    }

    printMember();