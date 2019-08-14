import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications'
            },
            {
                question: 'What is JSX?',
                answer: 'JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML)'
            },
            {
                question: 'What is Redux?',
                answer: 'Redux is a predictable state container for JavaScript apps based on the Flux design pattern'
            },
            {
                question: 'How to make AJAX request in Redux?',
                answer: 'You can use redux-thunk middleware which allows you to define async actions.'
            }
        ]
    },
    Datastructures: {
        title: 'Data Structures',
        questions: [
            {
                question: 'What is data structure?',
                answer: 'Data structure refers to the way data is organized and manipulated'
            },
            {
                question: 'What is a linked list?',
                answer: 'A linked list is a sequence of nodes in which each node is connected to the node following it'
            },
            {
                question: 'What is LIFO?',
                answer: 'LIFO is a short form of Last In First Out'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}