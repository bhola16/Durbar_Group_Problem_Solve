function classifyPassword(password:string):"Weak" | "Medium" | "Strong" {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);

    const typeCount = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;
    const len = password.length;

    if (len >= 8 && typeCount === 4) {
        return "Strong";
    }
    if (len >= 6 && typeCount >= 2) {
        return "Medium";
    }
    return "Weak";
}


console.log(classifyPassword("Password1!"));  // Strong
console.log(classifyPassword("pass123"));     // Medium
console.log(classifyPassword("PASSWORD1!"));  // Medium
console.log(classifyPassword("password"));    // Weak
console.log(classifyPassword("P@12"));        // Weak