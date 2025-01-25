// Terminal typing effect
const terminalText = document.getElementById('terminal-text');
const skills = [
    "I can deploy OpenStack for cloud infrastructure.",
    "I can perform VAPT to secure your applications.",
    "I can improve your organization's security posture.",
    "I have experience in SIEM deployment and monitoring.",
    "I am skilled in Kubernetes and container orchestration."
];
let index = 0;

function typeSkill() {
    terminalText.textContent = skills[index];
    index = (index + 1) % skills.length;
}

// Loop through skills every 5 seconds
setInterval(typeSkill, 5000);

// Initialize with the first skill
typeSkill();
//blog
document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blogList');

    const blogs = [
        {
            title: "Deploying OpenStack on Ubuntu LTS 2024",
            description: "A step-by-step guide on deploying OpenStack using Kolla-Ansible on Ubuntu LTS 2024.",
            link: "https://medium.com/your-medium-link"
        },
        {
            title: "Cloud Automation Best Practices",
            description: "Discussing best practices for automating cloud deployments with OpenStack and Kubernetes.",
            link: "https://medium.com/your-medium-link"
        },
        {
            title: "Understanding Ceph for Storage",
            description: "An overview of Ceph's architecture and how to implement it in cloud environments.",
            link: "https://medium.com/your-medium-link"
        }
    ];

    function generateBlogRow(blog) {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${blog.title}</td>
            <td>${blog.description}</td>
            <td><a href="${blog.link}" target="_blank" class="blog-link">Read More</a></td>
        `;
        
        blogList.appendChild(row);
    }

    // Generate blog rows dynamically
    blogs.forEach(blog => generateBlogRow(blog));
});
