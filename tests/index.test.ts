import stayClassy from '../lib';

const tests = [
    [[], {}, ''],
    [['fixed-one'], {}, 'fixed-one'],
    [[], {'dynamic-one': true}, 'dynamic-one'],
    [[], {'dynamic-one': false}, ''],
    [['fixed-one'], {'dynamic-one': true}, 'fixed-one dynamic-one'],
    [['fixed-one'], {'dynamic-one': false}, 'fixed-one'],
    [['fixed-one', 'fixed-two'], {'dynamic-one': true}, 'fixed-one fixed-two dynamic-one'],
    [['fixed-one', 'fixed-two'], {'dynamic-one': false}, 'fixed-one fixed-two'],
    [['fixed-one', 'fixed-two'], {'dynamic-one': true, 'dynamic-two': false}, 'fixed-one fixed-two dynamic-one'],
    [['fixed-one', 'fixed-two'], {'dynamic-one': true, 'dynamic-two': true}, 'fixed-one fixed-two dynamic-one dynamic-two'],
    [['fixed-one', 'fixed-two'], {'dynamic-one': false, 'dynamic-two': false}, 'fixed-one fixed-two'],
];

it('outputs classnames correctly', () => {
    tests.forEach((test) => {
        const classnames = stayClassy(test[0] as any, test[1]);

        expect(classnames).toBe(test[2]);
    });
});
