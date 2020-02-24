import { buildSayILoveYou } from "../../src/domain/expressLove";
import td from 'testdouble';

describe('In order to express love', () => {
    const person = td.object(['thereIsLove']);
    const express = td.function('express');
    const love = '::love::';

    let sayILoveYou = buildSayILoveYou({
        love,
        express
    });

    it('express love if it exist ', () => {
        td.when(person.thereIsLove()).thenReturn(true);

        sayILoveYou(person);

        td.verify(express(love));
    });
});