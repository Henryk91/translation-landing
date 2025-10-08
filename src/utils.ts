export function logUse(): void {
  const currentURL = window.location.href;
  if (currentURL.includes("localhost")) return;

  fetch("https://henryk.co.za/api/log?site=translation-landing")
    .then((res: Response) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}