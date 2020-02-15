import { buildHatePerson } from "../../src/domain/hatePerson";
import td from "testdouble";

describe('How hate to person', function() {
    const feelings = {
        love: td.object(['isFeelingBy']),
        hate: td.object(['feelItBy']),
        pain: td.object(['provokedBy'])
    };
    const thoughts = td.object(['exceedPainLimits']);
    const person = td.object(['isProvoking']);

    let hatePerson ;
    let { love, hate, pain } = feelings;

    beforeEach( () => {
        hatePerson = buildHatePerson({ feelings, thoughts });
    });

    it("hates when exist love and the pain is exceeds the limits", function() {
        td.when(love.isFeelingBy(person)).thenReturn(true);
        td.when(person.isProvoking(pain)).thenReturn(true);
        td.when(thoughts.exceedPainLimits(person)).thenReturn(true);

        hatePerson(person);

        td.verify(hate.feelItBy(person));
    });
});