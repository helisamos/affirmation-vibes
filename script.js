
// List of background images inside the 'backgrounds' folder
const bgImages = [
    './backgrounds/lofi bg 1.png',
    './backgrounds/lofi bg 2.png',
    './backgrounds/lofi bg 3.png',
    './backgrounds/lofi bg 4.png',
    './backgrounds/lofi bg 5.png',
    './backgrounds/lofi bg 6.png',
    './backgrounds/lofi bg 7.png',
    './backgrounds/lofi bg 8.png',
    './backgrounds/lofi bg 9.png',
    './backgrounds/lofi bg 10.png'
];

// Embedding affirmations directly
const affirmationsList = ["Today I will make storyworthy moments", "Today will be nothing short of awesome", "Today I will attract amazing opportunities", "The path I take is the right path", "I am exactly where I need to be", "I have everything I need and nothing less", "I am excited to start the day", "I won't worry about things I can't control", "I radiate good vibes everywhere I go", "Everything will always work out for me", "Small steps I take are still progress", "My dreams are possible and within reach", "I can crush every goal I set out to do", "I am full of unyielding ambition", "I am worthy of personal success", "I am destined to achieve all my goals", "I don't fail, I learn for more next time", "I am proud of every win, big or small", "I am brave enough to step out of comfort zones", "I am the main character of my own story", "I love every part of me", "I am already whole and complete", "I don't need validation from anyone else", "I am enough", "I will only compare myself to the me of yesterday", "I am getting better each day", "I am unique in all the good ways", "I am not phased by the judgement of others", "I don't need to impress anyone but myself", "I have imperfections and that's perfectly okay", "I will take things one at a time", "I am free from negativity that holds me back", "Today I will conquer my fears", "Set backs are are insignificant to my life's story", "I have the abilitiy to beat any obstacle", "Nothing can hold me back from happiness and success", "My worries are only temporary", "I will come out on top of any stressful situation", "No one and nothing will keep me down today", "I am safe and secure from stress", "I command respect in every room I walk in", "Every decision I make is what's best for me", "I am worth of unconditional love", "I can find joy in the simple things", "I exude charisma in any conversation", "I only attract others that share my energy", "I am grateful for those in my life", "People always enjoy spending time with me", "I give off positive vibes with others", "I choose to live intentionally without regret"];

// Function to set random affirmation and background
function setRandomContent() {
    const randomAffirmation = affirmationsList[Math.floor(Math.random() * affirmationsList.length)];
    document.querySelector('.affirmation').textContent = randomAffirmation;

    const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];

    // Create img element for background
    let bgImageElement = document.createElement('img');
    bgImageElement.src = randomBg;
    bgImageElement.style.position = 'fixed';
    bgImageElement.style.top = '0';
    bgImageElement.style.left = '0';
    bgImageElement.style.width = '100vw';
    bgImageElement.style.height = '100vh';
    bgImageElement.style.zIndex = '-1'; // Send to the back

    // Append to body
    document.body.appendChild(bgImageElement);
    console.log('Trying to set background image:', randomBg);
}

setRandomContent();
