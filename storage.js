// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// The ink well is a craft data item
const futon = {
    name: "My comfy bed",
    location: "Bedroom",
    description: "It's not the most comfortable, but it's somewhere to sleep."
}
  
  // The writing desk is a furniture data item
const television = {
    name: "LG",
    location: "Living Room",
    description: "My old TV that still works great."
}

const painting = {
      name: "Grandmother",
      location: "Living Room",
      description: "A beautiful painting of my grandmother."
}

const toothbrush = {
      name: "Toothy",
      locatoin: "Bathroom",
      description: "The one true reason I don't have bad breath."
}

const pc = {
      name: "Speedy",
      location: "Bedroom",
      description: "My baby that I built from the ground up."
}

const ps4 = {
      name: "Old Faithful",
      location: "Bedroom",
      description: "I keep Netflix and Kodi on her to watch when I go to bed."
}

const bass = {
      name: "White Lightning",
      location: "Living Room",
      description: "The bass I use for all of my road gigs."
}

const piano = {
      name: "Steinway",
      location: "Bedroom",
      description: "An old piano that I got from my grandmother."
}

const soundBar = {
      name: "Bluetooth",
      location: "Living Room",
      description: "My bluetooth speaker that I hook my tv up to."
}

const dresser = {
      name: "Rusty",
      location: "Bedroom",
      description: "My really heavy storage container for my clothes."
}


        HomeInventoryDatabase.electronics.push(soundBar)
        HomeInventoryDatabase.electronics.push(television)
        HomeInventoryDatabase.electronics.push(pc)
        HomeInventoryDatabase.electronics.push(ps4)
        HomeInventoryDatabase.furniture.push(futon)
        HomeInventoryDatabase.furniture.push(dresser)
        HomeInventoryDatabase.crafts.push(piano)
        HomeInventoryDatabase.crafts.push(bass)
        HomeInventoryDatabase.crafts.push(painting)
        HomeInventoryDatabase.furniture.push(toothbrush)

const saveDatabase = function (databaseObject, localStorageKey) {
    
    const stringifiedDatabase = JSON.stringify(databaseObject)     // Convert the Object into a string.

    localStorage.setItem(localStorageKey, stringifiedDatabase)     //Create a key in local storage, and store the string
}

const loadDatabase = function (localStorageKey) {  // Get the string version of the database

    const databaseString = localStorage.getItem(localStorageKey)  // Get the string version of the database
    
    return JSON.parse(databaseString)     // Use JSON.parse() to convert the string back into an object
}

const mystuffEl = document.querySelector("#mystuff")


for (let type in HomeInventoryDatabase) {            
      const currentType = HomeInventoryDatabase[type]

      currentType.forEach(itemInArray => {
          const itemSection = document.createElement("section")

          for (let prop in itemInArray) {
            const pComponent = document.createElement("p")
            pComponent.textContent = itemInArray[prop]
            itemSection.appendChild(pComponent)
            mystuffEl.appendChild(itemSection)
          }
      });
}

          
          
          
          /*
          const nameP = document.createElement("p")
          nameP.textContent = itemInArray.name
          itemSection.appendChild(nameP)
      
          const locationP = document.createElement("p")
          locationP.textContent = itemInArray.location
          itemSection.appendChild(locationP)
          
          const descP = document.createElement("p")
          descP.textContent = itemInArray.description
          itemSection.appendChild(descP)

          mystuffEl.appendChild(itemSection)

*/
