import { useState } from "react"

export const useForm = (formValues = {}) => {

    const [formState, setFormState] = useState({...formValues})

    const inputValue = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const resetForm = () => {
        setFormState(formValues)
    }

    return {
        ...formState,
        formState,
        inputValue,
        resetForm
    }
}
