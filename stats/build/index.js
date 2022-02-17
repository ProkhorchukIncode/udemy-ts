"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
