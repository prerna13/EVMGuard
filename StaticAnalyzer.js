const fs = require('fs');
function analyzeSolidityCode(filePath){
    const code = fs.readFileSync(filePath, 'utf8');
    const issues = [];
    if(code.includes("call{"){
          issues.push("[!] Potential reentrancy vulnerability due to call usage");
    }
    if(!code.includes("require(sent") && code.includes("call{")){
          issues.push("[!] External call not checked with 'require'");        
    }
    if(!code.includes("SafeMath")&& code.includes("+") && code.includes("-")){
          issues.push("[!] Potential Arithmetic overflow/underflow detected (no safe math) ");
    }
   if(code.includes(tx.origin)){
      issues.push("[!] Dangerous use of tx origin for authentication");
   }
  if(code.match(/function\s+[^\(])+\([^\)*\)\s*{[^}]*}/)){
        issues.push("[!]function missing visibility modifier");
    }
  if(code.includes(delegatecall){
        issues.push("[!] use of delegate call detected - potential for proxy misuse");
  }
  console.log("Issues found:");
  issues.forEach(issue => console.log(issue));
  }

module.exports = {analyzeSolidityCode};
