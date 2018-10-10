import {createSelector} from 'reselect';

import {selectUsers} from './select-users';
import {selectFilterText} from './select-filter-text';

// export const selectFilteredUsers = (state) => {
//   const users = selectUsers(state);
//   const filterText = selectFilterText(state);
//
//   const filteredUsers = users.filter(user => user.name.includes(filterText));
//
//   return filteredUsers;
// };

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilterText],
  (users, filterText) => {
    const filteredUsers = users.filter(user => user.name.includes(filterText));

    return filteredUsers;
  },
);

const filterUserHelper = state => {

  return users.filter(user => !user.isActive);
};
