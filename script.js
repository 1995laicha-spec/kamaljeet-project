<html>
<body>
document.getElementById("hireBtn").addEventListener("click", function() {
    alert("Thanks for your interest! Contact form is below.");
});
console.log("Portfolio loaded successfully");

let testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

function showTestimonial() {
    testimonials.forEach(card => card.classList.remove("active"));
    testimonials[index].classList.add("active");
    index = (index + 1) % testimonials.length;
}

// Show first testimonial immediately
showTestimonial();

// Change testimonial every 2 seconds
setInterval(showTestimonial, 2000);
<script src="script.js"></script>
</body>
</html>
