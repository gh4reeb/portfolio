document.addEventListener('DOMContentLoaded', function () {
    const terminalOutput = document.getElementById('terminalOutput');
    const text = `
$ Welcome to My Portfolio
$ Expertise:
  - Full-stack Web Development
  - Cloud Infrastructure (AWS, OpenStack)
  - DevOps & CI/CD Automation
$ Projects:
  - Automated Cloud Deployment with OpenStack
  - Scalable Web Applications
$ Feel free to explore my blogs below...
    `;

    function typeWriter(text, i = 0) {
        if (i < text.length) {
            terminalOutput.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(text, i), 50);
        }
    }

    typeWriter(text);
});
