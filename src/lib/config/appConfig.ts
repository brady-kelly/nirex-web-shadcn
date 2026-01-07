export const appConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  rootImageSrc: process.env.NEXT_PUBLIC_ROOT_IMAGE_SOURCE || "/graphics/",
  linkImagesRoot: "graphics/links/sidebar",
  pageHeadingLevel: 1,
  pageHeadingText: "Cart",
  cartNotices: [],
  getProductCategoryRoute: function (catName: string) {
    return `${this.linkImagesRoot}/category/${catName}`;
  },
};
