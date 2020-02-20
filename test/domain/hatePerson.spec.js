import { buildHatePerson } from "../../src/domain/hatePerson";
import td from "testdouble";

describe('How hate to person', function() {
    let hatePerson;
    const feelings = {
        love: td.object(['isFeelingBy']),
        hate: td.object(['feelItBy']),
        pain: td.object(['provokedBy'])
    };
    const thoughts = td.object(['limitOf']);
    const person = td.object(['isProvoking']);
    const limitOfPain = { length : 100 };
    let { love, hate, pain } = feelings;

    beforeEach( () => {
        hatePerson = buildHatePerson({ feelings, thoughts });
    });

    it("hates when exist love and the pain is exceeds the limits", function() {
        td.when(love.isFeelingBy(person)).thenReturn(true);
        td.when(person.isProvoking(pain)).thenReturn(true);
        td.when(pain.provokedBy(person)).thenReturn(limitOfPain );
        td.when(thoughts.limitOf(pain)).thenReturn(99);

        hatePerson(person);

        td.verify(hate.feelItBy(person));
    });
});