const nonAuthURL = 'https://www.reddit.com/';
const authURL = 'https://oauth.reddit.com/';
export enum BoardTypes {
    Top,
    Saved,
    MyPosts,
    MyComments,
    Upvoted,
    Hidden
}
interface BoardTypeObject {
    URL: string,
    FriendlyName: string,
    route: string
}
const username = "PsychedelicL10n";

export const BoardTypeObjects: BoardTypeObject[] = [{
    URL: authURL + "hot",
    FriendlyName: "Top",
    route: "/board/" + BoardTypes.Top
}, {
    URL: authURL + "user/" + username + "/saved",
    FriendlyName: "Saved",
    route: "/board/" + BoardTypes.Saved
}, {
    URL: authURL + "user/" + username + "/submitted",
    FriendlyName: "MyPosts",
    route: "/board/" + BoardTypes.MyPosts
}, {
    URL: authURL + "user/" + username + "/comments",
    FriendlyName: "MyComments",
    route: "/board/" + BoardTypes.MyComments
}, {
    URL: authURL + "user/" + username + "/upvoted",
    FriendlyName: "Upvoted",
    route: "/board/" + BoardTypes.Upvoted
}, {
    URL: authURL + "user/" + username + "/hidden",
    FriendlyName: "Hidden",
    route: "/board/" + BoardTypes.Hidden
}
];