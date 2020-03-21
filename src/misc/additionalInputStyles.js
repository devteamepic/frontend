const textInputStyles = ( colorScheme ) => {
    return (
        `padding: 15px;
        box-sizing: border-box;
        &:focus {
        border: 5px solid ${ colorScheme.marigold };
        padding: 10px;
        outline-offset: 0;
        }
        `
    )
}

const buttonInputStyles = ( colorScheme ) => {
    return (
        `cursor: pointer;
         background-color: ${ colorScheme.marigold }
        `
    )
}

export const additionalInputStyles = {
    textInputStyles,
    buttonInputStyles
}
