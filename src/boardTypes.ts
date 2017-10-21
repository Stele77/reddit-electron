const nonAuthURL = 'https://www.reddit.com/';
const authURL = 'https://oauth.reddit.com/';
export enum BoardTypes {
    Top,
    Subreddits,
    Saved,
    MyPosts,
    MyComments,
    Upvoted,
    Friends
}
interface BoardTypeObject {
    URL: string,
    FriendlyName: string
}
const username = "PsychedelicL10n";

export const BoardTypeObjects: BoardTypeObject[] = [{
    URL: authURL + "hot",
    FriendlyName: "Top"
}, {
    URL: authURL, 
    FriendlyName: ""
}, {
    URL: authURL + "user/" + username + "/saved",
    FriendlyName: "Saved"
}
];