function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  for(var i = 0; i < musicians.length; i++)
  {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts)
{
  for(var i = 0; i < facts.length; i++)
  {
    facts[i] += '!!!';
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15)
}
