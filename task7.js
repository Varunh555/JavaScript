function checkScholarshipEligibility(gpa) {
    
    if (gpa >= 7.5) {
        return "Congratulations! You are eligible for the scholarship.";
    } else {
        return "Sorry, you are not eligible for the scholarship.";
    }
}


const studentGPA = 8.2;
const eligibilityMessage = checkScholarshipEligibility(studentGPA);
console.log(eligibilityMessage);
