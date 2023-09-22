type DataImage = {
  sourceUrl: string;
  sizes: string;
  srcSet: string;
  src: string;
  id: string;
  databaseId: number;
  title: string;
  altText: string;
  caption: string;
  mediaDetails: {
    height: number;
    width: number;
  };
};

type DataPage = {
  id: string;
  uri: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featuredImage: {
    sourceUrl: string;
    sizes: string;
    srcSet: string;
    src: string;
    id: string;
    databaseId: number;
    title: string;
    altText: string;
    caption: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  };
};

type Data = {
  siteMeta: {
    title: string;
    description: string;
    thumbnail: string;
  };
  page: {
    title: string;
    excerpt: string;
  };
  images: DataImage[];
  pages: DataPage[];
};

export default Data;
