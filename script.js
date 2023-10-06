const wordList =
  "about, above, abuse, accept, accident, accuse, across, activist, actor, administration, admit, adult, advertise, advise, affect, afraid, after, again, against, agency, aggression, agree, agriculture, force, airplane, airport, album, alcohol, alive, almost, alone, along, already, although, always, ambassador, amend, ammunition, among, amount, anarchy, ancestor, ancient, anger, animal, anniversary, announce, another, answer, apologize, appeal, appear, appoint, approve, archeology, argue, around, arrest, arrive, artillery, assist, astronaut, astronomy, asylum, atmosphere, attach, attack, attempt, attend, attention, automobile, autumn, available, average, avoid, awake, award, balance, balloon, ballot, barrier, battle, beauty, because, become, before, begin, behavior, behind, believe, belong, below, betray, better, between, biology, black, blame, bleed, blind, block, blood, border, borrow, bottle, bottom, boycott, brain, brave, bread, break, breathe, bridge, brief, bright, bring, broadcast, brother, brown, budget, build, building, bullet, burst, business, cabinet, camera, campaign, cancel, cancer, candidate, capital, capture, career, careful, carry, catch, cause, ceasefire, celebrate, center, century, ceremony, chairman, champion, chance, change, charge, chase, cheat, cheer, chemicals, chemistry, chief, child, children, choose, circle, citizen, civilian, civil, rights, claim, clash, class, clean, clear, clergy, climate, climb, clock, close, cloth, clothes, cloud, coalition, coast, coffee, collapse, collect, college, colony, color, combine, command, comment, committee, common, communicate, community, company, compare, compete, complete, complex, compromise, computer, concern, condemn, condition, conference, confirm, conflict, congratulate, Congress, connect, conservative, consider, constitution, contact, contain, container, continent, continue, control, convention, cooperate, correct, corruption, cotton, count, country, court, cover, crash, create";
const noSpaces = wordList.replace(/ /g, "");
const upperCase = noSpaces.toUpperCase();
const wordBank = upperCase.split(",");
const wordListLength = wordBank.length - 1;
const answerSpace = document.getElementById("answerArea")
//wrong guess counter
let counter = 0;
//random word picker
const ranWordIdx = Math.floor(Math.random()* wordListLength);
const ans = wordBank[ranWordIdx].split("");
console.log(ans);

ans.forEach(function(letter, idx){
  createWord(letter,idx);
})




//function to add the words to the answer area


function createWord(letter, idx){
  const newWord = document.createElement("div");
  newWord.setAttribute("id",`letter${idx}`);
  newWord.setAttribute("class","ansLetters")
  newWord.innerHTML = `<h1>${letter}</h1>`;
  console.log(newWord);
  answerSpace.append(newWord);
}
