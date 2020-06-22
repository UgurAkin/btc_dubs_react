const users = [
  {
    _id: '5ef0e99e2a722dc032d12127',
    index: 0,
    picture: 'http://placehold.it/250x250',
    age: 38,
    name: 'Goldie Holman',
    gender: 'female',
    email: 'goldieholman@hydrocom.com',
    phone: '+1 (921) 522-2339',
    address: '887 Billings Place, Murillo, Nevada, 7938',
    registered: '2018-06-05T10:50:38 +07:00'
  },
  {
    _id: '5ef0e99e76b19dcdeb2dd54a',
    index: 1,
    picture: 'http://placehold.it/250x250',
    age: 34,
    name: 'Carlene Weeks',
    gender: 'female',
    email: 'carleneweeks@hydrocom.com',
    phone: '+1 (999) 490-3573',
    address: '160 Pooles Lane, Bayview, West Virginia, 6179',
    registered: '2014-05-12T03:57:43 +07:00'
  },
  {
    _id: '5ef0e99e8b75c5721e105627',
    index: 2,
    picture: 'http://placehold.it/250x250',
    age: 24,
    name: 'Taylor Perez',
    gender: 'female',
    email: 'taylorperez@hydrocom.com',
    phone: '+1 (917) 465-3661',
    address: '278 Bristol Street, Welda, Oregon, 2959',
    registered: '2017-04-12T04:48:47 +07:00'
  },
  {
    _id: '5ef0e99e007ff825a9e458b1',
    index: 3,
    picture: 'http://placehold.it/250x250',
    age: 23,
    name: 'Flowers Gay',
    gender: 'male',
    email: 'flowersgay@hydrocom.com',
    phone: '+1 (933) 472-2516',
    address:
      '412 Harkness Avenue, Fairlee, Federated States Of Micronesia, 3043',
    registered: '2020-04-30T02:15:36 +07:00'
  },
  {
    _id: '5ef0e99ed88503edf679b05e',
    index: 4,
    picture: 'http://placehold.it/250x250',
    age: 22,
    name: 'Dickson Hendricks',
    gender: 'male',
    email: 'dicksonhendricks@hydrocom.com',
    phone: '+1 (872) 557-3208',
    address: '854 Brighton Avenue, Fairacres, New Mexico, 8421',
    registered: '2016-03-31T08:22:45 +07:00'
  },
  {
    _id: '5ef0e99ef73b698eb40b0de4',
    index: 5,
    picture: 'http://placehold.it/250x250',
    age: 31,
    name: 'Anderson Ramirez',
    gender: 'male',
    email: 'andersonramirez@hydrocom.com',
    phone: '+1 (936) 419-3824',
    address: '438 Gates Avenue, Ezel, Washington, 7957',
    registered: '2019-02-10T08:03:28 +08:00'
  },
  {
    _id: '5ef0e99edc8fbca170a220ae',
    index: 6,
    picture: 'http://placehold.it/250x250',
    age: 23,
    name: 'Valerie Goodwin',
    gender: 'female',
    email: 'valeriegoodwin@hydrocom.com',
    phone: '+1 (981) 551-3716',
    address: '648 Knapp Street, Gilgo, North Carolina, 4827',
    registered: '2019-09-07T05:41:06 +07:00'
  },
  {
    _id: '5ef0e99e32852d36eac9e9d5',
    index: 7,
    picture: 'http://placehold.it/250x250',
    age: 24,
    name: 'Hansen Gibbs',
    gender: 'male',
    email: 'hansengibbs@hydrocom.com',
    phone: '+1 (852) 420-2191',
    address: '636 Macdougal Street, Cashtown, California, 6577',
    registered: '2016-12-18T11:05:48 +08:00'
  },
  {
    _id: '5ef0e99ea8c8bfe583f84408',
    index: 8,
    picture: 'http://placehold.it/250x250',
    age: 24,
    name: 'Santiago Huffman',
    gender: 'male',
    email: 'santiagohuffman@hydrocom.com',
    phone: '+1 (985) 590-2059',
    address: '339 Grimes Road, Coventry, Guam, 8393',
    registered: '2016-02-28T11:25:51 +08:00'
  },
  {
    _id: '5ef0e99ef36ef7adc084c0eb',
    index: 9,
    picture: 'http://placehold.it/250x250',
    age: 23,
    name: 'Roxanne Alexander',
    gender: 'female',
    email: 'roxannealexander@hydrocom.com',
    phone: '+1 (828) 503-3802',
    address: '682 Montana Place, Osage, Louisiana, 1666',
    registered: '2015-04-10T02:40:50 +07:00'
  },
  {
    _id: '5ef0e99ef7df5e3f20314803',
    index: 10,
    picture: 'http://placehold.it/250x250',
    age: 28,
    name: 'Janie Wilder',
    gender: 'female',
    email: 'janiewilder@hydrocom.com',
    phone: '+1 (926) 599-2947',
    address: '690 Bragg Court, Bakersville, Utah, 4956',
    registered: '2017-01-08T12:49:09 +08:00'
  },
  {
    _id: '5ef0e99e73bf3006e1f2513f',
    index: 11,
    picture: 'http://placehold.it/250x250',
    age: 38,
    name: 'Louella Hays',
    gender: 'female',
    email: 'louellahays@hydrocom.com',
    phone: '+1 (910) 455-3589',
    address: '870 Bevy Court, Hollins, Arkansas, 2480',
    registered: '2015-07-05T03:02:09 +07:00'
  },
  {
    _id: '5ef0e99e4ac64e004fadbe01',
    index: 12,
    picture: 'http://placehold.it/250x250',
    age: 31,
    name: 'Esperanza Wood',
    gender: 'female',
    email: 'esperanzawood@hydrocom.com',
    phone: '+1 (967) 451-3852',
    address: '659 Woodbine Street, National, Wisconsin, 1205',
    registered: '2017-05-03T08:33:21 +07:00'
  },
  {
    _id: '5ef0e99e648f21ec89e7cfb5',
    index: 13,
    picture: 'http://placehold.it/250x250',
    age: 33,
    name: 'Ruthie Mcguire',
    gender: 'female',
    email: 'ruthiemcguire@hydrocom.com',
    phone: '+1 (922) 420-2415',
    address: '230 Varick Street, Warsaw, Puerto Rico, 6983',
    registered: '2016-08-12T09:54:35 +07:00'
  },
  {
    _id: '5ef0e99eaba18fb6bc9428eb',
    index: 14,
    picture: 'http://placehold.it/250x250',
    age: 36,
    name: 'Rosalie Barlow',
    gender: 'female',
    email: 'rosaliebarlow@hydrocom.com',
    phone: '+1 (949) 561-2208',
    address: '330 Lawrence Avenue, Westboro, Alaska, 7059',
    registered: '2016-10-21T05:06:56 +07:00'
  },
  {
    _id: '5ef0e99e0e6e21d0ce77c27d',
    index: 15,
    picture: 'http://placehold.it/250x250',
    age: 21,
    name: 'Decker Rivas',
    gender: 'male',
    email: 'deckerrivas@hydrocom.com',
    phone: '+1 (904) 556-3674',
    address: '806 Turner Place, Byrnedale, Pennsylvania, 7788',
    registered: '2020-05-07T05:17:22 +07:00'
  },
  {
    _id: '5ef0e99e91902fb571704648',
    index: 16,
    picture: 'http://placehold.it/250x250',
    age: 29,
    name: 'Castro Espinoza',
    gender: 'male',
    email: 'castroespinoza@hydrocom.com',
    phone: '+1 (971) 593-3830',
    address: '899 Hancock Street, Katonah, Nebraska, 2248',
    registered: '2015-03-10T03:25:01 +07:00'
  },
  {
    _id: '5ef0e99ea67d4406bd33dc64',
    index: 17,
    picture: 'http://placehold.it/250x250',
    age: 29,
    name: 'Twila Jarvis',
    gender: 'female',
    email: 'twilajarvis@hydrocom.com',
    phone: '+1 (811) 581-3655',
    address: '647 Knight Court, Albrightsville, Minnesota, 5136',
    registered: '2019-05-30T01:39:08 +07:00'
  },
  {
    _id: '5ef0e99e6782dc3c98ea53c9',
    index: 18,
    picture: 'http://placehold.it/250x250',
    age: 20,
    name: 'Sweet Hutchinson',
    gender: 'male',
    email: 'sweethutchinson@hydrocom.com',
    phone: '+1 (990) 579-2604',
    address: '568 Elton Street, Norris, New York, 6304',
    registered: '2016-09-22T08:26:50 +07:00'
  },
  {
    _id: '5ef0e99ed9b98bed05e8f31a',
    index: 19,
    picture: 'http://placehold.it/250x250',
    age: 24,
    name: 'Miles Valenzuela',
    gender: 'male',
    email: 'milesvalenzuela@hydrocom.com',
    phone: '+1 (841) 544-3846',
    address: '907 Anchorage Place, Corriganville, Wyoming, 9993',
    registered: '2016-01-05T11:23:16 +08:00'
  },
  {
    _id: '5ef0e99eed33f14df4cb713c',
    index: 20,
    picture: 'http://placehold.it/250x250',
    age: 38,
    name: 'Whitney Perkins',
    gender: 'male',
    email: 'whitneyperkins@hydrocom.com',
    phone: '+1 (947) 478-3274',
    address: '286 Creamer Street, Lund, District Of Columbia, 330',
    registered: '2017-11-08T08:58:18 +08:00'
  },
  {
    _id: '5ef0e99ea9f0d9faa88f030e',
    index: 21,
    picture: 'http://placehold.it/250x250',
    age: 40,
    name: 'Mccray Lester',
    gender: 'male',
    email: 'mccraylester@hydrocom.com',
    phone: '+1 (806) 516-2957',
    address: '165 Vine Street, Ripley, Virginia, 8516',
    registered: '2017-01-19T04:55:36 +08:00'
  },
  {
    _id: '5ef0e99e2bf2b574fc21d841',
    index: 22,
    picture: 'http://placehold.it/250x250',
    age: 39,
    name: 'Carey Gilbert',
    gender: 'female',
    email: 'careygilbert@hydrocom.com',
    phone: '+1 (836) 507-3823',
    address: '420 Alice Court, Zortman, Kentucky, 9238',
    registered: '2014-11-29T10:04:41 +08:00'
  },
  {
    _id: '5ef0e99ee9476da1b84e311b',
    index: 23,
    picture: 'http://placehold.it/250x250',
    age: 20,
    name: 'Eula Graham',
    gender: 'female',
    email: 'eulagraham@hydrocom.com',
    phone: '+1 (938) 520-3449',
    address: '695 Beacon Court, Churchill, Maine, 3921',
    registered: '2019-05-25T03:47:20 +07:00'
  },
  {
    _id: '5ef0e99e48a06817420b7c96',
    index: 24,
    picture: 'http://placehold.it/250x250',
    age: 31,
    name: 'Sutton Fitzpatrick',
    gender: 'male',
    email: 'suttonfitzpatrick@hydrocom.com',
    phone: '+1 (923) 524-2521',
    address: '282 Dean Street, Babb, Maryland, 4528',
    registered: '2014-05-21T03:12:33 +07:00'
  },
  {
    _id: '5ef0e99ef79f9a0c67edc8b5',
    index: 25,
    picture: 'http://placehold.it/250x250',
    age: 34,
    name: 'Cheryl Bartlett',
    gender: 'female',
    email: 'cherylbartlett@hydrocom.com',
    phone: '+1 (964) 599-2630',
    address: '514 Montgomery Place, Sunwest, Florida, 663',
    registered: '2020-01-18T01:32:48 +08:00'
  },
  {
    _id: '5ef0e99e8df0f95f7e0eec13',
    index: 26,
    picture: 'http://placehold.it/250x250',
    age: 34,
    name: 'Ella Gillespie',
    gender: 'female',
    email: 'ellagillespie@hydrocom.com',
    phone: '+1 (879) 503-2301',
    address: '501 Rodney Street, Riner, Iowa, 4494',
    registered: '2015-03-31T08:53:58 +07:00'
  },
  {
    _id: '5ef0e99ef9952eab0d0467a1',
    index: 27,
    picture: 'http://placehold.it/250x250',
    age: 37,
    name: 'Annabelle Grimes',
    gender: 'female',
    email: 'annabellegrimes@hydrocom.com',
    phone: '+1 (933) 580-3761',
    address: '459 Huron Street, Oley, Tennessee, 9880',
    registered: '2019-04-12T04:07:24 +07:00'
  },
  {
    _id: '5ef0e99ea635f7ebd69cfd18',
    index: 28,
    picture: 'http://placehold.it/250x250',
    age: 36,
    name: 'Jenny Steele',
    gender: 'female',
    email: 'jennysteele@hydrocom.com',
    phone: '+1 (975) 453-2932',
    address: '875 Mill Avenue, Coaldale, Montana, 9820',
    registered: '2015-12-28T06:14:06 +08:00'
  },
  {
    _id: '5ef0e99ebe1243c799d56ac0',
    index: 29,
    picture: 'http://placehold.it/250x250',
    age: 26,
    name: 'Kim Foster',
    gender: 'female',
    email: 'kimfoster@hydrocom.com',
    phone: '+1 (879) 465-2062',
    address: '438 Devon Avenue, Sparkill, Colorado, 9486',
    registered: '2018-08-16T04:09:19 +07:00'
  },
  {
    _id: '5ef0e99e73139c755028a88d',
    index: 30,
    picture: 'http://placehold.it/250x250',
    age: 26,
    name: 'Mccarthy Kelly',
    gender: 'male',
    email: 'mccarthykelly@hydrocom.com',
    phone: '+1 (843) 518-2832',
    address: '643 Kimball Street, Kapowsin, Ohio, 2683',
    registered: '2015-09-14T12:46:46 +07:00'
  },
  {
    _id: '5ef0e99ea115121facd556e0',
    index: 31,
    picture: 'http://placehold.it/250x250',
    age: 29,
    name: 'Viola Thomas',
    gender: 'female',
    email: 'violathomas@hydrocom.com',
    phone: '+1 (952) 423-3974',
    address: '316 Conduit Boulevard, Frizzleburg, Arizona, 7630',
    registered: '2015-10-18T08:17:13 +07:00'
  },
  {
    _id: '5ef0e99eb5ed59e2eddf3a17',
    index: 32,
    picture: 'http://placehold.it/250x250',
    age: 33,
    name: 'Stephens Stone',
    gender: 'male',
    email: 'stephensstone@hydrocom.com',
    phone: '+1 (935) 592-2277',
    address: '366 Henderson Walk, Outlook, American Samoa, 7080',
    registered: '2018-06-24T12:10:25 +07:00'
  },
  {
    _id: '5ef0e99e259f51a0c46e04df',
    index: 33,
    picture: 'http://placehold.it/250x250',
    age: 40,
    name: 'Griffin Reynolds',
    gender: 'male',
    email: 'griffinreynolds@hydrocom.com',
    phone: '+1 (845) 479-3259',
    address: '456 Jackson Court, Stewartville, Connecticut, 1835',
    registered: '2018-11-24T04:41:36 +08:00'
  },
  {
    _id: '5ef0e99e8925789008149d63',
    index: 34,
    picture: 'http://placehold.it/250x250',
    age: 40,
    name: 'Snider Mcneil',
    gender: 'male',
    email: 'snidermcneil@hydrocom.com',
    phone: '+1 (824) 543-3234',
    address: '619 Hill Street, Fresno, Palau, 5408',
    registered: '2018-07-21T01:22:22 +07:00'
  },
  {
    _id: '5ef0e99e2ffefe2a5ce7e064',
    index: 35,
    picture: 'http://placehold.it/250x250',
    age: 26,
    name: 'Consuelo Decker',
    gender: 'female',
    email: 'consuelodecker@hydrocom.com',
    phone: '+1 (925) 418-2916',
    address: '751 Atlantic Avenue, Eagleville, Alabama, 3809',
    registered: '2015-04-09T12:35:23 +07:00'
  },
  {
    _id: '5ef0e99e5a29558adf8cdaaf',
    index: 36,
    picture: 'http://placehold.it/250x250',
    age: 23,
    name: 'Pierce Gallegos',
    gender: 'male',
    email: 'piercegallegos@hydrocom.com',
    phone: '+1 (990) 454-2929',
    address: '666 Green Street, Coalmont, Marshall Islands, 1369',
    registered: '2014-12-15T10:27:21 +08:00'
  },
  {
    _id: '5ef0e99ecf4cb9005764ffa6',
    index: 37,
    picture: 'http://placehold.it/250x250',
    age: 28,
    name: 'Alta Collier',
    gender: 'female',
    email: 'altacollier@hydrocom.com',
    phone: '+1 (980) 515-2268',
    address: '912 Sedgwick Street, Edinburg, Virgin Islands, 9893',
    registered: '2017-01-13T06:17:13 +08:00'
  },
  {
    _id: '5ef0e99e1cf023423578f7b3',
    index: 38,
    picture: 'http://placehold.it/250x250',
    age: 25,
    name: 'Dillard Reed',
    gender: 'male',
    email: 'dillardreed@hydrocom.com',
    phone: '+1 (966) 538-2452',
    address: '700 Granite Street, Deseret, Delaware, 449',
    registered: '2016-10-10T02:52:12 +07:00'
  },
  {
    _id: '5ef0e99e421dd5fad74adb5b',
    index: 39,
    picture: 'http://placehold.it/250x250',
    age: 28,
    name: 'Colette Baldwin',
    gender: 'female',
    email: 'colettebaldwin@hydrocom.com',
    phone: '+1 (992) 481-3313',
    address: '498 Farragut Place, Sedley, Michigan, 5011',
    registered: '2018-04-13T10:29:11 +07:00'
  },
  {
    _id: '5ef0e99eaf30c10d34bcba91',
    index: 40,
    picture: 'http://placehold.it/250x250',
    age: 29,
    name: 'Saunders Porter',
    gender: 'male',
    email: 'saundersporter@hydrocom.com',
    phone: '+1 (991) 428-3938',
    address: '519 Vanderbilt Avenue, Woodlake, Kansas, 8833',
    registered: '2018-04-30T11:25:45 +07:00'
  },
  {
    _id: '5ef0e99e91933052432f1ace',
    index: 41,
    picture: 'http://placehold.it/250x250',
    age: 27,
    name: 'Staci Albert',
    gender: 'female',
    email: 'stacialbert@hydrocom.com',
    phone: '+1 (922) 521-2744',
    address: '110 Louisiana Avenue, Finderne, Texas, 2704',
    registered: '2018-12-25T06:34:59 +08:00'
  },
  {
    _id: '5ef0e99ee920a381f906d971',
    index: 42,
    picture: 'http://placehold.it/250x250',
    age: 36,
    name: 'Dotson Gill',
    gender: 'male',
    email: 'dotsongill@hydrocom.com',
    phone: '+1 (903) 406-3892',
    address: '202 Schenck Avenue, Mammoth, New Jersey, 4370',
    registered: '2015-10-14T06:34:33 +07:00'
  },
  {
    _id: '5ef0e99efa06c379642f99b5',
    index: 43,
    picture: 'http://placehold.it/250x250',
    age: 30,
    name: 'Wolfe Wade',
    gender: 'male',
    email: 'wolfewade@hydrocom.com',
    phone: '+1 (953) 554-3027',
    address: '349 Folsom Place, Kiskimere, South Dakota, 1073',
    registered: '2018-05-22T08:56:51 +07:00'
  },
  {
    _id: '5ef0e99e530cdca479035dea',
    index: 44,
    picture: 'http://placehold.it/250x250',
    age: 32,
    name: 'Koch Ware',
    gender: 'male',
    email: 'kochware@hydrocom.com',
    phone: '+1 (827) 543-3661',
    address: '501 Clara Street, Gerton, Hawaii, 6030',
    registered: '2014-08-27T09:51:17 +07:00'
  },
  {
    _id: '5ef0e99eb48b114a8b019ab8',
    index: 45,
    picture: 'http://placehold.it/250x250',
    age: 34,
    name: 'Anastasia Browning',
    gender: 'female',
    email: 'anastasiabrowning@hydrocom.com',
    phone: '+1 (860) 450-3899',
    address: '487 Gerritsen Avenue, Kenwood, North Dakota, 9511',
    registered: '2014-05-14T11:41:20 +07:00'
  },
  {
    _id: '5ef0e99e910685e6eebb6869',
    index: 46,
    picture: 'http://placehold.it/250x250',
    age: 27,
    name: 'Concetta Dejesus',
    gender: 'female',
    email: 'concettadejesus@hydrocom.com',
    phone: '+1 (889) 588-3073',
    address: '764 Brightwater Avenue, Manila, New Hampshire, 7171',
    registered: '2016-10-20T08:52:53 +07:00'
  },
  {
    _id: '5ef0e99ea53c6825c6e2ba29',
    index: 47,
    picture: 'http://placehold.it/250x250',
    age: 20,
    name: 'Martin Butler',
    gender: 'male',
    email: 'martinbutler@hydrocom.com',
    phone: '+1 (885) 593-2445',
    address: '820 Chase Court, Crayne, Vermont, 9888',
    registered: '2017-04-22T05:18:20 +07:00'
  },
  {
    _id: '5ef0e99e96c6c46d467be0a4',
    index: 48,
    picture: 'http://placehold.it/250x250',
    age: 39,
    name: 'Selena Vazquez',
    gender: 'female',
    email: 'selenavazquez@hydrocom.com',
    phone: '+1 (855) 415-2351',
    address: '231 Plymouth Street, Joes, Georgia, 1727',
    registered: '2016-07-05T10:29:13 +07:00'
  },
  {
    _id: '5ef0e99e0a243e237ecb87c6',
    index: 49,
    picture: 'http://placehold.it/250x250',
    age: 29,
    name: 'Baker Bruce',
    gender: 'male',
    email: 'bakerbruce@hydrocom.com',
    phone: '+1 (859) 568-3285',
    address: '469 Coles Street, Canterwood, Northern Mariana Islands, 8546',
    registered: '2019-09-12T10:57:38 +07:00'
  }
];

