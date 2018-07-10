/* Loads state from localStorage if it exists */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        else return JSON.parse(serializedState);
    } catch(e) {
        console.error(e)
        return undefined;
    }
};

/* Saves state to localStorage */
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(e) {
        console.error(e)
    }
};