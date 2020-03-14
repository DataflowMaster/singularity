#!/usr/bin/env python
from unittest import TestCase
from core.sense.pleasure import buildPleasure
from unittest.mock import Mock

class SensePleasure(TestCase):

    def setUp(self):
        self.mock = Mock()
        def stimulus():
            self.mock.method()

        self.pleasure = buildPleasure(stimulus)

    def test_catch_stimulus(self):
        self.pleasure()
        self.mock.method.assert_called()