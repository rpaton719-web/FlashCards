import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[action.payload.id] = {
        id: id,
        front: front,
        back: back,
      };
    },
  },
});

export const selectCardById = (cardId) => (state) => state.cards.cards[cardId];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
