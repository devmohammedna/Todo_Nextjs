export default function handler(req, res) {
    if(req.method==='GET'){

        res.status(200).json({ 
followers: [
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Latife",
            last: "Çatalbaş",
          },
          location: {
            street: {
              number: 4243,
              name: "Istiklal Cd",
            },
            city: "Bitlis",
            state: "Çanakkale",
            country: "Turkey",
            postcode: 39411,
            coordinates: {
              latitude: "78.9277",
              longitude: "113.1168",
            },
            timezone: {
              offset: "-9:00",
              description: "Alaska",
            },
          },
          email: "latife.catalbas@example.com",
          login: {
            uuid: "9ea26723-5c6c-4f49-ba03-b3209a0bf812",
            username: "brownpanda308",
            password: "&amp;",
            salt: "XAX0sKDP",
            md5: "f2cd7e64d8739ba07e243cf711f15404",
            sha1: "017184eb309d3b2f9762f1d30a5dc2cf288cb00d",
            sha256:
              "4da1bb4967f9604388352ebb3dc5c4f1f81973fc5b0d4c79bdbd3efaf271d395",
          },
          dob: {
            date: "1953-07-16T19:37:39.771Z",
            age: 68,
          },
          registered: {
            date: "2002-12-02T04:07:10.171Z",
            age: 19,
          },
          phone: "(607)-951-1674",
          cell: "(336)-101-3783",
          id: "1",
          picture: {
            large: "https://randomuser.me/api/portraits/women/54.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
          },
          nat: "TR",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Ayşe",
            last: "Tekelioğlu",
          },
          location: {
            street: {
              number: 2582,
              name: "Atatürk Sk",
            },
            city: "Çankırı",
            state: "Bartın",
            country: "Turkey",
            postcode: 41973,
            coordinates: {
              latitude: "30.4820",
              longitude: "94.0298",
            },
            timezone: {
              offset: "+5:45",
              description: "Kathmandu",
            },
          },
          email: "ayse.tekelioglu@example.com",
          login: {
            uuid: "744a3134-bd4e-480c-bc40-3e523536d501",
            username: "smallelephant941",
            password: "bauhaus",
            salt: "ilvmx1va",
            md5: "5f97e086d1060c7254ce457a7126ab8b",
            sha1: "8977a1c7a4ca6945adebc050c130b22113f66e71",
            sha256:
              "e9e307dbe4981c89a0bc1fed92d121c2ad3d5801626f31d8078185103c5affe6",
          },
          dob: {
            date: "1961-05-13T16:24:08.195Z",
            age: 60,
          },
          registered: {
            date: "2002-07-23T01:18:03.659Z",
            age: 19,
          },
          phone: "(270)-510-0872",
          cell: "(850)-540-4182",
          id: "2",
          picture: {
            large: "https://randomuser.me/api/portraits/women/64.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
          },
          nat: "TR",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Gema",
            last: "Gil",
          },
          location: {
            street: {
              number: 6140,
              name: "Avenida de Burgos",
            },
            city: "Granada",
            state: "Galicia",
            country: "Spain",
            postcode: 62534,
            coordinates: {
              latitude: "53.0477",
              longitude: "-87.6416",
            },
            timezone: {
              offset: "+8:00",
              description: "Beijing, Perth, Singapore, Hong Kong",
            },
          },
          email: "gema.gil@example.com",
          login: {
            uuid: "e40a4b08-200d-4b3d-8196-172d46e65ad9",
            username: "greenleopard378",
            password: "eeyore",
            salt: "1MmAmtlF",
            md5: "2867b64cb8108883869b4ab52cb06247",
            sha1: "1d35e48f968eea4c29b956ff6c0e7c549410697e",
            sha256:
              "56e2e0156bceb48fe17462280ff1ce50c1b6fea66f883f0d9a9bc338ef06cda1",
          },
          dob: {
            date: "1950-10-24T08:37:28.734Z",
            age: 71,
          },
          registered: {
            date: "2003-03-27T07:20:37.461Z",
            age: 18,
          },
          phone: "949-311-601",
          cell: "696-035-904",
          id: "3",
          picture: {
            large: "https://randomuser.me/api/portraits/women/89.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
          },
          nat: "ES",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Hannah",
            last: "Ginnish",
          },
          location: {
            street: {
              number: 1582,
              name: "West Ave",
            },
            city: "Odessa",
            state: "Prince Edward Island",
            country: "Canada",
            postcode: "D6R 7W7",
            coordinates: {
              latitude: "-78.9174",
              longitude: "-57.3905",
            },
            timezone: {
              offset: "-3:30",
              description: "Newfoundland",
            },
          },
          email: "hannah.ginnish@example.com",
          login: {
            uuid: "a9d93635-3856-4841-8e6f-421912fa068e",
            username: "silverbird343",
            password: "junkie",
            salt: "Y0cpN90X",
            md5: "bd61b153ff2144aefa82eb115dd1b140",
            sha1: "bee33b83a2d62a83ac7fc1f2c269044c98d838f0",
            sha256:
              "8e95ed3485ef75b491ce2d752a15c8035bb02aa2c87d49ca75b115c8901b4c5a",
          },
          dob: {
            date: "1974-02-09T21:14:00.284Z",
            age: 47,
          },
          registered: {
            date: "2018-07-21T13:48:43.702Z",
            age: 3,
          },
          phone: "073-036-9032",
          cell: "122-290-0954",
          id: "4",
          picture: {
            large: "https://randomuser.me/api/portraits/women/27.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
          },
          nat: "CA",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Alphonsus",
            last: "Landheer",
          },
          location: {
            street: {
              number: 1312,
              name: "De Standerd",
            },
            city: "Roosteren",
            state: "Zeeland",
            country: "Netherlands",
            postcode: 26521,
            coordinates: {
              latitude: "-85.1327",
              longitude: "-32.4766",
            },
            timezone: {
              offset: "+7:00",
              description: "Bangkok, Hanoi, Jakarta",
            },
          },
          email: "alphonsus.landheer@example.com",
          login: {
            uuid: "c52bbc3f-f288-45e5-afab-3cf04affc8c0",
            username: "organicfrog544",
            password: "prince",
            salt: "Rc529Cvi",
            md5: "5eff4d95fb96afbf1fb3ff0a65605205",
            sha1: "f1fbd335b71a1ba8fd682ea385433d551c5f550d",
            sha256:
              "0d6f6612ce91ddfde91b2b65f89d4bd67ab3f745a417968cae5c53ac9623275f",
          },
          dob: {
            date: "1998-03-01T12:47:40.237Z",
            age: 23,
          },
          registered: {
            date: "2005-09-23T01:22:46.861Z",
            age: 16,
          },
          phone: "(865)-963-8680",
          cell: "(963)-754-5134",
          id: "5",
          picture: {
            large: "https://randomuser.me/api/portraits/men/48.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
          },
          nat: "NL",
        },
      ],

         })
    }
}
