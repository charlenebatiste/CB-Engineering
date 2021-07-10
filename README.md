# Table of Contents

-   [General Info](#general-info)
-   [Status](#status)
-   [Process Work](#process-work)
-   [Known Issues](#known-issues)
-   [Tech Stack](#teck-stack)
-   [Resources](#resources)

## General Info

This repo is the location of my working portfolio.

## Status

✧ A.B.U. (always be updating) ✧

## Process Work

1. Initialized React App. Set up basic components and routes. Drafted wireframes.
2. Researched feature to make navbar scrollable and updated code.
3. Added dummy data to each component and set up maxWidth for each element to fit multiple screen sizes.
4. Created video files of past projects the users can view without clicking away from portfolio and imported them into Projects.jsx
5. Replaced dummy data with first draft of personal data.

## Known Issues

-   I had issues with getting my project videos to play on hover consistantly. Originally I imported my .mov files into Material-UI CardMedia's and created controls that would play on MouseOver and pause on MouseOut but on the live site it didn't always work. Sometime only three video would play on hover and I noticed the hover feature wouldn't even work without the user having already clicked on the page. So I installed the React Hover Video Player that handled the play and pause feature consistantly after I attached a thumbnail and .mov file to each Card.

```jsx
		<Card className="media__wrapper hvr-glow">
                            <HoverVideoPlayer
                                videoSrc={bookhubReel}
                                pausedOverlay={
                                    <img
                                    src={bookhubThumbnail}
                                    alt="Bookhub Homepage of an animated woman reading a book and a list of what the user can do with the bookhub app"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                    />
                                }
                                loadingOverlay={
                                    <div className="loading-spinner-overlay" />
                                }
                            />
						</Card>
```

## Tech Stack

-   ReactJS
-   Material UI
- aos Library

## Resources

* [HashLink Documentation for scrollable navbar](https://www.npmjs.com/package/react-router-hash-link)
* [aos Library Documentation](https://github.com/michalsnik/aos/tree/v2)
* [React Hover Video Player](https://www.npmjs.com/package/react-hover-video-player)
