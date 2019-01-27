import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) =>{

    const items = props.news.map((item) => {
        return(
            <div>
                <NewsItem key={item.id} item={item}/>
            </div>
        )
    });

    console.log(props.news)
    return (
        <div>{items}</div>
    )
}

export default NewsList;