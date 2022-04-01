import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Admin",
    lastName: "",
    playlists: [
      {
        _id: uuid(),
        title: "begginers guide",
        videos: [
          {
            _id: "oS1BlGm91Bs",
            title:
              "Learn Video Editing Full Course For Beginners Step By Step Guide",
            description:
              "Learn Video Editing Full Course For Beginners video editing tutorial in hindi , learn how to edit videos tutorial in hindi  in this video i'll show you how you can edit videos easily with the help of filmora9 video editing software.",
            creator: "Technology Gyan",
            views: 160,
            categoryName: "video-editing-for-beginners",
          },
          {
            _id: "oC3gXr1s_aU",
            title: "Total Beginner's Guide to Video Editing",
            creator: "TheNotoriousKIA",
            description:
              "So your first shoot is complete - but how do you turn your footage into a great video? It's all at your fingertips with the power of editing! In this video, YouTube creator Kia (from the channel TheNotoriousKIA) gives you a total beginner's guide to video editing. Check out Kia's advice on the twelve basic editing steps to turn your idea into reality. ",
            views: 132,
            categoryName: "video-editing-for-beginners",
          },
          {
            _id: "ZGIl5lGFBxY",
            title: "Start Editing YouTube Videos for FREE with ZERO Knowledge",
            creator: "Casey Faris",
            description:
              "This editing video is for those of you that are completely new to video editing! I go over what a video editor is, the various different popular programs that are out there, and how to use the basic functions no matter the app you choose to use! Even though I go through this tutorial with DaVinci Resolve 17, the tools and concepts are the same across the board. Every app has the same basic functions, so feel free to use whichever one suits you!",
            views: 333,
            categoryName: "video-editing-for-beginners",
          },
          {
            _id: "hlnIu_sj2vg",
            title: "Video Editing for Beginners (Using Mac!)",
            creator: "Justin Brown - Primal Video",
            description:
              "Complete video editing tutorial for non-editors on Mac! Learn video editing for beginners, and a ton of video editing tips to save time.",
            views: 654,
            categoryName: "video-editing-for-beginners",
          },
          {
            _id: "F2NV8ifgCl4",
            title: "Video Editing for BEGINNERS on WINDOWS PC Tutorial!",
            creator: "Justin Brown - Primal Video",
            description:
              "Complete video editing tutorial for non-editors on Windows! Learn video editing for beginners, and a ton of video editing tips to save time.",
            views: 895,
            categoryName: "video-editing-for-beginners",
          },
        ],
      },
      {
        _id: uuid(),
        title: "Playlist 1",
        videos: [],
      },
    ],
    email: "admin@vitube.com",
    password: "admincreds123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
