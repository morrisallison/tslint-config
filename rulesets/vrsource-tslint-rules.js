module.exports = {
    "rules": {
        "ext-variable-name": [
            true,
            ["class", "pascal"],
            ["interface", "pascal"],
            ["parameter", "camel"],
            ["property", "camel"],
            ["variable", "camel"],
            ["method", "camel"],
            ["function", "camel"],
            ["default", "camel"]
        ],
        "multiline-arrow": [true, "require-parens", "require-block"],
        "no-duplicate-imports": true,
        "prefer-literal": [true, "object", "function", "array"]
    }
};
