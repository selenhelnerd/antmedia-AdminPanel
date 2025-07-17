// scripts/gen-api.js
const { generate } = require("openapi-typescript-codegen");

generate({
  input: "openapi.json",           // veya spec’inizin adı/yolu
  output: "src/api-client/",       // üretilen kodun gideceği klasör
  httpClient: "axios",             // veya "fetch"
  useOptions: true,                // parametreleri tek bir options objesinde toplar
  exportCore: true,                // core yardımcı modülleri export eder
  exportServices: true,            // her tag için ayrı servis dosyası oluşturur
  exportModels: true,              // her model için ayrı dosya oluşturur
});
