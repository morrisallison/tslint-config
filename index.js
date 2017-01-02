'use strict';

const msRecommended = require('tslint-microsoft-contrib/recommended_ruleset');
const resolve = require('resolve');
const path = require('path');

const overrides = require('./rulesets/overrides');
const tslintEslint = require('./rulesets/tslint-eslint-rules');
const vrsource = require('./rulesets/vrsource-tslint-rules');

function makeRules() {
    const rules = Object.assign(
        {},
        msRecommended.rules,
        tslintEslint.rules,
        vrsource.rules,
        overrides.rules
    );

    // Hide annoying deprecated message
    delete rules['no-unused-variable'];

    return rules;
}

function getDirectories() {
    const customRulesDirectory = path.resolve(__dirname, 'rules');
    const msRulesDirectory = path.resolve(require.resolve('tslint-microsoft-contrib'), '..');
    const eslintRulesDirectory = path.resolve(require.resolve('tslint-eslint-rules'), '../dist/rules');

    // Assuming the location of the "node_modules" path, because `vrsource-tslint-rules` can't be resolved
    const nodeModules = path.dirname(msRulesDirectory);
    const vrsourceRulesDirectory = path.join(nodeModules, 'vrsource-tslint-rules/rules');

    return [
        customRulesDirectory,
        msRulesDirectory,
        eslintRulesDirectory,
        vrsourceRulesDirectory,
    ];
}

module.exports = {
    rules: makeRules(),
    rulesDirectory: getDirectories(),
};
