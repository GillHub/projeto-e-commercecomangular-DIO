export interface Product {
  id: number;
  name: string;
  author: string;
  price: number;
  description: string;
  
}

export const products = [
  {
    id: 1,
    name: 'The Black Cat and Others Tales',
    author:'Edgar Allan Poe',
    price: 29.9,
    description: 'Edgar Allan Poe (1809-1849) is best known for his tales of mystery and the macabre. He is regarded as a central figure of American literature, as one of the country\'s earliest practitioners of the short story and the inventor of detective fiction and science fiction as respective genres.'
    
  },

  {
    id: 2,
    name: 'Harry Potter and the Philosopher\'s Stone',
    author:'J.K. Rowling',
    price: 79.9,
    description: 'The boy wizard Harry Potter has been casting a spell over young readers and their families ever since 1997. Now the first book in this unmissable series celebrates 25 years in print! The paperback edition of the tale that introduced us to Harry, Ron and Hermione has been updated and dressed in silver to mark the occasion. It\'s time to take the magical journey of a lifetime .'
    
  },
  {
    id: 3,
    name: 'Harry Potter and the Chamber of Secrets',
    author:'J.K. Rowling',
    price: 69.9,
    description: 'Harry Potter\'s summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as through turned to stone . Dobby\'s sinister predictions seem to be coming true.'
  },
  {
    id: 4,
    name: 'Harry Potter and the Prisoner of Azkaban',
    author:'J.K. Rowling',
    price: 29.9,
    description: 'When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it\'s the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry\'s tea leaves . But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.'
    
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/