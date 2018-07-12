//DATA
// Below data will hold all of the friends tables.

var friends = [
  {
    name: "Amanda Leach",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fengineering.unl.edu%2Fimages%2Fstaff%2FKayla_Person-small.jpg&imgrefurl=https%3A%2F%2Fengineering.unl.edu%2Fkayla-person%2F&docid=ap6GPr-70tOAyM&tbnid=J3FbWSV7deAtsM%3A&vet=10ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjVASgAMAA..i&w=1200&h=1500&bih=732&biw=1536&q=pictures%20of%20person&ved=0ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjVASgAMAA&iact=mrc&uact=8",
    scores: [
      "5",
      "4",
      "3",
      "3",
      "1",
      "1",
      "2",
      "3",
      "2",
      "1"
    ]
  },
  {
    name: "Ethan Rowe",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fccnchurch.org%2Fwp-content%2Fuploads%2F2017%2F04%2FPicture-of-person.png&imgrefurl=https%3A%2F%2Fccnchurch.org%2Fsample-page%2Fpicture-of-person%2F&docid=622mob-jr71c0M&tbnid=3sLgLDfpJhQuEM%3A&vet=10ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjiASgNMA0..i&w=220&h=215&bih=732&biw=1536&q=pictures%20of%20person&ved=0ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjiASgNMA0&iact=mrc&uact=8",
    scores: [
      "1",
      "1",
      "5",
      "3",
      "4",
      "2",
      "5",
      "5",
      "2",
      "3"
    ]
  },
  {
    name: "Sarah Anison",
    photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.envphil.ethz.ch%2Fcontent%2Fspecialinterest%2Fusys%2Fied%2Fenvironmental-philosophy%2Fen%2Fpeople%2Fperson-detail.person_image.jpeg%3Fpersid%3DMTg1Njkx&imgrefurl=http%3A%2F%2Fwww.envphil.ethz.ch%2Fpeople%2Fperson-detail.html%3Fpersid%3D185691&docid=LHXK8cJzDe0oGM&tbnid=FvOa67uNpOeScM%3A&vet=10ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjhASgMMAw..i&w=300&h=400&bih=732&biw=1536&q=pictures%20of%20person&ved=0ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjhASgMMAw&iact=mrc&uact=8",
    scores: [
      "4",
      "1",
      "2",
      "4",
      "5",
      "2",
      "1",
      "4",
      "4",
      "4"
    ]
  },
  {
    name: "Jay Thomas",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftherapidian.org%2Fsites%2Fdefault%2Ffiles%2Farticle_images%2Fjamesperson.jpg&imgrefurl=https%3A%2F%2Fwww.therapidian.org%2Fkorean-reunification-possible-dr-james-person-woodrow-wilson-international-center-scholars-washingto&docid=d5BoXRJeydPFQM&tbnid=1qDMA3AShZ7uLM%3A&vet=10ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjkASgPMA8..i&w=450&h=550&bih=732&biw=1536&q=pictures%20of%20person&ved=0ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwjkASgPMA8&iact=mrc&uact=8",
    scores: [
      "3",
      "3",
      "1",
      "2",
      "1",
      "2",
      "5",
      "4",
      "1",
      "1"
    ]
  },
  {
    name: "Melissa Flowers",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F3c%2F35%2F78%2F3c357855d3bef714acb6631b937f4efc.png&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F817755244811726557%2F&docid=Y10y_sK2qX87aM&tbnid=xjJ4wbYs_mP3vM%3A&vet=10ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwj5ASgaMBo..i&w=514&h=386&bih=732&biw=1536&q=pictures%20of%20person&ved=0ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwj5ASgaMBo&iact=mrc&uact=8",
    scores: [
      "2",
      "2",
      "4",
      "1",
      "3",
      "4",
      "4",
      "5",
      "5",
      "5"
    ]
  },
  {
    name: "Carl Lee",
    photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fusatftw.files.wordpress.com%2F2018%2F04%2Fxxx-rickastley-5_83995886.jpg%3Fw%3D1000%26h%3D600%26crop%3D1&imgrefurl=https%3A%2F%2Fftw.usatoday.com%2F2018%2F04%2Frick-astley-sang-never-gonna-give-you-up-with-a-200-person-choir-and-its-shockingly-good&docid=SW3whP1y0U6U1M&tbnid=a9sosRnL_SymjM%3A&vet=10ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwisAihDMEM..i&w=1000&h=600&bih=732&biw=1536&q=pictures%20of%20person&ved=0ahUKEwjK5trYzpjcAhUiUt8KHVlrBswQMwisAihDMEM&iact=mrc&uact=8",
    scores: [
      "3",
      "5",
      "5",
      "3",
      "2",
      "2",
      "1",
      "4",
      "3",
      "1"
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;