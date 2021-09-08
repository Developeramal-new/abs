export class Slidedetails {
  overlay: boolean;
  data: {
    src: string;
    isCaption: boolean;
    caption?: {
      h6: string;
      h1: string;
      button: string;
    };
  }[];
}
