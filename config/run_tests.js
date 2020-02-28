import Jasmine from 'jasmine'
import Reporter  from 'jasmine-terminal-reporter';

const jasmine = new Jasmine();
const reporter = new Reporter();

console.clear();

jasmine.env.clearReporters();
jasmine.env.addReporter(reporter);
jasmine.loadConfigFile('./jasmine.json');
jasmine.execute();