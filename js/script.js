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

        for (let key in member) {
            console.log(`${member[key]}`);
        }
    }
}

printMember();