const users = [
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
    id: "0a68",
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
];

export default function handler(req, res) {
  const allowedOrigins = [
    "https://record-trends.vercel.app", // Your deployed Vercel site
    "http://localhost:5173", // Your local dev environment
  ];

  const origin = req.headers.origin; // Get the origin of the request

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(204).end();
    return;
  }

  // Safely handle ID extraction
  const id = req.query?.id || null;

  switch (req.method) {
    case "GET":
      if (id) {
        const user = users.find((user) => user.id === id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(200).json({ dataBase: users });
      }
      break;

    case "POST":
      const newUser = req.body;
      users.push(newUser);
      res.status(201).json(newUser);
      break;

    case "PUT":
      if (id) {
        const updatedUserData = req.body;
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex > -1) {
          users[userIndex] = { ...users[userIndex], ...updatedUserData };
          res.status(200).json(users[userIndex]);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "ID is required" });
      }
      break;

    case "PATCH":
      if (id) {
        const patchData = req.body; // This should contain the new group data
        const patchUserIndex = users.findIndex((user) => user.id === id);

        if (patchUserIndex > -1) {
          // Update only the groups array within the user object
          users[patchUserIndex] = {
            ...users[patchUserIndex],
            groups: [...users[patchUserIndex].groups, patchData], // Append the new groups
          };

          res.status(200).json(users[patchUserIndex]);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(400).json({ message: "ID is required" });
      }
      break;

    default:
      res.setHeader("Allow", ["OPTIONS", "GET", "POST", "PUT", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
