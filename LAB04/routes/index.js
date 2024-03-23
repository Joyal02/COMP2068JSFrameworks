var express = require('express');
var router = express.Router();

// Route to display information about the dog
router.get('/dog', function(req, res, next) {
  res.render('dog', { title: 'Dog Page', pet: 'Dog', description: 'The dog (Canis familiaris[4][5] or Canis lupus familiaris[5]) is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct gray wolves,[6][7] and the gray wolf is the dogs closest living relative.' });
});

// Route to display information about the cat
router.get('/cat', function(req, res, next) {
  res.render('cat', { title: 'Cat Page', pet: 'Cat', description: 'The cat (Felis catus), commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.' });
});

// Route to display information about the bird
router.get('/bird', function(req, res, next) {
  res.render('bird', { title: 'Bird Page', pet: 'Bird', description: 'Birds are a group of warm-blooded vertebrates constituting the class Aves (/ˈeɪviːz/), characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.' });
});

// Route to display information about the fish
router.get('/fish', function(req, res, next) {
  res.render('fish', { title: 'Fish Page', pet: 'Fish', description: 'A fish (pl.: fish or fishes) is an aquatic, gill-bearing vertebrate animal with swimming fins and a hard skull, but lacking limbs with digits. Fish can be grouped into the more basal jawless fish and the more common jawed fish, the latter including all living cartilaginous and bony fish, as well as the extinct placoderms and acanthodians.' });
});

module.exports = router;

