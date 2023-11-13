const cucumber = require('cucumber');
const { CucumberReportPortal } = require('cucumber-html-reporter');

const argv = process.argv.slice(2);
argv.push('--format', 'pretty');
argv.push('--format', 'json:reports/cucumber_report.json');

new cucumber.Cli(argv).run().then((success) => {
    const options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
    };

    CucumberReportPortal.generate(options);
});