const scores = [
  {
    _id: '5ef0f7d95d507f266d3188d3',
    index: 0,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9cc9985bce38638e9',
    index: 1,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d9960811e3273d7b50',
    index: 2,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d978e70574e7f7cbec',
    index: 3,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d9a01ac57722376c2a',
    index: 4,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d968a85d323c2e3d2d',
    index: 5,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d90c4c99a1c9719c3e',
    index: 6,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9680a5cc3da9259e9',
    index: 7,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d91a32007b90db806c',
    index: 8,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9f511d87e24eb6d54',
    index: 9,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d96d8cb86866e17e15',
    index: 10,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d950aeb8d9df2d5270',
    index: 11,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d999d09a5e40601d46',
    index: 12,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d93392ce834869e036',
    index: 13,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d918a671e823e5f390',
    index: 14,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9f012039b07696c7e',
    index: 15,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d984e7e91e95ba05ff',
    index: 16,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d969b298a093de0706',
    index: 17,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d952e53601c5fdc839',
    index: 18,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9e0fae9439471d827',
    index: 19,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d96fe914dd06e27786',
    index: 20,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9f46c91180c82dee8',
    index: 21,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d9ebe49feceaf1f348',
    index: 22,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d96bece6afd635f6dd',
    index: 23,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d92a0aaa4d94cc198e',
    index: 24,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9fcdaca12a762764b',
    index: 25,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9bdc29a6da8982143',
    index: 26,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d904f3d78e00063ad6',
    index: 27,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d90fac3c08993911ce',
    index: 28,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d921f2263165da9b00',
    index: 29,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d92fba05805fe8ba98',
    index: 30,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d99efa757ad942b4da',
    index: 31,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d94b033a63214a97b4',
    index: 32,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9cbc64eded83722c4',
    index: 33,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d984d73ac9074d43a4',
    index: 34,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d92ba142517a5adb86',
    index: 35,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d9b512b2d3f4f1777f',
    index: 36,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9d8aa61f891a94078',
    index: 37,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d96d5330797496827b',
    index: 38,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d92db2327b4913f41c',
    index: 39,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d96d3a247f187a94d9',
    index: 40,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d9fd05500c8b4afabc',
    index: 41,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d947b7b431883b2a41',
    index: 42,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d93cb91a23e0bb9d36',
    index: 43,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9a37d1dfc44461033',
    index: 44,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d9a06b26d16c256608',
    index: 45,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d930bf7249182097c8',
    index: 46,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d99d205047f4f726d8',
    index: 47,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d954621c7609f25a2b',
    index: 48,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d9ec02813dd605b3a4',
    index: 49,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d95c314f7883eeb319',
    index: 50,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d93da563cb6b426a9a',
    index: 51,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d974a1b70dc0782d85',
    index: 52,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9494c646c4f330e62',
    index: 53,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9a211f51dc76a83d4',
    index: 54,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d9bf7bdfa6857506f2',
    index: 55,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d9727feaa546e42abd',
    index: 56,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d92d3ff2f5cc8c910c',
    index: 57,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d9a29dabfb887c5d84',
    index: 58,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9cb82fee21384f7e1',
    index: 59,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9b878baa672b070e0',
    index: 60,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d9a3b1ee75b6d94a09',
    index: 61,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d94ea5ff6ed53d4b9a',
    index: 62,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d9812e295bbc8095b6',
    index: 63,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9f3de0abc8089163d',
    index: 64,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d995743e8077556b39',
    index: 65,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9e45b4ec8e103339b',
    index: 66,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d97350fdcba082374b',
    index: 67,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d97fb1453e2c61c0a8',
    index: 68,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9b799b401391dabe6',
    index: 69,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9cbcae61d8b34baef',
    index: 70,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d9bfc675f163a27da8',
    index: 71,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9ef0d7c6fdf66c196',
    index: 72,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d98ab4a2dafdf69ad1',
    index: 73,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9ea105c5ece6be734',
    index: 74,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d962449cbda5f1813c',
    index: 75,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d99f5e9f4d7c0bd4d4',
    index: 76,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d95a2a11d3282811ec',
    index: 77,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9cac7eabdd655e297',
    index: 78,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d91cdca8047540ee63',
    index: 79,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d950d569ef9950ec2a',
    index: 80,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d9e5690344dfd3d00e',
    index: 81,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d93be0bb3008420dc3',
    index: 82,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d96f4caec89dac25cd',
    index: 83,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d96baa635d80a339ba',
    index: 84,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d91cc73502657af211',
    index: 85,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9d3c0d29f828c167b',
    index: 86,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d943c04e3f00de8251',
    index: 87,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9b1aaad7b30155c3c',
    index: 88,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d93c53ad877cb0b70e',
    index: 89,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9ac320e12d5dccdf0',
    index: 90,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d9b1434794ca034b9f',
    index: 91,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d93f31bf4faddcc16a',
    index: 92,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d99ad24ef0aebbdb71',
    index: 93,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d91acd48598a9f6024',
    index: 94,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9caaea3f6318e2317',
    index: 95,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d90dd370bd0c41aa01',
    index: 96,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9fe5f6d1abbef9c1f',
    index: 97,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d95b47f6d4614b4092',
    index: 98,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d9af3f840ba87c32db',
    index: 99,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d910f6dd7e2ed1ff8d',
    index: 100,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d92d35fe730fdbe2c2',
    index: 101,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d91b4f4aa265ecfefc',
    index: 102,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9a747c0537570badf',
    index: 103,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9c350d3ac3a4b6519',
    index: 104,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d92aa760fc86e90d61',
    index: 105,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d92c0fad7b3eb68532',
    index: 106,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d90b426a0c0ec688a0',
    index: 107,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d9ae5387c84fabc45d',
    index: 108,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9d154f7142614c7fb',
    index: 109,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d930e8a5f392824de7',
    index: 110,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9f54ab907a33a6ab5',
    index: 111,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9dddf8174ec89bdab',
    index: 112,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d955610764479dc1ae',
    index: 113,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9a297c3450b0d0ac8',
    index: 114,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d91d56fa4e10a809d3',
    index: 115,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d9c87c8cf1115c33ff',
    index: 116,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d9d569e5e1454cca8c',
    index: 117,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d9df8daad4b69810f8',
    index: 118,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d9a09502aa2065f44b',
    index: 119,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d9e493f5267c927082',
    index: 120,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d995137319c2125e7f',
    index: 121,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d93b85a14ea6fcdf9e',
    index: 122,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 1,
        p2: 7,
        p3: 1,
        p4: 7
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d925f44c853a4085cd',
    index: 123,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9a1f69fddb22af225',
    index: 124,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d996a51cba0adfeaba',
    index: 125,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d959c3d9cde96f79ab',
    index: 126,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d9f82629fc37a60f4d',
    index: 127,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9809f575abc2673fe',
    index: 128,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d9c5f2ebab4ffebfc9',
    index: 129,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9385ace02e6e48f58',
    index: 130,
    score: {
      s1: {
        p1: 8,
        p2: 8,
        p3: 0,
        p4: 0
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d90748ffddfd29dea5',
    index: 131,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d935f27c511db5fe41',
    index: 132,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d928d347a112e11930',
    index: 133,
    score: {
      s1: {
        p1: 7,
        p2: 7,
        p3: 1,
        p4: 1
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 8,
        p2: 0,
        p3: 0,
        p4: 8
      }
    }
  },
  {
    _id: '5ef0f7d9faeb1f7578d07235',
    index: 134,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 3,
        p2: 5,
        p3: 3,
        p4: 5
      },
      s3: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      }
    }
  },
  {
    _id: '5ef0f7d9919ccfd1e79b5fff',
    index: 135,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 5,
        p2: 3,
        p3: 3,
        p4: 5
      }
    }
  },
  {
    _id: '5ef0f7d90cd4dde8fee3a695',
    index: 136,
    score: {
      s1: {
        p1: 2,
        p2: 2,
        p3: 6,
        p4: 6
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d90fa43c136a4dafb7',
    index: 137,
    score: {
      s1: {
        p1: 1,
        p2: 1,
        p3: 7,
        p4: 7
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d98b874c5c4883b5b0',
    index: 138,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d9999051d7030e501b',
    index: 139,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 2,
        p2: 6,
        p3: 6,
        p4: 2
      }
    }
  },
  {
    _id: '5ef0f7d993532cd0ce9681b6',
    index: 140,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 8,
        p2: 0,
        p3: 8,
        p4: 0
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d942dc0286dff3863e',
    index: 141,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 5,
        p2: 3,
        p3: 5,
        p4: 3
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d96f58d55811ab2869',
    index: 142,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 0,
        p2: 8,
        p3: 0,
        p4: 8
      },
      s3: {
        p1: 1,
        p2: 7,
        p3: 7,
        p4: 1
      }
    }
  },
  {
    _id: '5ef0f7d9d2a46a23e7d09f46',
    index: 143,
    score: {
      s1: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 3,
        p2: 5,
        p3: 5,
        p4: 3
      }
    }
  },
  {
    _id: '5ef0f7d93b810583bfe16f9d',
    index: 144,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 7,
        p2: 1,
        p3: 1,
        p4: 7
      }
    }
  },
  {
    _id: '5ef0f7d9923955f7d24dd19e',
    index: 145,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 2,
        p2: 6,
        p3: 2,
        p4: 6
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d97f6574a53520b0a8',
    index: 146,
    score: {
      s1: {
        p1: 6,
        p2: 6,
        p3: 2,
        p4: 2
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d93d4b23c879b29a2e',
    index: 147,
    score: {
      s1: {
        p1: 3,
        p2: 3,
        p3: 5,
        p4: 5
      },
      s2: {
        p1: 4,
        p2: 4,
        p3: 4,
        p4: 4
      },
      s3: {
        p1: 0,
        p2: 8,
        p3: 8,
        p4: 0
      }
    }
  },
  {
    _id: '5ef0f7d949a8dfe5b0d6e690',
    index: 148,
    score: {
      s1: {
        p1: 0,
        p2: 0,
        p3: 8,
        p4: 8
      },
      s2: {
        p1: 7,
        p2: 1,
        p3: 7,
        p4: 1
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  },
  {
    _id: '5ef0f7d980fcb724edcb0802',
    index: 149,
    score: {
      s1: {
        p1: 5,
        p2: 5,
        p3: 3,
        p4: 3
      },
      s2: {
        p1: 6,
        p2: 2,
        p3: 6,
        p4: 2
      },
      s3: {
        p1: 6,
        p2: 2,
        p3: 2,
        p4: 6
      }
    }
  }
];

const results = [
  {
    id: 0,
    numCourts: 6,
    courts: Array.from(scores.slice(0, 6), score => {
      const start = score.index * 4;
      const playerIds = users.slice(start, start + 4).map(u => u._id);

      const pObj = playerIds.reduce((obj, id, i) => {
        obj[`player${i}_id`] = id;
        return obj;
      }, {});

      const result = {
        score_id: score._id,
        ...pObj
      };
      return result;
    })
  }
];

module.exports = {
  users,
  scores,
  results
};
