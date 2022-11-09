import request from "graphql-request";

async function api_fetch() {
    try {
        const data = await request(
            "https://api-sa-east-1.hygraph.com/v2/cla705fkg0rh501un472y90hi/master",
            `
            query postsQuery {
                posts {
                  title
                  content {
                    markdown
                  }
                  createdAt
                  description
                  categories {
                    name
                  }
                  banner {
                    url
                  }
                  author {
                    name
                    photo {
                      url
                    }
                  }
                }
              }
              
            `
        );

        if (data) {
            return data;
        } else {
            return;
        }
    } catch (err) {
        throw new Error("Something went wrong...");
    }
}

export { api_fetch };
