import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "HILLEL ITALIE",
      title: "Al Jaffee, longtime Mad magazine cartoonist, dead at 102",
      description:
        'NEW YORK (AP) — Al Jaffee, Mad magazine\'s award-winning cartoonist and ageless wise guy who delighted millions of kids with the sneaky fun of the Fold-In and the snark of "Snappy Answers to Stupid Questions," has died.',
      url: "https://apnews.com/f676fbeb190b44c8aa4abcb0daa5d571",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/0fadb31582c94da8ad7f878fa0da1466/2550.jpeg",
      publishedAt: "2023-04-10T21:58:30Z",
      content:
        "NEW YORK (AP) — Al Jaffee, Mad magazine's award-winning cartoonist and ageless wise guy who delighted millions of kids with the sneaky fun of the Fold-In and the snark of \"Snappy Answers to Stupid Qu… [+5625 chars]",
    },
    {
      source: {
        id: "the-huffington-post",
        name: "The Huffington Post",
      },
      author: "AP",
      title:
        "Opening Statements Begin In Trial Of ‘Doomsday Mom’ Lori Vallow Daybell",
      description:
        "The Idaho woman and her husband, Chad Daybell, are charged with murdering her two kids. She's also charged in connection with the death of Chad Daybell’s first wife.",
      url: "https://www.huffpost.com/entry/trial-lori-daybell-vallow-begins-opening-statements_n_6433faa7e4b0859acb9516e1",
      urlToImage:
        "https://img.huffingtonpost.com/asset/643400612200006a00a09dee.jpeg?cache=1OZa2Z6nHu&ops=1200_630",
      publishedAt: "2023-04-10T12:39:53Z",
      content:
        "Media gather outside the Ada County courthouse in Boise, Idaho, on the first day of jury selection in the Lori Vallow Daybell murder trial on April 3, 2023.\r\nOISE, Idaho (AP) The investigation starte… [+3692 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "REBECCA BOONE",
      title: "Money, power, sex: Attorney says slain kids' mom used all 3",
      description:
        "BOISE, Idaho (AP) — A mother accused in the triple murder of her two youngest children as well as her new husband's previous wife was willing to “remove any obstacle in her way to get what she wants,” a prosecutor told jurors Monday morning.",
      url: "https://apnews.com/4f0733dca0ac3cf1af4522bc3469723a",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/88bf071707ed450bb404005ec70b8f96/2640.jpeg",
      publishedAt: "2023-04-10T04:21:49Z",
      content:
        "BOISE, Idaho (AP) — A mother accused in the triple murder of her two youngest children as well as her new husband's previous wife was willing to “remove any obstacle in her way to get what she wants,… [+5815 chars]",
    },
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: "Claudia Poposki",
      title: "25yo’s migraine was a dangerous symptom",
      description:
        "<p>Three years ago, a young teacher was adjusting to the new Covid normal of educating her kids via Zoom while trying to maintain her fit and healthy lifestyle.</p>",
      url: "https://www.news.com.au/lifestyle/health/health-problems/teacher-reveals-she-thought-she-had-a-migraine-but-it-was-a-stroke/news-story/fd769164a1b2295da7e5af68e2c569f1",
      urlToImage:
        "https://content.api.news/v3/images/bin/f6be77db087a6af2509296367ffdcb15",
      publishedAt: "2023-04-10T03:02:00Z",
      content:
        "Three years ago, a young teacher was adjusting to the new Covid normal of educating her kids via Zoom while trying to maintain her fit and healthy lifestyle.\r\nBut, in May 2020, Courtney Rubie’s life … [+3814 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "The Independent",
      title: "Your what-to-watch list: from action to comedy, must-view titles",
      description:
        "From action to comedy, classics to kids, celebrate every story from over a century of Warner Bros. films and TV shows with these unmissable titles, available to buy now and watch at home",
      url: "http://www.independent.co.uk/arts-entertainment/film-tv-entertainment-warner-bros-b2311050.html",
      urlToImage:
        "https://static.independent.co.uk/2023/04/03/14/source-Casablanca4.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-04-06T07:42:47Z",
      content:
        "Ever since it was founded by Harry, Albert, Sam and Jack Warner back in 1923, Warner Bros. Studios has been delighting and thrilling audiences with some of Hollywoods most iconic, memorable and belov… [+4010 chars]",
    },
    {
      source: {
        id: "national-geographic",
        name: "National Geographic",
      },
      author: "Heather Greenwood Davis",
      title: "Families are leading a new wave in Black travel. Here’s why",
      description:
        "For many parents, showing their kids the world is about both the past and the future.",
      url: "https://www.nationalgeographic.com/travel/2021/02/the-importance-of-travel-for-black-families.html",
      urlToImage:
        "https://www.nationalgeographic.com/content/dam/travel/2021-digital/black-family-travel/black-family-travel-2.jpg",
      publishedAt: "2021-02-17T14:37:24.3073832Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4" key={e.url}>
                <NewsItem
                  title={e.title.slice(0, 45)}
                  desc={e.description.slice(0, 88)}
                  imgurl={e.urlToImage}
                  newsurl={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
