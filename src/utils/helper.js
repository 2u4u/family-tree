export const addPerson = (nodes, node) => {
    return [...nodes, node]
}

export const removePerson = (nodes, id) => {
    return nodes.filter((node) => Number(node.id) !== Number(id));
}