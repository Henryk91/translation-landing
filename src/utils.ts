export function logUse(): void {
  const currentURL = window.location.href;
  const hasLoggedUse = sessionStorage.getItem("hasLoggedUse");
  if (currentURL.includes("localhost") || hasLoggedUse) return;
  sessionStorage.setItem("hasLoggedUse", "true");

  fetch("https://note.henryk.co.za/api/log?site=translation-landing")
    .then((res: Response) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}