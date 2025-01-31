const TimeSetUp = () => {
  const now = new Date();
  const utcTime = now.toUTCString();
  document.getElementById("utc-time").textContent = utcTime;
};
TimeSetUp();
setInterval(TimeSetUp, 1000);



// Function to fetch blog metadata
async function fetchBlogMetadata(blogUrl) {
  try {
    const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(blogUrl)}`);
    const data = await response.json();

    if (data.status === "success") {
      const { title, description, image } = data.data;

      // Update the profile card with the metadata
      document.getElementById("blog-title").textContent = title;
      document.getElementById("blog-description").textContent = description;
      document.getElementById("blog-image").src = image.url;
    } else {
      console.error("Failed to fetch metadata:", data);
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }
}

// Replace with your Hashnode blog URL
const blogPostUrl =
  "https://dev.to/maryanne_a076b4d7baacc530/becoming-a-software-developer-45mk";
fetchBlogMetadata(blogPostUrl);
