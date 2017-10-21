const nonAuthURL = 'https://www.reddit.com/';
const authURL = 'https://oauth.reddit.com/';
export enum BoardTypes {
    Top,
    Saved,
    MyPosts,
    MyComments,
    Upvoted,
    Friends,
    Hidden
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
}, {
    URL: authURL + "user/" + username + "/submitted",
    FriendlyName: "MyPosts"
}, {
    URL: authURL + "user/" + username + "/comments",
    FriendlyName: "MyComments"
}, {
    URL: authURL + "user/" + username + "/upvoted",
    FriendlyName: "Upvoted"
}, {
    URL: authURL + "prefs/friends",
    FriendlyName: "Friends"
}, {
    URL: authURL + "user/" + username + "/hidden",
    FriendlyName: "Hidden"
}
];