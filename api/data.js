// api/users.js
export default function handler(req, res) {
  res.status(200).json({
    dataBase: [
      {
        id: "0a5d",
        userInfo: {
          name: "David",
          passWord: "OKoyedav&$",
          email: "okoyedav7@gmail.com",
        },
        groups: [
          {
            groupName: "Master group",
            jobs: 0,
            handle: "@graciebon9",
            price: "600",
            id: "Fri Oct 04 2024",
          },
          {
            groupName: "Mankind",
            jobs: 0,
            handle: "@turaii",
            price: "800",
            id: "Fri Oct 04 2024",
          },
          {
            groupName: "Mankind",
            jobs: 0,
            handle: "@turaii",
            price: "900",
            id: "1728067991562",
          },
          {
            groupName: "Mankind",
            jobs: 0,
            handle: "@turaii",
            price: "800",
            id: "1728068010781",
          },
        ],
      },
      {
        id: "0a6d",
        userInfo: {
          name: "okoye",
          passWord: "Okoyedav7$",
          email: "okoyedav7@gmail.com",
        },
        groups: [
          {
            groupName: "Mankind",
            jobs: 19,
            handle: "@__turaii",
            price: "700",
            id: "1728069076540",
          },
          {
            groupName: "Master Group",
            jobs: 0,
            handle: "@graciebon9",
            price: "600",
            id: "1728069118721",
          },
          {
            groupName: "10k Trend group",
            jobs: 0,
            handle: "@__turaii",
            price: "600",
            id: "1728069183395",
          },
          {
            groupName: "Master Group",
            jobs: 0,
            handle: "@pherhonicha",
            price: "600",
            id: "1728069231936",
          },
        ],
        getID: "0a6d",
      },
      {
        id: "1728122769678",
        userInfo: {
          name: "chigozie",
          passWord: "chigozie",
          email: "chigozie@gmail.com",
        },
        groups: [
          {
            groupName: "class of 2025 city royal",
            jobs: 8,
            handle: "chigozie",
            price: "80000",
            id: "1728122816467",
          },
        ],
        getID: "1728122769678",
      },
    ],
  });
}
