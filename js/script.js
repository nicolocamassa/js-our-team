let members = [
    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
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