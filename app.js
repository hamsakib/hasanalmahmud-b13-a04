// job details
const jobs = [
  {
    id: "job-1",
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build and maintain cross-platform mobile features, collaborate with design, and ship weekly improvements.",
    status: "none",
  },
  {
    id: "job-2",
    companyName: "DataDock Analytics",
    position: "Junior Data Analyst",
    location: "Dhaka",
    type: "On-site",
    salary: "৳55,000 - ৳75,000",
    description:
      "Clean sales data, build weekly dashboards, and explain insights to non-technical stakeholders.",
    status: "none",
  },
  {
    id: "job-3",
    companyName: "CloudNest Systems",
    position: "Backend Intern (Node.js)",
    location: "Hybrid",
    type: "Internship",
    salary: "$600/month",
    description:
      "Assist in building REST APIs, write unit tests, and learn production deployment basics with guidance.",
    status: "none",
  },
  {
    id: "job-4",
    companyName: "NorthStar Studios",
    position: "UI Designer",
    location: "Remote",
    type: "Contract",
    salary: "$25/hr",
    description:
      "Design clean UI screens, create reusable components, and deliver developer-friendly Figma files.",
    status: "none",
  },
  {
    id: "job-5",
    companyName: "RetailOps BD",
    position: "Product Support Executive",
    location: "Mymensingh",
    type: "On-site",
    salary: "৳30,000 - ৳45,000",
    description:
      "Handle customer issues, document common bugs, and coordinate fixes with engineering and product teams.",
    status: "none",
  },
  {
    id: "job-6",
    companyName: "FinPulse",
    position: "QA Tester (Manual)",
    location: "Remote",
    type: "Part-time",
    salary: "$800/month",
    description:
      "Test web app flows, write clear bug reports with screenshots, and verify fixes across browsers.",
    status: "none",
  },
  {
    id: "job-7",
    companyName: "MarTech Loop",
    position: "Growth Marketing Assistant",
    location: "Hybrid",
    type: "Full-time",
    salary: "৳60,000 - ৳90,000",
    description:
      "Support campaign setup, track weekly KPIs, and help write landing page copy that improves conversion.",
    status: "none",
  },
  {
    id: "job-8",
    companyName: "DevBridge",
    position: "Frontend Developer (HTML/CSS/JS)",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    description:
      "Build responsive pages from Figma, create interactive UI with vanilla JavaScript, and improve performance.",
    status: "none",
  },
  {
  id: "job-9",
  companyName: "ShopNext BD",
  position: "E-commerce Operations Executive",
  location: "Dhaka",
  type: "On-site",
  salary: "৳40,000 - ৳60,000",
  description:
    "Manage daily e-commerce operations, update product listings, coordinate with delivery partners, and support campaign launches.",
  status: "none",
},
{
  id: "job-10",
  companyName: "CodeSprint Labs",
  position: "Frontend Intern (JavaScript)",
  location: "Remote",
  type: "Internship",
  salary: "$500/month",
  description:
    "Work with senior developers to build UI components, fix bugs, and learn real-world frontend development practices.",
  status: "none",
},
{
  id: "job-11",
  companyName: "HealthTrack Systems",
  position: "IT Support Officer",
  location: "Dhaka",
  type: "On-site",
  salary: "৳35,000 - ৳50,000",
  description:
    "Provide technical support to staff, maintain internal systems, troubleshoot hardware issues, and document solutions.",
  status: "none",
},
{
  id: "job-12",
  companyName: "BrandOrbit",
  position: "Social Media Content Coordinator",
  location: "Hybrid",
  type: "Full-time",
  salary: "৳45,000 - ৳70,000",
  description:
    "Plan content calendars, coordinate with designers, publish posts, and analyze engagement metrics across platforms.",
  status: "none",
},
{
  id: "job-13",
  companyName: "DataHive Solutions",
  position: "Business Intelligence Analyst",
  location: "Remote",
  type: "Full-time",
  salary: "$1,200 - $1,600",
  description:
    "Analyze business data, create dashboards, and provide actionable insights to improve operational decisions.",
  status: "none",
},
];

