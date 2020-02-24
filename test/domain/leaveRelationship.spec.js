import { buildLeaveRelationship } from "../../src/domain/leaveRealtionship";
import td from 'testdouble';

describe('In order to leave a relationship', () => {
    const person = td.object(['stopRelationship']);
    const pain = td.object(['pain']);

    const leaveRelationship = buildLeaveRelationship({
        pain
    });

    it('leave relationship if it is doing damage', () => {
        td.when(pain.isProvokeBy(person)).thenReturn(true);
        leaveRelationship(person);

        td.verify(person.stopRelationship());
    });
});