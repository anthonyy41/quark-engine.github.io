var val = 75; //change this val
var $circle = $('#svg #bar');


var radius = $circle.attr('r');
var circumference = Math.PI*(radius*2);

$circle.css({ strokeDashoffset: circumference});

var pct = (val/100)*circumference;

var obj = {
  pct: 0
};

TweenLite.to(obj, .7, {
  pct: -pct,
  delay: 1,
  onUpdate: function () {
    $circle.css({ strokeDashoffset: obj.pct-circumference});
  }
});
