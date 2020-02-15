export function buildHatePerson ({
    feelings,
    thoughts
}) {
    return ( person ) => {
        const { love, hate, pain } = feelings;
        if(love.isFeelingBy(person)){
            if(person.isProvoking(pain)) {
                if (thoughts.exceedPainLimits(person)){
                    hate.feelItBy(person);
                }
            }
        }
    }
}