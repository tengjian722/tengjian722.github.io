// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Click the PDF icon for my most recent CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-presented-our-work-strategies-for-mitigating-bat-impacts-using-smart-wind-turbine-curtailment-at-nawea-windtech-2019-conference",
          title: 'I presented our work “Strategies for Mitigating Bat Impacts Using Smart Wind Turbine...',
          description: "",
          section: "News",},{id: "news-my-master-study-about-monitoring-bat-activities-at-a-large-wind-farm-was-presented-at-2019-agu-fall-meeting-and-highlighted-at-agu-news",
          title: 'My master study about “Monitoring Bat Activities at a Large Wind Farm” was...',
          description: "",
          section: "News",},{id: "news-i-presented-our-recent-work-calibration-procedure-for-gaussian-based-analytical-wake-model-using-scada-data-at-aps-dfd-2020-online",
          title: 'I presented our recent work “Calibration Procedure for Gaussian-based Analytical Wake Model Using...',
          description: "",
          section: "News",},{id: "news-our-paper-a-calibration-procedure-for-an-analytical-wake-model-using-wind-farm-operational-data-was-published-on-energies",
          title: 'Our paper “A calibration procedure for an analytical wake model using wind farm...',
          description: "",
          section: "News",},{id: "news-i-presented-our-study-dynamics-of-finite-length-rods-near-solid-boundaries-at-aps-dfd-2021-in-phoenix-az",
          title: 'I presented our study “Dynamics of Finite-length Rods Near Solid Boundaries” at APS...',
          description: "",
          section: "News",},{id: "news-our-paper-coupling-of-translation-and-rotation-in-the-motion-of-finite-length-rods-near-solid-boundaries-was-published-on-journal-of-fluid-mechanics",
          title: 'Our paper “Coupling of translation and rotation in the motion of finite-length rods...',
          description: "",
          section: "News",},{id: "news-i-presented-our-study-diffusioosmotic-dispersion-in-a-long-narrow-channel-at-aps-dfd-2022-in-indianapolis-in",
          title: 'I presented our study “Diffusioosmotic dispersion in a long, narrow channel” at APS...',
          description: "",
          section: "News",},{id: "news-i-will-present-our-study-theoretical-and-numerical-models-of-depth-confined-brinkman-flow-at-aps-dfd-2023-in-washington-dc",
          title: 'I will present our study “Theoretical and numerical models of depth-confined Brinkman flow”...',
          description: "",
          section: "News",},{id: "news-please-check-out-our-paper-newtonian-fluid-dynamics-in-a-misaligned-parallel-plate-rheometer-in-physical-review-fluids",
          title: 'Please check out our paper “Newtonian fluid dynamics in a misaligned parallel-plate rheometer”...',
          description: "",
          section: "News",},{id: "news-i-completed-my-ph-d-in-engineering-from-brown-university-i-will-be-joining-rice-university-as-a-postdoctoral-associate-in-dr-yong-lin-kong-s-group",
          title: 'I completed my Ph.D. in Engineering from Brown University!!! I will be joining...',
          description: "",
          section: "News",},{id: "news-our-work-the-continuous-actuation-of-liquid-metal-with-a-3d-printed-electrowetting-device-is-published-in-med-x-this-paper-received-the-med-x-young-investigator-award",
          title: 'Our work “The continuous actuation of liquid metal with a 3D-printed electrowetting device”...',
          description: "",
          section: "News",},{id: "news-please-check-out-our-new-paper-curvature-dependent-propulsion-of-elastic-flagella-which-was-published-in-soft-matter-this-work-has-been-awarded-the-soft-matter-emerging-investigators",
          title: 'Please check out our new paper “Curvature-dependent propulsion of elastic flagella”, which was...',
          description: "",
          section: "News",},{id: "news-please-check-out-our-new-paper-soft-multistable-magnetic-responsive-metamaterials-which-was-published-in-science-advances-this-work-has-featured-in-rice-news",
          title: 'Please check out our new paper “Soft multistable magnetic-responsive metamaterials”, which was published...',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jianteng", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TZ_5hrYAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/tengjian722", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
