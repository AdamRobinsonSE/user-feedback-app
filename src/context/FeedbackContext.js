import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'
import FeedbackData from '../components/data/FeedbackData'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [ feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This item is 3',
            rating: 7
        },
    ])

    const [ feedbackEdit, setFeedbackEdit ] = useState({
        item: {},
        edit: false,
    })

    // Add feedback item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Delete feedback item
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => { 
            return item.id !== id
          }))
        }
    }

    // Set item to be updated in the FeedbackForm
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    // Update feedback item that is chosen with the editFeedback function
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem } : item))
    }
    
    return (
        <FeedbackContext.Provider value={{
            feedback: feedback,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback, 
            feedbackEdit: feedbackEdit, 
            updateFeedback: updateFeedback
        }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext