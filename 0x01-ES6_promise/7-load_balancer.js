// Function to balance between two downloads
export default function loadBalancer(chinaDownload, USDownload) {
  // Race between China and US downloads
  return Promise.race([chinaDownload, USDownload]);
}
