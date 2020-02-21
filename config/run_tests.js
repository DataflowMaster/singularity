import Jasmine from 'jasmine'
import { SpecReporter } from 'jasmine-spec-reporter';

const jasmine = new Jasmine();
const reporter = new SpecReporter();

console.clear();

jasmine.env.clearReporters();
jasmine.env.addReporter(reporter);
jasmine.loadConfigFile('./jasmine.json');
jasmine.execute();