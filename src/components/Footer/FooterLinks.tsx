type FooterLinksProps = {
  title: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  url?: string;
};

export const footerLinks: FooterLinksProps[] = [
  {
    title: "Do you need help?",
    line1: "FAQs & Contact Information",
    line2: "Online_shop ID",
    line3: "Guest return",
    line4: "Cookie preferences",
  },
  {
    title: "About us",
    line1: "Information regarding waste",
    line2: "Press Room",
    line3: "Work with us!",
    line4: "",
    url: "https://github.com/RosinskaK",
  },
  {
    title: "Your Store",
    line1: "Find a store",
    line2: "Company",
    line3: "Tax Strategy",
    line4: "Payment methods",
  },
  {
    title: "Purchase Gift Card",
    line1: "Balance Inquiry",
    line2: "Gift card activation",
    line3: "Purchase of Gift Card",
    line4: "",
  },
];
