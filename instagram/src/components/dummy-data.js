export const userAccounts = [
  {
    Guest: {
      username: 'Guest',
      password: 'guest',
      thumbnailUrl: 'default'
    },
    philzcoffee: {
      username: 'philzcoffee',
      password: 'hotCup123',
      thumbnailUrl: 'https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg'
    },
    fortnite: {
      username: 'fortnite',
      password: 'shooter234',
      thumbnailUrl: 'https://tk-assets.lambdaschool.com/ce601fdf-7cb0-4098-83d3-1a1584a72513_30841289_342445456281079_112845064497004544_n.jpg'
    },
    playhearthstone: {
      username: 'playhearthstone',
      password: 'cards345',
      thumbnailUrl: 'https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg'
    },
    'James Page': {
      username: 'James Page',
      password: 'creator',
      thumbnailUrl: 'default'
    },
    biancasaurus: {
      username: 'biancasaurus',
      password: 'pass1',
      thumbnailUrl: 'default'
    },
    martinseludo: {
      username: 'martinseludo',
      password: 'pass2',
      thumbnailUrl: 'default'
    },
    michaelmarzetta: {
      username: 'michaelmarzetta',
      password: 'pass3',
      thumbnailUrl: 'default'
    },
    themexican_leprechaun: {
      username: 'themexican_leprechaun',
      password: 'pass4',
      thumbnailUrl: 'default'
    },
    dennis_futbol: {
      username: 'dennis_futbol',
      password: 'pass5',
      thumbnailUrl: 'default'
    },
    awaywetravel: {
      username: 'awaywetravel',
      password: 'pass6',
      thumbnailUrl: 'default'
    },
    awesomebt28: {
      username: 'awesomebt28',
      password: 'pass7',
      thumbnailUrl: 'default'
    },
  }
];

export const userPosts = [
  {
    username: userAccounts[0].philzcoffee.username,
    password: userAccounts[0].philzcoffee.password,
    thumbnailUrl: userAccounts[0].philzcoffee.thumbnailUrl,
    imageUrl:
      "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
    likes: 400,
    timestamp: "July 17th 2017, 12:42:40 pm",
    comments: [
      {
        username: "philzcoffee",
        timestamp: "July 17th 2017, 12:42:40 pm",
        text:
          "We've got more than just delicious coffees to offer at our shops!"
      },
      {
        username: "biancasaurus",
        timestamp: "July 17th 2017, 1:00:32 pm",
        text: "Looks delicious!"
      },
      {
        username: "martinseludo",
        timestamp: "July 17th 2017, 1:02:45 pm",
        text: "Can't wait to try it!"
      }
    ]
  },
  {
    username: userAccounts[0].fortnite.username,
    password: userAccounts[0].fortnite.password,
    thumbnailUrl: userAccounts[0].fortnite.thumbnailUrl,
    imageUrl:
      "https://tk-assets.lambdaschool.com/89d13918-b7a2-4b40-9658-f376ea3f6b59_37131538_213683546146400_1083714364399157248_n.jpg",
    likes: 4307,
    timestamp: "July 15th 2017, 03:12:09 pm",
    comments: [
      {
        username: "twitch",
        timestamp: "July 15th 2017, 03:12:21 pm",
        text: "Epic Street Fighter action here in Las Vegas at #EVO2017!"
      },
      {
        username: "michaelmarzetta",
        timestamp: "July 15th 2017, 03:14:09 pm",
        text: "Omg that match was crazy"
      },
      {
        username: "themexican_leprechaun",
        timestamp: "July 15th 2017, 03:32:52 pm",
        text: "What a setup"
      },
      {
        username: "dennis_futbol",
        timestamp: "July 15th 2017, 04:23:44 pm",
        text: "It that injustice"
      },
      {
        username: "dennis_futbol",
        timestamp: "July 15th 2017, 04:23:55 pm",
        text: "Is"
      }
    ]
  },
  {
    username: userAccounts[0].playhearthstone.username,
    password: userAccounts[0].playhearthstone.password,
    thumbnailUrl: userAccounts[0].playhearthstone.thumbnailUrl,
    imageUrl:
      "https://tk-assets.lambdaschool.com/43bf01f9-319c-469d-8cf5-0120fe1007f1_yosemite.jpg",
    likes: 5306,
    timestamp: "July 14th 2017, 10:04:08 am",
    comments: [
      {
        username: "playhearthstone",
        timestamp: "July 14th 2017, 10:04:08 am",
        text: "Love this shot!"
      },
      {
        username: "awaywetravel",
        timestamp: "July 15th 2017, 11:52:13 am",
        text: "Yosemite is my most favorite place in the universe"
      },
      {
        username: "awesomebt28",
        timestamp: "July 15th 2017, 12:16:31 pm",
        text: "I like how Half Dome looks so old and useless"
      }
    ]
  }
];