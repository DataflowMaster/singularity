export function establishActivateInstinct({
    character
}) {
    return () => {
        character.suppressEmotion();
        character.immerseDarkness();
    }
}