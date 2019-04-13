import philz from './assets/philzcoffee.jpg';
import play from './assets/playhearthstone.jpg';
import twitch from './assets/twitch.jpg';
import One from './assets/Large1.png';
import Two from './assets/Large2.png';
import Three from './assets/Large3.png';

const dummyData = [ //array of objects
    
    {
        username: "philzcoffee",
        thumbnailUrl:  philz,
        imageUrl: Three,
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "Did someone say #WorldChocolateDay? But why limit it to one day when you can enjoy our Mocha Tesora EVERYDAY! Oh and don’t forget to pair it with a chocolate chip cookie from one of our amazing bakery partners. #chocoholic #philzway"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]//array of comments
    },//object
    {
        username: "twitch",
        thumbnailUrl: twitch,
        imageUrl: Two,
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                username: "twitch",
                text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
            },
            {
                username: "michaelmarzetta",
                text: "Omg that match was crazy"
            },
            {
                username: "themexican_leprechaun",
                text: "What a setup"
            },
            {
                username: "dennis_futbol",
                text: "It that injustice"
            },
            {
                username: "dennis_futbol",
                text: "Is"
            }
        ]
    },
    {
        username: "playhearthstone",
        thumbnailUrl: play,
        imageUrl: One,
        likes: 5306,
        timestamp: "July 14th 2017, 10:04:08 am",
        comments: [
            {
                username: "playhearthstone",
                text: "Power alone is not to be feared. Fear instead those who wield it! #FrozenThrone #Expansion #DeathKnights"
            },
            {
                username: "tapmelon",
                text: "Wish that death knight could be added as a new playable class in this expansion."
            },
            {
                username: "micpetboudreau",
                text: "Can't wait"
            },
            {
                username: "awaywetravel",
                text: "I <3 Hearthstone."
            },
            {
                username: "awesomebt28",
                text: "I like how gul'dan looks so old and useless"
            }
        ]
    }
];

export default dummyData;
