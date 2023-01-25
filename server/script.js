const sendImg = async () => {
  const input = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append("file", input.files[0]);
  const res = await fetch("http://localhost:3030", {
    method: "POST",
    body: formData,
  });
  console.log(res);
};
document.querySelector("#button").addEventListener("click", async () => {
  sendImg();
});
