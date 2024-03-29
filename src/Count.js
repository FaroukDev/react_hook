import React, { useState } from 'react';

function Counter() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count »
    // Déclare une fonction setCount qui permet de modifier la valeur de count
    const [count, setCount] = useState(0);

    return (
        <div>
        
            <input type="text" placeholder="Le compteur est  à" value={count} />
        
            <button onClick={() => setCount(count + 1)}>
                +1
        </button>
            <button onClick={() => setCount(count - 1)}>
                -1 
        </button>
        </div>
    );
}

export default Counter;