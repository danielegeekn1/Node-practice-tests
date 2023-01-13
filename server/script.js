const sendImg = async () => {
  const input = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append("file", input.files[0]);
  const res = await fetch("localhost:3030", {
    method: "POST",
    body: formData,
  });
};
document.querySelector("#button").addEventListener("click", async () => {
  sendImg();
});
