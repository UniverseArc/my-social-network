export const requiredField = (value) => {
    if (value) return undefined;
    return "Поле необходимо заполнить."
}

export const maxLengthValueCreator = (maxValue) => (value) => {
    if(value.length > maxValue) return `Максимальная длина больше ${maxValue} символов.`
    return undefined;
}