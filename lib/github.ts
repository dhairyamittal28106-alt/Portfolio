import axios from "axios";

const USERNAME = "dhairyamittal28106-alt";

type GitHubRepo = {
  stargazers_count: number;
};

export async function getPinnedRepos() {
    const res = await axios.get(
        `https://api.github.com/users/${USERNAME}/repos?per_page=100`
    );

    const sorted = res.data.sort(
        (a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count
    );

    return sorted.slice(0, 6);
}
