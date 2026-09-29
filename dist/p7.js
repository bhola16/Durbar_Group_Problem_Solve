"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function commonSkills(skills1, skills2) {
    const set1 = new Set(skills1.map((skill) => skill.toLowerCase()));
    const common = skills2
        .map((skill) => skill.toLowerCase())
        .filter((skill) => set1.has(skill));
    return [...new Set(common)].sort();
}
console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"]));
// ["js", "react"]
console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]));
// []
//# sourceMappingURL=p7.js.map