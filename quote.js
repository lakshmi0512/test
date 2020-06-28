var quotes=[ 'Without constancy, there is neither love, friendship, nor virtue in the world       - Joseph Addison',
'Why will any man be so impertinently officious as to tell me all prospect of a future state is only fancy and delusion? Is there any merit in being the messenger of ill news. If it is a dream, let me enjoy it, since it makes me both the happier and better man - Joseph Addison',
'Vanity is the natural weakness of an ambitious man, which exposes him to the secret scorn and derision of those he converses with, and ruins the character he is so industrious to advance by it -Joseph Addison',
"It is very difficult to get people to focus on the most important things when you're in boom times. - Jeff Bezos",
"What we need to do is always lean into the future; when the world changes around you and when it changes against you - what used to be a tail wind is now a head wind - you have to lean into that and figure out what to do because complaining isn't a strategy. - Jeff Bezos",
"We are all selfish and I no more trust myself than others with a good motive            - George Gordon Byron",
"Though sages may pour out their wisdom's treasure, there is no sterner moralist than pleasure    - George Gordon Byron",
"Sorrow is knowledge, those that know the most must mourn the deepest, the tree of knowledge is not the tree of life - George Gordon Byron",
"The expression one wears on one’s face is far more important than the clothes one wears on one’s back. -Dale Carnegie",
"One of the most tragic things I know about human nature is that all of us tend to put off living. We are all dreaming of some magical rose garden over the horizon-instead of enjoying the roses that are blooming outside our windows today. - Dale Carnegie",
"That is what every successful person loves: the game. The chance for self-expression. The chance to prove his or her worth, to excel, to win. - Dale Carnegie",
"In the little world in which children have their existence, whosoever brings them up, there is nothing so finely perceived and so finely felt as injustice. - Charles Dickens",
"Happiness is a gift and the trick is not to expect it, but to delight in it when it comes. - Charles Dickens",
"I must be taken as I have been made. The success is not mine, the failure is not mine, but the two together make me. - Charles Dickens",
"Don't cry because it's over, smile because it happened. - Dr. Seuss",
"You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
"Nothing is impossible, the word itself says 'I’m possible'! - Audrey Hepburn",
"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
"Whether you think you can or you think you can’t, you’re right. - Henry Ford",
"Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
"Life is 10 percent what happens to me and 90 percent of how I react to it. - Charles Swindoll",
"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. - Oprah Winfrey",
"None of us is as smart as all of us. - Ken Blanchard",
"I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
"Believe you can and you’re halfway there.     - Theodore Roosevelt",
"To handle yourself, use your head; to handle others, use your heart. - Eleanor Roosevelt",
"Too many of us are not living our dreams because we are living our fears. - Les Brown"
];

var myColors = ['#64FE2E','#58FAF4','#F3F781','#BE81F7','#F5A9F2','#FFBF00','#2ECCFA'];
                
function newQuote(){
var randomize = Math.floor(Math.random()*myColors.length);
  $('.box').css("background-color", myColors[randomize]);
	var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quotedisp').innerHTML=quotes[randomNumber];
}


                
