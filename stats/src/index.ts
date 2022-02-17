// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');

// const matchReader = new MatchReader(csvFileReader);

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
