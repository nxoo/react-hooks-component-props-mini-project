import React from 'react'
import Article from './Article';

function ArticleList({posts}) {
    const postsDiff = posts.map((postObj) => {
        return <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview}
                        minutes={postObj.minutes}/>;
    })
    return (
        <div>
            <main>
                {postsDiff}

            </main>
        </div>
    )
}

export default ArticleList


