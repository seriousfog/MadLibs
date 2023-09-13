var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});

router.post( '/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render ('story',{
    newStory: newStory,
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode(),
  })
})


module.exports = router;

function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else if (formData.storyChoice === "Random") {
    return randomStory(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData) {
  return `I went and I found my friend ${formData.name1}'s  ${formData.noun1}. ${formData.name1}'s ${formData.noun1}
   was bright and ${formData.adjective1}. When I found it, it seemed like it started to ${formData.verb1}. I was so
  scared and quickly ran away from the ${formData.noun1}. I looked back and ${formData.name1}'s ${formData.noun1}
   seemed liked it was ${formData.verb2} towards me. I was very frightened and hid from ${formData.name1}'s ${formData.noun1}.`
}

function generateStory2(formData) {
  return `My friend ${formData.name1} had a very expensive ${formData.noun1} that costed over 100,000$.
  It was very ${formData.adjective1} and seemed like it might've been worth the price. ${formData.name1}'s 
  ${formData.noun1} started to ${formData.verb1} was most likely broken after 24 hours of being bought.
  The ${formData.noun1} also was ${formData.verb2} which made me very uncomfortable.`
}

function generateStory3(formData) {
  return `*BOOM* *BOOM* *BOOM* *BOOM* *BOOM* Many bombs were dropped on us by the ${formData.adjective1}
  ${formData.noun1}. My name was ${formData.name1}, the last hope of humanity. I tried stopping the 
  ${formData.noun1}, but I couldn't because it would ${formData.verb1} everytime I got close. When I caught him
  alone in a corner, he somehow managed to escape by ${formData.verb2}. I was frustrated of how weak I was.`
}


function generateRandomHexCode() {
  let hexCode = "#"
  while (hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

function randomStory(formData){
  let answers = [1, 2, 3];
  let choice = Math.floor(Math.random()*answers.length);
  if (choice === 1) {
    return generateStory1(formData)
  } else if (choice === 2) {
    return generateStory2(formData)
  } else {
    return generateStory3(formData)
  }
}