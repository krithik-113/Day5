// for,for in,for of,forEach
let data = {
  firstName: "KRITHIK",
  lastName: "ROSHAN B",
  phone: "8610238159",
  "e-mial": "krithikroshan113@gmail.com",
  carrerObjective:
    "To kick start my carrer in globally recognized organization to enhance my skills and knowledge for mutual benefits of organization",
  academicDetails: {
    course: "BCA",
    institution: "VLB Janakiammal college of Art's & Science",
    yearOfCompletion: "2021",
  },
  skills: [
    "optimistic",
    "flexibility",
    "balance success and failure in positive manner",
  ],
  achievements: "certified in advance c programming with 70% in March 2014",
  leisureInterset: ["indoor games", "cooking"],
  personalDossier: {
    name: "Krithik Roshan B",
    dob: "11-03-2000",
    languagesKnown: ["english", "tamil"],
    address: "Muthuswamy Colony, Selvapuram, coimbatore-641 026",
  },
  decleration:
    "I (Krithik Roshan B), hereby declare that the information furnished above is true to the best of my knowledge",
  date: "28-05-2024",
  place: "coimbatore",
};

console.log(data);

// for loop
for (i = 0; i < data.leisureInterset.length; i++) {
  console.log(data.leisureInterset[i]);
}
for (i = 0; i < data.skills.length; i++) {
  console.log(data.skills[i]);
}
for (i = 0; i < data.personalDossier.length; i++) {
  console.log(data.personalDossier[i]);
}
for (i = 0; i < data.personalDossier.languagesKnown.length; i++) {
  console.log(data.personalDossier.languagesKnown[i]);
}

// for in
for (x in data) {
  console.log(data[x]);
}
for (x in data.academicDetails) {
  console.log(data.academicDetails[x]);
}
for (x in data.personalDossier) {
  console.log(data.personalDossier[x]);
}

// for of
for (x of data.skills) {
  console.log(x);
}
for (x of data.leisureInterset) {
  console.log(x);
}
for (x of data.personalDossier.languagesKnown) {
  console.log(x);
}

// forEach
Object.values(data).forEach((element) => {
  console.log(element);
});
Object.values(data.personalDossier).forEach((element) => {
  console.log(element);
});
Object.values(data.academicDetails).forEach((element) => {
  console.log(element);
});
Object.values(data.skills).forEach((element) => {
  console.log(element);
});
Object.values(data.leisureInterset).forEach((element) => {
  console.log(element);
});
Object.values(data.personalDossier.languagesKnown).forEach((element) => {
  console.log(element);
});
