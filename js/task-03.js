const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
// const el = images.map(
//   (image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`
// );

// galleryEl.insertAdjacentHTML("beforeEnd", el);

// galleryEl.style.cssText =
//   "display:flex; alignItems: center; justifyContent: space-between; width:15px;";

const listGallery = (image) => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
};
galleryEl.style.cssText =
  "display:flex; alignItems: center; justifyContent: space-between; width:15px;";
const markup = images.map(listGallery).join("");
galleryEl.insertAdjacentHTML("beforeEnd", markup);

// const imageEl = document.querySelector(".gallery");
// // const newTechnologies = ["React", "TypeScript", "Node.js"];
// // const markup = [...images]
// //   .map((image) => `<li class="list-img">src=${image.url}</li>`)
// //   .join("");

// images.forEach((img) => {
//   const li = document.createElement("li");
//   // console.log(li);
//   li.setAttribute(
//     "src",
//     "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   );
//   li.setAttribute("alt", "White and Black Long Fur Cat");
//   li.classList.add("img");
//   imageEl.appendChild(li);
// });

// console.log(images.url[0]);
// imageEl.insertAdjacentHTML("beforeend", markup);

// imageEl.style.display = "flex";
// list-item.style.margin = "20px";
// images.style.margin = "20px";

// for (const image of images) {
//   const galleryEl = document.querySelector(".gallery");
//   galleryEl.style.display = "flex";
//   galleryEl.insertAdjacentHTML(
//     "afterbegin",
//     `<li style>
//      <img src="${image.url}" alt="${image.alt}" >
//      <style = "20px">
//     </li>`
//   );
// }

// el.style.cssText = "margin-left:10px";

// const galleryEl = document.querySelector(".gallery");
// for (let el of images)
//   document.querySelector(".gallery").insertAdjacentHTML(
//     "beforeEnd",
//     `<li><img src="${el.url}" alt="${el.alt}"></li>
//       galleryEl.style.display = "flex";`
//   );

// galleryEl.style.cssText =
//   "display:flex; alignItems: center; justifyContent: space-between; width:15px;";
