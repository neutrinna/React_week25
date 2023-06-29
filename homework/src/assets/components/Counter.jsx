import React, { useState } from 'react';

export default function Counter() {
    const [ count, setState ] = useState( 0 )

    const handleClick = () => {
        setState(( count ) => (
            count + 1
        ));
    };

    return <button onClick = { handleClick }>{ count }</button>;
}