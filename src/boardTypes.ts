const nonAuthURL = 'https://www.reddit.com/';
const authURL = 'https://oauth.reddit.com/';
export enum BoardTypes {
    Top,
    Saved,
    MyPosts,
    MyComments,
    Upvoted,
    Hidden,
    Inbox,
    CommentReplies,
    PostReplies,
    UsernameMentions,
    Subreddits
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
    FriendlyName: "My Posts",
    route: "/board/" + BoardTypes.MyPosts
}, {
    URL: authURL + "user/" + username + "/comments",
    FriendlyName: "My Comments",
    route: "/board/" + BoardTypes.MyComments
}, {
    URL: authURL + "user/" + username + "/upvoted",
    FriendlyName: "Upvoted",
    route: "/board/" + BoardTypes.Upvoted
}, {
    URL: authURL + "user/" + username + "/hidden",
    FriendlyName: "Hidden",
    route: "/board/" + BoardTypes.Hidden
}, {
    URL: authURL + "message/messages",
    FriendlyName: "Inbox",
    route: "/board/" + BoardTypes.Inbox
}, {
    URL: authURL + "message/comments",
    FriendlyName: "Comment Replies",
    route: "/board/" + BoardTypes.CommentReplies
}, {
    URL: authURL + "message/selfreply",
    FriendlyName: "Post Replies",
    route: "/board/" + BoardTypes.PostReplies
}, {
    URL: authURL + "message/mentions",
    FriendlyName: "Username Mentions",
    route: "/board/" + BoardTypes.UsernameMentions
}, {
    URL: authURL + "by_id/",
    FriendlyName: "Subreddits",
    route: "/board/" + BoardTypes.Subreddits + "/:subreddit"
}
];