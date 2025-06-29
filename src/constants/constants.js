export const projects = [
  {
    title: "Euro Currency Exchange",
    description:
      "The app considers euro as the base currency, scrapes latest currency exchange rates from the european bank's website everyday using beautifulsoup4 and stores them in dynamodb. An API is exposed to get exchange rates.",
    image: "/images/python-logo.png",
    tags: ["Django", "Dynamodb", "Zappa", "AWS lambda", "API gateway"],
    source: "https://github.com/junaid-soomro/exchange_rate_test",
    id: 0,
  },
  {
    title: "Crypto app",
    description:
      "A frontend app built on Nextjs. Pulls crupto currencies from public APIs.",
    image: "/images/crypto-app.png",
    tags: ["Reactjs", "Nextjs", "API"],
    source: "https://github.com/junaid-soomro/crypto-app",
    visit: "https://crypto-app-86ecf.web.app",
    id: 1,
  },
  {
    title: "Amazon practice clone",
    description: "Practice creating amazon clone app.",
    image: "/images/amazon-clone.png",
    tags: ["Reactjs", "Nextjs", "API"],
    visit: "https://clone-3058b.web.app/",
    id: 2,
  },
  {
    title: "Prod family",
    description:
      "This was a pure e-commerce application where users could sign up purchase products. Vendors had the option to add products and rate products as well.",
    image: "/images/androidPlaceHolder.PNG",
    tags: ["PHP API", "MYSQL", "Volley", "JAVA", "Firebase"],
    source: "https://github.com/junaid-soomro/prod-family",
    visit: "null",
    id: 3,
  },
  {
    title: "Eye Assistant(Final year project)",
    description:
      "A wearable eye attachment prototype inspired by google glasses. The equipment would scan and detect products and faces and display details on LCD screen like name for faces and prices and name for products.",
    image: "/images/fyp.png",
    tags: ["PHP API", "MYSQL", "Volley", "JAVA", "Firebase"],
    visit: "null",
    id: 4,
  },
  {
    title: "Tuca",
    description:
      "This application was a lot similar with Login Medical. However, here users would be able to select doctors and select clinics as well plus choose their desired dates for booking an appointment.",
    image: "/images/androidPlaceHolder.PNG",
    tags: ["PHP API", "MYSQL", "Volley", "JAVA", "Firebase"],
    source: "https://github.com/junaid-soomro/Tuca",
    visit: "null",
    id: 5,
  },
  {
    title: "Cloud7",
    description:
      "A cloud services portal backed by openstack, VMware, RedHat, Oracle. All in one cloud portal where users will be able to orchestrate cloud services like instances, volumes, load balancers and much more. The portal also could generate billing reports and usage reports.",
    image: "/images/DCM.jpg",
    tags: ["ReactJS", "Django", "NodeJS", "JAVA", "MongoDB"],
    visit: "null",
    id: 6,
  },
  {
    title: "AppNavi",
    description:
      "A google chrome extension that helps users navigate through web applications. Identity and Access Management has been handled inside the application. Users can create tutorials on navigating applications like capturing clicks and showing information and images. The extension will then help end users to navigate throught the app by giving hints on the screen. The extension is also being used by biggest enterprises like BMW.",
    image: "/images/appnavi.PNG",
    tags: ["jQuery", ".Net", "Javascript", "Vue JS", "DynamoDB"],
    visit: "null",
    id: 7,
  },
];

export const TimeLineData = [
  {
    year: `2017 January`,
    text: "Android developer internship at MeezoTech Solutions.",
  },
  { year: `2018 March`, text: "Worked as a freelance developer" },
  {
    year: `2019 November`,
    text: "Senior software engineer at iVolve Technologies.",
  },
  { year: `2021`, text: "Senior software engineer at Digital Dividend." },
  { year: `2022`, text: "Nodejs at Cognni." },
  { year: `2024`, text: "Python engineer at Bebit." },
];
