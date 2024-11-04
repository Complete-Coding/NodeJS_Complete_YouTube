// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const Favourite = require("./favourite");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if (this.id) { // edit home case
        registeredHomes = registeredHomes.map(home => 
          home.id === this.id ? this : home);
      } else { // add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    })
  }

  static deleteById(homeId, callback) {
    this.fetchAll(homes => {
      homes = homes.filter(home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        Favourite.deleteById(homeId, callback);
      });
    })
  }
};
