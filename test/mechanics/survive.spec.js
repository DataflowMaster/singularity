import { establishSurvive } from "../../src/mechanics/survive";
import td from 'testdouble';

describe('Activate mode survival', () => {
    let survive;

    const emotion = td.object(['isUncontrollable']);
    const character = td.object(['activateModeSurvival']);

    beforeEach(() => {
        survive = establishSurvive({
            emotion,
            character
        });
    });

    describe('change to mode survive', () => {
        it('when the emotion is uncontrollable', () => {
            td.when(emotion.isUncontrollable()).thenReturn(true);

            survive();

            td.verify(character.activateModeSurvival());
        });
    });
});