const ModelConfig = require("./react-app-example-model-config");

ModelConfig.methods(["get", "post", "pút", "delete"]);
ModelConfig.updateOptions({ new: true, runValidators: true });

module.exports = ModelConfig;
