const asgardianBrothers = [
  {
    firstName: "Thor",
    familyName: "Odinsson"
  },
  {
    firstName: "Loki",
    familyName: "Laufeysson-Odinsson"
  }
]

function intro(person, line) {
  console.log( `${person.firstName} ${person.familyName} says: ${line}`
)}

const phrase = "I like this brown drink very much, bring me another!"
intro(asgardianBrothers[0], phrase)


//////////////////////


function introWithContext(line){
  console.log( `${this.firstName} ${this.familyName} says: ${line}`
)}

introWithContext.call(asgardianBrothers[0], phrase)
//=> Thor Odinsson says: I like this brown drink very much, bring me another!

introWithContext.apply(asgardianBrothers[1], [phrase])
//=> Thor Odinsson says: I like this brown drink very muc