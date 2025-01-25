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