let activeTab = "all";

const jobsContainer = document.getElementById("jobsContainer");

function createJobCard(job) {
  let statusLabel = "";

  if (job.status === "interview") {
    statusLabel = `<span class="status status-interview">Interview</span>`;
  }

  if (job.status === "rejected") {
    statusLabel = `<span class="status status-rejected">Rejected</span>`;
  }

  return `
    <article class="job-card" data-id="${job.id}">
      <div class="job-top">
        <div>
          <div class="job-title-row">
            <h3 class="job-company">${job.companyName}</h3>
            ${statusLabel}
          </div>

          <p class="job-position">${job.position}</p>
        <p class="job-meta">
  ${job.location} • ${job.type} • ${job.salary}
</p>

<p class="job-status ${
  job.status === "interview"
    ? "status-interview"
    : job.status === "rejected"
    ? "status-rejected"
    : "status-none"
}">
  ${
    job.status === "interview"
      ? "Interview"
      : job.status === "rejected"
      ? "Rejected"
      : "Not Applied"
  }
</p>
        </div>

        <button
          class="icon-btn"
          data-action="delete"
          data-id="${job.id}"
          type="button"
          aria-label="Delete job">
          <img src="./assets/Trash.png" alt="">
        </button>
      </div>

      <p class="job-desc">${job.description}</p>

      <div class="job-actions">
        <button
          class="btn btn-interview ${job.status === "interview" ? "active-interview" : ""}"
          data-action="interview"
          data-id="${job.id}">
          Interview
        </button>

        <button
          class="btn btn-rejected ${job.status === "rejected" ? "active-rejected" : ""}"
          data-action="rejected"
          data-id="${job.id}">
          Rejected
        </button>
      </div>
    </article>
  `;
}

function updateDashboardCounts() {
  document.getElementById("totalCount").textContent = jobs.length;

  document.getElementById("interviewCount").textContent =
    jobs.filter(job => job.status === "interview").length;

  document.getElementById("rejectedCount").textContent =
    jobs.filter(job => job.status === "rejected").length;
}

function renderJobs() {
  let filteredJobs = jobs;

  if (activeTab === "interview") {
    filteredJobs = jobs.filter(job => job.status === "interview");
  }

  if (activeTab === "rejected") {
    filteredJobs = jobs.filter(job => job.status === "rejected");
  }


  if (filteredJobs.length === 0 && activeTab !== "all") {
    jobsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><img src="./assets/jobs.png" alt=""></div>
        <h3 class="empty-title">No jobs Available</h3>
        <p class="empty-subtitle">
          Check back soon for new job opportunities
        </p>
      </div>
    `;
  } else {
    jobsContainer.innerHTML = filteredJobs
      .map(createJobCard).join("");
  }
  document.getElementById("tabCount").textContent = filteredJobs.length;
  updateDashboardCounts();
}

const tabs = document.getElementById("tabs");

tabs.addEventListener("click", (e) => {
  const button = e.target.closest(".tab");
  if (!button) return;

  activeTab = button.dataset.tab;

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  button.classList.add("active");

  renderJobs();
});
jobsContainer.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  const action = button.dataset.action;
  const jobId = button.dataset.id;

  if (!action || !jobId) return;

  if (action === "delete") {
    const index = jobs.findIndex(j => j.id === jobId);
    if (index !== -1) {
      jobs.splice(index, 1);
    }
    renderJobs();
    return;
  }

  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  if (action === "interview") {
    job.status = "interview";
  }

  if (action === "rejected") {
    job.status = "rejected";
  }

  renderJobs();
});

renderJobs();

console.log("Rendered jobs:", jobs.length);
document.getElementById("totalCount").textContent = jobs.length;
document.getElementById("tabCount").textContent = jobs.length;