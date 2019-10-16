import uuid from 'uuid';

//ADD_UPDATE
export const addUpdate = ({
  club = '',
  people = 0,
  moving = true,
  estimation = 0,
  freeText = '',
  createdAt = undefined
} = {}) => ({
  type: 'ADD_UPDATE',
  update: {
    id: uuid(),
    club,
    people,
    moving,
    createdAt,
    estimation,
    freeText
  }
});

//REMOVE_UPDATE
export const removeUpdate = ({ id } = {}) => ({
  type: 'REMOVE_UPDATE',
  id
});
