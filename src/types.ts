export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  year: string;
  behanceUrl?: string;
  instagramUrl?: string;
};

export type ImageType = {
  src: string;
  alt: string;
  category: string;
};
