import { establishActivateInstinct } from "../../src/mechanics/activateInstinct";
import td from 'testdouble';

describe('Activate mode survival', () => {
    let activateInstinct;

    const character = td.object(['suppressEmotion','immerseDarkness']);

    beforeEach(() => {
        activateInstinct = establishActivateInstinct({
            character
        });
    });

    it('load instinct', () => {

        activateInstinct();

        td.verify(character.suppressEmotion());
        td.verify(character.immerseDarkness());
    });
});