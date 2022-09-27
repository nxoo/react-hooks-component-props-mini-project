import  React from 'react';

const posts = [
    {
        id: 1,
        title: "Components 101",
        date: "December 15, 2020",
        preview: "Setting up the building blocks of your site",
        minutes: 5,
    },
    {
        id: 2,
        title: "React Data Flow",
        date: "December 11, 2020",
        preview: "Passing props is never passé",
        minutes: 15,
    },
    {
        id: 3,
        title: "Function vs Class Components",
        preview: "React, meet OOJS.",
        minutes: 47,
    },
];

function BlogData(){

    const postsDiff = posts.map((postObj) => {
        return <postsDiff title={postObj.title} preview={postObj.preview} minutes={postObj.minutes} />;
    })
    return(
        <div>
            <main>
                {postsDiff}
            </main>
        </div>
    )
}
export default BlogData;