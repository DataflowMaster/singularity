export function establishSurvive({
    emotion,
    character
}) {
    return () => {
        if(emotion.isUncontrollable()) {
            character.activateModeSurvival();
        }
    }
}