import { useLang } from "@/hooks";

export const allData = () => {
  const langData = useLang() || {};

  const {
    HOME_LINK,
    ABOUT_LINK,
    SERVICES_LINK,
    CONTACT_LINK,
    WEB_TITLE,
    WEB_DESCRIPTION,
    MOBILE_TITLE,
    MOBILE_DESCRIPTION,
    DESKTOP_TITLE,
    DESKTOP_DESCRIPTION,
    WEB_DESIGN_TITLE,
    WEB_DESIGN_DESCRIPTION,
    SEO_TITLE,
    SEO_DESCRIPTION,
    FEATURE_ONE,
    FEATURE_ONE_DESCRIPTION,
    FEATURE_TWO,
    FEATURE_TWO_DESCRIPTION,
    FEATURE_THREE,
    FEATURE_THREE_DESCRIPTION,
  } = langData 

  //? For Navbar

  const links = [
    {
      id: 1,
      label: HOME_LINK,
      url: "/",
    },
    {
      id: 2,
      label: ABOUT_LINK,
      url: "#about",
    },
    {
      id: 3,
      label: SERVICES_LINK,
      url: "#services",
    },
    {
      id: 4,
      label: CONTACT_LINK,
      url: "#contact",
    },
  ];

  //? For Services Section

  const services = [
    {
      title: WEB_TITLE,
      imgUrl: "/images/web.jpg",
      description: WEB_DESCRIPTION,
    },
    {
      title: MOBILE_TITLE,
      imgUrl: "/images/mobile.png",
      description: MOBILE_DESCRIPTION,
    },
    {
      title: DESKTOP_TITLE,
      imgUrl: "/images/desktop.jpg",
      description: DESKTOP_DESCRIPTION,
    },
    {
      title: WEB_DESIGN_TITLE,
      imgUrl: "/images/ux.jpg",
      description: WEB_DESIGN_DESCRIPTION,
    },
    {
      title: SEO_TITLE,
      imgUrl: "/images/seo.jpeg",
      description: SEO_DESCRIPTION,
    },
  ];

  const listOfFeatures = [
    {
      id: 1,
      title: FEATURE_ONE,
      description: FEATURE_ONE_DESCRIPTION,
      svgIcon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-color-swatch"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
          <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
          <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
          <line x1={17} y1={17} x2={17} y2="17.01" />
        </svg>
      ),
    },
    {
      id: 2,
      title: FEATURE_TWO,
      description: FEATURE_TWO_DESCRIPTION,
      svgIcon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-bolt"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
        </svg>
      ),
    },

    {
      id: 3,
      title: FEATURE_THREE,
      description: FEATURE_THREE_DESCRIPTION,
      svgIcon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-tools"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
          <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
          <polyline points="12 8 7 3 3 7 8 12" />
          <line x1={7} y1={8} x2="5.5" y2="9.5" />
          <polyline points="16 12 21 17 17 21 12 16" />
          <line x1={16} y1={17} x2="14.5" y2="18.5" />
        </svg>
      ),
    },
  ];

  return { links, services, listOfFeatures };
};
