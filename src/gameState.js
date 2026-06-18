// src/gameState.js
export const PACK_ITEM_COUNT = 5

export const initialState = {
  checkedItems: new Set(),
  formatChoice: null,
  packedItems: new Set(),
}

export function toggleCheckedItem(state, item) {
  const next = new Set(state.checkedItems)
  if (next.has(item)) next.delete(item)
  else next.add(item)
  return { ...state, checkedItems: next }
}

export function setFormatChoice(state, choice) {
  return { ...state, formatChoice: choice }
}

export function togglePackedItem(state, item) {
  const next = new Set(state.packedItems)
  if (next.has(item)) next.delete(item)
  else next.add(item)
  return { ...state, packedItems: next }
}

export function isPackComplete(state) {
  return state.packedItems.size === PACK_ITEM_COUNT
}

export function isIdentityConfirmed(state) {
  return state.checkedItems.size > 0
}
