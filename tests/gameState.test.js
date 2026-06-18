// tests/gameState.test.js
import { describe, it, expect } from 'vitest'
import {
  initialState,
  toggleCheckedItem,
  setFormatChoice,
  togglePackedItem,
  isPackComplete,
  isIdentityConfirmed,
} from '../src/gameState.js'

describe('toggleCheckedItem', () => {
  it('добавляет элемент', () => {
    const state = toggleCheckedItem(initialState, 'bmw')
    expect(state.checkedItems.has('bmw')).toBe(true)
  })

  it('убирает уже отмеченный элемент', () => {
    const s1 = toggleCheckedItem(initialState, 'bmw')
    const s2 = toggleCheckedItem(s1, 'bmw')
    expect(s2.checkedItems.has('bmw')).toBe(false)
  })

  it('не мутирует исходный стейт', () => {
    toggleCheckedItem(initialState, 'bmw')
    expect(initialState.checkedItems.has('bmw')).toBe(false)
  })
})

describe('setFormatChoice', () => {
  it('сохраняет выбор формата', () => {
    const state = setFormatChoice(initialState, 3)
    expect(state.formatChoice).toBe(3)
  })
})

describe('togglePackedItem', () => {
  it('добавляет предмет', () => {
    const state = togglePackedItem(initialState, 'coffee')
    expect(state.packedItems.has('coffee')).toBe(true)
  })

  it('убирает уже выбранный предмет', () => {
    const s1 = togglePackedItem(initialState, 'coffee')
    const s2 = togglePackedItem(s1, 'coffee')
    expect(s2.packedItems.has('coffee')).toBe(false)
  })
})

describe('isPackComplete', () => {
  it('false когда выбрано меньше 5', () => {
    const s = { ...initialState, packedItems: new Set(['a', 'b', 'c']) }
    expect(isPackComplete(s)).toBe(false)
  })

  it('true когда выбрано ровно 5', () => {
    const s = { ...initialState, packedItems: new Set(['a', 'b', 'c', 'd', 'e']) }
    expect(isPackComplete(s)).toBe(true)
  })
})

describe('isIdentityConfirmed', () => {
  it('false в начале', () => {
    expect(isIdentityConfirmed(initialState)).toBe(false)
  })

  it('true после выбора хотя бы одного пункта', () => {
    const s = toggleCheckedItem(initialState, 'phil')
    expect(isIdentityConfirmed(s)).toBe(true)
  })
})
