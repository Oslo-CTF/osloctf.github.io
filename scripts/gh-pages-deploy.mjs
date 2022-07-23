/* eslint-disable no-console */
import { execa } from 'execa';
import fs from 'fs';

// Delete branch if exists
try { 
	let {stdout} = await execa("git", ["branch", "-D", "gh-pages"]);
	console.log("Deleted branch 'gh-pages':",  stdout);
} catch (e) {
	// If there is an error, the branch does no exist which is what we want.
	// Therefore, we do not handle the error.
}

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    addCname("osloctf.no");
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);

    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);

    const {stdout} = await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Deleted branch 'gh-pages':",  stdout);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();

// To avoid the manual step where we have to go to 
// https://github.com/Oslo-CTF/osloctf.github.io/settings/pages
// after every deploy to add our domain 
function addCname(url) {
	fs.writeFileSync('./dist/CNAME', url, function(err) {
		if (err) {
			console.log('Could not create CNAME file. Go to https://github.com/Oslo-CTF/osloctf.github.io/settings/pages and enter "osloctf.no" to the "Custom domain" section to enable our domain. Remember to enforce HTTPS.');
		}
		console.log('The file CNAME was created successfully.');
	});
}

