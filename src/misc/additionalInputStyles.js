const textInputStyles = ( colorScheme ) => {
    return (
        `padding: 15px;
        outline: none;
        box-sizing: border-box;
        &:focus {
        border: 5px solid ${ colorScheme.marigold };
        padding: 10px;
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
