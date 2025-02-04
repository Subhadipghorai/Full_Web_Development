
use('Sigma');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany(
    [
    {
        "name": "Alex Mercer",
        "course": "Data Science",
        "instructor": "Dr. Smith"
    },
    {
        "name": "Emily Rose",
        "course": "Artificial Intelligence",
        "instructor": "Prof. Johnson"
    },
    {
        "name": "James Bond",
        "course": "Cybersecurity",
        "instructor": "Agent Q"
    },
    {
        "name": "Lara Croft",
        "course": "Archaeology",
        "instructor": "Dr. Jones"
    },
    {
        "name": "Bruce Wayne",
        "course": "Business Management",
        "instructor": "Mr. Fox"
    },
    {
        "name": "Tony Stark",
        "course": "Engineering",
        "instructor": "Dr. Yinsen"
    },
    {
        "name": "Clark Kent",
        "course": "Journalism",
        "instructor": "Perry White"
    },
    {
        "name": "Diana Prince",
        "course": "History",
        "instructor": "Prof. Trevor"
    },
    {
        "name": "Peter Parker",
        "course": "Photography",
        "instructor": "Mr. Jameson"
    },
    {
        "name": "Natasha Romanoff",
        "course": "Espionage",
        "instructor": "Agent Barton"
    },
    {
        "name": "Steve Rogers",
        "course": "Leadership",
        "instructor": "Dr. Erskine"
    },
    {
        "name": "Bucky Barnes",
        "course": "Mechanics",
        "instructor": "Mr. Stark"
    },
    {
        "name": "Wanda Maximoff",
        "course": "Psychology",
        "instructor": "Dr. Strange"
    },
    {
        "name": "Stephen Strange",
        "course": "Medicine",
        "instructor": "Dr. Palmer"
    },
    {
        "name": "Thor Odinson",
        "course": "Mythology",
        "instructor": "Odin"
    },
    {
        "name": "Bruce Banner",
        "course": "Physics",
        "instructor": "Dr. Ross"
    },
    {
        "name": "T'Challa",
        "course": "Political Science",
        "instructor": "Zuri"
    },
    {
        "name": "Shuri",
        "course": "Technology",
        "instructor": "Mr. Ross"
    },
    {
        "name": "Gamora",
        "course": "Combat Training",
        "instructor": "Thanos"
    },
    {
        "name": "Rocket Raccoon",
        "course": "Engineering",
        "instructor": "Groot"
    },
    {
        "name": "Groot",
        "course": "Botany",
        "instructor": "Rocket"
    },
    {
        "name": "Scott Lang",
        "course": "Robotics",
        "instructor": "Dr. Pym"
    },
    {
        "name": "Hope van Dyne",
        "course": "Biology",
        "instructor": "Dr. Pym"
    },
    {
        "name": "Carol Danvers",
        "course": "Aerospace",
        "instructor": "Mar-Vell"
    },
    {
        "name": "Nick Fury",
        "course": "Strategic Studies",
        "instructor": "Phil Coulson"
    },
    {
        "name": "Phil Coulson",
        "course": "Defense Tactics",
        "instructor": "Nick Fury"
    },
    {
        "name": "Maria Hill",
        "course": "Operations Management",
        "instructor": "Nick Fury"
    },
    {
        "name": "Pepper Potts",
        "course": "Business Administration",
        "instructor": "Tony Stark"
    },
    {
        "name": "Happy Hogan",
        "course": "Security",
        "instructor": "Tony Stark"
    },
    {
        "name": "Rhodey",
        "course": "Military Studies",
        "instructor": "Tony Stark"
    },
    {
        "name": "Sam Wilson",
        "course": "Aviation",
        "instructor": "Steve Rogers"
    }
    ]
);



// Print a message to the output window.
console.log(`Done Inserting Data`);

