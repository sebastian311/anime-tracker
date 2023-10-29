import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mockedData: any[] = [
    {
      id: 1,
      title: 'Naruto',
      description: 'Lorem Ipsum Leaf Villigium',
      image: '../../../assets/naruto.png',
      rating: 4.5,
      ranking: 1,
      votes: 200,
    },
    {
      id: 2,
      title: 'One Piece',
      description: 'Lorem Ipsum Pirate Adventures',
      image: '../../../assets/onepiece.png',
      rating: 4.7,
      ranking: 2,
      votes: 190,
    },
    {
      id: 3,
      title: 'Bleach',
      description: 'Lorem Ipsum Soul Society',
      image: '../../../assets/myhero.png',
      rating: 4.3,
      ranking: 3,
      votes: 180,
    },
    {
      id: 4,
      title: 'Death Note',
      description: 'Lorem Ipsum Shinigami',
      image: '../../../assets/fairytail.png',
      rating: 4.8,
      ranking: 4,
      votes: 170,
    },
    {
      id: 5,
      title: 'Attack on Titan',
      description: 'Lorem Ipsum Titans',
      image: '../../../assets/overlord.png',
      rating: 4.9,
      ranking: 5,
      votes: 160,
    },
  ];
  mockedData2: any[] = [
    {
      id: 3,
      title: 'Bleach',
      description: 'Lorem Ipsum Soul Society',
      image: '../../../assets/myhero.png',
      rating: 4.3,
      ranking: 3,
      votes: 180,
    },
    {
      id: 4,
      title: 'Death Note',
      description: 'Lorem Ipsum Shinigami',
      image: '../../../assets/fairytail.png',
      rating: 4.8,
      ranking: 4,
      votes: 170,
    },
    {
      id: 5,
      title: 'Attack on Titan',
      description: 'Lorem Ipsum Titans',
      image: '../../../assets/overlord.png',
      rating: 4.9,
      ranking: 5,
      votes: 160,
    },
    {
      id: 1,
      title: 'Naruto',
      description: 'Lorem Ipsum Leaf Villigium',
      image: '../../../assets/naruto.png',
      rating: 4.5,
      ranking: 1,
      votes: 200,
    },
    {
      id: 2,
      title: 'One Piece',
      description: 'Lorem Ipsum Pirate Adventures',
      image: '../../../assets/onepiece.png',
      rating: 4.7,
      ranking: 2,
      votes: 190,
    },
  ];
}
