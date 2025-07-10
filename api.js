async function main() {
  // Default, fetch makes a get request
  const res = await fetch("http://localhost:3000/posts");
  // this res.json thing ONLY !!!!!!!! exists if you are using the fetch function
  const data = await res.json();
  console.log(data);
}
main();

async function makePost() {
  const newPost = {
    title: "Must watch",
    view: 1000000,
  };

  const res = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
  });
}

document.querySelector("#create-post").addEventListener("click", () => {
  makePost();
});
