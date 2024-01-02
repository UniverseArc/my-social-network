
export const reducerObjHelper = (items, ItemId, ObjPropertyName, newObjProps) => {
    return items.map(item => {
        if (item[ObjPropertyName] === ItemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
}