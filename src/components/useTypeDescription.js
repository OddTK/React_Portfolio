import { useState, useEffect } from 'react';

export const useTypedDescription = (descriptions) => {
    const [typedDescription, setTypedDescription] = useState('');
    useEffect(() => {
        const nextTypedDescription = descriptions[0].slice(0, typedDescription.length + 1)

        if (nextTypedDescription === typedDescription) return;

        const timeout = setTimeout(() => {
            setTypedDescription(descriptions[0].slice(0, typedDescription.length + 1));
        }, 150)
        return () => clearTimeout(timeout)
    }, [descriptions, typedDescription])

    return typedDescription
}
