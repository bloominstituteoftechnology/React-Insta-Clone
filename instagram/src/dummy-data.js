const dummyData = [
    {
        username: "philzcoffee",
        thumbnailUrl:  'https://scontent-sjc3-1.cdninstagram.com/vp/01ecf730c41cfe822c0953993cd06026/5BCB7088/t51.2885-19/11201517_887808411287357_1307163552_a.jpg',
        imageUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                username: "philzcoffee",
                text: "We've got more than just delicious coffees to offer at our shops!"
            },
            {
                username: "biancasaurus",
                text: "Looks delicious!"
            },
            {
                username: "martinseludo",
                text: "Can't wait to try it!"
            }
        ]
    },
    {
        username: "twitch",
        thumbnailUrl: 'data:image/jpeg;base64,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',
        imageUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/830c01ad7ceb325547fd1d4d1a1e6897/5B465520/t51.2885-15/e35/25006313_192089151354555_3374696275667582976_n.jpg',
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
        thumbnailUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/51d5b37438ae3a47df37b7ed3fda141f/5B4ABAA7/t51.2885-19/s150x150/13398400_140638743023210_310840336_a.jpg',
        imageUrl: 'https://instagram.fbna1-1.fna.fbcdn.net/vp/22618be7ee2a2b676d13e8d70d7d5e08/5B40BF6B/t51.2885-15/e35/25038917_1978298569058775_6081161469041311744_n.jpg',
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
