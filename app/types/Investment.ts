export interface Investment {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    image: {
      url: string;
      alt: string;
    };
    url: string;
    content: any[]; // Adjust this type according to the structure of your content
  }