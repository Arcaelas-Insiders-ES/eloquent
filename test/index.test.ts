import { IObject } from "@arcaelas/utils"
import { Collection } from "../src"



const items = [
    {
        "_id": "64407cd57a6a72090b7f39c0",
        "index": 0,
        "guid": "19be6999-bce3-46a6-9f6e-ff675e71ea9a",
        "isActive": true,
        "balance": "$2,627.44",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "green",
        "name": "Mcpherson Ball",
        "gender": "male",
        "company": "THREDZ",
        "email": "mcphersonball@thredz.com",
        "phone": "+1 (970) 495-3442",
        "address": "721 Colonial Court, Grayhawk, Illinois, 7422",
        "about": "Eiusmod tempor nostrud velit velit culpa minim. Anim sit amet aliqua voluptate sit velit officia reprehenderit ad amet esse sit velit pariatur. Enim sit cupidatat occaecat amet sint aute. Veniam labore laboris amet commodo pariatur dolore et proident exercitation aliquip. Laboris duis adipisicing mollit incididunt officia.\r\n",
        "registered": "2017-07-09T04:08:38 +04:00",
        "latitude": 10.000459,
        "longitude": 97.123053,
        "tags": [
            "enim",
            "aute",
            "eu",
            "elit",
            "non",
            "Lorem",
            "ad"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Mcfadden Decker"
            },
            {
                "id": 1,
                "name": "Clemons Gates"
            },
            {
                "id": 2,
                "name": "Mcknight Clemons"
            }
        ],
        "greeting": "Hello, Mcpherson Ball! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "64407cd5718e9ccc44db106f",
        "index": 1,
        "guid": "19e76dd6-0576-4275-931e-d851bddf6023",
        "isActive": false,
        "balance": "$3,238.14",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Greer Fisher",
        "gender": "male",
        "company": "ZENTIME",
        "email": "greerfisher@zentime.com",
        "phone": "+1 (925) 507-2706",
        "address": "756 Malta Street, Deltaville, Missouri, 1415",
        "about": "Ut aute ipsum labore nostrud qui veniam consequat pariatur adipisicing anim. Tempor quis eiusmod exercitation sunt ullamco ut consectetur minim incididunt velit. Reprehenderit ad ut velit qui magna incididunt quis elit dolor.\r\n",
        "registered": "2018-11-15T08:05:31 +04:00",
        "latitude": -47.994666,
        "longitude": 110.347043,
        "tags": [
            "sunt",
            "proident",
            "nostrud",
            "mollit",
            "ut",
            "pariatur",
            "nostrud"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Gamble Bartlett"
            },
            {
                "id": 1,
                "name": "Cleo Aguirre"
            },
            {
                "id": 2,
                "name": "Shelly Wilcox"
            }
        ],
        "greeting": "Hello, Greer Fisher! You have 10 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "64407cd50e10d16a50d83a19",
        "index": 2,
        "guid": "de6f05bc-1754-470d-a0e0-a9de15fa0a53",
        "isActive": false,
        "balance": "$1,292.64",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "green",
        "name": "Erika Wheeler",
        "gender": "female",
        "company": "EXTRAGEN",
        "email": "erikawheeler@extragen.com",
        "phone": "+1 (854) 400-2203",
        "address": "327 Cass Place, Orick, American Samoa, 6731",
        "about": "Mollit commodo adipisicing pariatur et pariatur incididunt do dolore exercitation. Sint reprehenderit est consectetur ea reprehenderit do officia. Ad ut commodo exercitation ut quis consequat quis amet est officia fugiat ut minim anim. Sunt dolor nulla pariatur veniam et minim laborum non ea incididunt enim commodo. Anim in eiusmod magna eiusmod Lorem ad labore amet proident enim consectetur quis. Esse consectetur dolor labore voluptate ex consequat laboris exercitation.\r\n",
        "registered": "2017-07-19T01:36:41 +04:00",
        "latitude": -13.436055,
        "longitude": 31.579754,
        "tags": [
            "elit",
            "Lorem",
            "eu",
            "veniam",
            "excepteur",
            "est",
            "proident"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Buchanan Snider"
            },
            {
                "id": 1,
                "name": "Brigitte Rodriquez"
            },
            {
                "id": 2,
                "name": "Claudette Giles"
            }
        ],
        "greeting": "Hello, Erika Wheeler! You have 7 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "64407cd5c435ebc942d7133c",
        "index": 3,
        "guid": "c4e2dae0-b5d0-445f-afa2-b91e3c56150d",
        "isActive": true,
        "balance": "$2,585.70",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "eyeColor": "blue",
        "name": "Dawson Montgomery",
        "gender": "male",
        "company": "KENGEN",
        "email": "dawsonmontgomery@kengen.com",
        "phone": "+1 (985) 553-3613",
        "address": "180 Holmes Lane, Wyano, Oklahoma, 3318",
        "about": "Commodo velit velit nisi est culpa enim culpa ex deserunt eiusmod aliqua. Sint amet et laborum occaecat irure minim commodo mollit minim quis in voluptate veniam est. Et duis cupidatat officia nisi consectetur ea aliqua elit adipisicing excepteur ut nostrud deserunt. Voluptate sit et et nulla duis dolore qui veniam irure culpa. Nulla proident ipsum do officia labore. Consequat mollit eu ad labore deserunt.\r\n",
        "registered": "2022-12-28T09:41:16 +04:00",
        "latitude": 42.589434,
        "longitude": -69.780865,
        "tags": [
            "velit",
            "aute",
            "ad",
            "et",
            "ea",
            "non",
            "ex"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Willie Mcbride"
            },
            {
                "id": 1,
                "name": "Kelly Douglas"
            },
            {
                "id": 2,
                "name": "Singleton White"
            }
        ],
        "greeting": "Hello, Dawson Montgomery! You have 5 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "64407cd50dfa7eeb5df96eed",
        "index": 4,
        "guid": "f08c83e7-fc71-4172-ab44-90599228d312",
        "isActive": true,
        "balance": "$1,363.25",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "brown",
        "name": "Jenna Wallace",
        "gender": "female",
        "company": "DADABASE",
        "email": "jennawallace@dadabase.com",
        "phone": "+1 (951) 410-3714",
        "address": "199 High Street, Cochranville, Oregon, 4617",
        "about": "Et nulla mollit mollit quis eu fugiat sint laboris ipsum consectetur. Exercitation culpa exercitation amet elit irure excepteur ex dolor labore in cillum aliqua incididunt. Irure aute aliqua veniam mollit et fugiat excepteur labore culpa ea eu velit magna. Laborum et nulla culpa excepteur pariatur sit mollit magna do cillum ullamco id.\r\n",
        "registered": "2017-03-04T08:26:20 +04:00",
        "latitude": 74.580619,
        "longitude": 89.171005,
        "tags": [
            "aliquip",
            "consequat",
            "sunt",
            "incididunt",
            "et",
            "nostrud",
            "nisi"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Hester King"
            },
            {
                "id": 1,
                "name": "Skinner Dillon"
            },
            {
                "id": 2,
                "name": "Latasha Sims"
            }
        ],
        "greeting": "Hello, Jenna Wallace! You have 10 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "_id": "64407cd5a60c228b80d1617b",
        "index": 5,
        "guid": "d0d26b16-87f2-4869-9569-069e57777e6d",
        "isActive": true,
        "balance": "$1,975.29",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "green",
        "name": "Estelle Sanders",
        "gender": "female",
        "company": "TOYLETRY",
        "email": "estellesanders@toyletry.com",
        "phone": "+1 (915) 427-2651",
        "address": "906 Terrace Place, Movico, District Of Columbia, 5070",
        "about": "Nisi labore ad tempor aliqua Lorem anim exercitation nostrud sint. Occaecat quis exercitation commodo pariatur mollit cillum laboris. Excepteur laboris eiusmod anim occaecat officia non ex excepteur deserunt mollit ea.\r\n",
        "registered": "2016-11-04T05:15:58 +04:00",
        "latitude": 78.451909,
        "longitude": -170.681121,
        "tags": [
            "veniam",
            "proident",
            "qui",
            "esse",
            "dolor",
            "est",
            "adipisicing"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Shannon Mcfadden"
            },
            {
                "id": 1,
                "name": "Norma Mccray"
            },
            {
                "id": 2,
                "name": "Goodwin Kirk"
            }
        ],
        "greeting": "Hello, Estelle Sanders! You have 8 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "_id": "64407cd5fac0350a517f6532",
        "index": 6,
        "guid": "dcbc2eda-0fac-43fd-833f-3d9ba95b05df",
        "isActive": false,
        "balance": "$1,507.97",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "green",
        "name": "Lauri Hawkins",
        "gender": "female",
        "company": "ZENSOR",
        "email": "laurihawkins@zensor.com",
        "phone": "+1 (827) 462-3211",
        "address": "949 Wallabout Street, Driftwood, Idaho, 6963",
        "about": "Mollit Lorem aliqua anim aliqua quis aliquip. Amet minim do excepteur officia pariatur duis anim ad ipsum eiusmod. Minim cillum enim sint Lorem dolor duis.\r\n",
        "registered": "2019-06-29T01:03:20 +04:00",
        "latitude": 25.818246,
        "longitude": -37.009063,
        "tags": [
            "amet",
            "magna",
            "officia",
            "aute",
            "ex",
            "non",
            "magna"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Blackburn Good"
            },
            {
                "id": 1,
                "name": "Whitfield Holman"
            },
            {
                "id": 2,
                "name": "Cheri Evans"
            }
        ],
        "greeting": "Hello, Lauri Hawkins! You have 8 unread messages.",
        "favoriteFruit": "strawberry"
    }
]

