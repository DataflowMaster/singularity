#!/usr/bin/env python

def buildPleasure(stimulus):
    def pleasure():
        stimulus()
    
    return pleasure