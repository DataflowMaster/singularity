export function buildLeaveRelationship () {
    return (person) => {
        person.stopRelationship();
    }
}