let collection: Collection<typeof items extends [ infer T ] ? T : IObject>

beforeAll(()=>{
    collection = new Collection<typeof items extends [ infer T, ...any ] ? T : IObject>( items as [] )
    collection.find({
    })
})

test("Collection created!", ()=>{
    expect( collection ).toBeInstanceOf( Collection )
})

test("join", ()=>{
    expect( collection.join("name", ",", "and") )
        .toMatch(/\w+,/g)
    expect( collection.join("name", ",", "and") )
        .toMatch(/ and \w+/g)
})

test("map", ()=>{
    expect( collection.map(item=> item.name).join(",") )
        .toEqual( items.map(item=> item.name ).join(",") )
})

test("pop", ()=>{
    expect( collection.pop() )
        .toEqual( items[ items.length - 1 ] )
})

test("first", ()=>{
    expect( collection.first() ).toMatchObject( items[0] )
})

test("firstQuery", ()=>{
    expect( collection.first({
        email: "greerfisher@zentime.com"
    }) ).toMatchObject( items[1] )

    expect( collection.first({
        email: { $eq: "greerfisher@zentime.com" }
    }) ).toMatchObject( items[1] )

    expect( collection.first({
        tags: { $includes: "proident" }
    }) ).toMatchObject( items[1] )
})

test("notQuery", ()=>{
    expect( collection.first({
        email: { $not: "greerfisher@zentime.com" }
    }) ).toMatchObject( items[0] )

    expect( collection.first({
        $not:{ email: { $not: "greerfisher@zentime.com" } }
    }) ).toMatchObject( items[1] )
})