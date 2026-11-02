
function Root() {
  const normalizePath = (pathname) => {
    const cleaned = pathname.replace(/\/+$/, "");
    return cleaned || "/";
  };

  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname)
  );

  // Handle browser back and forward navigation.
  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Page titles and descriptions for public routes.
  useEffect(() => {
    const pages = {
      "/": {
        title: "Free Resume Builder & Templates | ResumeForge AI",
        description:
          "Create a professional resume for free with ResumeForge AI. Choose a template, edit your experience, and save your resume as a PDF."
      },
      "/builder": {
        title: "Free Resume Editor | ResumeForge AI",
        description:
          "Build and customize your resume using ResumeForge AI's free online resume editor."
      },
      "/resume-writing-guide": {
        title: "How to Write a Resume | ResumeForge AI",
        description:
          "Learn how to write a professional resume with practical tips for summaries, work experience, education, and skills."
      },
      "/about": {
        title: "About ResumeForge AI | Free Resume Builder",
        description:
          "Learn about ResumeForge AI, a free online tool for creating professional resumes."
      },
      "/privacy": {
        title: "Privacy Policy | ResumeForge AI",
        description:
          "Read the ResumeForge AI Privacy Policy to learn how resume information and website data are handled."
      },
      "/terms": {
        title: "Terms of Use | ResumeForge AI",
        description:
          "Read the terms and conditions for using the ResumeForge AI resume builder."
      }
    };

    const page = pages[path] || {
      title: "Page Not Found | ResumeForge AI",
      description: "The requested page could not be found."
    };

    document.title = page.title;

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", page.description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `https://resume-forge-ai-chi.vercel.app${path === "/" ? "/" : path}`
    );
  }, [path]);

  // Navigate without reloading the application.
  const navigate = (destination) => {
    const nextPath = normalizePath(destination);

    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
      window.scrollTo(0, 0);
    }
  };

  // Keep the existing resume editor intact.
  if (path === "/builder") {
    return (
      <>
        <div className="builder-return">
          <button
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
          >
            ← Home
          </button>
        </div>

        <StudioApp />
      </>
    );
  }

  // Public pages, including the resume-writing guide.
  return <PublicPage path={path} navigate={navigate} />;
}

createRoot(document.getElementById("root")).render(<Root />);
