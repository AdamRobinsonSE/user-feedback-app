import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'
import FeedbackData from '../components/data/FeedbackData'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [ feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => {
            return item.id !== id
          }))
        }
    }
    
    return (
        <FeedbackContext.Provider value={{
            feedback: feedback,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext