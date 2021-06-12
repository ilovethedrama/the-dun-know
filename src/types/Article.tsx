export interface Article {
  title: string;
  author: string;
  tags: string[];
  introImage: Image;
  imageGallery: Image[];
  slug: string;
  articleText: string;
  subtitle: string;
}

export interface Image {
  thumbnail: string;
  largeImage: string;
  caption: string;
}