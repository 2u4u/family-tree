import { addPerson, removePerson } from './helper';

const emptyNodes = [];
const initialNodes = [
  {id: '1', img: 'urlToImg', name: 'Some Name'},
  {id: '2', img: 'urlToAnotherImg', name: 'Some Anoter Name'}
]

test('check addPerson', () => {
  const newNodes = addPerson(emptyNodes, {id: '1', img: 'urlToImg', name: 'Some Name'})
  expect(newNodes).toStrictEqual([{id: '1', img: 'urlToImg', name: 'Some Name'}])
});

test('check removePerson', () => {
  const newNodes = removePerson(initialNodes, 1);
  expect(newNodes).toStrictEqual([{id: '2', img: 'urlToAnotherImg', name: 'Some Anoter Name'}])
});
