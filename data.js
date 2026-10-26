const DATA = [
['show respect for other people','проявлять уважение к другим','You can disagree and still ___ .','You can disagree and still show respect for other people.'],
['give someone your full attention','уделять человеку всё своё внимание','Put your phone away when you want to ___ .','Put your phone away when you want to give someone your full attention.'],
['hold the door for someone','придержать кому-то дверь','If a person is carrying heavy bags, it is polite to ___ .','If a person is carrying heavy bags, it is polite to hold the door for someone.'],
['chew with your mouth closed','жевать с закрытым ртом','At the dinner table, you should ___ .','At the dinner table, you should chew with your mouth closed.'],
['make eye contact','смотреть собеседнику в глаза','When you greet a person, try to ___ rather than look at the floor.','When you greet a person, try to make eye contact rather than look at the floor.'],
['interrupt someone in the middle of a sentence','перебить человека на полуслове','Even if you disagree, you should not ___ . Let them finish.','Even if you disagree, you should not interrupt someone in the middle of a sentence. Let them finish.'],
["I’m sorry to interrupt, but",'Извините, что перебиваю, но','“___ I think you have dropped your wallet.”','“I’m sorry to interrupt, but I think you have dropped your wallet.”'],
['invade someone’s personal space','вторгаться в чьё-то личное пространство','On an almost empty train, there is no reason to ___ by standing right next to them.','On an almost empty train, there is no reason to invade someone’s personal space by standing right next to them.'],
['raise your voice','повысить голос','You can explain your opinion calmly. You do not need to ___ .','You can explain your opinion calmly. You do not need to raise your voice.'],
['accidentally bump into someone','случайно задеть кого-то, столкнуться с кем-то','In a crowded shop, you might ___ . If you do, say sorry.','In a crowded shop, you might accidentally bump into someone. If you do, say sorry.'],
['be frowned upon','считаться неприемлемым; вызывать неодобрение','Loud phone calls may ___ in a quiet reading room.','Loud phone calls may be frowned upon in a quiet reading room.'],
['cause offence','обидеть; задеть чьи-то чувства','Jokes about someone’s appearance can ___ , even if you mean well.','Jokes about someone’s appearance can cause offence, even if you mean well.'],
['show consideration for others','считаться с окружающими','Using headphones in shared spaces is one way to ___ .','Using headphones in shared spaces is one way to show consideration for others.'],
['cross the line','перейти границу допустимого','A friendly joke can ___ if it becomes personal and hurtful.','A friendly joke can cross the line if it becomes personal and hurtful.'],
['keep something to a minimum','свести что-либо к минимуму','If you want to reduce an activity as much as possible, you want to ___ .','If you want to reduce an activity as much as possible, you want to keep something to a minimum.'],
['rustle sweet wrappers','шуршать обёртками от конфет','Open your sweets before the film so you do not ___ during a quiet scene.','Open your sweets before the film so you do not rustle sweet wrappers during a quiet scene.'],
['slurp a drink','шумно пить, прихлёбывать','When there is almost nothing left in your cup, try not to ___ through your straw.','When there is almost nothing left in your cup, try not to slurp a drink through your straw.'],
['crunch on popcorn','хрустеть попкорном','Some people like to ___ while they watch the trailers.','Some people like to crunch on popcorn while they watch the trailers.'],
['distract someone from the film','отвлекать кого-то от фильма','A noisy snack can ___ at an important moment.','A noisy snack can distract someone from the film at an important moment.'],
['avoid smelly foods','избегать еды с сильным запахом','If you bring snacks into the cinema, it is best to ___ , such as strong cheese.','If you bring snacks into the cinema, it is best to avoid smelly foods, such as strong cheese.'],
['spill a drink on something','пролить напиток на что-то','Use a cup with a lid so you are less likely to ___ in the dark.','Use a cup with a lid so you are less likely to spill a drink on something in the dark.'],
['leave your rubbish behind','оставлять после себя мусор','Take your empty cups with you. Do not ___ .','Take your empty cups with you. Do not leave your rubbish behind.'],
['clean up after yourself','убирать за собой','If you drop popcorn on your seat, you should ___ before you leave.','If you drop popcorn on your seat, you should clean up after yourself before you leave.'],
['bring your own food','приносить свою еду','If the cinema allows outside snacks, you can ___ instead of buying it there.','If the cinema allows outside snacks, you can bring your own food instead of buying it there.'],
['be part of the experience','быть частью общего впечатления / удовольствия','For some film fans, sharing a snack can ___ , just like watching the trailers.','For some film fans, sharing a snack can be part of the experience, just like watching the trailers.'],
['wait for a louder scene','дождаться более громкой сцены','If opening your snack will be noisy, you could ___ instead of doing it during quiet dialogue.','If opening your snack will be noisy, you could wait for a louder scene instead of doing it during quiet dialogue.'],
['eat without disturbing others','есть, не мешая окружающим','Choose quiet snacks so that you can ___ .','Choose quiet snacks so that you can eat without disturbing others.'],
['rely on snack sales','зависеть от продажи снеков','Some cinemas ___ to help pay their staff and cover other costs.','Some cinemas rely on snack sales to help pay their staff and cover other costs.']
].map((x,id)=>({id,chunk:x[0],ru:x[1],gap:x[2].replace(/ ___ \./g,' ___.').replace(/ ___ ,/g,' ___,'),example:x[3],topic:id<15?'manners':'cinema'}));
DATA[14].answer='keep noise to a minimum';
DATA[14].gap='In a shared office, try to ___ so that your colleagues can concentrate.';
DATA[14].example='In a shared office, try to keep noise to a minimum so that your colleagues can concentrate.';
DATA[14].note='В конструкции keep something to a minimum замени something на noise.';
