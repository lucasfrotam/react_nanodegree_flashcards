export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

// add new card into one deck
export function addCard(deckId, question, answer) {
    return {
        type: ADD_CARD,
        deckId,
        question,
        answer
    }
}

// add new empty deck
export function addDeck(deckId, deck) {
    return {
        type: ADD_DECK,
        deckId,
        deck
    }
}

// get decks that are available 
export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}