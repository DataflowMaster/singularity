export function buildSayILoveYou ({
    love,
    express
}) {
    return (person) => {
        if(person.thereIsLove()){
            express(love);
        }
    }
}