import { MonsterCard } from '../models/monster-card';

export const MONSTERS: MonsterCard[] = [
  {
    name: 'ToDo Lists',
    url: '/todo',
    problems: [{
      prerequisites: 'Add task into ToDo list',
      expectedBehavior: 'Form after task adding is normal',
      actualBehavior: 'Form after task adding is red',
      limitations: 'You can\'t remove form validation'
    }]
  }, {
    name: 'PROcrastionation',
    url: '/bingo',
    problems: [{
      prerequisites: 'Pick some points on bingo and click on reset',
      expectedBehavior: 'Bingo should be reset to default state',
      actualBehavior: 'Bingo keeps previous state'
    }]
  }, {
    name: 'Cats',
    url: '/cats',
    problems: [{
      prerequisites: 'Input two letters in input. Delete one and add one fast. Do it again and again',
      expectedBehavior: 'Results list should be corresponding to the input value',
      actualBehavior: 'It\'s not work',
      limitations: 'You can\'t edit service'
    }, {
      prerequisites: 'Input something. Delete value',
      expectedBehavior: 'List should be empty',
      actualBehavior: 'List contains last value',
      limitations: 'It would be nice to fix it using RxJS'
    }]
  }, {
    name: 'TV Shows',
    url: 'tv-show',
    problems: [{
      prerequisites: 'Open Any TV Show. Navigate to the another one',
      expectedBehavior: 'New show should be shown',
      actualBehavior: 'Old show is still showing',
      limitations: 'Resolver should stay the same. Service too'
    }, {
      prerequisites: 'Open Any TV Show',
      expectedBehavior: 'Youtube video should be shown',
      actualBehavior: 'It\'s not'
    }]
  },
];
