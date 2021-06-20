/**
 * Modifies the built assets to get ready for a HubSpot CMS upload
 */

var fs = require("fs");
const { exit } = require("process");

function checkBuildDirExists() {
  if (!fs.existsSync("build")) {
    console.error("No 'build' folder detected, can't do anything!");
    exit(1);
  }
}

function buildTemplateFile() {
  const templateMetaPath = "src/template.meta.html";
  if (!fs.existsSync(templateMetaPath)) {
    console.error(
      "No 'template.meta.html' file found in 'src', can't build a template!"
    );
    exit(1);
  }
  const templateMeta = fs.readFileSync(templateMetaPath, { encoding: "utf8" });

  const indexPath = "build/index.html";
  if (!fs.existsSync(indexPath)) {
    console.error(
      "No 'index.html' file found in 'build', can't build a template!"
    );
    exit(1);
  }
  const index = fs.readFileSync(indexPath, { encoding: "utf8" });

  let template = "";
  template += templateMeta;
  template += index;

  template = template.replace(
    /<title>.+?<\/title>/g,
    "<title>{{ content.html_title }}</title>"
  );
  template = template.replace(
    /<\/head>/g,
    '<meta name="description" content="{{ content.meta_description }}">{{ standard_header_includes }}</head>'
  );

  template = template.replace(
    /"\/static\/(.+?)"/g,
    "\"{{ get_asset_url('./static/$1') }}\""
  );
  template = template.replace(
    /<\/body>/g,
    "{{ standard_footer_includes }}</body>"
  );

  fs.writeFileSync("build/template.html", template);
  fs.rmSync(indexPath);
  console.debug("Wrote template file");
}

function updateAssetsInScripts() {
  const scriptDir = "build/static/js";
  const scriptPaths = fs.readdirSync(scriptDir);

  scriptPaths.forEach((path) => updateAssetsInScript(scriptDir + "/" + path));

  console.debug("Updated assets in script files");
}

function updateAssetsInScript(scriptPath) {
  let script = fs.readFileSync(scriptPath, { encoding: "utf8" });

  script = script.replace(
    /"static\/(.+?)(\\?)"/g,
    "\"{{ get_asset_url('../$1') }}$2\""
  );

  fs.writeFileSync(scriptPath, script);
}

function main() {
  checkBuildDirExists();
  buildTemplateFile();
  updateAssetsInScripts();
}

main();
