
export const selectFilter = state => state.filter;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectErrorStatus = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;