import uuid from 'uuid';

//ADD_UPDATE
export const addUpdate = ({
  club = '',
  people = '',
  moving = '',
  estimation = 0,
  freeText = '',
  rejection = '',
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
    rejection,
    freeText
  }
});

//REMOVE_UPDATE
export const removeUpdate = ({ id } = {}) => ({
  type: 'REMOVE_UPDATE',
  id
});
