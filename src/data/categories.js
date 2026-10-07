// region: CATEGORIES
// категории элементов
const CATS = [
  ["base","Базовые",       ["water","fire","earth","air"]],
  ["elem","Природные явления", ["steam","cloud","mud","lava","energy","sea","ice","river","saltwater"]],
  ["sky", "Небо и погода", ["sky","sun","rain","rainbow","lightning","snow","fog","storm","hurricane","flood"]],
  ["geo", "Земля и минералы", ["dust","stone","metal","mountain","volcano","sand","coal","gold","diamond","salt","glacier","iceberg","oasis","clay","copper","cave","canyon","island"]],
  ["life","Живой мир",     ["swamp","life","plant","tree","forest","fish","bird","lizard","flower","fruit","animal","livestock","algae","moss","mushroom","insect","bee","butterfly","egg","chicken","seed","garden","vegetable","bacteria","virus"]],
  ["craft","Материалы и ремесло", ["wood","glass","brick","wheel","gunpowder","sword","wool","fabric","clothes","boat","ceramic","crystal","bronze","steel","magnet","compass","paper","ink","pen","map","tool","hammer"]],
  ["food","Еда и хозяйство", ["honey","milk","cheese","field","grain","flour","bread","dough","cake","wine","juice","tea","coffee","salad"]],
  ["transport","Транспорт и инфраструктура", ["bridge","road","cart","bicycle","car","airplane","airport","harbor"]],
  ["tech","Техника и связь", ["mechanism","engine","explosion","ship","electricity","wire","lamp","computer","internet","robot","cyborg","rocket","factory","clock","battery","motor","radio","television","camera","phone","smartphone","satellite"]],
  ["science","Наука и медицина", ["telescope","microscope","scientist","science","laboratory","medicine","vaccine","hospital","genetics","clone"]],
  ["civ", "Общество",      ["human","house","city","civilization","knight"]],
  ["culture","Культура и институты", ["book","library","music","art","village","farm","market","money","bank","school","university","government","law","peace"]],
  ["myst","Мифы и алхимия", ["dragon","philstone","magic","wizard","portal"]],
  ["space","Космос",       ["moon","star","space","time","astronaut","alien","universe","planet","comet","galaxy","blackhole"]]
];
for (const [id,,,,, cat] of [...EXPANSION, ...MUSIC_EXPANSION]){
  const category = CATS.find(([cid]) => cid === cat);
  if (category) category[2].push(id);
}
// region: IMPORTED_ALCHEMY_CATEGORIES
for (const [id,,, cat] of IMPORTED_ALCHEMY_GAME){
  const category = CATS.find(([cid]) => cid === cat);
  if (category) category[2].push(id);
}
// endregion: IMPORTED_ALCHEMY_CATEGORIES
const CAT_COLOR = { base:"#9aa4b5", elem:"#4fc3f7", sky:"#ffd54f", geo:"#a1887f", life:"#81c784", craft:"#ffcc80", food:"#ffab91", transport:"#90a4ae", tech:"#80cbc4", science:"#4db6ac", civ:"#ffb74d", culture:"#f48fb1", myst:"#ce93d8", space:"#9fa8da" };
const CAT_OF = {}; CATS.forEach(([cid,,ids]) => ids.forEach(id => CAT_OF[id] = cid));

