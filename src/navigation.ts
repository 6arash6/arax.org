import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Problem', href: '#problem' },
    { text: 'Solution', href: '#solution' },
    { text: 'Technology', href: '#technology' },
    { text: 'Results', href: '#results' },
    { text: 'Market', href: '#market' },
    { text: 'Team', href: '#team' },
  ],
  actions: [{ text: 'Contact', href: '#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'ARAX LABS',
      links: [
        { text: 'Problem', href: '#problem' },
        { text: 'Solution', href: '#solution' },
        { text: 'Technology', href: '#technology' },
        { text: 'Market', href: '#market' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'YouTube', href: 'https://www.youtube.com/@AraX-Labs' },
        { text: 'GitHub', href: 'https://github.com/6arash6' },
        { text: 'LinkedIn', href: 'https://linkedin.com/in/arash-javan' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@AraX-Labs' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/6arash6' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/arash-javan' },
  ],
  footNote: `
    © 2026 ARAX LABS. All rights reserved.
  `,
};
