var validator = function (data) {
  var niceWords = ["amazing", "awesome", "blithesome", "excellent", "fabulous",
    "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable",
    "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart",
    "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate",
     "unbelievable", "wondrous"];
  var email = data.email.split('');
  var scale = parseInt(data.scale);
  var feedback = data.feedback.split(' ');
  if (scale < 0) {
    return false;
  }
  var emailFlag = 0;
  email.forEach(function (item) {
    if (item == '@') {
      emailFlag = emailFlag + 1;
    }
  });
  if (emailFlag < 1 || emailFlag > 1) {
    return false;
  }
  var feedbackFlag = 0;
  feedback.forEach(function (item) {
    if (niceWords.indexOf(item) > -1) {
      feedbackFlag = feedbackFlag + 1;
    }
  });
  if (feedbackFlag < 3) {
    return false;
  }
  console.log('jajjj');
  return true;
}

module.exports = validator;
