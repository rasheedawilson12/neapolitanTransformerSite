const body = document.querySelector("body");
const header = document.querySelector(".header");
const mainImg = document.querySelector(".mainImage");
const text = document.querySelector(".txtDescription");
const imgOne = document.querySelector(".imgOne");
const imgTwo = document.querySelector(".imgTwo");
const imgThree = document.querySelector(".imgThree");

// Chocolate Page
const changeChocolate = () => {
  body.style.backgroundColor = "chocolate";
  body.style.color = "white";

  header.innerHTML = `<h1>Chocolate Ice Cream</h1>`;
  mainImg.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1620197544618-af5f5366abb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNob2NvbGF0ZSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  );
  text.innerHTML = `<p>Chocolate ice cream is ice cream with natural or artificial chocolate flavoring.</p><p>Chocolate ice cream became popular in the United States in the late nineteenth century. The first advertisement for ice cream in America started in New York on May 12, 1777, when Philip Lenzi announced that ice cream was officially available "almost every day". Until 1800, ice cream was a rare and exotic dessert enjoyed mostly by the elite. Around 1800 insulated ice houses were invented and manufacturing ice cream soon became an industry in America.</p>`;
  imgOne.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1593410974855-87ab9de04bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNob2NvbGF0ZSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  );
  imgTwo.setAttribute(
    "src",
    "https://veenaazmanov.com/wp-content/uploads/2017/07/Homemade-Chocolate-Ice-Cream-3.jpg"
  );
  imgThree.setAttribute(
    "src",
    "https://www.benjerry.com/files/live/sites/systemsite/files/US%20and%20Global%20Assets/Flavors/Product%20Assets/US/Chocolate%20Ice%20Cream/Chocolate_RGB_HR28_bulk.png"
  );
};

const changeStrawberry = () => {
  body.style.backgroundColor = "pink";
  header.innerHTML = `<h1>Strawberry Ice Cream</h1>`;
  mainImg.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1589999637259-3c7abefd93eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXdiZXJyeSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  );
  text.innerHTML = `<p>Strawberry ice cream is a flavor of ice cream made with strawberry or strawberry flavoring. It is made by blending in fresh strawberries or strawberry flavoring with the eggs, cream, vanilla, and sugar used to make ice cream. Most strawberry ice cream is colored pink or light red. Strawberry ice cream dates back at least to 1813, when it was served at the second inauguration of James Madison. Along with vanilla and chocolate ice cream, strawberry is one of the three flavors in Neapolitan ice cream. Variations of strawberry ice cream include strawberry cheesecake ice cream and strawberry ripple ice cream, which is vanilla ice cream with a ribbon of strawberry jam or syrup. Some ice cream sandwiches are prepared neapolitan-style, and include strawberry ice cream.According to a poll among american adults from July 13-18 of 2022, 43 percent of respondents stated that they enjoy strawberry ice cream while 6 percent stated that strawberry ice cream was their favorite flavor of ice cream.</p>`;
  imgOne.setAttribute(
    "src",
    "https://www.thespruceeats.com/thmb/kpuMkqk0BhGMTuSENf_IebbHu1s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberry-ice-cream-10-0b3e120e7d6f4df1be3c57c17699eb2c.jpg"
  );
  imgTwo.setAttribute(
    "src",
    "https://www.theendlessmeal.com/wp-content/uploads/2016/07/strawberry-ice-cream-2.jpg"
  );
  imgThree.setAttribute(
    "src",
    "https://ohsweetbasil.com/wp-content/uploads/creamy-homemade-strawberry-ice-cream-recipe-6-scaled.jpg"
  );
};

const changeVanilla = () => {
  body.style.backgroundColor = "yellow";
  body.style.color = "black";
  header.innerHTML = `<h1>Vanilla Ice Cream</h1>`;
  mainImg.setAttribute(
    "src",
    "https://www.thespruceeats.com/thmb/VFDNbGNyW9mlfeY4zPeOvhIfKeQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/no-cook-vanilla-ice-cream-recipe-1945802-hero-01-cbd4c64c079b4caebe3f3e9add94ff9a.jpg"
  );
  text.innerHTML = `<p>Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe. Vanilla ice cream, like other flavors of ice cream, was originally created by cooling a mixture made of cream, sugar, and vanilla above a container of ice and salt. The type of vanilla used to flavor ice cream varies by location. In North America and Europe consumers are interested in a more prominent, smoky flavor, while in Ireland, a more anise-like flavor is desired. To create the smooth consistency of ice cream, the mixture has to be stirred occasionally and then returned to the container of ice and salt to continue the solidification process. According to Iced: 180 Very Cool Concoctions, many people often consider vanilla to be the "default" or "plain" flavor of ice cream.</p>`;
  imgOne.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFuaWxsYSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  );
  imgTwo.setAttribute(
    "src",
    "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KUFWIPXROII6ZLAWR67XDFGNPA.jpg"
  );
  imgThree.setAttribute(
    "src",
    "https://www.sweetandsavorybyshinee.com/wp-content/uploads/2021/07/Homemade-Vanilla-Ice-Cream-4-650x650.jpg"
  );
};
