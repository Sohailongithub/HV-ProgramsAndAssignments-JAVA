function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully from " + url };
      resolve(data);
    }, 1000);
  });
}

// Promise chaining example
// fetchData("first-url")
//   .then((result1) => {
//     console.log(result1.message);

//     return fetchData("second-url");
//   })
//   .then((result2) => {
//     console.log(result2.message);

//     return fetchData("third-url");
//   })
//   .then((result3) => {
//     console.log(result3.message);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

async function fetchDataAsync() {
  try {
    const result1 = await fetchData('first-url');
    console.log(result1.message);

    const result2 = await fetchData('second-url');
    console.log(result2.message);

    const result3 = await fetchData('third-url');
    console.log(result3.message);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// "url": "https://api.github.com/users/noload%22,
// "html_url": "https://github.com/noload%22,
// "followers_url": "https://api.github.com/users/noload/followers%22,
// "following_url": "https://api.github.com/users/noload/following%7B/other_user%7D%22,
// "gists_url": "https://api.github.com/users/noload/gists%7B/gist_id%7D%22,
// "starred_url": "https://api.github.com/users/noload/starred%7B/owner%7D%7B/repo%7D%22,
// "subscriptions_url": "https://api.github.com/users/noload/subscriptions%22,
// "organizations_url": "https://api.github.com/users/noload/orgs%22,
// "repos_url": "https://api.github.com/users/noload/repos%22,
// "events_url": "https://api.github.com/users/noload/events%7B/privacy%7D%22,
// "received_events_url": "https://api.github.com/users/noload/received_events%22,